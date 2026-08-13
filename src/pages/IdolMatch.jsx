import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { calculateSaju, getElementRelation, getTodayRelation } from '../utils/saju';
import { getFortuneLine } from '../data/fortuneTemplates';
import { getIdolMatchCopy } from '../data/idolMatchTemplates';
import { idolGroups, findMember } from '../data/idols';
import ElementBadge from '../components/ElementBadge';
import MemberAvatar from '../components/MemberAvatar';

const CATEGORIES = ['overall', 'love', 'wealth', 'health', 'comeback'];

export default function IdolMatch() {
  const { t, i18n } = useTranslation();
  const [params] = useSearchParams();
  const [groupId, setGroupId] = useState('');
  const [memberId, setMemberId] = useState('');
  const [picked, setPicked] = useState(null);

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
    if (!member || !userSaju || !idolSaju) return null;
    return { relation: getElementRelation(userSaju.dominantElement, idolSaju.dominantElement) };
  }, [member, userSaju, idolSaju]);

  const compatCopy = compatibility
    ? getIdolMatchCopy(i18n.language, compatibility.relation, `${birth.year}-${birth.month}-${birth.day}-${member.id}`)
    : null;

  return (
    <main className="page">
      <div className="page-content">
        <h1>{t('idolMatch.title')}</h1>
        <p className="subtitle">{t('idolMatch.subtitle')}</p>

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
              <MemberAvatar name={member.name} size={48} />
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
              </>
            ) : (
              <p className="time-note" style={{ marginTop: 24 }}>
                {t('idolMatch.needBirthdayInline', { member: member.name })}{' '}
                <Link to="/">{t('idolMatch.goToLanding')}</Link>
              </p>
            )}

            <p className="disclaimer">{t('idolMatch.disclaimer')}</p>
          </div>
        )}
      </div>
    </main>
  );
}
