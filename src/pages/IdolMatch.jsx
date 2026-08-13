import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { calculateSaju, getIdolCompatibility } from '../utils/saju';
import { getIdolMatchCopy } from '../data/idolMatchTemplates';
import { idolGroups, findMember } from '../data/idols';
import ElementBadge from '../components/ElementBadge';

export default function IdolMatch() {
  const { t, i18n } = useTranslation();
  const [params] = useSearchParams();
  const [groupId, setGroupId] = useState('');
  const [memberId, setMemberId] = useState('');
  const [picked, setPicked] = useState(null);

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

  const members = groupId ? idolGroups.find((g) => g.id === groupId)?.members ?? [] : [];

  if (!birth || !userSaju) {
    return (
      <main className="page">
        <div className="page-content">
          <div className="card">
            <p>{t('idolMatch.needBirthday')}</p>
            <Link to="/" className="button" style={{ marginTop: 16, display: 'inline-block' }}>
              {t('idolMatch.goToLanding')}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!groupId || !memberId) return;
    setPicked({ groupId, memberId });
  }

  const { group, member } = picked ? findMember(picked.groupId, picked.memberId) : {};

  const compatibility = useMemo(() => {
    if (!member) return null;
    return getIdolCompatibility(userSaju, {
      year: member.year,
      month: member.month,
      day: member.day,
      hour: null,
      calendar: 'solar',
    });
  }, [member, userSaju]);

  const copy = compatibility
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

        {compatibility && copy && (
          <div className="card" style={{ marginTop: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginBottom: 20 }}>
              <div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>{t('idolMatch.yourElement')}</div>
                <ElementBadge element={userSaju.dominantElement} size="small" />
              </div>
              <div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>{member.name}</div>
                <ElementBadge element={compatibility.idolSaju.dominantElement} size="small" />
              </div>
            </div>

            <h2 style={{ fontSize: 20, margin: '0 0 8px', color: 'var(--accent)' }}>{copy.tier}</h2>
            <p style={{ fontSize: 15, lineHeight: 1.6 }}>{copy.line}</p>

            <p className="disclaimer">{t('idolMatch.disclaimer')}</p>
          </div>
        )}
      </div>
    </main>
  );
}
