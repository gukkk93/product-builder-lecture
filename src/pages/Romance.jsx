import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { calculateSaju, getCompatibility, getCompatibilityScore } from '../utils/saju';
import { getRomanceCopy, getRomanceClosing } from '../data/romanceTemplates';
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

/** null unless year/month/day are all present — see Compatibility.jsx's
 * identical helper for why. */
function birthFromParamsIfComplete(params, prefix = '') {
  const birth = paramsToBirth(params, prefix);
  return birth.year && birth.month && birth.day ? birth : null;
}

const SITUATIONS = ['reunion', 'crush', 'theirFeelings'];

/**
 * Same mechanic as Compatibility.jsx (getCompatibility/getCompatibilityScore
 * reused as-is), just with a `situation` instead of a picked relationship
 * type — the situation itself implies the relationship, so that step is
 * skipped. Content comes from romanceTemplates.js instead of
 * compatibilityTemplates.js.
 */
export default function Romance() {
  const { t, i18n } = useTranslation();
  const [params] = useSearchParams();
  const situation = SITUATIONS.includes(params.get('situation')) ? params.get('situation') : 'reunion';
  const [myBirth, setMyBirth] = useState(() => birthFromParamsIfComplete(params));
  const [theirName, setTheirName] = useState(() => params.get('tname') || '');
  const [theirBirth, setTheirBirth] = useState(() => birthFromParamsIfComplete(params, 't'));
  const { cardRef: shareCardRef, download, downloading, saveImage, savingImage, canShareFiles } = useShareCardDownload();

  const displayName = theirName.trim() || t('compatibility.theirElement');

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
    ? getRomanceCopy(
        i18n.language,
        situation,
        compatibility.relation,
        `${myBirth.year}-${myBirth.month}-${myBirth.day}-${theirBirth.year}-${theirBirth.month}-${theirBirth.day}`
      )
    : null;

  const closing = getRomanceClosing(i18n.language, situation);

  const explanation = compatibility
    ? {
        subheading: t(`matchCommon.explanation.${compatibility.relation}.subheading`),
        text: t(`matchCommon.explanation.${compatibility.relation}.text`, {
          my: t(`elements.${mySaju.dominantElement}`),
          other: t(`elements.${compatibility.otherSaju.dominantElement}`),
        }),
      }
    : null;

  const situationalTitles = t(`romance.${situation}.situationalTitles`, { returnObjects: true });

  // Matches the idol/drama match "3 of 6-7 free" ratio: explanation, goodFit,
  // and the first situational moment (the earliest-stage one for each
  // situation) stay free as a teaser; the rest are locked.
  const insightSections = compatibility && copy
    ? [
        { title: t('matchCommon.insightTitles.explanation'), subheading: explanation.subheading, text: explanation.text, locked: false },
        { title: t('matchCommon.insightTitles.goodFit'), subheading: copy.goodFit.subheading, text: copy.goodFit.text, locked: false },
        ...copy.situational.map((text, i) => ({ title: situationalTitles[i], text, locked: i !== 0 })),
        { title: t('matchCommon.insightTitles.watchFor'), subheading: copy.watchFor.subheading, text: copy.watchFor.text, locked: true },
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
    if (compatibility) trackPageView(`romance-${situation}`);
  }, [compatibility, situation]);

  function reset() {
    setMyBirth(null);
    setTheirName('');
    setTheirBirth(null);
  }

  if (!mySaju) {
    return (
      <main className="page">
        <div className="page-content">
          <h1>{t(`romance.${situation}.title`)}</h1>
          <p className="subtitle">{t(`romance.${situation}.subtitle`)}</p>
          <div className="card" style={{ textAlign: 'left', marginBottom: 16 }}>
            <h2 style={{ marginTop: 0, fontSize: 16 }}>{t('compatibility.yourBirthdayHeading')}</h2>
            <BirthDateForm
              submitLabel={t('compatibility.continueLabel')}
              analyticsContext={`romance-${situation}-me`}
              remember
              onSubmit={(p) => setMyBirth(paramsToBirth(p))}
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
          <h1>{t(`romance.${situation}.title`)}</h1>
          <p className="subtitle">{t(`romance.${situation}.subtitle`)}</p>
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

            <BirthDateForm
              submitLabel={t('compatibility.seeResultLabel')}
              analyticsContext={`romance-${situation}-them`}
              onSubmit={(p) => setTheirBirth(paramsToBirth(p))}
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
            {t(`romance.${situation}.badge`)}
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
          {closing && (
            <p style={{ fontSize: 15, lineHeight: 1.6, fontWeight: 700, color: 'var(--accent)' }}>{closing}</p>
          )}
          {insightSections && <InsightSection sections={insightSections} product="romance" />}

          <div className="result-actions">
            <button
              className="button"
              onClick={() =>
                download(`ohaeng-romance-${situation}.png`, `romance-${situation}`, {
                  text: t(`romance.${situation}.shareCaption`),
                  url: buildShareUrl(`/romance?situation=${situation}`, {
                    ...birthParams(myBirth),
                    ...birthParams(theirBirth, 't'),
                    tname: theirName,
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
              onClick={() => saveImage(`ohaeng-romance-${situation}.png`, `romance-${situation}`)}
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
          relationshipLabel={t(`romance.${situation}.badge`)}
          score={score}
          tier={copy.tier}
          line={copy.line}
        />
      </div>
    </main>
    </LoadingReveal>
  );
}
