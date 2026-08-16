import { Link } from 'react-router-dom';
import MenuIcon from './MenuIcon';
import { trackMenuClick } from '../utils/analytics';

/**
 * One row in the home screen menu. `icon` picks a simple line-icon concept
 * mark (see MenuIcon.jsx) — the Four Symbols animal icons are reserved for
 * actual oheng data (badges, avatars, share cards), not decoration here.
 * `status: 'soon'` renders the row dimmed and non-interactive instead of
 * linking anywhere.
 */
export default function MenuListItem({ icon, title, description, to, status = 'live', analyticsKey }) {
  const isLive = status === 'live';

  const content = (
    <>
      <div className="menu-item__icon-ring">
        <MenuIcon name={icon} />
      </div>
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
