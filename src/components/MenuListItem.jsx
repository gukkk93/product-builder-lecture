import { Link } from 'react-router-dom';
import { ELEMENT_GRADIENT } from './ShareCard';
import { ELEMENT_ICON_SRC } from './ElementBadge';
import { trackMenuClick } from '../utils/analytics';

/**
 * One row in the home screen menu. `element` picks both the Four Symbols
 * icon and the gradient ring behind it (see STYLE_GUIDE.md — gradient +
 * illustrated icon, not a flat pastel circle). `status: 'soon'` renders the
 * row dimmed and non-interactive instead of linking anywhere.
 */
export default function MenuListItem({ element, title, description, to, status = 'live', analyticsKey }) {
  const isLive = status === 'live';
  const [gradFrom, gradTo] = ELEMENT_GRADIENT[element];

  const icon = (
    <div className="menu-item__icon-ring" style={{ background: `linear-gradient(160deg, ${gradFrom}, ${gradTo})` }}>
      <img src={ELEMENT_ICON_SRC[element]} alt="" />
    </div>
  );

  const content = (
    <>
      {icon}
      <div className="menu-item__text">
        <div className="menu-item__title">{title}</div>
        <div className="menu-item__desc">{description}</div>
      </div>
      {isLive ? <span className="menu-item__arrow">→</span> : <span className="menu-item__soon-badge">Soon</span>}
    </>
  );

  if (!isLive) {
    return (
      <div className="menu-item soon" aria-disabled="true">
        {content}
      </div>
    );
  }

  return (
    <Link to={to} className="menu-item" onClick={() => trackMenuClick(analyticsKey || to)}>
      {content}
    </Link>
  );
}
