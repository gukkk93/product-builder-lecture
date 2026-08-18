import { useEffect, useMemo } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { calculateSaju, getTodayRelation } from '../utils/saju';
import { getFortuneLine } from '../data/fortuneTemplates';
import { useShareCardDownload } from '../hooks/useShareCardDownload';
import { buildShareUrl } from '../utils/shareUrl';
import { trackPageView } from '../utils/analytics';
import ElementBadge from '../components/ElementBadge';
import ShareCard from '../components/ShareCard';
import BirthDateForm from '../components/BirthDateForm';
import LoadingReveal from '../components/LoadingReveal';

const CATEGORIES = ['overall', 'love', 'wealth', 'health', 'comeback'];

export default function Result() {
  const { t, i18n } = useTranslation();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { cardRef: shareCardRef, download, downloading, canShareFiles } = useShareCardDownload();

  const birth = useMemo(() => {
    const y = Number(params.get('y'));
    const m = Number(params.get('m'));
    const d = Number(params.get('d'));
    const timeKnown = params.get('timeKnown') === '1';
    const h = timeKnown ? Number(params.get('h')) : null;
    const calendar = params.get('cal') === 'lunar' ? 'lunar' : 'solar';
    if (!y || !m || !d) return null;
    return { year: y, month: m, day: d, hour: h, calendar, timeKnown };
  }, [params]);

  const saju = useMemo(() => {
    if (!birth) return null;
    try {
      return calculateSaju(birth, birth.timeKnown);
    } catch {
      return null;
    }
  }, [birth]);

  const today = useMemo(() => (saju ? getTodayRelation(saju) : null), [saju]);

  useEffect(() => {
    if (saju) trackPageView('result');
  }, [saju]);

  const seedInput = birth ? `${birth.year}-${birth.month}-${birth.day}-${new Date().toDateString()}` : '';

  if (!birth || !saju || !today) {
    return (
      <main className="page">
        <div className="page-content">
          <h1>{t('result.todayHeading')}</h1>
          <p className="subtitle">{t('landing.subtitle')}</p>
          <BirthDateForm
            submitLabel={t('landing.submitFortune')}
            analyticsContext="result"
            onSubmit={(newParams) => navigate(`/result?${newParams.toString()}`)}
          />
        </div>
      </main>
    );
  }

  const lines = Object.fromEntries(
    CATEGORIES.map((cat) => [cat, getFortuneLine(i18n.language, today.relation, cat, seedInput)])
  );

  return (
    <LoadingReveal element={saju.dominantElement}>
    <main className="page">
      <div className="page-content">
        <Link to="/" className="back-link">{t('result.backLink')}</Link>

        <div className="card">
          <div className="result-meta">
            <ElementBadge element={saju.dominantElement} />
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            {t('result.zodiacLabel')}: {saju.zodiac}
          </div>
          {!birth.timeKnown && <div className="time-note">{t('result.timeUnknownNote')}</div>}

          <h2 style={{ marginTop: 24, marginBottom: 0, fontSize: 18 }}>{t('result.todayHeading')}</h2>
          <div className="fortune-list">
            {CATEGORIES.map((cat) => (
              <div className="fortune-row" key={cat}>
                <div className="fortune-row__label">{t(`categories.${cat}`)}</div>
                <div className="fortune-row__text">{lines[cat]}</div>
              </div>
            ))}
          </div>

          <div className="result-actions">
            <button
              className="button"
              onClick={() =>
                download('ohaeng-fortune.png', 'result', {
                  text: t('result.shareCaption'),
                  url: buildShareUrl('/result', { element: saju.dominantElement }),
                })
              }
              disabled={downloading}
            >
              {t(canShareFiles ? 'result.shareNative' : 'result.shareButton')}
            </button>
            <Link to={`/idol-match?${params.toString()}`} className="button secondary">
              {t('result.idolMatchCta')}
            </Link>
            <Link to={`/saju?${params.toString()}`} className="button secondary">
              {t('result.sajuCta')}
            </Link>
          </div>

          <p className="disclaimer">{t('result.disclaimer')}</p>
        </div>
      </div>

      <div className="share-card-offscreen">
        <ShareCard
          ref={shareCardRef}
          element={saju.dominantElement}
          zodiac={saju.zodiac}
          overallLine={lines.overall}
          comebackLine={lines.comeback}
        />
      </div>
    </main>
    </LoadingReveal>
  );
}
