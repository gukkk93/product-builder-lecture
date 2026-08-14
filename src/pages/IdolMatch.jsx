import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { calculateSaju, getCompatibility, getTodayRelation } from '../utils/saju';
import { getFortuneLine } from '../data/fortuneTemplates';
import { getIdolMatchCopy } from '../data/idolMatchTemplates';
import { idolGroups, findMember } from '../data/idols';
import { useShareCardDownload } from '../hooks/useShareCardDownload';
import { trackIdolMatchSubmit } from '../utils/analytics';
import ElementBadge from '../components/ElementBadge';
import MemberAvatar from '../components/MemberAvatar';
import IdolShareCard from '../components/IdolShareCard';
import BirthDateForm from '../components/BirthDateForm';
import GroupRankList from '../components/GroupRankList';

const CATEGORIES = ['overall', 'love', 'wealth', 'health', 'comeback'];

export default function IdolMatch() {
  const { t, i18n } = useTranslation();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const mode = params.get('mode'); // undefined | 'bias' | 'group'
  const [groupId, setGroupId] = useState(mode === 'group' ? params.get('group') || '' : '');
  const [memberId, setMemberId] = useState('');
  const [picked, setPicked] = useState(null);
  const { cardRef: shareCardRef, download, downloading } = useShareCardDownload();

  const members = groupId ? idolGroups.find((g) => g.id === groupId)?.members ?? [] : [];

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

  function handleSubmit(e) {
    e.preventDefault();
    if (!groupId || !memberId) return;
    setPicked({ groupId, memberId });
  }

  const { member } = picked ? findMember(picked.groupId, picked.memberId) : {};

  const idolSaju = useMemo(() => {
    if (!member) return null;
    return calculateSaju({ year: member.year, month: member.month, day: member.day, hour: null, calendar: 'solar' }, false);
  }, [member]);

  const idolToday = useMemo(() => (idolSaju ? getTodayRelation(idolSaju) : null), [idolSaju]);
  const idolSeed = member ? `${member.id}-${new Date().toDateString()}` : '';
  const idolLines = idolToday
    ? Object.fromEntries(CATEGORIES.map((cat) => [cat, getFortuneLine(i18n.language, idolToday.relation, cat, idolSeed)]))
    : null;

  const compatibility = useMemo(() => {
    if (!member || !userSaju) return null;
    return getCompatibility(userSaju, { year: member.year, month: member.month, day: member.day, hour: null, calendar: 'solar' }, false);
  }, [member, userSaju]);

  const compatCopy = compatibility
    ? getIdolMatchCopy(i18n.language, compatibility.relation, `${birth.year}-${birth.month}-${birth.day}-${member.id}`)
    : null;

  const selectedGroup = mode === 'group' && groupId ? idolGroups.find((g) => g.id === groupId) : null;

  useEffect(() => {
    if (mode === 'group') {
      if (selectedGroup && userSaju) trackIdolMatchSubmit('group');
    } else if (member) {
      trackIdolMatchSubmit(mode || 'soulmate');
    }
  }, [mode, selectedGroup, userSaju, member]);

  const title = mode === 'bias' ? t('idolMatch.biasTitle') : mode === 'group' ? t('idolMatch.groupTitle') : t('idolMatch.title');
  const subtitle = mode === 'bias' ? t('idolMatch.biasSubtitle') : mode === 'group' ? t('idolMatch.groupSubtitle') : t('idolMatch.subtitle');

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
          <h1>{title}</h1>
          <p className="subtitle">{subtitle}</p>

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
        <h1>{title}</h1>
        <p className="subtitle">{subtitle}</p>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div className="field-group">
            <div className="select-row">
              <select
                value={groupId}
                onChange={(e) => { setGroupId(e.target.value); setMemberId(''); setPicked(null); }}
              >
                <option value="" disabled>{t('idolMatch.groupPlaceholder')}</option>
                {idolGroups.map((g) => (
                  <option key={g.id} value={g.id}>{g.name}</option>
                ))}
              </select>
              <select
                value={memberId}
                onChange={(e) => { setMemberId(e.target.value); setPicked(null); }}
                disabled={!groupId}
              >
                <option value="" disabled>{t('idolMatch.memberPlaceholder')}</option>
                {members.map((m) => (
                  <option key={m.id} value={m.id}>{m.name}</option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="button" disabled={!groupId || !memberId} style={{ width: '100%' }}>
            {t('idolMatch.submit')}
          </button>
        </form>

        {member && idolSaju && (
          <div className="card" style={{ marginTop: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <MemberAvatar element={idolSaju.dominantElement} strength={idolSaju.dayGanStrength} size={48} />
              <div style={{ textAlign: 'left' }}>
                <strong style={{ fontSize: 16 }}>{member.name}</strong>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                  {idolGroups.find((g) => g.id === picked.groupId)?.name}
                </div>
              </div>
            </div>

            <ElementBadge element={idolSaju.dominantElement} />

            <h2 style={{ marginTop: 24, marginBottom: 0, fontSize: 16 }}>
              {t('idolMatch.theirFortuneHeading', { member: member.name })}
            </h2>
            <div className="fortune-list">
              {CATEGORIES.map((cat) => (
                <div className="fortune-row" key={cat}>
                  <div className="fortune-row__label">{t(`categories.${cat}`)}</div>
                  <div className="fortune-row__text">{idolLines[cat]}</div>
                </div>
              ))}
            </div>

            {compatCopy ? (
              <>
                <h2 style={{ marginTop: 24, marginBottom: 8, fontSize: 16 }}>
                  {t('idolMatch.compatibilityHeading', { member: member.name })}
                </h2>
                <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginBottom: 16 }}>
                  <div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>{t('idolMatch.yourElement')}</div>
                    <ElementBadge element={userSaju.dominantElement} size="small" />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>{member.name}</div>
                    <ElementBadge element={idolSaju.dominantElement} size="small" />
                  </div>
                </div>
                <strong style={{ color: 'var(--accent)', fontSize: 18 }}>{compatCopy.tier}</strong>
                <p style={{ fontSize: 15, lineHeight: 1.6 }}>{compatCopy.line}</p>

                <div className="result-actions">
                  <button
                    className="button"
                    onClick={() => download(`ohaeng-${member.id}-match.png`, 'idol-match')}
                    disabled={downloading}
                  >
                    {t('result.shareButton')}
                  </button>
                </div>
              </>
            ) : (
              <p className="time-note" style={{ marginTop: 24 }}>
                {t('idolMatch.needBirthdayInline', { member: member.name })}{' '}
                <Link to="/result">{t('idolMatch.goToLanding')}</Link>
              </p>
            )}

            <p className="disclaimer">{t('idolMatch.disclaimer')}</p>
          </div>
        )}
      </div>

      {compatCopy && (
        <div className="share-card-offscreen">
          <IdolShareCard
            ref={shareCardRef}
            memberName={member.name}
            groupName={idolGroups.find((g) => g.id === picked.groupId)?.name}
            userElement={userSaju.dominantElement}
            idolElement={idolSaju.dominantElement}
            idolStrength={idolSaju.dayGanStrength}
            tier={compatCopy.tier}
            line={compatCopy.line}
          />
        </div>
      )}
    </main>
  );
}
