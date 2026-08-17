import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { calculateSaju, getCompatibility, getCompatibilityScore } from '../utils/saju';
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

const RELATIONSHIPS = ['friend', 'partner', 'crush', 'family', 'coworker'];

export default function Compatibility() {
  const { t, i18n } = useTranslation();
  const [myBirth, setMyBirth] = useState(null);
  const [theirName, setTheirName] = useState('');
  const [theirRelationship, setTheirRelationship] = useState('friend');
  const [theirBirth, setTheirBirth] = useState(null);
  const { cardRef: shareCardRef, download, downloading, canShareFiles } = useShareCardDownload();

  const displayName = theirName.trim() || t('compatibility.theirElement');
  const relationshipLabel = t(`compatibility.relationship.${theirRelationship}`);

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

  const explanation = compatibility
    ? t(`matchCommon.explanation.${compatibility.relation}`, {
        my: t(`elements.${mySaju.dominantElement}`),
        other: t(`elements.${compatibility.otherSaju.dominantElement}`),
      })
    : null;

  const score = compatibility && theirBirth
    ? getCompatibilityScore(compatibility.relation, `${theirBirth.year}-${theirBirth.month}-${theirBirth.day}`)
    : null;

  useEffect(() => {
    if (compatibility) trackPageView('compatibility');
  }, [compatibility]);

  function reset() {
    setMyBirth(null);
    setTheirName('');
    setTheirRelationship('friend');
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

            <div className="field-group">
              <label>{t('compatibility.theirNameLabel')}</label>
              <input
                type="text"
                value={theirName}
                onChange={(e) => setTheirName(e.target.value)}
                placeholder={t('compatibility.theirNamePlaceholder')}
                style={{ width: '100%' }}
              />
            </div>

            <div className="field-group">
              <label>{t('compatibility.relationshipLabel')}</label>
              <select
                value={theirRelationship}
                onChange={(e) => setTheirRelationship(e.target.value)}
                style={{ width: '100%' }}
              >
                {RELATIONSHIPS.map((rel) => (
                  <option key={rel} value={rel}>{t(`compatibility.relationship.${rel}`)}</option>
                ))}
              </select>
            </div>

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
          <h2 style={{ marginTop: 0, marginBottom: 4, fontSize: 16 }}>
            {t('compatibility.youAndThemHeading', { name: displayName })}
          </h2>
          <p style={{ marginTop: 0, marginBottom: 16, fontSize: 13, color: 'var(--text-muted)' }}>
            {relationshipLabel}
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>{t('idolMatch.yourElement')}</div>
              <ElementBadge element={mySaju.dominantElement} size="small" />
            </div>
            <div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 8 }}>{displayName}</div>
              <ElementBadge element={compatibility.otherSaju.dominantElement} size="small" />
            </div>
          </div>

          <div style={{ fontSize: 34, fontWeight: 800, color: 'var(--accent)', lineHeight: 1.1 }}>{score}%</div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 12 }}>{t('matchCommon.scoreLabel')}</div>

          <strong style={{ color: 'var(--accent)', fontSize: 20 }}>{copy.tier}</strong>
          <p style={{ fontSize: 15, lineHeight: 1.6 }}>{copy.line}</p>
          {explanation && (
            <p style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--text-muted)', fontStyle: 'italic' }}>{explanation}</p>
          )}

          <div className="result-actions">
            <button
              className="button"
              onClick={() => download('ohaeng-compatibility.png', 'compatibility', `${t('app.name')} — ${t('app.tagline')}`)}
              disabled={downloading}
            >
              {t(canShareFiles ? 'result.shareNative' : 'result.shareButton')}
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
          theirName={displayName}
          relationshipLabel={relationshipLabel}
          score={score}
          tier={copy.tier}
          line={copy.line}
        />
      </div>
    </main>
  );
}
