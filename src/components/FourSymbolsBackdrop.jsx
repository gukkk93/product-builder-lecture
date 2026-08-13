import { ELEMENT_ICON_SRC } from './ElementBadge';

// Ambient brand texture: all five Four Symbols icons, faint and oversized,
// scattered like a traditional 사신도 tomb-mural composition — one per
// cardinal position plus center. Used behind hero-ish pages (Landing).
// See STYLE_GUIDE.md: "사신도-centric" is the intended visual identity,
// not just a one-off icon in a badge.
const LAYOUT = [
  { element: 'Wood', top: '4%', left: '-8%', size: 220, rotate: -12 },
  { element: 'Fire', top: '2%', right: '-10%', size: 200, rotate: 10 },
  { element: 'Metal', bottom: '18%', left: '-12%', size: 230, rotate: 8 },
  { element: 'Water', bottom: '4%', right: '-8%', size: 240, rotate: -8 },
  { element: 'Earth', top: '38%', left: '50%', size: 260, rotate: 0, center: true },
];

export default function FourSymbolsBackdrop() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      {LAYOUT.map(({ element, size, rotate, center, ...pos }) => (
        <img
          key={element}
          src={ELEMENT_ICON_SRC[element]}
          alt=""
          style={{
            position: 'absolute',
            width: size,
            height: size,
            opacity: 0.07,
            transform: `${center ? 'translateX(-50%)' : ''} rotate(${rotate}deg)`,
            ...pos,
          }}
        />
      ))}
    </div>
  );
}
