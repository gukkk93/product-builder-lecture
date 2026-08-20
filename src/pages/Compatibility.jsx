import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { calculateSaju, getCompatibility, getCompatibilityScore } from '../utils/saju';
import { getCompatibilityCopy } from '../data/compatibilityTemplates';
import { getSajuStrengthInsight } from '../data/sajuStrengthTemplates';
import { useShareCardDownload } from '../hooks/useShareCardDownload';
import { buildShareUrl, birthParams } from '../utils/shareUrl';
import { trackPageView } from '../utils/analytics';
import ElementBadge from '../components/ElementBadge';
import BirthDateForm from '../components/BirthDateForm';
import CompatibilityShareCard from '../components/CompatibilityShareCard';
import LoadingReveal from '../components/LoadingReveal';
import InsightSection from '../components/InsightSection';

function paramsToBirth(params, prefix = '') {
  const y = Number(params.get(`${prefix}y`));
  const m = Number(params.get(`${prefix}m`));
  const d = Number(params.get(`${prefix}d`));
  const timeKnown = params.get(`${prefix}timeKnown`) === '1';
  const h = timeKnown ? Number(params.get(`${prefix}h`)) : null;
  const calendar = params.get(`${prefix}cal`) === 'lunar' ? 'lunar' : 'solar';
  return { year: y, month: m, day: d, hour: h, calendar, timeKnown };
}

/** null unless year/month/day are all present — lets a shared link (which
 * carries both birthdates in the URL) reproduce the result on load, while
 * a plain visit to /compatibility still starts at the empty birth-entry form. */
function birthFromParamsIfComplete(params, prefix = '') {
  const birth = paramsToBirth(params, prefix);
  return birth.year && birth.month && birth.day ? birth : null;
}

const RELATIONSHIPS = ['friend', 'partner', 'some', 'family', 'coworker'];

export default function Compatibility() {
  const { t, i18n } = useTranslation();
  const [params] = useSearchParams();
  // A menu entry (e.g. "썸궁합") can pass ?relationship=some to skip the
  // relationship-picker step entirely, since the entry point already
  // implies the relationship.
  const presetRelationship = RELATIONSHIPS.includes(params.get('relationship'))
    ? params.get('relationship')
    : null;
  // A shared link carries both birthdates (plus their name/relationship) in
  // the URL so the result reproduces on load — see buildShareUrl's
  // extraParams usage below. A plain visit has none of these and falls
  // through to null, same as before.
  const [myBirth, setMyBirth] = useState(() => birthFromParamsIfComplete(params));
  const [theirName, setTheirName] = useState(() => params.get('tname') || '');
  const [theirRelationship, setTheirRelationship] = useState(() => {
    const shared = params.get('relationship');
    return RELATIONSHIPS.includes(shared) ? shared : presetRelationship || 'friend';
  });
  const [theirBirth, setTheirBirth] = useState(() => birthFromParamsIfComplete(params, 't'));
  const { cardRef: shareCardRef, download, downloading, saveImage, savingImage, canShareFiles } = useShareCardDownload();

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
    ? {
        subheading: t(`matchCommon.explanation.${compatibility.relation}.subheading`),
        text: t(`matchCommon.explanation.${compatibility.relation}.text`, {
          my: t(`elements.${mySaju.dominantElement}`),
          other: t(`elements.${compatibility.otherSaju.dominantElement}`),
        }),
      }
    : null;

  // sajuStrengthTemplates.js needs both people's dayGanStrength, which only
  // a two-person page like this one has — that's why it's wired in here
  // rather than the (solo) /saju page.
  const strengthInsight = compatibility
    ? getSajuStrengthInsight(i18n.language, mySaju.dayGanStrength, compatibility.otherSaju.dayGanStrength)
    : null;

  const insightSections = compatibility && copy
    ? [
        { title: t('matchCommon.insightTitles.explanation'), subheading: explanation.subheading, text: explanation.text, locked: false },
        { title: t('matchCommon.insightTitles.goodFit'), subheading: copy.goodFit.subheading, text: copy.goodFit.text, locked: false },
        { title: t('matchCommon.insightTitles.watchFor'), subheading: copy.watchFor.subheading, text: copy.watchFor.text, locked: true },
        { title: t('matchCommon.insightTitles.strengthMatch'), text: strengthInsight, locked: true },
      ]
    : null;

  const score = compatibility && theirBirth
    ? getCompatibilityScore(
        compatibility.relation,
        `${theirBirth.year}-${theirBirth.month}-${theirBirth.day}`,
        mySaju.dayGanStrength,
        compatibility.otherSaju.dayGanStrength
      )
    : null;

  useEffect(() => {
    if (compatibility) trackPageView('compatibility');
  }, [compatibility]);

  function reset() {
    setMyBirth(null);
    setTheirName('');
    setTheirRelationship(presetRelationship || 'friend');
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
              remember
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

            {!presetRelationship && (
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
            )}

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
    <LoadingReveal element={mySaju.dominantElement}>
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
          {insightSections && <InsightSection sections={insightSections} product="compatibility" />}

          <div className="result-actions">
            <button
              className="button"
              onClick={() =>
                download('ohaeng-compatibility.png', 'compatibility', {
                  text: t('compatibility.shareCaption'),
                  url: buildShareUrl('/compatibility', {
                    ...birthParams(myBirth),
                    ...birthParams(theirBirth, 't'),
                    tname: theirName,
                    relationship: theirRelationship,
                    element: mySaju.dominantElement,
                    score,
                    name: displayName,
                    tier: copy.tier,
                  }),
                })
              }
              disabled={downloading}
            >
              {t(canShareFiles ? 'result.shareNative' : 'result.shareButton')}
            </button>
            <button
              className="button secondary"
              onClick={() => saveImage('ohaeng-compatibility.png', 'compatibility')}
              disabled={savingImage}
            >
              {t('result.saveImageButton')}
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
          subheading={explanation.subheading}
          text={explanation.text}
        />
      </div>
    </main>
    </LoadingReveal>
  );
}
