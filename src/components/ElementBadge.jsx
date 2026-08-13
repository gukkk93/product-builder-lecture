import { useTranslation } from 'react-i18next';

export const ELEMENT_ICON_SRC = {
  Wood: '/icons/elements/wood.png',
  Fire: '/icons/elements/fire.png',
  Earth: '/icons/elements/earth.png',
  Metal: '/icons/elements/metal.png',
  Water: '/icons/elements/water.png',
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
