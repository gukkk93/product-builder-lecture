// Compares the user's Day Master strength (신강/신약) against the other
// person's — a short bonus insight layered on top of the Five Element
// relation. No new calculation needed: calculateSaju() already produces
// dayGanStrength ('strong'|'weak') for both people, this just looks up the
// 2x2 combo. One paragraph per combo (no rotation/variants, unlike the
// relation-based templates elsewhere).
export const sajuStrengthTemplates = {
  en: {
    'strong-strong': "You're both strong Day Masters, which means neither of you is likely to fade into the background here — you'll each show up as fully, distinctly yourselves, for better and for worse. That's a lot of clear signal in one relationship; when you agree, it's decisive, and when you don't, neither of you backs down easily. Worth knowing going in: this pairing rewards give-and-take more than most, precisely because you're both used to holding your ground.",
    'strong-weak': "You're the steadier, more consistent presence in this pairing — your core traits tend to come through the same way no matter who you're with, while theirs shift more depending on the company and the moment. That can make you a kind of anchor for them, whether or not you're trying to be. Just worth noticing: it's easy for a dynamic like this to quietly tilt toward you setting the tone by default, so leave room for their side to show up too.",
    'weak-strong': "They're the steadier, more consistent presence here — their core traits come through clearly and predictably, while yours tend to shift more depending on who you're with and what's going on around you. That's not a weakness so much as a different kind of flexibility, and it can make this pairing feel easier than most, since you naturally adapt well to their rhythm. Just make sure that adapting doesn't slide into disappearing — your version of things is worth showing up too.",
    'weak-weak': "Neither of you has a particularly fixed, consistent core here — you both tend to show up differently depending on the day, the company, and what's happening around you. That can make this pairing feel unusually responsive to its environment: really good when the context is good, and more unstable when it isn't. The upside is real adaptability on both sides; the thing to watch is that neither of you ends up anchoring the relationship when it needs steadying.",
  },
  ko: {
    'strong-strong': "둘 다 신강 사주라서, 이 관계 안에서 둘 중 누구도 존재감 없이 묻히지 않을 확률이 높아요 — 각자 온전하고 뚜렷한 자기 모습으로 나타나요, 좋을 때도 그렇지 않을 때도요. 한 관계 안에 이렇게 뚜렷한 신호가 둘이나 있는 거라, 마음이 맞을 땐 확실하게 맞고, 안 맞을 땐 둘 다 쉽게 물러서지 않아요. 미리 알아두면 좋은 건, 이 조합은 다른 관계보다 서로 주고받는 균형이 더 중요하다는 거예요 — 둘 다 자기 자리를 지키는 데 익숙하니까요.",
    'strong-weak': "이 관계에서 내가 더 안정적이고 일관된 쪽이에요 — 누구를 만나든 본모습이 비슷하게 드러나는 반면, 상대는 함께 있는 사람과 그때그때 상황에 따라 더 많이 달라져요. 그래서 의도치 않아도 상대에게 일종의 닻 같은 존재가 될 수 있어요. 다만 이런 조합은 나도 모르게 관계의 분위기를 내가 기본값으로 정하게 되기 쉬우니, 상대의 모습도 드러날 여지를 남겨두는 게 좋아요.",
    'weak-strong': "이 관계에서 상대가 더 안정적이고 일관된 쪽이에요 — 본모습이 뚜렷하고 예측 가능하게 드러나는 반면, 나는 누구와 있느냐, 주변 상황이 어떠냐에 따라 더 많이 달라지는 편이에요. 이건 약점이라기보다 다른 종류의 유연함에 가깝고, 상대의 리듬에 자연스럽게 잘 맞춰지는 편이라 이 조합이 오히려 더 편하게 느껴질 수 있어요. 다만 맞춰주는 게 나를 지우는 쪽으로 흘러가지 않게는 신경 쓰세요 — 내 모습도 드러날 자격이 있어요.",
    'weak-weak': "둘 다 딱히 고정되고 일관된 중심이 있는 편은 아니에요 — 그날그날, 만나는 사람, 주변 상황에 따라 둘 다 많이 달라지는 편이거든요. 그래서 이 조합은 환경에 유난히 민감하게 반응할 수 있어요 — 상황이 좋을 땐 정말 좋고, 안 좋을 땐 더 불안정해질 수 있어요. 좋은 점은 양쪽 다 진짜 유연하다는 거고, 신경 써야 할 점은 관계가 흔들릴 때 누구도 중심을 잡아주는 역할을 안 하게 될 수 있다는 거예요.",
  },
};

/**
 * @param {'en'|'ko'} lang
 * @param {'strong'|'weak'} myStrength
 * @param {'strong'|'weak'} theirStrength
 */
export function getSajuStrengthInsight(lang, myStrength, theirStrength) {
  const bank = sajuStrengthTemplates[lang] || sajuStrengthTemplates.en;
  return bank[`${myStrength}-${theirStrength}`];
}
