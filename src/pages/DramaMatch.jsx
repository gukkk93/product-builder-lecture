import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { calculateSaju } from '../utils/saju';
import { findBestMatch } from '../utils/bestMatch';
import { getDramaMatchCopy } from '../data/dramaMatchTemplates';
import { kdramaActors } from '../data/kdramaActors';
import { useShareCardDownload } from '../hooks/useShareCardDownload';
import { trackIdolMatchSubmit } from '../utils/analytics';
import IdolShareCard from '../components/IdolShareCard';
import BirthDateForm from '../components/BirthDateForm';
import GenderSelect from '../components/GenderSelect';
import MatchResultCard from '../components/MatchResultCard';

/** Same "best match" mechanic as IdolMatch, run against the K-drama actor pool instead of idols. */
export default function DramaMatch() {
  const { t, i18n } = useTranslation();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [gender, setGender] = useState(params.get('gender') === 'M' ? 'M' : 'F');
  const { cardRef: shareCardRef, download, downloading, canShareFiles } = useShareCardDownload();

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

  const compatCopy = best
    ? getDramaMatchCopy(i18n.language, best.relation, `${birth.year}-${birth.month}-${birth.day}-${best.candidate.id}`)
    : null;

  const explanation = best
    ? t(`matchCommon.explanation.${best.relation}`, {
        my: t(`elements.${userSaju.dominantElement}`),
        other: t(`elements.${best.saju.dominantElement}`),
      })
    : null;

  useEffect(() => {
    if (best) trackIdolMatchSubmit('drama');
  }, [best]);

  return (
    <main className="page">
      <div className="page-content">
        <h1>{t('dramaMatch.title')}</h1>
        <p className="subtitle">{t('dramaMatch.subtitle')}</p>

        {!birth || !userSaju ? (
          <div className="card" style={{ textAlign: 'left' }}>
            <GenderSelect value={gender} onChange={setGender} />
            <BirthDateForm
              submitLabel={t('dramaMatch.findMatchLabel')}
              analyticsContext="drama-match"
              onSubmit={(newParams) => {
                newParams.set('gender', gender);
                navigate(`/drama-match?${newParams.toString()}`);
              }}
            />
          </div>
        ) : best ? (
          <MatchResultCard
            name={best.candidate.name}
            subtitle={t('dramaMatch.actorLabel')}
            matchElement={best.saju.dominantElement}
            matchStrength={best.saju.dayGanStrength}
            matchPillars={best.saju.pillars}
            userElement={userSaju.dominantElement}
            pillarsHeading={t('idolMatch.theirPillarsHeading', { member: best.candidate.name })}
            score={best.score}
            tier={compatCopy.tier}
            line={compatCopy.line}
            explanation={explanation}
            compatibilityHeading={t('idolMatch.compatibilityHeading', { member: best.candidate.name })}
            scoreLabel={t('matchCommon.scoreLabel')}
            onShare={() =>
              download(`ohaeng-${best.candidate.id}-drama-match.png`, 'drama-match', `${t('app.name')} — ${t('app.tagline')}`)
            }
            shareLabel={t(canShareFiles ? 'result.shareNative' : 'result.shareButton')}
            disclaimer={t('dramaMatch.disclaimer')}
            downloading={downloading}
          />
        ) : null}
      </div>

      {best && (
        <div className="share-card-offscreen">
          <IdolShareCard
            ref={shareCardRef}
            memberName={best.candidate.name}
            groupName={t('dramaMatch.actorLabel')}
            userElement={userSaju.dominantElement}
            idolElement={best.saju.dominantElement}
            idolStrength={best.saju.dayGanStrength}
            score={best.score}
            tier={compatCopy.tier}
            line={compatCopy.line}
          />
        </div>
      )}
    </main>
  );
}
