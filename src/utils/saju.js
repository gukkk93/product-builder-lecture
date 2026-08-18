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

// Hanja + Yin/Yang polarity for each Gan/Zhi, used by the PillarGrid
// glossary (tap a pillar character to see what it means). Standard,
// textbook associations — stems/branches alternate yang/yin in the fixed
// order they're traditionally listed in (甲乙丙丁戊己庚辛壬癸 / 子丑寅...).
const GAN_HANJA = {
  Jia: '甲', Yi: '乙', Bing: '丙', Ding: '丁', Wu: '戊',
  Ji: '己', Geng: '庚', Xin: '辛', Ren: '壬', Gui: '癸',
};
const ZHI_HANJA = {
  Zi: '子', Chou: '丑', Yin: '寅', Mao: '卯', Chen: '辰', Si: '巳',
  Wu: '午', Wei: '未', Shen: '申', You: '酉', Xu: '戌', Hai: '亥',
};
const GAN_YINYANG = {
  Jia: 'yang', Yi: 'yin', Bing: 'yang', Ding: 'yin', Wu: 'yang',
  Ji: 'yin', Geng: 'yang', Xin: 'yin', Ren: 'yang', Gui: 'yin',
};
const ZHI_YINYANG = {
  Zi: 'yang', Chou: 'yin', Yin: 'yang', Mao: 'yin', Chen: 'yang', Si: 'yin',
  Wu: 'yang', Wei: 'yin', Shen: 'yang', You: 'yin', Xu: 'yang', Hai: 'yin',
};

/**
 * Full glossary entry for a Gan character: label, hanja, element, yin/yang,
 * and (when `dayGan` is passed) its Ten God relative to the day master —
 * omitted for the day pillar's own Gan tile (pass `isDayPillar: true` there
 * instead, since a day master has no Ten God relative to itself).
 */
export function getGanMeta(gan, lang, { dayGan, isDayPillar } = {}) {
  const meta = {
    category: 'gan',
    label: getGanLabel(gan, lang),
    hanja: GAN_HANJA[gan],
    element: GAN_ELEMENT[gan],
    yinYang: GAN_YINYANG[gan],
  };
  if (dayGan) {
    meta.isDayMaster = !!isDayPillar;
    meta.tenGod = isDayPillar ? null : getTenGodMeta(getTenGod(dayGan, gan), lang);
  }
  return meta;
}
/**
 * Full glossary entry for a Zhi character: label, hanja, element, yin/yang,
 * and (when `dayGan` is passed) its hidden-stem Ten Gods (지장간) and its
 * Twelve Life Stage relative to the day master — this applies even to the
 * day pillar's own Zhi, unlike the Gan case above.
 */
