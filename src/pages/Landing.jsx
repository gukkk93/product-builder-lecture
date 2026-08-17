import { useTranslation } from 'react-i18next';
import MenuListItem from '../components/MenuListItem';

export default function Landing() {
  const { t } = useTranslation();

  return (
    <main className="page">
      <div className="page-content">
        <h1>{t('landing.title')}</h1>
        <p className="subtitle">{t('landing.subtitle')}</p>

        <div className="menu-section-label"><span className="dot" />{t('home.readingsLabel')}</div>
        <MenuListItem
          icon="fortune"
          title={t('home.items.fortune.title')}
          description={t('home.items.fortune.description')}
          to="/result"
          status="live"
          analyticsKey="fortune"
        />
        <MenuListItem
          icon="saju"
          title={t('home.items.saju.title')}
          description={t('home.items.saju.description')}
          to="/saju"
          status="live"
          analyticsKey="saju"
        />
        <MenuListItem
          icon="compatibility"
          title={t('home.items.compatibility.title')}
          description={t('home.items.compatibility.description')}
          to="/compatibility"
          status="live"
          analyticsKey="compatibility"
        />

        <div className="menu-section-label"><span className="dot" />{t('home.idolsLabel')}</div>
        <MenuListItem
          icon="groupMatch"
          title={t('home.items.groupMatch.title')}
          description={t('home.items.groupMatch.description')}
          to="/idol-match?mode=group"
          status="live"
          analyticsKey="idol-match-group"
        />
        <MenuListItem
          icon="idolMatch"
          title={t('home.items.idolMatch.title')}
          description={t('home.items.idolMatch.description')}
          to="/idol-match"
          status="live"
          analyticsKey="idol-match"
        />
        <MenuListItem
          icon="drama"
          title={t('home.items.drama.title')}
          description={t('home.items.drama.description')}
          to="/drama-match"
          status="live"
          analyticsKey="drama-match"
        />

        <div className="menu-section-label"><span className="dot" />{t('home.romanceLabel')}</div>
        <MenuListItem
          icon="reunion"
          title={t('home.items.reunion.title')}
          description={t('home.items.reunion.description')}
          to="/romance?situation=reunion"
          status="live"
          analyticsKey="romance-reunion"
        />
        <MenuListItem
          icon="crush"
          title={t('home.items.crush.title')}
          description={t('home.items.crush.description')}
          to="/romance?situation=crush"
          status="live"
          analyticsKey="romance-crush"
        />
        <MenuListItem
          icon="theirFeelings"
          title={t('home.items.theirFeelings.title')}
          description={t('home.items.theirFeelings.description')}
          to="/romance?situation=theirFeelings"
          status="live"
          analyticsKey="romance-theirFeelings"
        />
        <MenuListItem
          icon="some"
          title={t('home.items.some.title')}
          description={t('home.items.some.description')}
          to="/compatibility?relationship=some"
          status="live"
          analyticsKey="compatibility-some"
        />

        <div className="how-it-works">
          <div className="menu-section-label"><span className="dot" />{t('home.howItWorksHeading')}</div>
          <div className="how-it-works__step">
            <span className="how-it-works__step-num">1</span>
            {t('home.step1')}
          </div>
          <div className="how-it-works__step">
            <span className="how-it-works__step-num">2</span>
            {t('home.step2')}
          </div>
          <div className="how-it-works__step">
            <span className="how-it-works__step-num">3</span>
            {t('home.step3')}
          </div>
        </div>
      </div>
    </main>
  );
}
