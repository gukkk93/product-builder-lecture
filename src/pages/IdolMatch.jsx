import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { calculateSaju } from '../utils/saju';
import { findBestMatch } from '../utils/bestMatch';
import { getIdolMatchCopy } from '../data/idolMatchTemplates';
import { idolGroups } from '../data/idols';
import { useShareCardDownload } from '../hooks/useShareCardDownload';
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
  const { cardRef: shareCardRef, download, downloading } = useShareCardDownload();

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
      if (selectedGroup && userSaju) trackIdolMatchSubmit('group');
    } else if (best) {
      trackIdolMatchSubmit('soulmate');
    }
  }, [mode, selectedGroup, userSaju, best]);

  function handleGroupModeSelect(e) {
    const newGroupId = e.target.value;
    setGroupId(newGroupId);
    const newParams = new URLSearchParams(params);
    newParams.set('mode', 'group');
    newParams.set('group', newGroupId);
    navigate(`/idol-match?${newParams.toString()}`, { replace: true });
  }

  if (mode === 'group') {
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
              <h2 style={{ marginTop: 0, marginBottom: 8, fontSize: 16 }}>{t('idolMatch.groupRankHeading')}</h2>
              <GroupRankList group={selectedGroup} userSaju={userSaju} />
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
            onShare={() => download(`ohaeng-${best.candidate.id}-match.png`, 'idol-match')}
            shareLabel={t('result.shareButton')}
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
