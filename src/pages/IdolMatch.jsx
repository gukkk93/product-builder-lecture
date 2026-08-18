import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { calculateSaju, getCompatibility, getCompatibilityScore } from '../utils/saju';
import { findBestMatch } from '../utils/bestMatch';
import { getIdolMatchCopy } from '../data/idolMatchTemplates';
import { idolGroups, getMemberName } from '../data/idols';
import { useShareCardDownload } from '../hooks/useShareCardDownload';
import { buildShareUrl } from '../utils/shareUrl';
import { trackIdolMatchSubmit } from '../utils/analytics';
import IdolShareCard from '../components/IdolShareCard';
import BirthDateForm from '../components/BirthDateForm';
import GenderSelect from '../components/GenderSelect';
import MatchResultCard from '../components/MatchResultCard';
import LoadingReveal from '../components/LoadingReveal';

export default function IdolMatch() {
  const { t, i18n } = useTranslation();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const mode = params.get('mode'); // undefined | 'group'
  const [groupId, setGroupId] = useState(mode === 'group' ? params.get('group') || '' : '');
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
    ? getCompatibilityScore(memberCompat.relation, `${selectedMember.id}-group-${selectedGroup.id}`)
    : null;

  const memberCopy = memberCompat
    ? getIdolMatchCopy(i18n.language, memberCompat.relation, `${birth.year}-${birth.month}-${birth.day}-${selectedMember.id}`)
    : null;

  const memberExplanation = memberCompat
    ? t(`matchCommon.explanation.${memberCompat.relation}`, {
        my: t(`elements.${userSaju.dominantElement}`),
        other: t(`elements.${memberCompat.otherSaju.dominantElement}`),
      })
    : null;

  const memberInsightSections = memberCompat && memberCopy
    ? [
        { title: t('matchCommon.insightTitles.explanation'), text: memberExplanation },
        { title: t('matchCommon.insightTitles.goodFit'), text: memberCopy.goodFit },
        { title: t('matchCommon.insightTitles.watchFor'), text: memberCopy.watchFor },
      ]
    : null;

  const best = useMemo(() => {
    if (mode === 'group' || !userSaju) return null;
    return findBestMatch(pool, userSaju, gender);
  }, [mode, pool, userSaju, gender]);

  const bestName = best ? getMemberName(best.candidate, i18n.language) : '';

  const compatCopy = best
    ? getIdolMatchCopy(i18n.language, best.relation, `${birth.year}-${birth.month}-${birth.day}-${best.candidate.id}`)
    : null;

  const explanation = best
    ? t(`matchCommon.explanation.${best.relation}`, {
        my: t(`elements.${userSaju.dominantElement}`),
        other: t(`elements.${best.saju.dominantElement}`),
      })
    : null;

  const insightSections = best && compatCopy
    ? [
        { title: t('matchCommon.insightTitles.explanation'), text: explanation },
        { title: t('matchCommon.insightTitles.goodFit'), text: compatCopy.goodFit },
        { title: t('matchCommon.insightTitles.watchFor'), text: compatCopy.watchFor },
      ]
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
              line={memberCopy.line}
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
          line={compatCopy.line}
        />
      </div>
    </main>
    </LoadingReveal>
  );
}
