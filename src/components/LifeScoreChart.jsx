import { useTranslation } from 'react-i18next';
import { getGanZhiLabel } from '../utils/saju';

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
 * (no chart library), bars going up instead of sideways. Bars are colored
 * by each period's own Gan element, and each one is labeled with both its
 * score and its age + Gan/Zhi (the info that used to live in the separate
 * DaeunTable card, before the two were merged into one). The 4 life-stage
 * labels below span 2 bars each, matching how the 8 periods group into
 * stages, and the forward/backward note (which direction the cycles run)
 * closes out the chart, same as it did in the old DaeunTable.
 */
export default function LifeScoreChart({ periods, forward }) {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 150 }}>
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
            <span style={{ fontSize: 9, color: 'var(--text-muted)' }}>{getGanZhiLabel(p.gan, p.zhi, i18n.language)}</span>
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
      <p style={{ marginTop: 10, marginBottom: 0, fontSize: 12, color: 'var(--text-muted)' }}>
        {t(forward ? 'saju.daeunForward' : 'saju.daeunBackward')}
      </p>
    </div>
  );
}
