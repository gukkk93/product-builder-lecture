import { ELEMENT_ICON_SRC } from './ElementBadge';

// Large, low-opacity Four Symbols icon bleeding off the corner of a share
// card — brand recognition without competing with the foreground content.
// Parent must be `position: relative; overflow: hidden`.
export default function ShareCardWatermark({ element }) {
  return (
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
  );
}
