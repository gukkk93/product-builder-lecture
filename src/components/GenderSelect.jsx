import { useTranslation } from 'react-i18next';

/** "I am..." gender picker used to decide which candidate pool to search for a best match. */
export default function GenderSelect({ value, onChange }) {
  const { t } = useTranslation();
  return (
    <div className="field-group">
      <label>{t('matchCommon.genderLabel')}</label>
      <div className="calendar-toggle">
        <button type="button" className={value === 'F' ? 'active' : ''} onClick={() => onChange('F')}>
          {t('matchCommon.genderFemale')}
        </button>
        <button type="button" className={value === 'M' ? 'active' : ''} onClick={() => onChange('M')}>
          {t('matchCommon.genderMale')}
        </button>
      </div>
    </div>
  );
}
