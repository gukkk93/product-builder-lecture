import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ElementCharacter from '../components/ElementCharacter';
import { ELEMENTS } from '../utils/saju';

export default function ComingSoon() {
  const { t } = useTranslation();
  // No user birthday in this context, so there's no "real" element to show
  // — pick one at random each time the page renders instead of a static
  // 🚧 emoji.
  const element = useMemo(() => ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)], []);

  return (
    <main className="page">
      <div className="page-content">
        <div className="card">
          <ElementCharacter element={element} size={120} style={{ margin: '0 auto 8px' }} />
          <h1>{t('comingSoon.title')}</h1>
          <p className="subtitle">{t('comingSoon.body')}</p>
          <Link to="/" className="button">{t('comingSoon.backHome')}</Link>
        </div>
      </div>
    </main>
  );
}
