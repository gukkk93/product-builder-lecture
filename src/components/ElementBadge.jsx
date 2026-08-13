import { useTranslation } from 'react-i18next';

const ELEMENT_ICON = {
  Wood: '🌳',
  Fire: '🔥',
  Earth: '⛰️',
  Metal: '⚙️',
  Water: '💧',
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
      <span className="element-badge__icon">{ELEMENT_ICON[element]}</span>
      <div className="element-badge__text">
        <strong>{t(`elements.${element}`)}</strong>
        {size === 'large' && <p>{t(`elementBlurb.${element}`)}</p>}
      </div>
    </div>
  );
}
