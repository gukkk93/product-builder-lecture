import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { calculateSaju, getCompatibility, getCompatibilityScore, getPillarCompatibility, getTenGodProfile, getNobleman } from '../utils/saju';
import { findBestMatch } from '../utils/bestMatch';
import { getIdolMatchCopy } from '../data/idolMatchTemplates';
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
import { idolGroups, getMemberName } from '../data/idols';
import { useShareCardDownload } from '../hooks/useShareCardDownload';
import { buildShareUrl } from '../utils/shareUrl';
import { trackIdolMatchSubmit, trackIdolRequestClick } from '../utils/analytics';
import IdolShareCard from '../components/IdolShareCard';
import BirthDateForm from '../components/BirthDateForm';
import GenderSelect from '../components/GenderSelect';
import MatchResultCard from '../components/MatchResultCard';
import LoadingReveal from '../components/LoadingReveal';

// Non-romantic "what would this actually feel like" lenses on the same
// compatibility reading — friend/roommate/group-chemistry, picked via
// the relationshipMode tabs. Each mode's content bank has its own
// explanation/watchFor plus 2-3 mode-specific sections (`sections` below
// names them, in display order); groupChemistry only has 2 (stage vs.
// off-stage is a deliberate contrast pair) where friend/roommate have 3.
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
const RELATIONSHIP_MODES = ['compatibility', 'friend', 'roommate', 'groupChemistry'];

// Only the explanation section (the "why") stays free as a teaser; the
// chemistry-points/nobleman-bonus/mode-specific sections and watchFor are
// all locked. chemistryPoints/noblemanBonus are a second axis of variety
// independent of the Five Element relation — see getTenGodProfile/
// getNobleman in utils/saju.js — so they're computed from the two
// people's charts directly rather than coming from modeCopy.
// noblemanBonus only appears when at least one chart has it.
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

// The original "bias match" reading, restored as the 'compatibility' tab —
// distinct from the three MODE_CONFIG lenses above since its content bank
// (idolMatchTemplates.js) has its own shape (goodFit/meetingScenario/
// situational instead of chemistryPoints/mode-specific sections) and lock
// ratio: explanation + goodFit stay free, meetingScenario/watchFor are
// locked, and only the first (year) of the 3 always-present pillars
// (idols' birth times aren't public, see getPillarCompatibility) is free.
function buildCompatibilitySections(t, copy, pillarTitles) {
  return [
    { title: t('matchCommon.insightTitles.explanation'), subheading: copy.explanation.subheading, text: copy.explanation.text, locked: false },
    { title: t('matchCommon.insightTitles.goodFit'), subheading: copy.goodFit.subheading, text: copy.goodFit.text, locked: false },
    { title: t('idolMatch.meetingScenarioTitle'), subheading: copy.meetingScenario.subheading, text: copy.meetingScenario.text, locked: true },
    ...copy.situational.map(({ pillar, text }, i) => ({ title: pillarTitles[pillar], text, locked: i !== 0 })),
    { title: t('matchCommon.insightTitles.watchFor'), subheading: copy.watchFor.subheading, text: copy.watchFor.text, locked: true },
  ];
}

