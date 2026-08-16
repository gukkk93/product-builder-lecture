// Compatibility copy bank, keyed by the same Five Element relationship
// values getElementRelation() returns (see src/utils/saju.js), just applied
// to "user vs. idol" instead of "user vs. today". Keyed by language so a
// future locale can add a sibling object, same pattern as fortuneTemplates.js.
export const idolMatchTemplates = {
  en: {
    same: {
      tier: 'Twin Flame',
      lines: [
        "You two run on the exact same frequency — this wouldn't feel like a crush so much as recognition. There's a comfort in matching energy like this: less performing for each other, more just being understood on sight.",
        "Same element, same wavelength. This would be an easy, no-translation-needed kind of bond, the kind where you'd finish each other's sentences and never have to explain the reference.",
        "There's a version of parasocial connection that feels less like fantasy and more like familiarity, and this is it. You'd get their sense of humor immediately, no explanation needed.",
        "Matching energy like this means you'd never have to perform enthusiasm around them — it would just already be there, easy and mutual.",
        "This bias would feel less like admiring someone different from you and more like watching a slightly more glamorous version of your own energy.",
      ],
    },
    otherGeneratesMe: {
      tier: 'Endless Support',
      lines: [
        "Their energy feeds yours — this bias would quietly make everything in your life feel a little easier, a little lighter, without either of you having to try very hard. That's the kind of pairing you don't question, you just enjoy.",
        "They'd be the steady, generous presence that keeps your cup full without you even having to ask. Not a flashy dynamic, but a deeply comfortable one — the kind of bias who feels like home.",
        "Being a fan of theirs would feel less like chasing and more like being gently looked after — their energy has a way of settling yours.",
        "This bias would show up in your life as comfort content — the interview you rewatch when you need to feel okay, the voice that's easy to fall asleep to.",
        "They'd be the kind of bias who makes your bad days better just by existing, without either of you doing anything dramatic about it.",
      ],
    },
    iGenerateOther: {
      tier: 'Your Biggest Cheerleader',
      lines: [
        "You'd be the one doing the giving here — hype, support, energy, attention. Lucky for them, you never seem to run out, and honestly, being their number one fan would probably bring out your most devoted, most generous self.",
        "This bias would turn you into the loudest, most enthusiastic version of yourself. You'd stream, you'd vote, you'd defend them in every group chat — and somehow it would never feel like a chore.",
        "You'd be the one making fan edits at 2am, not because you have to, but because the enthusiasm just pours out of you around them.",
        "This bias would turn you into the friend who brings them up unprompted in every conversation — not annoying, just genuinely, helplessly proud of them.",
        "You'd find yourself defending their skills, their choices, their era in ways that surprise even you. That's the kind of devotion this pairing brings out.",
      ],
    },
    otherOvercomesMe: {
      tier: 'Magnetic Tension',
      lines: [
        "There's real friction in this pairing — the uncomfortable, can't-look-away kind that turns a casual interest into a full-blown obsession. Not a soft, easy bias; a consuming one.",
        "Not a comfortable match, but a compelling one — the kind of dynamic where you'd overanalyze every glance and read too much into every lyric. This is exactly the energy that turns into a years-long bias without you fully choosing it.",
        "This is the kind of bias that sneaks up on you — you'd insist you're \"just curious\" right up until you're not.",
        "There's an edge to this pairing that keeps things interesting; you'd never fully predict them, and that unpredictability is exactly the hook.",
        "Not a soft landing of a bias — more like the one you'd end up thinking about at inconvenient times, unable to fully explain why.",
      ],
    },
    iOvercomeOther: {
      tier: 'You Call the Shots',
      lines: [
        "You'd be the calm, grounding force in this dynamic — the one who keeps them steady, whether they know it or not. There's something quietly protective about how you'd root for them.",
        "This bias would bring out your protective, take-charge side. You'd be the fan defending them in comment sections, correcting misinformation, and generally acting like their unofficial, self-appointed hype team captain — firmly and happily in charge of this bond.",
        "You'd be the fan who somehow ends up moderating the group chat about them — organized, protective, quietly in charge of the vibe.",
        "This bias would bring out your steady side; you'd be the one keeping perspective when everyone else is spiraling over a single tweet.",
        "You'd root for them the way you'd root for a friend, not just a star — grounded, a little protective, always in their corner.",
      ],
    },
  },
  ko: {
    same: {
      tier: '완벽한 싱크로율',
      lines: [
        "완전히 같은 주파수로 움직이는 케미예요 — 그냥 좋아하는 게 아니라, 원래 알고 있던 사람을 다시 만난 느낌에 가까워요. 설명 안 해도 통하는, 그런 편안함이 있어요.",
        "같은 오행, 같은 결이에요. 번역 필요 없이 바로 통하는 사이 — 드립도, 텐션도, 취향도 따로 설명할 필요가 없을 거예요.",
        "다른 최애한테선 느끼기 힘든 편안함이 있는 조합이에요. 애써 좋아하는 척할 필요 없이, 그냥 나답게 좋아하면 되는 관계예요.",
        "이런 싱크로율이면 갈등도 금방 풀려요 — 같은 방식으로 생각하고, 같은 코드로 리액션하니까요.",
        "정반대의 매력에 끌리는 게 아니라, 나랑 닮은 모습을 발견하는 쪽에 가까운 케미예요.",
      ],
    },
    otherGeneratesMe: {
      tier: '든든한 서포터',
      lines: [
        "저쪽 기운이 나를 채워주는 조합이에요 — 애쓰지 않아도 최애 존재 자체가 내 하루를 편하게 만들어줘요. 별로 고민할 필요 없는, 그냥 스며드는 관계예요.",
        "말없이 든든하게 챙겨주는 느낌의 최애예요. 화려하진 않아도 깊이 편안한 케미죠.",
        "덕질이 힘이 되기보다 위로가 되는 쪽에 가까운 조합이에요. 최애 존재 자체가 나를 다독여주는 느낌이에요.",
        "이 최애는 힘든 날 나를 다독여주는 콘텐츠가 돼요 — 다시 보고 싶은 인터뷰, 잠들기 전 듣기 좋은 목소리처럼요.",
        "그냥 존재만으로 내 하루를 나아지게 만드는 최애예요, 서로 별 노력 안 해도요.",
      ],
    },
    iGenerateOther: {
      tier: '무한 팬심 제공자',
      lines: [
        "여기선 내가 주는 쪽이에요 — 애정, 응원, 관심 다요. 다행히 난 잘 마르지 않는 타입이라, 최애의 넘버원 팬 되는 게 오히려 나한테 제일 헌신적인 나를 끌어내줄 거예요.",
        "새벽 2시에 편집 영상 만들고 있는 나 자신을 발견하게 되는 조합이에요. 억지로가 아니라, 그냥 애정이 자연스럽게 흘러넘쳐서요.",
        "단톡방에서 이 최애 얘기 나올 때마다 은근히 자랑스러워하는 그런 나를 발견하게 될 거예요.",
        "이 최애를 지키고, 실력을 변호하고, 어떤 선택이든 응원하게 되는 조합이에요 — 스스로도 놀랄 정도로요.",
        "이 케미는 유난히 헌신적인 팬심을 끌어내요. 스밍도, 투표도, 단톡방 홍보도 다 내가 나서게 될 거예요.",
      ],
    },
    otherOvercomesMe: {
      tier: '자석 같은 텐션',
      lines: [
        "이 조합엔 진짜 텐션이 있어요 — 불편할 정도로 눈을 못 떼는, 그런 종류의 끌림이요. 편안한 최애라기보단, 확 빠져드는 최애에 가까워요.",
        "편안한 케미는 아니지만, 확실히 매력적인 케미예요 — 눈빛 하나, 가사 하나에도 유난히 신경 쓰이게 되는 그런 상대요.",
        "이 최애는 예상을 자꾸 빗나가요, 그리고 그 예측 불가능함이 바로 매력 포인트예요.",
        "몰래 신경 쓰이기 시작하다가, 어느새 제대로 빠져버리는 그런 타입의 최애예요.",
        "종이 위 스펙만 보면 제일 쉬운 조합은 아니지만, 오히려 오래가는 최애는 이런 케미인 경우가 많아요.",
      ],
    },
    iOvercomeOther: {
      tier: '든든한 보호자',
      lines: [
        "이 관계에서 내가 차분하고 든든한 쪽이에요 — 최애가 알아채든 못 알아채든, 은근히 지켜주는 입장이 되는 조합이에요.",
        "보호 본능을 자극하는 최애예요. 댓글창에서 방어해주고, 잘못된 정보 바로잡아주고, 자연스럽게 이 최애의 비공식 홍보대사가 되는 그런 케미요.",
        "이 최애 옆에서 든든한 지원군 역할을 하게 되는 단톡방 멤버가 되는 조합이에요.",
        "이 최애를 응원할 땐 유난히 차분한 쪽이에요 — 다들 트윗 폭풍일 때 혼자 침착하게 상황 정리하는 그런 사람이요.",
        "스타보다는 친구처럼 응원하게 되는 최애예요 — 든든하고, 살짝 보호적이고, 항상 최애 편이에요.",
      ],
    },
  },
};

// Subjective best-to-worst ordering used for group-ranking view — not a
// judgment about the relation itself, just a sort order for "who am I most
// in sync with in this group".
export const RELATION_RANK = ['same', 'otherGeneratesMe', 'iGenerateOther', 'iOvercomeOther', 'otherOvercomesMe'];

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

/** Picks a compatibility blurb for a relation, stable per user+idol pair. */
export function getIdolMatchCopy(lang, relation, seedInput) {
  const entry = (idolMatchTemplates[lang] || idolMatchTemplates.en)[relation];
  const seed = hashCode(seedInput);
  return { tier: entry.tier, line: entry.lines[seed % entry.lines.length] };
}
