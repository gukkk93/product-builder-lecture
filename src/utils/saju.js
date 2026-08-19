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

// lunar-javascript's English locale doesn't cover getYearShengXiao() either
// (same gap as Gan/Zhi above) — it always returns the English zodiac name
// regardless of I18n.setLanguage(), so Korean needs its own table. Keys
// verified against the library's actual output (Solar.getLunar().
// getYearShengXiao() under I18n 'en'), not guessed — e.g. it's "Goat", not
// "Sheep".
const ZODIAC_KO = {
  Rat: '쥐', Ox: '소', Tiger: '호랑이', Rabbit: '토끼', Dragon: '용', Snake: '뱀',
  Horse: '말', Goat: '양', Monkey: '원숭이', Rooster: '닭', Dog: '개', Pig: '돼지',
};

/** Displays a zodiac animal name, translated for Korean. */
export function getZodiacLabel(zodiac, lang) {
  return lang === 'ko' ? ZODIAC_KO[zodiac] : zodiac;
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

/**
 * Per-pillar Five Element relation between two charts — year/month/day
 * pillars are always compared (using each pillar's Gan element, the same
 * single-Gan convention getDayElement/getLifeScoreTimeline use elsewhere in
 * this file), and the hour pillar is included only when both people have a
 * known birth time. Idols/actors never have a public birth time, so an
 * idol/drama match comparison always comes out to exactly 3 pillars.
 */
export function getPillarCompatibility(mySaju, otherSaju) {
  const pillars = mySaju.pillars.time && otherSaju.pillars.time
    ? ['year', 'month', 'day', 'time']
    : ['year', 'month', 'day'];
  return pillars.map((pillar) => {
    const myElement = GAN_ELEMENT[mySaju.pillars[pillar].gan];
    const otherElement = GAN_ELEMENT[otherSaju.pillars[pillar].gan];
    return { pillar, relation: getElementRelation(myElement, otherElement), myElement, otherElement };
  });
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

// Day-master strength bonus: opposite strengths (one strong, one weak) read
// as complementary — each fills in what the other lacks — so they get a
// small boost. Matching strengths (both strong or both weak) don't offer
// that same balance, so they get a small penalty instead. Applied to the
// base score before jitter, so it shifts the whole per-relation range
// rather than just adding noise — this is what makes two "same"-relation
// idols actually score differently instead of clustering on one number.
const STRENGTH_BONUS = 4;
const STRENGTH_PENALTY = -2;

/**
 * Turns a Five Element relation into a stable 1-99 compatibility score, with
 * a small deterministic jitter (seeded by seedInput, e.g. a pair id) so two
 * pairs with the same relation don't all show the exact same number.
 *
 * `myStrength`/`otherStrength` (each 'strong'|'weak', from dayGanStrength)
 * are optional — when both are given, they nudge the base score before
 * jitter is applied (see STRENGTH_BONUS/STRENGTH_PENALTY above).
 */
export function getCompatibilityScore(relation, seedInput = '', myStrength, otherStrength) {
  let base = RELATION_SCORE[relation] ?? 70;
  if (myStrength && otherStrength) {
    base += myStrength === otherStrength ? STRENGTH_PENALTY : STRENGTH_BONUS;
  }
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

// ============================================================================
// Life Score Timeline (사주 인생 그래프)
// ============================================================================
//
// Turns each of the 8 Major Luck Cycles above into a 1-99 "how favorable is
// this decade" score, using the exact same Five Element relation + scoring
// pattern getCompatibilityScore already applies to "me vs. someone else" —
// here it's "me vs. this decade's own Gan/Zhi energy" instead. A period's
// element is read from its Gan alone (not Gan+Zhi combined), matching the
// same single-Gan convention getDayElement/getYearPillar already use for
// "the element of a date" elsewhere in this file.
const LIFE_STAGE_KEYS = ['early', 'youth', 'middle', 'late'];

/**
 * 8-period favorability timeline for a chart, derived from getDaeun (which
 * needs gender for direction — same requirement, same reason). Each period
 * gets a relation (vs. `dominantElement`) and a score; the 8 periods are
 * also grouped into 4 life stages (초년/청년/중년/말년, 2 periods each)
 * with an averaged score per stage.
 *
 * @param {{year:number, month:number, day:number, hour:number|null, calendar:'solar'|'lunar'}} birth
 * @param {boolean} timeKnown
 * @param {'M'|'F'} gender
 * @param {string} dominantElement
 */
export function getLifeScoreTimeline(birth, timeKnown, gender, dominantElement) {
  const daeun = getDaeun(birth, timeKnown, gender, 8);
  const periods = daeun.items.map((item) => {
    const relation = getElementRelation(dominantElement, item.ganElement);
    const score = getCompatibilityScore(relation, `${item.gan}${item.zhi}-${item.startYear}`);
    return { ...item, relation, score };
  });

  const stages = LIFE_STAGE_KEYS.map((key, i) => {
    const stagePeriods = periods.slice(i * 2, i * 2 + 2);
    const avgScore = Math.round(stagePeriods.reduce((sum, p) => sum + p.score, 0) / stagePeriods.length);
    return { key, avgScore };
  });

  return { forward: daeun.forward, periods, stages };
}

// ============================================================================
// Shensha (신살/神殺) — Peach Blossom, Traveling Horse, Canopy
// ============================================================================
//
// lunar-javascript has no built-in method for these (verified by inspecting
// its source — it ships a same-named-looking SHEN_SHA/DAY_SHEN_SHA table,
// but that's for a completely different feature, the daily almanac's
// auspicious/inauspicious day spirits, not birth-chart shensha), so this is
// a from-scratch, traditional textbook lookup table, verified by hand
// against known reference charts before relying on it (see dev notes).
//
// All three are looked up the same way: which of the 4 Earthly-Branch trine
// (삼합/三合) groups a reference branch belongs to, then a fixed target
// branch for that group — present if the target branch shows up anywhere
// in the chart. Both 년지 and 일지 are traditionally used as the reference
// branch, so both are checked and reported separately via `bases`.
const SAMHE_GROUP = {
  Yin: 'fire', Wu: 'fire', Xu: 'fire', // 寅午戌
  Shen: 'water', Zi: 'water', Chen: 'water', // 申子辰
  Si: 'metal', You: 'metal', Chou: 'metal', // 巳酉丑
  Hai: 'wood', Mao: 'wood', Wei: 'wood', // 亥卯未
};

// 역마살(驛馬殺): the branch that clashes (沖) with the trine group's own
// 생지 (first/initiating branch) — e.g. 申子辰(water)'s 생지 is 申, which
// clashes with 寅, so water-group people carry 역마 in 寅.
const YIMA_TABLE = { fire: 'Shen', water: 'Yin', metal: 'Hai', wood: 'Si' };
// 도화살(桃花殺): standard textbook target per group (not derivable from
// the other two tables by a simple rule — a fixed traditional mapping).
const TAOHUA_TABLE = { fire: 'Mao', water: 'You', metal: 'Wu', wood: 'Zi' };
// 화개살(華蓋殺): the trine group's own 묘지 (storage/last branch) — e.g.
// 申子辰(water)'s own storage branch is 辰, so water-group people carry
// 화개 in 辰 (i.e. it can coincide with their own reference branch).
const HWAGAE_TABLE = { fire: 'Xu', water: 'Chen', metal: 'Chou', wood: 'Wei' };

const SHENSHA_TABLES = { taohua: TAOHUA_TABLE, yima: YIMA_TABLE, hwagae: HWAGAE_TABLE };
const SHENSHA_META = {
  taohua: { hanja: '桃花殺', ko: '도화살', en: 'Peach Blossom' },
  yima: { hanja: '驛馬殺', ko: '역마살', en: 'Traveling Horse' },
  hwagae: { hanja: '華蓋殺', ko: '화개살', en: 'Canopy' },
};

/** Every Zhi actually present in a chart (year/month/day, plus hour if known). */
function collectZhis(saju) {
  const { pillars } = saju;
  const zhis = [pillars.year.zhi, pillars.month.zhi, pillars.day.zhi];
  if (pillars.time) zhis.push(pillars.time.zhi);
  return zhis;
}

/**
 * Checks a chart for the 3 most commonly cited shensha (도화살/역마살/화개살).
 * Returns only the ones actually present, each with `bases` listing whether
 * it was found via the 년지 reference, 일지 reference, or both.
 */
export function getShensha(saju, lang) {
  const zhis = collectZhis(saju);
  const refs = [
    { basis: 'year', zhi: saju.pillars.year.zhi },
    { basis: 'day', zhi: saju.pillars.day.zhi },
  ];

  const results = [];
  for (const key of Object.keys(SHENSHA_TABLES)) {
    const table = SHENSHA_TABLES[key];
    const bases = refs
      .filter((ref) => zhis.includes(table[SAMHE_GROUP[ref.zhi]]))
      .map((ref) => ref.basis);
    if (bases.length > 0) {
      const meta = SHENSHA_META[key];
      results.push({ key, label: lang === 'ko' ? meta.ko : meta.en, hanja: meta.hanja, bases });
    }
  }
  return results;
}

// ============================================================================
// Nobleman (귀인/貴人) — Heavenly Nobleman (天乙貴人)
// ============================================================================
//
// The most widely used 귀인. Standard day-Gan → up to 2 target-Zhi table,
// the traditional "甲戊庚牛羊，乙己鼠猴鄉，丙丁豬雞位，壬癸兔蛇藏，六辛逢
// 馬虎" mnemonic (牛=丑, 羊=未, 鼠=子, 猴=申, 豬=亥, 雞=酉, 兔=卯, 蛇=巳,
// 馬=午, 虎=寅) — not in lunar-javascript, so hand-built and checked against
// that mnemonic before relying on it.
const NOBLEMAN_TABLE = {
  Jia: ['Chou', 'Wei'], Wu: ['Chou', 'Wei'], Geng: ['Chou', 'Wei'],
  Yi: ['Zi', 'Shen'], Ji: ['Zi', 'Shen'],
  Bing: ['Hai', 'You'], Ding: ['Hai', 'You'],
  Ren: ['Mao', 'Si'], Gui: ['Mao', 'Si'],
  Xin: ['Wu', 'Yin'],
};
const NOBLEMAN_META = { hanja: '天乙貴人', ko: '천을귀인', en: 'Heavenly Nobleman' };

/**
 * Checks a chart for 천을귀인, looked up from the day master. Returns the
 * day master's 2 target branches plus which of them actually appear
 * anywhere in the chart (`present` — empty if neither does).
 */
export function getNobleman(saju, lang) {
  const targets = NOBLEMAN_TABLE[saju.dayGan];
  const zhis = collectZhis(saju);
  const present = targets.filter((z) => zhis.includes(z));
  return {
    key: 'tianyi',
    label: lang === 'ko' ? NOBLEMAN_META.ko : NOBLEMAN_META.en,
    hanja: NOBLEMAN_META.hanja,
    targets,
    present,
    hasNobleman: present.length > 0,
  };
}

// ============================================================================
// Year Luck (연운/年運)
// ============================================================================
//
// Same Five Element relation math as getTodayRelation, just applied to a
// given calendar year's Gan/Zhi (세운/歲運) instead of today's date.
function getYearPillar(year) {
  // June 15 sits safely inside this year's 입춘-to-입춘 window (입춘 falls
  // ~Feb 4-5; the library's own solar-term boundary already handles the
  // precise cutoff, same convention buildEightChar() relies on for the
  // birth-chart year pillar) — avoids edge cases from a date near Jan 1 or
  // the following 입춘.
  const ec = Solar.fromYmd(year, 6, 15).getLunar().getEightChar();
  return { gan: ec.getYearGan(), zhi: ec.getYearZhi() };
}

/** Five Element relation between a chart's dominant element and a given year's Gan. */
export function getYearRelation(saju, year) {
  const { gan, zhi } = getYearPillar(year);
  const yearElement = GAN_ELEMENT[gan];
  return {
    year,
    yearGan: gan,
    yearZhi: zhi,
    yearElement,
    relation: getElementRelation(saju.dominantElement, yearElement),
  };
}

/** getYearRelation for `count` consecutive years starting at fromYear. */
export function getYearRelations(saju, fromYear, count = 5) {
  return Array.from({ length: count }, (_, i) => getYearRelation(saju, fromYear + i));
}

// ============================================================================
// Samjae (삼재/三災)
// ============================================================================
//
// The 3 consecutive years, recurring once every 12 years, tied to the trine
// group (see SAMHE_GROUP above) of a person's own 년지 (zodiac branch): the
// window is [역마 branch, next, next] in the fixed 12-branch cycle, always
// landing exactly on that group's own 화개 branch as the third year — e.g.
// 申子辰(water) people: 역마=寅, so 삼재 = 寅卯辰. Cross-checked all 4
// groups against the well-known Korean 삼재 table (e.g. 돼지/토끼/양띠 →
// 뱀/말/양해) before relying on this derivation.
function samjaeZhisForGroup(group) {
  const startIdx = ZHI_ORDER.indexOf(YIMA_TABLE[group]);
  return [0, 1, 2].map((i) => ZHI_ORDER[(startIdx + i) % 12]);
}

/**
 * Finds the samjae window (3 consecutive years) closest to `fromYear` — the
 * one already in progress if `fromYear` falls inside it, otherwise the next
 * upcoming one. Recurs every 12 years, so scanning a 12-year span starting
 * 2 years before `fromYear` is guaranteed to find exactly one match.
 */
export function getSamjae(saju, fromYear) {
  const group = SAMHE_GROUP[saju.pillars.year.zhi];
  const samjaeZhis = samjaeZhisForGroup(group);

  let startYear = null;
  for (let y = fromYear - 2; y < fromYear + 10; y++) {
    if (getYearPillar(y).zhi === samjaeZhis[0]) {
      startYear = y;
      break;
    }
  }
  const years = [startYear, startYear + 1, startYear + 2];
  return { group, samjaeZhis, years, isCurrent: fromYear >= startYear && fromYear <= startYear + 2 };
}
