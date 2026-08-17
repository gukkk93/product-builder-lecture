import { ELEMENT_ICON_SRC } from './ElementBadge';
import { ELEMENT_CHARACTER_SRC } from './ElementCharacter';

// Large, low-opacity Four Symbols icon bleeding off the corner of a share
// card — brand recognition without competing with the foreground content.
// A second, even fainter mark in the opposite corner uses the full
// character illustration instead, so the card reads as "part of the same
// world" as the loading reveal / ComingSoon without turning into a second
// visible logo. Parent must be `position: relative; overflow: hidden`.
export default function ShareCardWatermark({ element }) {
  return (
    <>
      <img
        src={ELEMENT_ICON_SRC[element]}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 440,
          height: 440,
          right: -140,
          bottom: -120,
          opacity: 0.14,
          pointerEvents: 'none',
        }}
      />
      <img
        src={ELEMENT_CHARACTER_SRC[element]}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 260,
          height: 260,
          left: -80,
          top: -70,
          opacity: 0.08,
          pointerEvents: 'none',
          objectFit: 'contain',
        }}
      />
    </>
  );
}
