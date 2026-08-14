import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { calculateSaju, getCompatibility } from '../utils/saju';
import { getCompatibilityCopy } from '../data/compatibilityTemplates';
import { useShareCardDownload } from '../hooks/useShareCardDownload';
import { trackPageView } from '../utils/analytics';
import ElementBadge from '../components/ElementBadge';
import BirthDateForm from '../components/BirthDateForm';
import CompatibilityShareCard from '../components/CompatibilityShareCard';

function paramsToBirth(params) {
  const y = Number(params.get('y'));
  const m = Number(params.get('m'));
  const d = Number(params.get('d'));
  const timeKnown = params.get('timeKnown') === '1';
  const h = timeKnown ? Number(params.get('h')) : null;
  const calendar = params.get('cal') === 'lunar' ? 'lunar' : 'solar';
  return { year: y, month: m, day: d, hour: h, calendar, timeKnown };
}

export default function Compatibility() {
  const { t, i18n } = useTranslation();
  const [myBirth, setMyBirth] = useState(null);
  const [theirBirth, setTheirBirth] = useState(null);
  const { cardRef: shareCardRef, download, downloading } = useShareCardDownload();

  const mySaju = useMemo(() => {
    if (!myBirth) return null;
    try {
      return calculateSaju(myBirth, myBirth.timeKnown);
    } catch {
      return null;
    }
  }, [myBirth]);

  const compatibility = useMemo(() => {
    if (!mySaju || !theirBirth) return null;
    try {
      return getCompatibility(mySaju, theirBirth, theirBirth.timeKnown);
    } catch {
      return null;
    }
  }, [mySaju, theirBirth]);

  const copy = compatibility
    ? getCompatibilityCopy(
        i18n.language,
        compatibility.relation,
        `${myBirth.year}-${myBirth.month}-${myBirth.day}-${theirBirth.year}-${theirBirth.month}-${theirBirth.day}`
      )
    : null;

  useEffect(() => {
    if (compatibility) trackPageView('compatibility');
  }, [compatibility]);

  function reset() {
    setMyBirth(null);
    setTheirBirth(null);
  }

  if (!mySaju) {
    return (
      <main className="page">
        <div className="page-content">
          <h1>{t('compatibility.title')}</h1>
          <p className="subtitle">{t('compatibility.subtitle')}</p>
          <div className="card" style={{ textAlign: 'left', marginBottom: 16 }}>
            <h2 style={{ marginTop: 0, fontSize: 16 }}>{t('compatibility.yourBirthdayHeading')}</h2>
            <BirthDateForm
              submitLabel={t('compatibility.continueLabel')}
              analyticsContext="compatibility-me"
              onSubmit={(params) => setMyBirth(paramsToBirth(params))}
            />
          </div>
        </div>
      </main>
    );
  }

  if (!compatibility) {
    return (
      <main className="page">
        <div className="page-content">
          <h1>{t('compatibility.title')}</h1>
          <p className="subtitle">{t('compatibility.subtitle')}</p>
          <div className="card" style={{ textAlign: 'left' }}>
            <h2 style={{ marginTop: 0, fontSize: 16 }}>{t('compatibility.theirBirthdayHeading')}</h2>
            <BirthDateForm
              submitLabel={t('compatibility.seeResultLabel')}
              analyticsContext="compatibility-them"
              onSubmit={(params) => setTheirBirth(paramsToBirth(params))}
            />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="page-content">
        <button type="button" className="back-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={reset}>
          {t('compatibility.backLink')}
        </button>

        <div className="card">
          <h2 style={{ marginTop: 0, marginBottom: 16, fontSize: 16 }}>{t('compatibility.resultHeading')}</h2>
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>{t('idolMatch.yourElement')}</div>
              <ElementBadge element={mySaju.dominantElement} size="small" />
            </div>
            <div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>{t('idolMatch.theirElement')}</div>
              <ElementBadge element={compatibility.otherSaju.dominantElement} size="small" />
            </div>
          </div>

          <strong style={{ color: 'var(--accent)', fontSize: 20 }}>{copy.tier}</strong>
          <p style={{ fontSize: 15, lineHeight: 1.6 }}>{copy.line}</p>

          <div className="result-actions">
            <button className="button" onClick={() => download('ohaeng-compatibility.png', 'compatibility')} disabled={downloading}>
              {t('result.shareButton')}
            </button>
          </div>

          <p className="disclaimer">{t('compatibility.disclaimer')}</p>
        </div>
      </div>

      <div className="share-card-offscreen">
        <CompatibilityShareCard
          ref={shareCardRef}
          myElement={mySaju.dominantElement}
          theirElement={compatibility.otherSaju.dominantElement}
          tier={copy.tier}
          line={copy.line}
        />
      </div>
    </main>
  );
}
