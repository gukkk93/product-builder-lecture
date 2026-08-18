import { useTranslation } from 'react-i18next';
import { getGanLabel, getZhiLabel } from '../utils/saju';

const ELEMENT_VAR = {
  Wood: '--el-wood',
  Fire: '--el-fire',
  Earth: '--el-earth',
  Metal: '--el-metal',
  Water: '--el-water',
};

function StemCell({ char, element }) {
  return (
    <div
      style={{
        width: '100%',
        padding: '8px 4px',
        borderRadius: 10,
        background: `color-mix(in srgb, var(${ELEMENT_VAR[element]}) 18%, transparent)`,
        border: `1.5px solid var(${ELEMENT_VAR[element]})`,
        color: `var(${ELEMENT_VAR[element]})`,
        fontWeight: 700,
        fontSize: 13,
        textAlign: 'center',
        boxSizing: 'border-box',
      }}
    >
      {char}
    </div>
  );
}

/**
 * Horizontal table of ~10-year Major Luck Cycles (대운) — one column per
 * period, each showing its start age, Gan/Zhi (colored by element, same
 * convention PillarGrid uses), and the calendar years it spans. Scrolls
 * horizontally on narrow viewports rather than wrapping.
 */
export default function DaeunTable({ daeun }) {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ overflowX: 'auto', width: '100%' }}>
      <div style={{ display: 'flex', gap: 8, minWidth: 'max-content', paddingBottom: 4 }}>
        {daeun.items.map((item) => (
          <div key={item.startAge} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, minWidth: 58 }}>
            <span style={{ fontSize: 12, fontWeight: 700 }}>{item.startAge}</span>
            <StemCell char={getGanLabel(item.gan, i18n.language)} element={item.ganElement} />
            <StemCell char={getZhiLabel(item.zhi, i18n.language)} element={item.zhiElement} />
            <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>{item.startYear}</span>
          </div>
        ))}
      </div>
      <p style={{ marginTop: 10, marginBottom: 0, fontSize: 12, color: 'var(--text-muted)' }}>
        {t(daeun.forward ? 'saju.daeunForward' : 'saju.daeunBackward')}
      </p>
    </div>
  );
}
