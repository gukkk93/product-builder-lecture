import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LunarMonth } from 'lunar-javascript';
import { trackBirthFormSubmit } from '../utils/analytics';
import { loadBirthMemory, saveBirthMemory } from '../utils/birthMemory';
import GenderSelect from './GenderSelect';

const HOUR_START = [23, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];

function daysInSolarMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function daysInLunarMonth(year, month) {
  // MVP simplification: leap-month selection isn't exposed in the UI, so
  // this always resolves to the regular (non-leap) month for the given
  // year/month pair.
  const lm = LunarMonth.fromYm(year, month);
  return lm ? lm.getDayCount() : 30;
}

/**
 * Birth date/time input, reused inline on any reading page (Result, Saju,
 * Compatibility, ...) reached without a birth date already in the URL.
 * Owns its own validation and submit button; the parent only decides what
 * happens with the resulting URLSearchParams.
 *
 * @param {(params: URLSearchParams) => void} onSubmit
 * @param {string} submitLabel
 * @param {string} [analyticsContext] - which page this form instance lives on, for the birth_form_submit event
 * @param {boolean} [collectProfile] - Result/Saju only: adds an optional name
 *   field + "I am..." gender picker above the birth date, purely for
 *   personalizing that page's own heading/share text — neither value feeds
 *   into any saju calculation, so leaving them blank changes nothing.
 * @param {boolean} [remember] - pre-fills from and saves to localStorage
 *   (see utils/birthMemory) on submit. Only pass this for a "my birthday"
 *   form — never for Compatibility/Romance's "their birthday" step, which
 *   should always start blank.
 */
export default function BirthDateForm({ onSubmit, submitLabel, analyticsContext, collectProfile, remember }) {
  const { t } = useTranslation();
  const remembered = remember ? loadBirthMemory() : null;
  const [name, setName] = useState(remembered?.name || '');
  const [gender, setGender] = useState(remembered?.gender || '');

  const currentYear = new Date().getFullYear();
  const years = useMemo(
    () => Array.from({ length: 100 }, (_, i) => currentYear - i),
    [currentYear]
  );

  const [calendar, setCalendar] = useState(remembered?.calendar || 'solar');
  const [year, setYear] = useState(remembered?.year || '');
  const [month, setMonth] = useState(remembered?.month || '');
  const [day, setDay] = useState(remembered?.day || '');
  const [timeKnown, setTimeKnown] = useState(remembered?.timeKnown ?? true);
  const [hourIndex, setHourIndex] = useState(remembered?.hourIndex ?? '');
  const [error, setError] = useState('');

  function computeMaxDay(cal, y, m) {
    if (!y || !m) return 31;
    return cal === 'lunar' ? daysInLunarMonth(Number(y), Number(m)) : daysInSolarMonth(Number(y), Number(m));
  }

  const maxDay = useMemo(() => computeMaxDay(calendar, year, month), [calendar, year, month]);
  const dayOptions = useMemo(() => Array.from({ length: maxDay }, (_, i) => i + 1), [maxDay]);

  // Only clear the day if it's no longer valid for the new month/year/calendar
  // — otherwise picking Month → Day → Year would wipe out the day you just chose.
  function clampDay(cal, y, m) {
    const newMaxDay = computeMaxDay(cal, y, m);
    if (day && Number(day) > newMaxDay) setDay('');
  }

  function handleCalendarChange(next) {
    setCalendar(next);
    clampDay(next, year, month);
  }

  function buildParams() {
    if (!year || !month || !day || (timeKnown && hourIndex === '')) {
      setError(t('landing.errorIncomplete'));
      return null;
    }
    setError('');

    const params = new URLSearchParams({
      cal: calendar,
      y: year,
      m: month,
      d: day,
      timeKnown: timeKnown ? '1' : '0',
    });
    if (timeKnown) params.set('h', HOUR_START[Number(hourIndex)]);
    if (collectProfile) {
      if (name.trim()) params.set('name', name.trim());
      if (gender) params.set('gender', gender);
    }
    return params;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const params = buildParams();
    if (!params) return;
    trackBirthFormSubmit(analyticsContext);
    if (remember) {
      const fields = { calendar, year, month, day, timeKnown, hourIndex };
      // Only overwrite name/gender when this form actually collects them —
      // otherwise a "my birthday" form without collectProfile (IdolMatch,
      // DramaMatch) would blank out a name/gender saved earlier from
      // Result/Saju.
      if (collectProfile) {
        fields.name = name.trim();
        fields.gender = gender;
      }
      saveBirthMemory(fields);
    }
    onSubmit(params);
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      {collectProfile && (
        <>
          <div className="field-group">
            <label>{t('landing.nameLabel')}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('landing.namePlaceholder')}
              style={{ width: '100%' }}
            />
          </div>
          <GenderSelect value={gender} onChange={setGender} />
        </>
      )}

      <div className="field-group">
        <label>{t('landing.calendarLabel')}</label>
        <div className="calendar-toggle">
          <button
            type="button"
            className={calendar === 'solar' ? 'active' : ''}
            onClick={() => handleCalendarChange('solar')}
          >
            {t('landing.calendarSolar')}
          </button>
          <button
            type="button"
            className={calendar === 'lunar' ? 'active' : ''}
            onClick={() => handleCalendarChange('lunar')}
          >
            {t('landing.calendarLunar')}
          </button>
        </div>
      </div>

      <div className="field-group">
        <label>{t('landing.dateLabel')}</label>
        <div className="select-row">
          <select value={month} onChange={(e) => { const v = e.target.value; setMonth(v); clampDay(calendar, year, v); }}>
            <option value="" disabled>{t('landing.monthPlaceholder')}</option>
            {t('landing.months', { returnObjects: true }).map((name, i) => (
              <option key={name} value={i + 1}>{name}</option>
            ))}
          </select>
          <select value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="" disabled>{t('landing.dayPlaceholder')}</option>
            {dayOptions.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          <select value={year} onChange={(e) => { const v = e.target.value; setYear(v); clampDay(calendar, v, month); }}>
            <option value="" disabled>{t('landing.yearPlaceholder')}</option>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="field-group">
        <label>{t('landing.timeLabel')}</label>
        <select
          value={hourIndex}
          onChange={(e) => setHourIndex(e.target.value)}
          disabled={!timeKnown}
          style={{ width: '100%', opacity: timeKnown ? 1 : 0.5 }}
        >
          <option value="" disabled>{t('landing.hourPlaceholder')}</option>
          {t('landing.hours', { returnObjects: true }).map((label, i) => (
            <option key={label} value={i}>{label}</option>
          ))}
        </select>
        <div className="checkbox-row" style={{ marginTop: 10 }}>
          <input
            type="checkbox"
            id="timeUnknown"
            checked={!timeKnown}
            onChange={(e) => setTimeKnown(!e.target.checked)}
          />
          <label htmlFor="timeUnknown" style={{ margin: 0 }}>{t('landing.timeUnknown')}</label>
        </div>
      </div>

      {error && <div className="error-text">{error}</div>}

      <button type="submit" className="button" style={{ width: '100%' }}>
        {submitLabel}
      </button>
    </form>
  );
}
