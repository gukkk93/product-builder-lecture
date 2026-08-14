import { ELEMENT_GRADIENT } from './ShareCard';
import ElementPattern from './ElementPattern';

// No real (or AI-generated) idol likeness is used here — see idols.js and
// STYLE_GUIDE.md. The avatar is the member's own dominant Five Element,
// rendered as that element's gradient + abstract line pattern, so it stays
// tied to the actual saju data instead of being decorative. `strength`
// (the member's day-master reading) takes the set from 5 variants to up to
// 10: a bolder pattern + solid ring for 'strong', a fainter pattern +
// dashed ring for 'weak'.
export default function MemberAvatar({ element, size = 40, strength = 'strong' }) {
  const [from, to] = ELEMENT_GRADIENT[element];

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: `linear-gradient(160deg, ${from}, ${to})`,
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
        border: `2px ${strength === 'weak' ? 'dashed' : 'solid'} rgba(255,255,255,0.5)`,
      }}
    >
      <ElementPattern element={element} size={size} strength={strength} />
    </div>
  );
}
