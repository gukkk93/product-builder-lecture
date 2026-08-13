// No real idol photos are used (see src/data/idols.js) — this renders a
// simple initials badge instead, colored deterministically per name so the
// same member always gets the same color.
const PALETTE = ['#7c5cff', '#ff6b81', '#4caf50', '#c9a227', '#2f4d78', '#ef4444', '#b08d57', '#a78bfa'];

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function getInitials(name) {
  const tokens = name.split(/[\s.-]+/).filter(Boolean);
  if (tokens.length === 1) {
    const token = tokens[0];
    return token.length <= 2 ? token.toUpperCase() : token[0].toUpperCase();
  }
  return tokens.slice(0, 2).map((t) => t[0].toUpperCase()).join('');
}

export default function MemberAvatar({ name, size = 40 }) {
  const seed = hashCode(name);
  const background = PALETTE[seed % PALETTE.length];

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background,
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontSize: Math.round(size * 0.38),
        flexShrink: 0,
      }}
    >
      {getInitials(name)}
    </div>
  );
}
