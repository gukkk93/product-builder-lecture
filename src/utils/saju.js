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

// lunar-javascript only ships 'chs' (Chinese) and 'en' locales — no Korean —
// so for the Korean UI we translate the romanized Gan/Zhi names ourselves.
// Note "Wu" is ambiguous between 戊 (a Gan) and 午 (a Zhi); that's fine as
// long as callers always know which table they're looking up.
const GAN_KO = {
  Jia: '갑', Yi: '을', Bing: '병', Ding: '정', Wu: '무',
  Ji: '기', Geng: '경', Xin: '신', Ren: '임', Gui: '계',
};

const ZHI_KO = {
  Zi: '자', Chou: '축', Yin: '인', Mao: '묘', Chen: '진', Si: '사',
  Wu: '오', Wei: '미', Shen: '신', You: '유', Xu: '술', Hai: '해',
};

/** Displays a Gan (Heavenly Stem) character, translated for Korean. */
export function getGanLabel(gan, lang) {
  return lang === 'ko' ? GAN_KO[gan] : gan;
}
/** Displays a Zhi (Earthly Branch) character, translated for Korean. */
export function getZhiLabel(zhi, lang) {
  return lang === 'ko' ? ZHI_KO[zhi] : zhi;
}

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

/** Element for a single Gan (Heavenly Stem) or Zhi (Earthly Branch) character. */
export function getGanElement(gan) {
  return GAN_ELEMENT[gan];
}
export function getZhiElement(zhi) {
  return ZHI_ELEMENT[zhi];
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
  const dayGanElement = GAN_ELEMENT[pillars.day.gan];

  // 신강/신약 (day-master strength): simplified reading — look at every
  // other character in the chart (excluding the day gan itself) and count
  // how many "help" the day master, where helping means sharing its
  // element or generating it. Day master is "strong" when at least half of
  // the remaining characters help it, "weak" otherwise.
  const otherChars = [pillars.year.gan, pillars.year.zhi, pillars.month.gan, pillars.month.zhi, pillars.day.zhi];
  if (timeKnown) otherChars.push(pillars.time.gan, pillars.time.zhi);
  const helpingCount = otherChars.filter((char) => {
    const el = GAN_ELEMENT[char] ?? ZHI_ELEMENT[char];
    return el === dayGanElement || GENERATES[el] === dayGanElement;
  }).length;
  const dayGanStrength = helpingCount >= otherChars.length / 2 ? 'strong' : 'weak';

  return {
    pillars,
    elementCounts: counts,
    dominantElement: dominant,
    zodiac: ec.getLunar().getYearShengXiao(),
    dayGan: pillars.day.gan,
    dayGanElement,
    dayGanStrength,
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
 * Compatibility reading between two people, based on the Five Element
 * relationship between their dominant elements (same math as
 * getTodayRelation, just applied to a second chart instead of "today").
 * Used for both idol matches (birth time generally unknown/not public) and
 * general two-person compatibility.
 */
export function getCompatibility(mySaju, otherBirth, otherTimeKnown = false) {
  const otherSaju = calculateSaju(otherBirth, otherTimeKnown);
  return {
    otherSaju,
    relation: getElementRelation(mySaju.dominantElement, otherSaju.dominantElement),
  };
}

// Baseline score per relation, used to turn a qualitative relation into a
// shareable number. Ordering mirrors RELATION_RANK in idolMatchTemplates.js.
const RELATION_SCORE = {
  same: 92,
  otherGeneratesMe: 84,
  iGenerateOther: 74,
  iOvercomeOther: 62,
  otherOvercomesMe: 48,
};

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

/**
 * Turns a Five Element relation into a stable 1-99 compatibility score, with
 * a small deterministic jitter (seeded by seedInput, e.g. a pair id) so two
 * pairs with the same relation don't all show the exact same number.
 */
export function getCompatibilityScore(relation, seedInput = '') {
  const base = RELATION_SCORE[relation] ?? 70;
  const jitter = (hashCode(String(seedInput)) % 7) - 3; // -3..+3
  return Math.max(1, Math.min(99, base + jitter));
}