export function getZhiMeta(zhi, lang, { dayGan } = {}) {
  const meta = {
    category: 'zhi',
    label: getZhiLabel(zhi, lang),
    hanja: ZHI_HANJA[zhi],
    element: ZHI_ELEMENT[zhi],
    yinYang: ZHI_YINYANG[zhi],
  };
  if (dayGan) {
    meta.tenGods = getTenGodsForZhi(dayGan, zhi).map((tg) => getTenGodMeta(tg, lang));
    meta.twelveStage = getTwelveStageMeta(getTwelveStage(dayGan, zhi), lang);
  }
  return meta;
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

// ============================================================================
// Ten Gods (십성/十神)
// ============================================================================
//
// Classified from the same Five Element relation (getElementRelation) used
// everywhere else in this file, cross-referenced with Yin/Yang polarity
// match — the standard textbook rule: same element = 比劫 (companion),
// generated-by-day-master = 食傷 (output), overcome-by-day-master = 財星
// (wealth), overcomes-day-master = 官星 (officer), generates-day-master =
// 印星 (resource); same polarity as day master = 偏 "indirect", different
// polarity = 正 "direct".
//
// lunar-javascript ships this exact classification too (LunarUtil.SHI_SHEN),
// and we verified our table reproduces it for all 100 Gan-pair combinations
// before relying on our own version (see dev notes / verification script).
// We didn't end up calling the library's own EightChar.getXxxShiShenZhi()
// methods, though, because of a real bug we found in it: those methods
// concatenate the day Gan with each hidden-stem Gan from LunarUtil's
// ZHI_HIDE_GAN table to build a dictionary key, but ZHI_HIDE_GAN's *values*
// never get translated out of raw Chinese even when I18n is set to 'en' —
// only its *keys* do. With an English day Gan ("Ji") concatenated with an
// untranslated Chinese hidden stem ("癸"), the lookup key never matches
// anything in the table and the method silently returns null. Building our
// own small, verified table sidesteps that entirely.
const TEN_GOD_TABLE = {
  same: { same: 'biJian', diff: 'jieCai' },
  iGenerateOther: { same: 'shiShen', diff: 'shangGuan' },
  iOvercomeOther: { same: 'pianCai', diff: 'zhengCai' },
  otherOvercomesMe: { same: 'pianGuan', diff: 'zhengGuan' },
  otherGeneratesMe: { same: 'pianYin', diff: 'zhengYin' },
};

const TEN_GOD_META = {
  biJian: { hanja: '比肩', ko: '비견', en: 'Companion', category: 'companion' },
  jieCai: { hanja: '劫財', ko: '겁재', en: 'Rob Wealth', category: 'companion' },
  shiShen: { hanja: '食神', ko: '식신', en: 'Eating God', category: 'output' },
  shangGuan: { hanja: '傷官', ko: '상관', en: 'Hurting Officer', category: 'output' },
  pianCai: { hanja: '偏財', ko: '편재', en: 'Indirect Wealth', category: 'wealth' },
  zhengCai: { hanja: '正財', ko: '정재', en: 'Direct Wealth', category: 'wealth' },
  // Traditionally also called 칠살(七殺)/Seven Killings — the same position,
  // just a more dramatic alternate name some schools prefer.
  pianGuan: { hanja: '偏官', ko: '편관', en: 'Seven Killings', category: 'officer' },
  zhengGuan: { hanja: '正官', ko: '정관', en: 'Direct Officer', category: 'officer' },
  pianYin: { hanja: '偏印', ko: '편인', en: 'Indirect Resource', category: 'resource' },
  zhengYin: { hanja: '正印', ko: '정인', en: 'Direct Resource', category: 'resource' },
};

const TEN_GOD_CATEGORY_META = {
  companion: { hanja: '比劫', ko: '비겁', en: 'Companion' },
  output: { hanja: '食傷', ko: '식상', en: 'Output' },
  wealth: { hanja: '財星', ko: '재성', en: 'Wealth' },
  officer: { hanja: '官星', ko: '관성', en: 'Officer' },
  resource: { hanja: '印星', ko: '인성', en: 'Resource' },
};

/**
 * Ten God (십성/十神) key for a Gan character relative to a day-master Gan.
 * Returns one of the 10 keys in TEN_GOD_META (e.g. 'biJian').
 */
export function getTenGod(dayGan, otherGan) {
  const relation = getElementRelation(GAN_ELEMENT[dayGan], GAN_ELEMENT[otherGan]);
  const polarity = GAN_YINYANG[dayGan] === GAN_YINYANG[otherGan] ? 'same' : 'diff';
  return TEN_GOD_TABLE[relation][polarity];
}

/** Hanja/label/category metadata for a Ten God key returned by getTenGod. */
export function getTenGodMeta(tenGod, lang) {
  const meta = TEN_GOD_META[tenGod];
  const catMeta = TEN_GOD_CATEGORY_META[meta.category];
  return {
    key: tenGod,
    label: lang === 'ko' ? meta.ko : meta.en,
    hanja: meta.hanja,
    category: meta.category,
    categoryLabel: lang === 'ko' ? catMeta.ko : catMeta.en,
    categoryHanja: catMeta.hanja,
  };
}

// Hidden stems (지장간/地藏干) carried by each Earthly Branch — a fixed,
// traditional textbook table (same data lunar-javascript ships as
// LunarUtil.ZHI_HIDE_GAN, kept here in this file's own English Gan
// romanization so it composes directly with getTenGod above without
// depending on the buggy translation path described there).
const ZHI_HIDE_GAN = {
  Zi: ['Gui'],
  Chou: ['Ji', 'Gui', 'Xin'],
  Yin: ['Jia', 'Bing', 'Wu'],
  Mao: ['Yi'],
  Chen: ['Wu', 'Yi', 'Gui'],
  Si: ['Bing', 'Geng', 'Wu'],
  Wu: ['Ding', 'Ji'],
  Wei: ['Ji', 'Ding', 'Yi'],
  Shen: ['Geng', 'Ren', 'Wu'],
  You: ['Xin'],
  Xu: ['Wu', 'Xin', 'Ding'],
  Hai: ['Ren', 'Jia'],
};

/**
 * Ten God keys for every hidden stem (지장간) a Zhi carries, relative to a
 * day-master Gan — a Zhi can hide up to 3 stems, so this returns an array
 * (the first entry is always the Zhi's own primary/dominant element).
 */
export function getTenGodsForZhi(dayGan, zhi) {
  return ZHI_HIDE_GAN[zhi].map((hiddenGan) => getTenGod(dayGan, hiddenGan));
}

/**
 * Counts how many of a chart's non-day-gan characters fall into each Ten
 * God category (비겁/식상/재성/관성/인성) — used for "how much of this
 * energy does the chart actually have" readings (see
 * sajuProfileTemplates.js's wealthStyle/careerStyle, which read the
 * wealth/officer counts respectively). Each Gan position counts once;
 * each Zhi position also counts once, via its primary/dominant hidden
 * stem (index 0 of getTenGodsForZhi) rather than all of them, so every
 * character position contributes exactly one vote regardless of how many
 * stems a Zhi happens to hide.
 */
export function getTenGodCategoryCounts(saju) {
  const { pillars, dayGan } = saju;
  const counts = { companion: 0, output: 0, wealth: 0, officer: 0, resource: 0 };
  const gans = [pillars.year.gan, pillars.month.gan];
  const zhis = [pillars.year.zhi, pillars.month.zhi, pillars.day.zhi];
  if (pillars.time) {
    gans.push(pillars.time.gan);
    zhis.push(pillars.time.zhi);
  }
  gans.forEach((gan) => {
    counts[getTenGodMeta(getTenGod(dayGan, gan), 'en').category] += 1;
  });
  zhis.forEach((zhi) => {
    counts[getTenGodMeta(getTenGodsForZhi(dayGan, zhi)[0], 'en').category] += 1;
  });
  return counts;
}

/**
 * Ten God category (비겁/식상/재성/관성/인성) of the Day Branch (일지) —
 * traditionally called the "spouse palace" (배우자궁), the chart position
 * most associated with how someone experiences a romantic partner. Uses
 * the Zhi's primary hidden stem, same convention as getTenGodCategoryCounts.
 */
export function getDayBranchTenGodCategory(saju) {
  const primary = getTenGodsForZhi(saju.dayGan, saju.pillars.day.zhi)[0];
  return getTenGodMeta(primary, 'en').category;
}

/**
 * The Five Element with the lowest count in a chart (ties broken by
 * ELEMENTS order) — used for organ-correspondence health readings, since
 * the traditionally "missing" element is the one worth paying attention
 * to, not the dominant one.
 */
export function getWeakestElement(saju) {
  return ELEMENTS.reduce((min, el) => (saju.elementCounts[el] < saju.elementCounts[min] ? el : min), ELEMENTS[0]);
}

// ============================================================================
// Twelve Life Stages (십이운성/十二運星)
// ============================================================================
//
// Classifies where an Earthly Branch falls in a Heavenly Stem's fixed
// 12-stage life cycle (長生 Growth → ... → 養 Nurture). Textbook rule: each
// of the 10 Gan has a fixed Zhi where its own cycle "begins" (長生), then
// yang Gan read the 12 Zhi forward from there and yin Gan read them
// backward. Not a school-dependent judgment call — the starting-Zhi table
// and the forward/backward rule are fixed, so we verified our version
// against lunar-javascript's own EightChar._getDiShi() computation (which
// uses the same rule via a different code path — CHANG_SHENG_OFFSET/
// CHANG_SHENG — not the buggy Zhi-hidden-stem dictionary lookup the Ten
// God section above avoids) across a handful of real dates before relying
// on it independently.
const ZHI_ORDER = ['Zi', 'Chou', 'Yin', 'Mao', 'Chen', 'Si', 'Wu', 'Wei', 'Shen', 'You', 'Xu', 'Hai'];

// The Zhi at which each Gan's own 長生 (Growth, stage index 0) falls.
const CHANG_SHENG_START_ZHI = {
  Jia: 'Hai', Bing: 'Yin', Wu: 'Yin', Geng: 'Si', Ren: 'Shen',
  Yi: 'Wu', Ding: 'You', Ji: 'You', Xin: 'Zi', Gui: 'Mao',
};

const TWELVE_STAGE_KEYS = [
  'changSheng', 'muYu', 'guanDai', 'jianLu', 'diWang', 'shuai',
  'bing', 'si', 'mu', 'jue', 'tai', 'yang',
];

const TWELVE_STAGE_META = {
  changSheng: { hanja: '長生', ko: '장생', en: 'Growth' },
  muYu: { hanja: '沐浴', ko: '목욕', en: 'Bath' },
  guanDai: { hanja: '冠帶', ko: '관대', en: 'Youth' },
  // Traditionally also called 임관(臨官) — same position, 건록 is the more
  // commonly used term in Korean saju practice today.
  jianLu: { hanja: '建祿', ko: '건록', en: 'Career' },
  diWang: { hanja: '帝旺', ko: '제왕', en: 'Peak' },
  shuai: { hanja: '衰', ko: '쇠', en: 'Decline' },
  bing: { hanja: '病', ko: '병', en: 'Sickness' },
  si: { hanja: '死', ko: '사', en: 'Death' },
  mu: { hanja: '墓', ko: '묘', en: 'Storage' },
  jue: { hanja: '絶', ko: '절', en: 'Void' },
  tai: { hanja: '胎', ko: '태', en: 'Conception' },
  yang: { hanja: '養', ko: '양', en: 'Nurture' },
};

/** Twelve Life Stage key for a Zhi relative to a Gan (usually the day master). */
export function getTwelveStage(gan, zhi) {
  const startIdx = ZHI_ORDER.indexOf(CHANG_SHENG_START_ZHI[gan]);
  const zhiIdx = ZHI_ORDER.indexOf(zhi);
  const forward = GAN_YINYANG[gan] === 'yang';
  const stageIdx = forward ? (zhiIdx - startIdx + 12) % 12 : (startIdx - zhiIdx + 12) % 12;
  return TWELVE_STAGE_KEYS[stageIdx];
}

/** Hanja/label metadata for a Twelve Stage key returned by getTwelveStage. */
export function getTwelveStageMeta(stage, lang) {
  const meta = TWELVE_STAGE_META[stage];
  return { key: stage, label: lang === 'ko' ? meta.ko : meta.en, hanja: meta.hanja };
}

// ============================================================================
// Major Luck Cycles (대운/大運)
// ============================================================================
//
// Unlike Ten Gods and Twelve Stages above (fixed lookup tables), Da Yun
// needs the exact day-count to the nearest solar term boundary — getting
// that right by hand carries real error risk. lunar-javascript ships this
// as a built-in, well-tested feature (EightChar.getYun -> Yun.getDaYun),
// so we use it directly rather than reimplementing it: verified against
// the library's own maintainer test suite (Yun.test.js) reproducing every
// case exactly, plus an independent spot-check that the forward/backward
// direction and 60-cycle Gan/Zhi stepping match the standard rule (see dev
// notes) before wiring this up.
const GAN_ORDER = ['Jia', 'Yi', 'Bing', 'Ding', 'Wu', 'Ji', 'Geng', 'Xin', 'Ren', 'Gui'];
// All 60 valid Gan+Zhi combinations, used to split the concatenated string
// (e.g. "GengChen") the library's getGanZhi() returns back into parts —
// safer than slicing by character count, since Gan/Zhi romanized names
// vary in length.
const JIA_ZI_60 = Array.from({ length: 60 }, (_, i) => ({
  gan: GAN_ORDER[i % 10],
  zhi: ZHI_ORDER[i % 12],
  key: GAN_ORDER[i % 10] + ZHI_ORDER[i % 12],
}));

function parseGanZhi(ganZhiStr) {
  const found = JIA_ZI_60.find((e) => e.key === ganZhiStr);
  return found ? { gan: found.gan, zhi: found.zhi } : null;
}

/**
 * Major Luck Cycles (대운) for a chart — one ~10-year period per entry, each
 * with its own Gan/Zhi (and therefore Five Element reading) layered on top
 * of the base chart. Direction (forward/backward through the 60-cycle from
 * the month pillar) depends on the year Gan's Yin/Yang and the person's
 * gender, per the standard rule.
 *
 * @param {{year:number, month:number, day:number, hour:number|null, calendar:'solar'|'lunar'}} birth
 * @param {boolean} timeKnown
 * @param {'M'|'F'} gender
 * @param {number} [count=8] how many 10-year periods to return
 */
export function getDaeun(birth, timeKnown, gender, count = 8) {
  const ec = buildEightChar(birth, timeKnown);
  const yun = ec.getYun(gender === 'M' ? 1 : 0, 1);
  const forward = yun.isForward();
  const items = yun
    .getDaYun(count + 1) // index 0 is the pre-first-cycle infancy period (empty ganzhi) — skip it below
    .filter((d) => d.getIndex() > 0)
    .map((d) => {
      const { gan, zhi } = parseGanZhi(d.getGanZhi());
      return {
        startAge: d.getStartAge(),
        endAge: d.getEndAge(),
        startYear: d.getStartYear(),
        endYear: d.getEndYear(),
        gan,
        zhi,
        ganElement: GAN_ELEMENT[gan],
        zhiElement: ZHI_ELEMENT[zhi],
      };
    });
  return { forward, items };
}
