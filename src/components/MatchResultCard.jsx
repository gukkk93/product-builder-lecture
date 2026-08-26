import { useTranslation } from 'react-i18next';
import ElementBadge from './ElementBadge';
import PillarGrid from './PillarGrid';
import InsightSection from './InsightSection';

/**
 * Shared result layout for any "best match" reading (idol match, drama
 * match): the matched person's card, their own Four Pillars saju, a
 * compatibility score + why-this-score explanation, and a share button.
 * Kept generic so both features render identically per the "same content"
 * request.
 */
export default function MatchResultCard({
  name,
  subtitle,
  matchElement,
  matchPillars,
  userElement,
  pillarsHeading,
  score,
  tier,
  line,
  insightSections,
  insightProduct,
  insightUnlockKey,
  compatibilityHeading,
  scoreLabel,
  onShare,
  shareLabel,
  onSaveImage,
  saveImageLabel,
  savingImage,
  disclaimer,
  downloading,
}) {
  const { t } = useTranslation();

  return (
    <div className="card" style={{ marginTop: 24 }}>
      <div style={{ textAlign: 'left', marginBottom: 16 }}>
        <strong style={{ fontSize: 21 }}>{name}</strong>
        {subtitle && <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{subtitle}</div>}
      </div>

      <ElementBadge element={matchElement} />

      {matchPillars && (
        <>
          <h2 style={{ marginTop: 24, marginBottom: 12, fontSize: 16, textAlign: 'left' }}>{pillarsHeading}</h2>
          <PillarGrid pillars={matchPillars} />
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
      {insightSections && <InsightSection sections={insightSections} product={insightProduct} unlockKey={insightUnlockKey} />}

      <div className="result-actions">
        <button className="button" onClick={onShare} disabled={downloading}>
          {shareLabel}
        </button>
        <button className="button secondary" onClick={onSaveImage} disabled={savingImage}>
          {saveImageLabel}
        </button>
      </div>

      <p className="disclaimer">{disclaimer}</p>
    </div>
  );
}
