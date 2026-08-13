import { Solar, Lunar, I18n } from 'lunar-javascript';

// lunar-javascript ships an English locale (Gan/Zhi romanization, five
// elements, zodiac animals). We use it everywhere so results are in English
// without us having to hand-maintain a translation table.
I18n.setLanguage('en');

// Standard Five Element (Wu Xing) associations for the 10 Heavenly Stems and
// 12 Earthly Branches. These are fixed, textbook mappings (not something we
// invented) — see lunar-javascript's own WU_XING_GAN / WU_XING_ZHI tables,
// which this mirrors using the English Gan/Zhi names the library returns.
const GAN_ELEMENT = {
  Jia: 'Wood', Yi: 'Wood',
  Bing: 'Fire', Ding: 'Fire',
  Wu: 'Earth', Ji: 'Earth',
  Geng: 'Metal', Xin: 'Metal',
  Ren: 'Water', Gui: 'Water',
};

const ZHI_ELEMENT = {
  Yin: 'Wood', Mao: 'Wood',
  Si: 'Fire', Wu: 'Fire',
  Chen: 'Earth', Chou: 'Earth', Xu: 'Earth', Wei: 'Earth',
  Shen: 'Metal', You: 'Metal',
  Hai: 'Water', Zi: 'Water',
};

export const ELEMENTS = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];

// Five Element generating (sheng) cycle: key generates value.
const GENERATES = { Wood: 'Fire', Fire: 'Earth', Earth: 'Metal', Metal: 'Water', Water: 'Wood' };
// Five Element overcoming (ke) cycle: key overcomes value.
const OVERCOMES = { Wood: 'Earth', Earth: 'Water', Water: 'Fire', Fire: 'Metal', Metal: 'Wood' };

/**
 * Builds an EightChar (八字/Four Pillars) object from a birth date.
 *
 * Month/day pillars are derived by lunar-javascript from the precise solar
 * term (jie qi) boundaries and the 60-cycle sexagenary calendar, not a naive
 * calendar-month approximation, so this is accurate rather than a rough MVP
 * placeholder.
 *
 * @param {{year:number, month:number, day:number, hour:number|null, calendar:'solar'|'lunar'}} birth
 * @param {boolean} timeKnown
 */
function buildEightChar(birth, timeKnown) {
  const hour = timeKnown ? birth.hour : 0;
  const lunar = birth.calendar === 'lunar'
    ? Lunar.fromYmdHms(birth.year, birth.month, birth.day, hour, 0, 0)
    : Solar.fromYmdHms(birth.year, birth.month, birth.day, hour, 0, 0).getLunar();
  return lunar.getEightChar();
}

function pillarElements(gan, zhi) {
  return [GAN_ELEMENT[gan], ZHI_ELEMENT[zhi]];
}

/**
 * Calculates the Four Pillars for a birth date and the resulting Five
 * Element distribution. If the birth time is unknown, the hour pillar is
 * left out of both the pillar list and the element tally.
 */
export function calculateSaju(birth, timeKnown) {
  const ec = buildEightChar(birth, timeKnown);

  const pillars = {
    year: { gan: ec.getYearGan(), zhi: ec.getYearZhi() },
    month: { gan: ec.getMonthGan(), zhi: ec.getMonthZhi() },
    day: { gan: ec.getDayGan(), zhi: ec.getDayZhi() },
  };
  if (timeKnown) {
    pillars.time = { gan: ec.getTimeGan(), zhi: ec.getTimeZhi() };
  }

  const counts = { Wood: 0, Fire: 0, Earth: 0, Metal: 0, Water: 0 };
  Object.values(pillars).forEach(({ gan, zhi }) => {
    pillarElements(gan, zhi).forEach((el) => { counts[el] += 1; });
  });

  const dominant = ELEMENTS.reduce((best, el) => (counts[el] > counts[best] ? el : best), ELEMENTS[0]);

  return {
    pillars,
    elementCounts: counts,
    dominantElement: dominant,
    zodiac: ec.getLunar().getYearShengXiao(),
    dayGan: pillars.day.gan,
    dayGanElement: GAN_ELEMENT[pillars.day.gan],
  };
}

/** Day-master element for a given calendar date (defaults to today). */
export function getDayElement(date = new Date()) {
  const ec = Lunar.fromDate(date).getEightChar();
  return GAN_ELEMENT[ec.getDayGan()];
}

/**
 * Classifies the Five Element relationship between the user's dominant
 * element and a reference element (typically today's day-master element)
 * using the standard generating/overcoming cycles above.
 */
export function getElementRelation(myElement, otherElement) {
  if (myElement === otherElement) return 'same';
  if (GENERATES[otherElement] === myElement) return 'otherGeneratesMe';
  if (GENERATES[myElement] === otherElement) return 'iGenerateOther';
  if (OVERCOMES[otherElement] === myElement) return 'otherOvercomesMe';
  if (OVERCOMES[myElement] === otherElement) return 'iOvercomeOther';
  return 'same';
}

/** Today's fortune relation for a previously-calculated saju result. */
export function getTodayRelation(saju, date = new Date()) {
  const todayElement = getDayElement(date);
  return {
    todayElement,
    relation: getElementRelation(saju.dominantElement, todayElement),
  };
}

/**
 * Compatibility reading between the user and an idol, based on the Five
 * Element relationship between their dominant elements (same math as
 * getTodayRelation, just applied to a second person instead of "today").
 * Idol birth times generally aren't public, so idol saju is always
 * calculated without an hour pillar.
 */
export function getIdolCompatibility(userSaju, idolBirth) {
  const idolSaju = calculateSaju(idolBirth, false);
  return {
    idolSaju,
    relation: getElementRelation(userSaju.dominantElement, idolSaju.dominantElement),
  };
}
