import { useEffect, useMemo } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { calculateSaju } from '../utils/saju';
import { getSajuProfile, getDayMasterLine } from '../data/sajuProfileTemplates';
import { trackPageView } from '../utils/analytics';
import ElementBadge from '../components/ElementBadge';
import PillarGrid from '../components/PillarGrid';
import ElementDistribution from '../components/ElementDistribution';
import BirthDateForm from '../components/BirthDateForm';

export default function Saju() {
  const { t, i18n } = useTranslation();
  const [params] = useSearchParams();
  const navigate = useNavigate();

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

  if (!birth || !saju) {
    return (
      <main className="page">
        <div className="page-content">
          <h1>{t('saju.title')}</h1>
          <p className="subtitle">{t('saju.subtitle')}</p>
          <BirthDateForm
            submitLabel={t('landing.submitSaju')}
            analyticsContext="saju"
            onSubmit={(newParams) => navigate(`/saju?${newParams.toString()}`)}
          />
        </div>
      </main>
    );
  }

  const profile = getSajuProfile(i18n.language, saju.dominantElement);
  const dayMasterLine = getDayMasterLine(i18n.language, saju.dayGanElement);

  return (
    <main className="page">
      <div className="page-content">
        <Link to="/" className="back-link">{t('saju.backLink')}</Link>

        <h1>{t('saju.title')}</h1>
        <p className="subtitle">{t('saju.subtitle')}</p>

        <div className="card" style={{ marginBottom: 16 }}>
          <ElementBadge element={saju.dominantElement} />
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
          <p className="disclaimer">{t('saju.disclaimer')}</p>
        </div>
      </div>
    </main>
  );
}
