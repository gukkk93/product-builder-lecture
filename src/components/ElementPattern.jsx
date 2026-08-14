// Abstract line-art motifs for each Five Element, meant to sit on top of
// that element's gradient (see ELEMENT_GRADIENT in ShareCard.jsx) — an
// extension of the Four Symbols icon language (public/icons/elements) into
// a lighter-weight decorative pattern, for places a full illustration would
// be too busy (avatars, watermarks). See STYLE_GUIDE.md.
//
// `strength` ('strong' | 'weak', the day-master reading from calculateSaju)
// controls how bold the pattern renders — strong day masters get a bolder,
// more opaque line; weak ones get a fainter, thinner one. This is what
// takes the avatar set from 5 variants to up to 10 (5 elements x 2
// strengths).
function strokeProps(strength) {
  return strength === 'weak'
    ? { stroke: 'rgba(255,255,255,0.35)', strokeWidth: '2.5' }
    : { stroke: 'rgba(255,255,255,0.78)', strokeWidth: '3.5' };
}

function WoodPattern({ strength }) {
  const { stroke, strokeWidth } = strokeProps(strength);
  return (
    <g stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" fill="none">
      <path d="M20 85 Q45 60 40 30" />
      <path d="M40 55 Q55 48 62 32" />
      <path d="M32 42 Q20 36 14 22" />
      <ellipse cx="63" cy="28" rx="7" ry="4" fill={stroke} stroke="none" transform="rotate(-30 63 28)" />
      <ellipse cx="13" cy="18" rx="6" ry="3.5" fill={stroke} stroke="none" transform="rotate(20 13 18)" />
    </g>
  );
}

function FirePattern({ strength }) {
  const { stroke, strokeWidth } = strokeProps(strength);
  return (
    <g stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M50 88 C30 78 28 58 40 44 C38 54 46 58 46 48 C46 38 54 30 50 18 C62 30 66 46 58 56 C64 54 66 46 66 46 C70 60 66 80 50 88 Z" />
    </g>
  );
}

function EarthPattern({ strength }) {
  const { stroke, strokeWidth } = strokeProps(strength);
  return (
    <g stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" fill="none">
      <path d="M8 78 Q30 58 50 74 Q70 58 92 76" />
      <path d="M14 60 Q35 44 50 56 Q65 44 86 58" />
      <path d="M22 42 Q40 30 50 38 Q60 30 78 40" />
    </g>
  );
}

function MetalPattern({ strength }) {
  const { stroke, strokeWidth } = strokeProps(strength);
  return (
    <g stroke={stroke} strokeWidth={strokeWidth} fill="none">
      <circle cx="50" cy="50" r="30" />
      <circle cx="50" cy="50" r="17" />
      <path d="M50 12 L58 26 L50 40 L42 26 Z" fill={stroke} stroke="none" />
    </g>
  );
}

function WaterPattern({ strength }) {
  const { stroke, strokeWidth } = strokeProps(strength);
  return (
    <g stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" fill="none">
      <path d="M8 34 Q22 24 36 34 T64 34 T92 34" />
      <path d="M8 56 Q22 46 36 56 T64 56 T92 56" />
      <path d="M8 78 Q22 68 36 78 T64 78 T92 78" />
    </g>
  );
}

const PATTERNS = {
  Wood: WoodPattern,
  Fire: FirePattern,
  Earth: EarthPattern,
  Metal: MetalPattern,
  Water: WaterPattern,
};

export default function ElementPattern({ element, size = 40, strength = 'strong' }) {
  const Pattern = PATTERNS[element] || WoodPattern;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ position: 'absolute', inset: 0 }}
      aria-hidden="true"
    >
      <Pattern strength={strength} />
    </svg>
  );
}
