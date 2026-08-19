import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { calculateSaju, getPillarCompatibility } from '../utils/saju';
import { findBestMatch } from '../utils/bestMatch';
import { getDramaMatchCopy } from '../data/dramaMatchTemplates';
import { kdramaActors, getActorName } from '../data/kdramaActors';
import { useShareCardDownload } from '../hooks/useShareCardDownload';
import { buildShareUrl } from '../utils/shareUrl';
import { trackIdolMatchSubmit } from '../utils/analytics';
import IdolShareCard from '../components/IdolShareCard';
import BirthDateForm from '../components/BirthDateForm';
import GenderSelect from '../components/GenderSelect';
import MatchResultCard from '../components/MatchResultCard';
import LoadingReveal from '../components/LoadingReveal';

/** Same "best match" mechanic as IdolMatch, run against the K-drama actor pool instead of idols. */
export default function DramaMatch() {
  const { t, i18n } = useTranslation();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [gender, setGender] = useState(params.get('gender') === 'M' ? 'M' : 'F');
  const { cardRef: shareCardRef, download, downloading, saveImage, savingImage, canShareFiles } = useShareCardDownload();

  const birth = useMemo(() => {
    const y = Number(params.get('y'));
    const m = Number(params.get('m'));
    const d = Number(params.get('d'));
    const timeKnown = params.get('timeKnown') === '1';
    const h = timeKnown ? Number(params.get('h')) : null;
    const calendar = params.get('cal') === 'lunar' ? 'lunar' : 'solar';
    if (!y || !m || !d) return null;
    return { year: y, month: m, day: d, hour: h, calendar, timeKnown };
  }, [params]);

  const userSaju = useMemo(() => {
    if (!birth) return null;
    try {
      return calculateSaju(birth, birth.timeKnown);
    } catch {
      return null;
    }
  }, [birth]);

  const best = useMemo(() => {
    if (!userSaju) return null;
    return findBestMatch(kdramaActors, userSaju, gender);
  }, [userSaju, gender]);

  const pillarCompat = best ? getPillarCompatibility(userSaju, best.saju) : null;

  const compatCopy = best
    ? getDramaMatchCopy(i18n.language, best.relation, `${birth.year}-${birth.month}-${birth.day}-${best.candidate.id}`, pillarCompat)
    : null;

  const explanation = best
    ? {
        subheading: t(`matchCommon.explanation.${best.relation}.subheading`),
        text: t(`matchCommon.explanation.${best.relation}.text`, {
          my: t(`elements.${userSaju.dominantElement}`),
          other: t(`elements.${best.saju.dominantElement}`),
        }),
      }
    : null;

  const pillarTitles = t('matchCommon.pillarTitles', { returnObjects: true });

  // Only the year pillar (always index 0 — see getPillarCompatibility) stays
  // free, as the "why you were drawn in" teaser; month/day/time are locked.
  const insightSections = best && compatCopy
    ? [
        { title: t('matchCommon.insightTitles.explanation'), subheading: explanation.subheading, text: explanation.text, locked: false },
        { title: t('matchCommon.insightTitles.goodFit'), subheading: compatCopy.goodFit.subheading, text: compatCopy.goodFit.text, locked: false },
        ...compatCopy.situational.map(({ pillar, text }, i) => ({ title: pillarTitles[pillar], text, locked: i !== 0 })),
        { title: t('matchCommon.insightTitles.watchFor'), subheading: compatCopy.watchFor.subheading, text: compatCopy.watchFor.text, locked: true },
      ]
    : null;

  const actorName = best ? getActorName(best.candidate, i18n.language) : '';

  useEffect(() => {
    if (best) trackIdolMatchSubmit('drama');
  }, [best]);

  if (!birth || !userSaju) {
    return (
      <main className="page">
        <div className="page-content">
          <h1>{t('dramaMatch.title')}</h1>
          <p className="subtitle">{t('dramaMatch.subtitle')}</p>

          <div className="card" style={{ textAlign: 'left' }}>
            <GenderSelect value={gender} onChange={setGender} />
            <BirthDateForm
              submitLabel={t('dramaMatch.findMatchLabel')}
              analyticsContext="drama-match"
              remember
              onSubmit={(newParams) => {
                newParams.set('gender', gender);
                navigate(`/drama-match?${newParams.toString()}`);
              }}
            />
          </div>
        </div>
      </main>
    );
  }

  if (!best) return null;

  return (
    <LoadingReveal element={userSaju.dominantElement}>
    <main className="page">
      <div className="page-content">
        <h1>{t('dramaMatch.title')}</h1>
        <p className="subtitle">{t('dramaMatch.subtitle')}</p>

        <MatchResultCard
          name={actorName}
          subtitle={t('dramaMatch.actorLabel')}
          matchElement={best.saju.dominantElement}
          matchStrength={best.saju.dayGanStrength}
          matchPillars={best.saju.pillars}
          userElement={userSaju.dominantElement}
          pillarsHeading={t('idolMatch.theirPillarsHeading', { member: actorName })}
          score={best.score}
          tier={compatCopy.tier}
          line={compatCopy.line}
          insightSections={insightSections}
          compatibilityHeading={t('idolMatch.compatibilityHeading', { member: actorName })}
          scoreLabel={t('matchCommon.scoreLabel')}
          onShare={() =>
            download(`ohaeng-${best.candidate.id}-drama-match.png`, 'drama-match', {
              text: t('dramaMatch.shareCaption'),
              url: buildShareUrl('/drama-match', {
                element: best.saju.dominantElement,
                score: best.score,
                name: actorName,
                tier: compatCopy.tier,
              }),
            })
          }
          shareLabel={t(canShareFiles ? 'result.shareNative' : 'result.shareButton')}
          onSaveImage={() => saveImage(`ohaeng-${best.candidate.id}-drama-match.png`, 'drama-match')}
          saveImageLabel={t('result.saveImageButton')}
          savingImage={savingImage}
          disclaimer={t('dramaMatch.disclaimer')}
          downloading={downloading}
        />
      </div>

      <div className="share-card-offscreen">
        <IdolShareCard
          ref={shareCardRef}
          memberName={actorName}
          groupName={t('dramaMatch.actorLabel')}
          userElement={userSaju.dominantElement}
          idolElement={best.saju.dominantElement}
          idolStrength={best.saju.dayGanStrength}
          score={best.score}
          tier={compatCopy.tier}
          line={compatCopy.line}
        />
      </div>
    </main>
    </LoadingReveal>
  );
}
