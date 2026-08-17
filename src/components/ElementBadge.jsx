import { useTranslation } from 'react-i18next';
import woodIcon from '../assets/icons/elements/wood.png';
import fireIcon from '../assets/icons/elements/fire.png';
import earthIcon from '../assets/icons/elements/earth.png';
import metalIcon from '../assets/icons/elements/metal.png';
import waterIcon from '../assets/icons/elements/water.png';

// Imported (not referenced from public/) so Vite fingerprints the filename
// by content hash — otherwise editing these PNGs in place wouldn't bust
// browser/CDN caches, since the URL never changes.
export const ELEMENT_ICON_SRC = {
  Wood: woodIcon,
  Fire: fireIcon,
  Earth: earthIcon,
  Metal: metalIcon,
  Water: waterIcon,
};

const ELEMENT_VAR = {
  Wood: '--el-wood',
  Fire: '--el-fire',
  Earth: '--el-earth',
  Metal: '--el-metal',
  Water: '--el-water',
};

export default function ElementBadge({ element, size = 'large' }) {
  const { t } = useTranslation();
  const color = `var(${ELEMENT_VAR[element]})`;

  return (
    <div
      className={`element-badge element-badge--${size}`}
      style={{
        '--badge-color': color,
      }}
    >
      <img className="element-badge__icon" src={ELEMENT_ICON_SRC[element]} alt="" />
      <div className="element-badge__text">
        <strong>{t(`elements.${element}`)}</strong>
        {size === 'large' && <p>{t(`elementBlurb.${element}`)}</p>}
      </div>
    </div>
  );
}
