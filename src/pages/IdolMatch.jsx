import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { calculateSaju, getCompatibility, getCompatibilityScore } from '../utils/saju';
import { findBestMatch } from '../utils/bestMatch';
import { getIdolMatchCopy } from '../data/idolMatchTemplates';
import { idolGroups } from '../data/idols';
import { useShareCardDownload } from '../hooks/useShareCardDownload';
import { buildShareUrl } from '../utils/shareUrl';
import { trackIdolMatchSubmit } from '../utils/analytics';
import IdolShareCard from '../components/IdolShareCard';
import BirthDateForm from '../components/BirthDateForm';
import GenderSelect from '../components/GenderSelect';
import MatchResultCard from '../components/MatchResultCard';
import GroupRankList from '../components/GroupRankList';

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

  const best = useMemo(() => {
    if (mode === 'group' || !userSaju) return null;
    return findBestMatch(pool, userSaju, gender);
  }, [mode, pool, userSaju, gender]);

  const compatCopy = best
    ? getIdolMatchCopy(i18n.language, best.relation, `${birth.year}-${birth.month}-${birth.day}-${best.candidate.id}`)
    : null;

  const explanation = best
    ? t(`matchCommon.explanation.${best.relation}`, {
        my: t(`elements.${userSaju.dominantElement}`),
        other: t(`elements.${best.saju.dominantElement}`),
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

  function selectGroupMember(memberId) {
    const newParams = new URLSearchParams(params);
    newParams.set('member', memberId);
    navigate(`/idol-match?${newParams.toString()}`);
  }

  function clearGroupMember() {
    const newParams = new URLSearchParams(params);
    newParams.delete('member');
    navigate(`/idol-match?${newParams.toString()}`);
  }

  if (mode === 'group') {
    if (selectedMember && memberSaju && memberCompat) {
      return (
        <main className="page">
          <div className="page-content">
            <button type="button" className="back-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={clearGroupMember}>
              {t('idolMatch.groupBackToRanking')}
            </button>

            <h1>{t('idolMatch.groupTitle')}</h1>

            <MatchResultCard
              name={selectedMember.name}
              subtitle={selectedGroup.name}
              matchElement={memberSaju.dominantElement}
              matchStrength={memberSaju.dayGanStrength}
              matchPillars={memberSaju.pillars}
              userElement={userSaju.dominantElement}
              pillarsHeading={t('idolMatch.theirPillarsHeading', { member: selectedMember.name })}
              score={memberScore}
              tier={memberCopy.tier}
              line={memberCopy.line}
              explanation={memberExplanation}
              compatibilityHeading={t('idolMatch.compatibilityHeading', { member: selectedMember.name })}
              scoreLabel={t('matchCommon.scoreLabel')}
              onShare={() =>
                download(`ohaeng-${selectedMember.id}-group-match.png`, 'group-match', {
                  text: t('idolMatch.shareCaption'),
                  url: buildShareUrl('/idol-match'),
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
              memberName={selectedMember.name}
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
      );
    }

    return (
      <main className="page">
        <div className="page-content">
          <h1>{t('idolMatch.groupTitle')}</h1>
          <p className="subtitle">{t('idolMatch.groupSubtitle')}</p>

          <div className="field-group">
            <select value={groupId} onChange={handleGroupModeSelect} style={{ width: '100%' }}>
              <option value="" disabled>{t('idolMatch.groupPlaceholder')}</option>
              {idolGroups.map((g) => (
                <option key={g.id} value={g.id}>{g.name}</option>
              ))}
            </select>
          </div>

          {!birth || !userSaju ? (
            <div className="card" style={{ textAlign: 'left' }}>
              <p>{t('idolMatch.groupNeedBirthday')}</p>
              <BirthDateForm
                submitLabel={t('compatibility.continueLabel')}
                analyticsContext="idol-match-group"
                onSubmit={(newParams) => {
                  newParams.set('mode', 'group');
                  if (groupId) newParams.set('group', groupId);
                  navigate(`/idol-match?${newParams.toString()}`);
                }}
              />
            </div>
          ) : selectedGroup ? (
            <div className="card">
              <h2 style={{ marginTop: 0, marginBottom: 4, fontSize: 16 }}>{t('idolMatch.groupRankHeading')}</h2>
              <p style={{ marginTop: 0, marginBottom: 12, fontSize: 12, color: 'var(--text-muted)' }}>
                {t('idolMatch.groupTapHint')}
              </p>
              <GroupRankList group={selectedGroup} userSaju={userSaju} onSelectMember={selectGroupMember} />
            </div>
          ) : (
            <p className="subtitle" style={{ marginTop: 24 }}>{t('idolMatch.groupPickPrompt')}</p>
          )}
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="page-content">
        <h1>{t('idolMatch.title')}</h1>
        <p className="subtitle">{t('idolMatch.subtitle')}</p>

        {!birth || !userSaju ? (
          <div className="card" style={{ textAlign: 'left' }}>
            <GenderSelect value={gender} onChange={setGender} />
            <BirthDateForm
              submitLabel={t('idolMatch.findMatchLabel')}
              analyticsContext="idol-match"
              onSubmit={(newParams) => {
                newParams.set('gender', gender);
                navigate(`/idol-match?${newParams.toString()}`);
              }}
            />
          </div>
        ) : best ? (
          <MatchResultCard
            name={best.candidate.name}
            subtitle={best.candidate.groupName}
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
              download(`ohaeng-${best.candidate.id}-match.png`, 'idol-match', {
                text: t('idolMatch.shareCaption'),
                url: buildShareUrl('/idol-match'),
              })
            }
            shareLabel={t(canShareFiles ? 'result.shareNative' : 'result.shareButton')}
            disclaimer={t('idolMatch.disclaimer')}
            downloading={downloading}
          />
        ) : null}
      </div>

      {best && (
        <div className="share-card-offscreen">
          <IdolShareCard
            ref={shareCardRef}
            memberName={best.candidate.name}
            groupName={best.candidate.groupName}
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
