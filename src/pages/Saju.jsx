import { useEffect, useMemo } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { calculateSaju, getDaeun, getLifeScoreTimeline, getShensha, getNobleman, getYearRelation, getSamjae } from '../utils/saju';
import { getSajuProfile, getDayMasterLine, getDomainChapter } from '../data/sajuProfileTemplates';
import { getTenGodChapter } from '../data/sajuTenGodTemplates';
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
import DaeunTable from '../components/DaeunTable';
import LifeScoreChart from '../components/LifeScoreChart';
import PremiumLock from '../components/PremiumLock';

const DOMAINS = ['romanceStyle', 'wealthStyle', 'careerStyle', 'healthStyle'];

export default function Saju() {
  const { t, i18n } = useTranslation();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { cardRef: shareCardRef, download, downloading, saveImage, savingImage, canShareFiles } = useShareCardDownload();

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
            remember
            onSubmit={(newParams) => navigate(`/saju?${newParams.toString()}`)}
          />
        </div>
      </main>
    );
  }

  const profile = getSajuProfile(i18n.language, saju.dominantElement);
  const dayMasterLine = getDayMasterLine(i18n.language, saju.dayGanElement);
  // Major Luck Cycles need gender for direction (forward/backward) — unlike
  // name, this one isn't just cosmetic, so we only compute it when the
  // optional gender field was actually filled in.
  const daeun = gender ? getDaeun(birth, birth.timeKnown, gender, 8) : null;
  // Same gender requirement as daeun above, since it's built directly on top of it.
  const lifeScore = gender ? getLifeScoreTimeline(birth, birth.timeKnown, gender, saju.dominantElement) : null;

  // Each domain chapter is now [총운, sub-topic x3] — every domain's 총운
  // (index 0) stays free as the teaser for that chapter; the 3 subtopics
  // stay locked regardless of domain. wealthStyle's "timing" subtopic is
  // the only one that needs daeun (for "which decade am I in right now"),
  // so it's the only chapter call that gets it passed in — every other
  // domain is derivable from saju alone.
  const domainChapters = DOMAINS.map((domain) => {
    const chapter = getDomainChapter(i18n.language, domain, saju, domain === 'wealthStyle' ? daeun : null);
    return {
      ...chapter,
      sections: chapter.sections.map((section, i) => ({ ...section, locked: i !== 0 })),
    };
  });

  // Ten God / Twelve Stage chapter — new, first item (temperament) free as
  // this chapter's own teaser, matching every other chapter's "first item
  // free" pattern; the remaining 3 subtopics stay locked (see
  // sajuTenGodTemplates.js). Gender only affects the officer-category
  // relationships subtopic; every other subtopic is gender-independent.
  const tenGodChapter = getTenGodChapter(i18n.language, saju, gender);
  tenGodChapter.sections = tenGodChapter.sections.map((section, i) => ({ ...section, locked: i !== 0 }));

  // Shensha/nobleman/year-luck/samjae: calculation-only content (no
  // personality copy written yet), so each gets just a short one-line
  // preview behind its own lock rather than a full paragraph.
  const currentYear = new Date().getFullYear();
  const shensha = getShensha(saju, i18n.language);
  const nobleman = getNobleman(saju, i18n.language);
  const yearLuck = getYearRelation(saju, currentYear);
  const samjae = getSamjae(saju, currentYear);

  const extraSections = [
    {
      title: t('saju.shenshaTitle'),
      text: shensha.length > 0
        ? t('saju.shenshaFoundNote', { labels: shensha.map((s) => s.label).join('·') })
        : t('saju.shenshaNoneNote'),
      locked: true,
    },
    {
      title: t('saju.noblemanTitle'),
      text: t(nobleman.hasNobleman ? 'saju.noblemanFoundNote' : 'saju.noblemanNoneNote', { label: nobleman.label }),
      locked: true,
    },
    {
      title: t('saju.yearLuckTitle', { year: currentYear }),
      text: t(`saju.yearLuckOneLiner.${yearLuck.relation}`, { year: currentYear }),
      locked: true,
    },
    {
      title: t('saju.samjaeTitle'),
      text: t(samjae.isCurrent ? 'saju.samjaeCurrentNote' : 'saju.samjaeUpcomingNote', {
        start: samjae.years[0],
        end: samjae.years[2],
      }),
      locked: true,
    },
  ];

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
          <PillarGrid pillars={saju.pillars} dayGan={saju.dayGan} />
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
          <h2 style={{ marginTop: 0, marginBottom: 4, fontSize: 16 }}>{t('saju.daeunHeading')}</h2>
          {daeun ? (
            <>
              <p style={{ margin: '0 0 12px', fontSize: 12, color: 'var(--text-muted)' }}>{t('saju.daeunExplain')}</p>
              <DaeunTable daeun={daeun} />
            </>
          ) : (
            <p style={{ margin: 0, fontSize: 13, color: 'var(--text-muted)' }}>{t('saju.daeunNeedGender')}</p>
          )}
        </div>

        <div className="card" style={{ marginBottom: 16, textAlign: 'left' }}>
          <h2 style={{ marginTop: 0, marginBottom: 4, fontSize: 16 }}>{t('saju.lifeScoreHeading')}</h2>
          {lifeScore ? (
            <>
              <p style={{ margin: '0 0 12px', fontSize: 12, color: 'var(--text-muted)' }}>{t('saju.lifeScoreExplain')}</p>
              <PremiumLock product="saju">
                <LifeScoreChart periods={lifeScore.periods} />
              </PremiumLock>
            </>
          ) : (
            <p style={{ margin: 0, fontSize: 13, color: 'var(--text-muted)' }}>{t('saju.lifeScoreNeedGender')}</p>
          )}
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
            <button
              className="button secondary"
              onClick={() => saveImage('ohaeng-saju.png', 'saju')}
              disabled={savingImage}
            >
              {t('result.saveImageButton')}
            </button>
          </div>

          <p className="disclaimer">{t('saju.disclaimer')}</p>
        </div>

        <div className="card" style={{ marginTop: 16, marginBottom: 16, textAlign: 'left' }}>
          <h2 style={{ marginTop: 0, marginBottom: 4, fontSize: 16 }}>{t('saju.domainHeading')}</h2>
          <p style={{ margin: 0, fontSize: 13, color: 'var(--text-muted)' }}>
            {t('saju.domainIntro', { element: t(`elements.${saju.dominantElement}`) })}
          </p>
        </div>

        {domainChapters.map((chapter, i) => (
          <div className="card" key={DOMAINS[i]} style={{ marginBottom: 16, textAlign: 'left' }}>
            <h2 style={{ marginTop: 0, marginBottom: 4, fontSize: 16 }}>{chapter.title}</h2>
            <InsightSection sections={chapter.sections} product="saju" />
          </div>
        ))}

        <div className="card" style={{ marginBottom: 16, textAlign: 'left' }}>
          <h2 style={{ marginTop: 0, marginBottom: 4, fontSize: 16 }}>{tenGodChapter.title}</h2>
          <p style={{ margin: '0 0 12px', fontSize: 12, color: 'var(--text-muted)' }}>{tenGodChapter.intro}</p>
          <InsightSection sections={tenGodChapter.sections} product="saju" />
        </div>

        <div className="card" style={{ textAlign: 'left' }}>
          <h2 style={{ marginTop: 0, marginBottom: 4, fontSize: 16 }}>{t('saju.extraHeading')}</h2>
          <InsightSection element={saju.dominantElement} intro={t('saju.extraIntro')} sections={extraSections} product="saju" />
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
