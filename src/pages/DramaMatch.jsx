import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { calculateSaju, getTenGodProfile, getNobleman } from '../utils/saju';
import { findBestMatch } from '../utils/bestMatch';
import {
  getFriendshipCopy,
  getChemistryPoints as getFriendChemistryPoints,
  getNoblemanBonus as getFriendNoblemanBonus,
} from '../data/friendshipTemplates';
import {
  getRoommateCopy,
  getChemistryPoints as getRoommateChemistryPoints,
  getNoblemanBonus as getRoommateNoblemanBonus,
} from '../data/roommateTemplates';
import {
  getGroupChemistryCopy,
  getChemistryPoints as getGroupChemistryChemistryPoints,
  getNoblemanBonus as getGroupChemistryNoblemanBonus,
} from '../data/groupChemistryTemplates';
import { kdramaActors, getActorName } from '../data/kdramaActors';
import { useShareCardDownload } from '../hooks/useShareCardDownload';
import { buildShareUrl } from '../utils/shareUrl';
import { trackIdolMatchSubmit } from '../utils/analytics';
import IdolShareCard from '../components/IdolShareCard';
import BirthDateForm from '../components/BirthDateForm';
import GenderSelect from '../components/GenderSelect';
import MatchResultCard from '../components/MatchResultCard';
import LoadingReveal from '../components/LoadingReveal';

// See IdolMatch.jsx for the full explanation of this dispatch table —
// kept identical here since friendshipTemplates.js/roommateTemplates.js/
// groupChemistryTemplates.js are shared, product-agnostic content banks.
const MODE_CONFIG = {
  friend: {
    getCopy: getFriendshipCopy,
    getChemistryPoints: getFriendChemistryPoints,
    getNoblemanBonus: getFriendNoblemanBonus,
    sections: ['travelStyle', 'cafeChemistry', 'howTheySeeYou'],
  },
  roommate: {
    getCopy: getRoommateCopy,
    getChemistryPoints: getRoommateChemistryPoints,
    getNoblemanBonus: getRoommateNoblemanBonus,
    sections: ['livingPattern', 'conflictStyle', 'dailyMoment'],
  },
  groupChemistry: {
    getCopy: getGroupChemistryCopy,
    getChemistryPoints: getGroupChemistryChemistryPoints,
    getNoblemanBonus: getGroupChemistryNoblemanBonus,
    sections: ['stagePresence', 'offstage'],
  },
};
const RELATIONSHIP_MODES = ['friend', 'roommate', 'groupChemistry'];

function buildInsightSections(t, lang, modeKey, modeCopy, { myTenGod, otherTenGod, hasNobleman }) {
  const config = MODE_CONFIG[modeKey];
  const chemistryPoints = config.getChemistryPoints(lang, myTenGod, otherTenGod);
  const sections = [
    { title: t('matchCommon.insightTitles.explanation'), subheading: modeCopy.explanation.subheading, text: modeCopy.explanation.text, locked: false },
    { title: t('matchCommon.insightTitles.chemistryPoints'), subheading: chemistryPoints.subheading, text: chemistryPoints.text, locked: true },
  ];
  if (hasNobleman) {
    const noblemanBonus = config.getNoblemanBonus(lang);
    sections.push({ title: t('matchCommon.insightTitles.noblemanBonus'), subheading: noblemanBonus.subheading, text: noblemanBonus.text, locked: true });
  }
  sections.push(
    ...config.sections.map((key) => ({
      title: t(`matchCommon.insightTitles.${key}`),
      subheading: modeCopy[key].subheading,
      text: modeCopy[key].text,
      locked: true,
    })),
    { title: t('matchCommon.insightTitles.watchFor'), subheading: modeCopy.watchFor.subheading, text: modeCopy.watchFor.text, locked: true },
  );
  return sections;
}

/** Same "best match" mechanic as IdolMatch, run against the K-drama actor pool instead of idols. */
export default function DramaMatch() {
  const { t, i18n } = useTranslation();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [gender, setGender] = useState(params.get('gender') === 'M' ? 'M' : 'F');
  const [relationshipMode, setRelationshipMode] = useState('friend');
  const { cardRef: shareCardRef, download, downloading, saveImage, savingImage, canShareFiles } = useShareCardDownload();

  const relationshipModeTabs = (
    <div className="select-row" role="tablist" style={{ marginBottom: 16 }}>
      {RELATIONSHIP_MODES.map((key) => (
        <button
          key={key}
          type="button"
          role="tab"
          aria-selected={relationshipMode === key}
          className={`button ${relationshipMode === key ? '' : 'secondary'}`}
          style={{ padding: '8px 16px', fontSize: 13 }}
          onClick={() => setRelationshipMode(key)}
        >
          {t(`matchCommon.relationshipMode.${key}`)}
        </button>
      ))}
    </div>
  );

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

  const compatCopy = best ? MODE_CONFIG[relationshipMode].getCopy(i18n.language, best.relation) : null;

  const insightSections = best && compatCopy
    ? buildInsightSections(t, i18n.language, relationshipMode, compatCopy, {
        myTenGod: getTenGodProfile(userSaju),
        otherTenGod: getTenGodProfile(best.saju),
        hasNobleman: getNobleman(userSaju, i18n.language).hasNobleman || getNobleman(best.saju, i18n.language).hasNobleman,
      })
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
        {relationshipModeTabs}

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
          insightProduct="dramaMatch"
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
          subheading={compatCopy.explanation.subheading}
          text={compatCopy.explanation.text}
        />
      </div>
    </main>
    </LoadingReveal>
  );
}
