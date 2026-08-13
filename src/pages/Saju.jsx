import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { calculateSaju } from '../utils/saju';
import { getSajuProfile, getDayMasterLine } from '../data/sajuProfileTemplates';
import ElementBadge from '../components/ElementBadge';
import PillarGrid from '../components/PillarGrid';
import ElementDistribution from '../components/ElementDistribution';

export default function Saju() {
  const { t, i18n } = useTranslation();
  const [params] = useSearchParams();

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

  if (!birth || !saju) {
    return (
      <main className="page">
        <div className="page-content">
          <div className="card">
            <p>{t('saju.needBirthday')}</p>
            <Link to="/" className="button" style={{ marginTop: 16, display: 'inline-block' }}>
              {t('saju.goToLanding')}
            </Link>
          </div>
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
          <h2 style={{ marginTop: 0, marginBottom: 8, fontSize: 16 }}>{t('saju.dayMasterHeading')}</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7 }}>{dayMasterLine}</p>
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
