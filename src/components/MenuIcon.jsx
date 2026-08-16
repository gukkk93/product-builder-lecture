// Simple, single-color line icons for the home menu — deliberately not the
// Four Symbols animal icons (those stay for actual oheng data: badges,
// avatars, share cards). Each icon here is a plain concept mark for what
// the menu row does, matching a cleaner, less illustration-heavy home
// screen. See STYLE_GUIDE.md.
const ICONS = {
  fortune: (
    // Sun — "today"
    <>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
    </>
  ),
  saju: (
    // Four uneven pillars — the Four Pillars chart
    <>
      <rect x="2.6" y="10.5" width="3.3" height="10" rx="1" />
      <rect x="7.7" y="6.3" width="3.3" height="14.2" rx="1" />
      <rect x="12.8" y="12.7" width="3.3" height="7.8" rx="1" />
      <rect x="17.9" y="3.6" width="3.3" height="16.9" rx="1" />
    </>
  ),
  compatibility: (
    // Two overlapping circles — chemistry between two people
    <>
      <circle cx="9.5" cy="12" r="6.2" />
      <circle cx="14.5" cy="12" r="6.2" />
    </>
  ),
  idolMatch: (
    // Star — a soulmate pick among many
    <path d="M12 2.5l2.7 6.4 6.9.6-5.2 4.6 1.6 6.8L12 17.3l-6 3.6 1.6-6.8-5.2-4.6 6.9-.6z" />
  ),
  drama: (
    // Clapperboard — the K-drama match
    <>
      <path d="M3 9.5l1.4-4.4a1.4 1.4 0 0 1 1.75-.92l12.9 3.9a1.4 1.4 0 0 1 .93 1.76L19.5 13" />
      <rect x="3" y="9.5" width="17" height="10.5" rx="1.4" />
      <path d="M5.5 9.5l2-4M9.8 9.5l2-4M14.1 9.5l2-4" />
    </>
  ),
  groupMatch: (
    // Three people — ranking across a whole group
    <>
      <circle cx="8" cy="8" r="3" />
      <path d="M2.5 20c0-3.6 2.5-6 5.5-6s5.5 2.4 5.5 6" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M14.8 13.2c2.6-.3 4.7 1.9 4.7 5.3" />
    </>
  ),
};

export default function MenuIcon({ name, size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}