export default function IdolMatch() {
  const { t, i18n } = useTranslation();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const mode = params.get('mode'); // undefined | 'group'
  const [groupId, setGroupId] = useState(mode === 'group' ? params.get('group') || '' : '');
  const [gender, setGender] = useState(params.get('gender') === 'M' ? 'M' : 'F');
  const [relationshipMode, setRelationshipMode] = useState('compatibility');
  const { cardRef: shareCardRef, download, downloading, saveImage, savingImage, canShareFiles } = useShareCardDownload();
  const pillarTitles = t('matchCommon.pillarTitles', { returnObjects: true });

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

  const pool = useMemo(
    () =>
      idolGroups.flatMap((g) =>
        g.members.map((m) => ({ ...m, groupId: g.id, groupName: g.name, gender: g.gender }))
      ),
    []
  );

  const selectedGroup = mode === 'group' && groupId ? idolGroups.find((g) => g.id === groupId) : null;
  const selectedMemberId = mode === 'group' ? params.get('member') : null;
  const selectedMember = selectedGroup && selectedMemberId
    ? selectedGroup.members.find((m) => m.id === selectedMemberId)
    : null;

  const memberSaju = useMemo(() => {
    if (!selectedMember) return null;
    return calculateSaju(
      { year: selectedMember.year, month: selectedMember.month, day: selectedMember.day, hour: null, calendar: 'solar' },
      false
    );
  }, [selectedMember]);

  const memberCompat = useMemo(() => {
    if (!selectedMember || !userSaju) return null;
    return getCompatibility(
      userSaju,
      { year: selectedMember.year, month: selectedMember.month, day: selectedMember.day, hour: null, calendar: 'solar' },
      false
    );
  }, [selectedMember, userSaju]);

  const memberScore = memberCompat
    ? getCompatibilityScore(
        memberCompat.relation,
        `${selectedMember.id}-group-${selectedGroup.id}`,
        userSaju.dayGanStrength,
        memberCompat.otherSaju.dayGanStrength
      )
    : null;

  const memberPillarCompat = memberCompat ? getPillarCompatibility(userSaju, memberCompat.otherSaju) : null;

  const memberCopy = memberCompat
    ? relationshipMode === 'compatibility'
      ? getIdolMatchCopy(
          i18n.language,
          memberCompat.relation,
          `${birth.year}-${birth.month}-${birth.day}-${selectedMember.id}`,
          memberPillarCompat,
          userSaju.dominantElement,
          memberCompat.otherSaju.dominantElement
        )
      : MODE_CONFIG[relationshipMode].getCopy(i18n.language, memberCompat.relation)
    : null;

  const memberInsightSections = memberCompat && memberCopy
    ? relationshipMode === 'compatibility'
      ? buildCompatibilitySections(t, memberCopy, pillarTitles)
      : buildInsightSections(t, i18n.language, relationshipMode, memberCopy, {
          myTenGod: getTenGodProfile(userSaju),
          otherTenGod: getTenGodProfile(memberCompat.otherSaju),
          hasNobleman: getNobleman(userSaju, i18n.language).hasNobleman || getNobleman(memberCompat.otherSaju, i18n.language).hasNobleman,
        })
    : null;

  const best = useMemo(() => {
    if (mode === 'group' || !userSaju) return null;
    return findBestMatch(pool, userSaju, gender);
  }, [mode, pool, userSaju, gender]);

  const bestName = best ? getMemberName(best.candidate, i18n.language) : '';

  const bestPillarCompat = best ? getPillarCompatibility(userSaju, best.saju) : null;

  const compatCopy = best
    ? relationshipMode === 'compatibility'
      ? getIdolMatchCopy(
          i18n.language,
          best.relation,
          `${birth.year}-${birth.month}-${birth.day}-${best.candidate.id}`,
          bestPillarCompat,
          userSaju.dominantElement,
          best.saju.dominantElement
        )
      : MODE_CONFIG[relationshipMode].getCopy(i18n.language, best.relation)
    : null;

  const insightSections = best && compatCopy
    ? relationshipMode === 'compatibility'
      ? buildCompatibilitySections(t, compatCopy, pillarTitles)
      : buildInsightSections(t, i18n.language, relationshipMode, compatCopy, {
          myTenGod: getTenGodProfile(userSaju),
          otherTenGod: getTenGodProfile(best.saju),
          hasNobleman: getNobleman(userSaju, i18n.language).hasNobleman || getNobleman(best.saju, i18n.language).hasNobleman,
        })
    : null;

  useEffect(() => {
    if (mode === 'group') {
      if (selectedMember && memberCompat) trackIdolMatchSubmit('group-member');
      else if (selectedGroup && userSaju) trackIdolMatchSubmit('group');
    } else if (best) {
      trackIdolMatchSubmit('soulmate');
    }
  }, [mode, selectedGroup, selectedMember, memberCompat, userSaju, best]);

  function handleGroupModeSelect(e) {
    const newGroupId = e.target.value;
    setGroupId(newGroupId);
    const newParams = new URLSearchParams(params);
    newParams.set('mode', 'group');
    newParams.set('group', newGroupId);
    newParams.delete('member');
    navigate(`/idol-match?${newParams.toString()}`, { replace: true });
  }

  function handleGroupMemberSelect(e) {
    const newParams = new URLSearchParams(params);
    newParams.set('member', e.target.value);
    navigate(`/idol-match?${newParams.toString()}`);
  }

  function clearGroupMember() {
    const newParams = new URLSearchParams(params);
    newParams.delete('member');
    navigate(`/idol-match?${newParams.toString()}`);
  }

  if (mode === 'group') {
    const memberName = selectedMember ? getMemberName(selectedMember, i18n.language) : '';

    if (selectedMember && memberSaju && memberCompat) {
      return (
        <LoadingReveal element={userSaju.dominantElement}>
        <main className="page">
          <div className="page-content">
            <button type="button" className="back-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={clearGroupMember}>
              {t('idolMatch.groupBack')}
            </button>

            <h1>{t('idolMatch.groupTitle')}</h1>
            {relationshipModeTabs}

            <MatchResultCard
              name={memberName}
              subtitle={selectedGroup.name}
              matchElement={memberSaju.dominantElement}
              matchStrength={memberSaju.dayGanStrength}
              matchPillars={memberSaju.pillars}
              userElement={userSaju.dominantElement}
              pillarsHeading={t('idolMatch.theirPillarsHeading', { member: memberName })}
              score={memberScore}
              tier={memberCopy.tier}
              line={memberCopy.line}
              insightSections={memberInsightSections}
              insightProduct="idolMatch"
              compatibilityHeading={t('idolMatch.compatibilityHeading', { member: memberName })}
              scoreLabel={t('matchCommon.scoreLabel')}
              onShare={() =>
                download(`ohaeng-${selectedMember.id}-group-match.png`, 'group-match', {
                  text: t('idolMatch.shareCaption'),
                  url: buildShareUrl('/idol-match', {
                    element: memberSaju.dominantElement,
                    score: memberScore,
                    name: memberName,
                    tier: memberCopy.tier,
                  }),
                })
              }
              shareLabel={t(canShareFiles ? 'result.shareNative' : 'result.shareButton')}
              onSaveImage={() => saveImage(`ohaeng-${selectedMember.id}-group-match.png`, 'group-match')}
              saveImageLabel={t('result.saveImageButton')}
              savingImage={savingImage}
              disclaimer={t('idolMatch.disclaimer')}
              downloading={downloading}
            />
          </div>

          <div className="share-card-offscreen">
            <IdolShareCard
              ref={shareCardRef}
              memberName={memberName}
              groupName={selectedGroup.name}
              userElement={userSaju.dominantElement}
              idolElement={memberSaju.dominantElement}
              idolStrength={memberSaju.dayGanStrength}
              score={memberScore}
              tier={memberCopy.tier}
              subheading={memberCopy.explanation.subheading}
              text={memberCopy.explanation.text}
            />
          </div>
        </main>
        </LoadingReveal>
      );
    }

    return (
      <main className="page">
        <div className="page-content">
          <h1>{t('idolMatch.groupTitle')}</h1>
          <p className="subtitle">{t('idolMatch.groupSubtitle')}</p>

          <div className="field-group">
            <div className="select-row">
              <select value={groupId} onChange={handleGroupModeSelect}>
                <option value="" disabled>{t('idolMatch.groupPlaceholder')}</option>
                {idolGroups.map((g) => (
                  <option key={g.id} value={g.id}>{g.name}</option>
                ))}
              </select>
              <select value={selectedMemberId || ''} onChange={handleGroupMemberSelect} disabled={!selectedGroup}>
                <option value="" disabled>{t('idolMatch.memberPlaceholder')}</option>
                {(selectedGroup?.members ?? []).map((m) => (
                  <option key={m.id} value={m.id}>{getMemberName(m, i18n.language)}</option>
                ))}
              </select>
            </div>
          </div>

          <Link
            to="/contact"
            onClick={() => trackIdolRequestClick('idol-match-group')}
            style={{ display: 'inline-block', fontSize: 13, color: 'var(--accent)', marginBottom: 16 }}
          >
            {t('idolMatch.requestGroupLink')}
          </Link>

          {!birth || !userSaju ? (
            <div className="card" style={{ textAlign: 'left' }}>
              <p>{t('idolMatch.groupNeedBirthday')}</p>
              <BirthDateForm
                submitLabel={t('compatibility.continueLabel')}
                analyticsContext="idol-match-group"
                remember
                onSubmit={(newParams) => {
                  newParams.set('mode', 'group');
                  if (groupId) newParams.set('group', groupId);
                  if (selectedMemberId) newParams.set('member', selectedMemberId);
                  navigate(`/idol-match?${newParams.toString()}`);
                }}
              />
            </div>
          ) : (
            <p className="subtitle" style={{ marginTop: 24 }}>{t('idolMatch.groupPickPrompt')}</p>
          )}
        </div>
      </main>
    );
  }

  if (!birth || !userSaju) {
    return (
      <main className="page">
        <div className="page-content">
          <h1>{t('idolMatch.title')}</h1>
          <p className="subtitle">{t('idolMatch.subtitle')}</p>

          <div className="card" style={{ textAlign: 'left' }}>
            <GenderSelect value={gender} onChange={setGender} />
            <BirthDateForm
              submitLabel={t('idolMatch.findMatchLabel')}
              analyticsContext="idol-match"
              remember
              onSubmit={(newParams) => {
                newParams.set('gender', gender);
                navigate(`/idol-match?${newParams.toString()}`);
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
        <h1>{t('idolMatch.title')}</h1>
        <p className="subtitle">{t('idolMatch.subtitle')}</p>
        {relationshipModeTabs}

        <MatchResultCard
          name={bestName}
          subtitle={best.candidate.groupName}
          matchElement={best.saju.dominantElement}
          matchStrength={best.saju.dayGanStrength}
          matchPillars={best.saju.pillars}
          userElement={userSaju.dominantElement}
          pillarsHeading={t('idolMatch.theirPillarsHeading', { member: bestName })}
          score={best.score}
          tier={compatCopy.tier}
          line={compatCopy.line}
          insightSections={insightSections}
          insightProduct="idolMatch"
          compatibilityHeading={t('idolMatch.compatibilityHeading', { member: bestName })}
          scoreLabel={t('matchCommon.scoreLabel')}
          onShare={() =>
            download(`ohaeng-${best.candidate.id}-match.png`, 'idol-match', {
              text: t('idolMatch.shareCaption'),
              url: buildShareUrl('/idol-match', {
                element: best.saju.dominantElement,
                score: best.score,
                name: bestName,
                tier: compatCopy.tier,
              }),
            })
          }
          shareLabel={t(canShareFiles ? 'result.shareNative' : 'result.shareButton')}
          onSaveImage={() => saveImage(`ohaeng-${best.candidate.id}-match.png`, 'idol-match')}
          saveImageLabel={t('result.saveImageButton')}
          savingImage={savingImage}
          disclaimer={t('idolMatch.disclaimer')}
          downloading={downloading}
        />
      </div>

      <div className="share-card-offscreen">
        <IdolShareCard
          ref={shareCardRef}
          memberName={bestName}
          groupName={best.candidate.groupName}
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
