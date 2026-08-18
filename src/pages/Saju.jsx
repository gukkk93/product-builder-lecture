import { useEffect, useMemo } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { calculateSaju } from '../utils/saju';
import { getSajuProfile, getDayMasterLine, getDomainInsight } from '../data/sajuProfileTemplates';
import { useShareCardDownload } from '../hooks/useShareCardDownload';
import { buildShareUrl } from '../utils/shareUrl';
import { trackPageView } from '../utils/analytics';
import ElementBadge from '../components/ElementBadge';
import PillarGrid from '../components/PillarGrid';
import ElementDistribution from '../components/ElementDistribution';
import BirthDateForm from '../components/BirthDateForm';
import SajuShareCard from '../components/SajuShareCard';
import LoadingReveal from '../components/LoadingReveal';
import ElementCharacter from '../components/ElementCharacter';
import InsightSection from '../components/InsightSection';

const DOMAINS = ['romanceStyle', 'wealthStyle', 'careerStyle', 'healthStyle'];

export default function Saju() {
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

  useEffect(() => {
    if (saju) trackPageView('saju');
  }, [saju]);

  // Personalization only (see BirthDateForm's collectProfile) — neither
  // value feeds into the saju calculation above.
  const name = params.get('name') || '';
  const gender = params.get('gender') || '';

  if (!birth || !saju) {
    return (
      <main className="page">
        <div className="page-content">
          <h1>{t('saju.title')}</h1>
          <p className="subtitle">{t('saju.subtitle')}</p>
          <BirthDateForm
            submitLabel={t('landing.submitSaju')}
            analyticsContext="saju"
            collectProfile
            onSubmit={(newParams) => navigate(`/saju?${newParams.toString()}`)}
          />
        </div>
      </main>
    );
  }

  const profile = getSajuProfile(i18n.language, saju.dominantElement);
  const dayMasterLine = getDayMasterLine(i18n.language, saju.dayGanElement);
  const domainSections = DOMAINS.map((domain) =>
    getDomainInsight(i18n.language, domain, saju.dominantElement, saju.dayGanStrength)
  );

  return (
    <LoadingReveal element={saju.dominantElement}>
    <main className="page">
      <div className="page-content">
        <Link to="/" className="back-link">{t('saju.backLink')}</Link>

        <h1>{name ? t('saju.titleWithName', { name }) : t('saju.title')}</h1>
        <p className="subtitle">{t('saju.subtitle')}</p>

        <div className="card" style={{ marginBottom: 16 }}>
          <ElementCharacter element={saju.dominantElement} size={100} />
          <p style={{ margin: '8px 0 16px', fontSize: 13, color: 'var(--text-muted)' }}>
            {t('saju.characterIntro', { element: t(`elements.${saju.dominantElement}`) })}
          </p>
          <ElementBadge element={saju.dominantElement} />
          {gender && (
            <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>
              {t(`matchCommon.genderShort.${gender}`)}
            </div>
          )}
          {!birth.timeKnown && <div className="time-note">{t('saju.timeUnknownNote')}</div>}

          <h2 style={{ marginTop: 24, marginBottom: 12, fontSize: 16, textAlign: 'left' }}>
            {t('saju.pillarsHeading')}
          </h2>
          <PillarGrid pillars={saju.pillars} />
        </div>

        <div className="card" style={{ marginBottom: 16, textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <h2 style={{ margin: 0, fontSize: 16 }}>{t('saju.dayMasterHeading')}</h2>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: 'var(--accent)',
                background: 'color-mix(in srgb, var(--accent) 15%, transparent)',
                padding: '4px 10px',
                borderRadius: 10,
              }}
            >
              {t(`saju.strengthLabel.${saju.dayGanStrength}`)}
            </span>
          </div>
          <p style={{ margin: '0 0 12px', fontSize: 12, color: 'var(--text-muted)' }}>{t('saju.dayMasterExplain')}</p>
          <p style={{ fontSize: 15, lineHeight: 1.7 }}>{dayMasterLine}</p>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-muted)' }}>{t(`saju.strengthBlurb.${saju.dayGanStrength}`)}</p>
        </div>

        <div className="card" style={{ marginBottom: 16, textAlign: 'left' }}>
          <h2 style={{ marginTop: 0, marginBottom: 16, fontSize: 16 }}>{t('saju.distributionHeading')}</h2>
          <ElementDistribution counts={saju.elementCounts} />
        </div>

        <div className="card" style={{ textAlign: 'left' }}>
          <h2 style={{ marginTop: 0, marginBottom: 4, fontSize: 16 }}>{t('saju.personalityHeading')}</h2>
          <h3 style={{ margin: '4px 0 12px', fontSize: 18, color: 'var(--accent)' }}>{profile.title}</h3>
          {profile.paragraphs.map((p) => (
            <p key={p.slice(0, 20)} style={{ fontSize: 15, lineHeight: 1.7 }}>{p}</p>
          ))}

          <div className="result-actions">
            <button
              className="button"
              onClick={() =>
                download('ohaeng-saju.png', 'saju', {
                  text: t('saju.shareCaption'),
                  url: buildShareUrl('/saju', { element: saju.dominantElement, tier: profile.title, name }),
                })
              }
              disabled={downloading}
            >
              {t(canShareFiles ? 'result.shareNative' : 'result.shareButton')}
            </button>
          </div>

          <p className="disclaimer">{t('saju.disclaimer')}</p>
        </div>

        <div className="card" style={{ marginTop: 16, textAlign: 'left' }}>
          <h2 style={{ marginTop: 0, marginBottom: 4, fontSize: 16 }}>{t('saju.domainHeading')}</h2>
          <InsightSection
            element={saju.dominantElement}
            intro={t('saju.domainIntro', { element: t(`elements.${saju.dominantElement}`) })}
            sections={domainSections}
          />
        </div>
      </div>

      <div className="share-card-offscreen">
        <SajuShareCard
          ref={shareCardRef}
          element={saju.dominantElement}
          strength={saju.dayGanStrength}
          profileTitle={profile.title}
          profileLine={profile.paragraphs[0]}
        />
      </div>
    </main>
    </LoadingReveal>
  );
}
