import { useTranslation } from 'react-i18next';
import { getGanElement, getZhiElement, getGanLabel, getZhiLabel } from '../utils/saju';

const ELEMENT_VAR = {
  Wood: '--el-wood',
  Fire: '--el-fire',
  Earth: '--el-earth',
  Metal: '--el-metal',
  Water: '--el-water',
};

const PILLAR_ORDER = ['year', 'month', 'day', 'time'];

function Cell({ char, element }) {
  return (
    <div
      style={{
        width: '100%',
        padding: '10px 4px',
        borderRadius: 10,
        background: `color-mix(in srgb, var(${ELEMENT_VAR[element]}) 18%, transparent)`,
        border: `1.5px solid var(${ELEMENT_VAR[element]})`,
        color: `var(${ELEMENT_VAR[element]})`,
        fontWeight: 700,
        fontSize: 14,
        textAlign: 'center',
      }}
    >
      {char}
    </div>
  );
}

/** Visualizes the Four Pillars (년/월/일/시 간지) returned by calculateSaju. */
export default function PillarGrid({ pillars }) {
  const { t, i18n } = useTranslation();
  const keys = PILLAR_ORDER.filter((key) => pillars[key]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${keys.length}, 1fr)`, gap: 8, width: '100%' }}>
      {keys.map((key) => {
        const { gan, zhi } = pillars[key];
        return (
          <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600 }}>
              {t(`saju.pillars.${key}`)}
            </span>
            <Cell char={getGanLabel(gan, i18n.language)} element={getGanElement(gan)} />
            <Cell char={getZhiLabel(zhi, i18n.language)} element={getZhiElement(zhi)} />
          </div>
        );
      })}
    </div>
  );
}
