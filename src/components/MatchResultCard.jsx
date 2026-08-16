import { useTranslation } from 'react-i18next';
import ElementBadge from './ElementBadge';
import MemberAvatar from './MemberAvatar';

const CATEGORIES = ['overall', 'love', 'wealth', 'health', 'comeback'];

/**
 * Shared result layout for any "best match" reading (idol match, drama
 * match): the matched person's card, their fortune today, a compatibility
 * score, and a share button. Kept generic so both features render
 * identically per the "same content" request.
 */
export default function MatchResultCard({
  name,
  subtitle,
  matchElement,
  matchStrength,
  userElement,
  todayLines,
  score,
  tier,
  line,
  fortuneHeading,
  compatibilityHeading,
  scoreLabel,
  onShare,
  shareLabel,
  disclaimer,
  downloading,
}) {
  const { t } = useTranslation();

  return (
    <div className="card" style={{ marginTop: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <MemberAvatar element={matchElement} strength={matchStrength} size={48} />
        <div style={{ textAlign: 'left' }}>
          <strong style={{ fontSize: 16 }}>{name}</strong>
          {subtitle && <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{subtitle}</div>}
        </div>
      </div>

      <ElementBadge element={matchElement} />

      {todayLines && (
        <>
          <h2 style={{ marginTop: 24, marginBottom: 0, fontSize: 16 }}>{fortuneHeading}</h2>
          <div className="fortune-list">
            {CATEGORIES.map((cat) => (
              <div className="fortune-row" key={cat}>
                <div className="fortune-row__label">{t(`categories.${cat}`)}</div>
                <div className="fortune-row__text">{todayLines[cat]}</div>
              </div>
            ))}
          </div>
        </>
      )}

      <h2 style={{ marginTop: 24, marginBottom: 8, fontSize: 16 }}>{compatibilityHeading}</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginBottom: 16 }}>
        <div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>{t('idolMatch.yourElement')}</div>
          <ElementBadge element={userElement} size="small" />
        </div>
        <div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>{name}</div>
          <ElementBadge element={matchElement} size="small" />
        </div>
      </div>

      <div style={{ fontSize: 34, fontWeight: 800, color: 'var(--accent)', lineHeight: 1.1 }}>{score}%</div>
      <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 12 }}>{scoreLabel}</div>

      <strong style={{ color: 'var(--accent)', fontSize: 18 }}>{tier}</strong>
      <p style={{ fontSize: 15, lineHeight: 1.6 }}>{line}</p>

      <div className="result-actions">
        <button className="button" onClick={onShare} disabled={downloading}>
          {shareLabel}
        </button>
      </div>

      <p className="disclaimer">{disclaimer}</p>
    </div>
  );
}
