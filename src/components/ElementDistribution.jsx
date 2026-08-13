import { useTranslation } from 'react-i18next';
import { ELEMENTS } from '../utils/saju';

const ELEMENT_VAR = {
  Wood: '--el-wood',
  Fire: '--el-fire',
  Earth: '--el-earth',
  Metal: '--el-metal',
  Water: '--el-water',
};

/** Horizontal bar chart of the Wood/Fire/Earth/Metal/Water tally from calculateSaju. */
export default function ElementDistribution({ counts }) {
  const { t } = useTranslation();
  const max = Math.max(...Object.values(counts), 1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
      {ELEMENTS.map((el) => (
        <div key={el} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 46, flexShrink: 0, fontSize: 13, fontWeight: 600, color: `var(${ELEMENT_VAR[el]})`, textAlign: 'right' }}>
            {t(`elements.${el}`)}
          </span>
          <div style={{ flex: 1, height: 10, borderRadius: 6, background: 'var(--border)', overflow: 'hidden' }}>
            <div
              style={{
                width: `${(counts[el] / max) * 100}%`,
                height: '100%',
                background: `var(${ELEMENT_VAR[el]})`,
                borderRadius: 6,
                transition: 'width 0.4s ease',
              }}
            />
          </div>
          <span style={{ width: 14, flexShrink: 0, fontSize: 12, color: 'var(--text-muted)' }}>{counts[el]}</span>
        </div>
      ))}
    </div>
  );
}
