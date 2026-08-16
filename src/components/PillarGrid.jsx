import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getGanElement, getZhiElement, getGanMeta, getZhiMeta } from '../utils/saju';

const ELEMENT_VAR = {
  Wood: '--el-wood',
  Fire: '--el-fire',
  Earth: '--el-earth',
  Metal: '--el-metal',
  Water: '--el-water',
};

const PILLAR_ORDER = ['year', 'month', 'day', 'time'];

function Cell({ char, element, onClick, active }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: '100%',
        padding: '10px 4px',
        borderRadius: 10,
        background: `color-mix(in srgb, var(${ELEMENT_VAR[element]}) ${active ? 32 : 18}%, transparent)`,
        border: `1.5px solid var(${ELEMENT_VAR[element]})`,
        color: `var(${ELEMENT_VAR[element]})`,
        fontWeight: 700,
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'inherit',
        cursor: 'pointer',
      }}
    >
      {char}
    </button>
  );
}

/**
 * Visualizes the Four Pillars (년/월/일/시 간지) returned by calculateSaju.
 * Each character is tappable — tapping shows what it means (Heavenly Stem
 * vs. Earthly Branch, its element, its Yin/Yang polarity) in a glossary
 * panel below the grid, so the chart stays readable at a glance while still
 * being explorable for anyone new to saju.
 */
export default function PillarGrid({ pillars }) {
  const { t, i18n } = useTranslation();
  const keys = PILLAR_ORDER.filter((key) => pillars[key]);
  const [selected, setSelected] = useState(null); // { pillarKey, part: 'gan'|'zhi' }

  const selectedMeta = selected
    ? selected.part === 'gan'
      ? getGanMeta(pillars[selected.pillarKey].gan, i18n.language)
      : getZhiMeta(pillars[selected.pillarKey].zhi, i18n.language)
    : null;

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${keys.length}, 1fr)`, gap: 8, width: '100%' }}>
        {keys.map((key) => {
          const { gan, zhi } = pillars[key];
          return (
            <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600 }}>
                {t(`saju.pillars.${key}`)}
              </span>
              <Cell
                char={getGanMeta(gan, i18n.language).label}
                element={getGanElement(gan)}
                active={selected?.pillarKey === key && selected.part === 'gan'}
                onClick={() => setSelected({ pillarKey: key, part: 'gan' })}
              />
              <Cell
                char={getZhiMeta(zhi, i18n.language).label}
                element={getZhiElement(zhi)}
                active={selected?.pillarKey === key && selected.part === 'zhi'}
                onClick={() => setSelected({ pillarKey: key, part: 'zhi' })}
              />
            </div>
          );
        })}
      </div>

      {selectedMeta ? (
        <div
          style={{
            marginTop: 14,
            padding: '12px 14px',
            borderRadius: 12,
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            textAlign: 'left',
          }}
        >
          <strong style={{ fontSize: 15 }}>
            {selectedMeta.label} ({selectedMeta.hanja})
          </strong>
          <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
            {[t(`saju.category.${selectedMeta.category}`), t(`elements.${selectedMeta.element}`), t(`saju.yinYang.${selectedMeta.yinYang}`)].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  background: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  padding: '3px 8px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <p style={{ marginTop: 10, marginBottom: 0, fontSize: 12, color: 'var(--text-muted)' }}>
          {t('saju.glossaryHint')}
        </p>
      )}
    </div>
  );
}
