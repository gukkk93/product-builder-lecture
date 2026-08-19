import { useTranslation } from 'react-i18next';

const ELEMENT_VAR = {
  Wood: '--el-wood',
  Fire: '--el-fire',
  Earth: '--el-earth',
  Metal: '--el-metal',
  Water: '--el-water',
};

const STAGE_KEYS = ['early', 'youth', 'middle', 'late'];
const MAX_SCORE = 99;

/**
 * Vertical bar chart of the 8 Major Luck Cycle scores from
 * getLifeScoreTimeline — same plain CSS approach as ElementDistribution
 * (no chart library), just bars going up instead of sideways. Bars are
 * colored by each period's own Gan element, and the 4 life-stage labels
 * below span 2 bars each, matching how the 8 periods group into stages.
 */
export default function LifeScoreChart({ periods }) {
  const { t } = useTranslation();

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 140 }}>
        {periods.map((p) => (
          <div
            key={p.startAge}
            style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end', gap: 4 }}
          >
            <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-muted)' }}>{p.score}</span>
            <div
              style={{
                width: '100%',
                maxWidth: 22,
                height: `${(p.score / MAX_SCORE) * 100}%`,
                borderRadius: '6px 6px 2px 2px',
                background: `var(${ELEMENT_VAR[p.ganElement]})`,
              }}
            />
            <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>{p.startAge}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', marginTop: 8 }}>
        {STAGE_KEYS.map((key) => (
          <span key={key} style={{ flex: 2, textAlign: 'center', fontSize: 11, fontWeight: 600, color: 'var(--text-muted)' }}>
            {t(`saju.lifeScoreStages.${key}`)}
          </span>
        ))}
      </div>
    </div>
  );
}
