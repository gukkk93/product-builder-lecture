import woodChar from '../assets/characters/wood.png';
import fireChar from '../assets/characters/fire.png';
import earthChar from '../assets/characters/earth.png';
import metalChar from '../assets/characters/metal.png';
import waterChar from '../assets/characters/water.png';

// Imported (not referenced from public/) so Vite fingerprints the filename
// by content hash — same reasoning as ElementBadge's icons, see
// STYLE_GUIDE.md / ohaeng-project-summary.md for the caching bug this
// avoids.
export const ELEMENT_CHARACTER_SRC = {
  Wood: woodChar,
  Fire: fireChar,
  Earth: earthChar,
  Metal: metalChar,
  Water: waterChar,
};

/**
 * Full-body chibi mascot for an element — distinct from ElementBadge's
 * small circular icon. Used for the loading reveal, the /saju intro
 * section, ComingSoon, and a faint share-card watermark accent.
 */
export default function ElementCharacter({ element, size = 120, style }) {
  return (
    <img
      src={ELEMENT_CHARACTER_SRC[element]}
      alt=""
      style={{ width: size, height: size, objectFit: 'contain', ...style }}
    />
  );
}
