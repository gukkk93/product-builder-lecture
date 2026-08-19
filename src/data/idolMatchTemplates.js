// Compatibility copy bank, keyed by the same Five Element relationship
// values getElementRelation() returns (see src/utils/saju.js), just applied
// to "user vs. idol" instead of "user vs. today". Keyed by language so a
// future locale can add a sibling object, same pattern as fortuneTemplates.js.
//
// Each relation has three parallel line banks (line/goodFit/watchFor), all
// the same length, picked with the same seeded index so the three texts
// read as one consistent "read" rather than three random fragments.
//
// Per-pillar situational content, keyed [pillar][relation] — this is the
// "pillar-by-pillar compatibility read" that replaced the old fixed 5-item
// concrete-moment bank. The relation here is each *pillar's own* Five
// Element relation (from getPillarCompatibility), independent of the
// overall relation used for tier/lines/goodFit/watchFor above — two idols
// can both be an overall "same" match while having a "iOvercomeOther" year
// pillar, for example. Framing throughout is deliberately fan-intimacy
// language ("why you were drawn in", "why it feels easy") — never
// couple/romantic-partner framing, since this is about parasocial fan
// closeness, not compatibility as a couple.
export const pillarSituational = {
  en: {
    year: {
      same: "There wasn't really a debate about why you got into them — the pull was instant, like recognizing your own energy in someone else. It's less 'why do I like this bias' and more 'of course I like this bias,' the kind of certainty that doesn't need justifying to anyone.",
      otherGeneratesMe: "You didn't have to talk yourself into liking them — their presence just made things easier from the very first encounter. Something about how they carry themselves settled you before you'd even decided to be a fan, which is exactly why this bias never felt like a choice so much as a relief.",
      iGenerateOther: "You were drawn to them fast, and once you were in, you were all in — that's just how this bias works for you. There wasn't a slow build-up of interest; it was more like flipping a switch, and once it flipped, your loyalty just followed naturally.",
      otherOvercomesMe: "You didn't plan on getting this invested — one look and the curiosity took over before you decided anything. It wasn't a calculated decision to stan; it was closer to getting pulled in before you'd fully registered what was happening.",
      iOvercomeOther: "You were drawn in less by hype and more by instinct — you clocked something in them worth watching before anyone told you to. While other people were catching up on why this bias mattered, you'd already quietly decided.",
    },
    month: {
      same: "Your taste and theirs line up so closely that following them never feels like an adjustment — it already matches what you were drawn to. The concepts they choose, the music they make, even their sense of humor all land exactly where your taste already lives.",
      otherGeneratesMe: "Their whole vibe settles something in you, which is exactly why following them never feels like effort. There's a specific kind of ease that comes from a bias whose energy doesn't ask anything of you — it just makes things lighter.",
      iGenerateOther: "Their taste lines up with yours enough that supporting them never feels like performance — it's just an extension of what you already like. You're not stretching to appreciate something unfamiliar; you're just doing more of what already came naturally.",
      otherOvercomesMe: "There's a friction in what you like versus what they do that keeps you paying closer attention than usual. It's not quite a mismatch, but it's not seamless either — and that gap is exactly what keeps you actually watching instead of coasting.",
      iOvercomeOther: "Your steadier taste means you see through the noise to what's actually good about them, not just what's trending. You're not swayed by whatever's loud in the fandom that week — your read on them holds up regardless of the discourse.",
    },
    day: {
      same: "You clocked what makes them genuinely great before the general public caught on — this is the kind of bias radar that doesn't miss with them. Long before an era went viral or a performance made the rounds online, you already knew exactly what they were capable of.",
      otherGeneratesMe: "You see clearly how much quiet generosity is behind what they do — that's not lost on you, even when it's easy to overlook. Where a casual viewer might just see a good performance, you clock the care and effort underneath it every time.",
      iGenerateOther: "You notice their real skill before anyone else does, and you say so — that eye for talent is part of why you became a fan in the first place. You were never just along for the ride; you were the one pointing out what made them different.",
      otherOvercomesMe: "You keep circling back to figuring out what actually makes them so compelling — that itch to fully 'get' them never quite resolves. Every time you think you've landed on it, another layer shows up that keeps the question open.",
      iOvercomeOther: "You read their real strengths accurately, and that clear-eyed take is exactly what makes your support feel earned, not blind. You're not hyping them up out of loyalty alone — you actually know, specifically, what they're good at and why.",
    },
    time: {
      same: "Even their smallest habits — a laugh, a phrase, a way of tilting their head — read as charming to you, not just their obvious highlights. It's the tiny, unscripted things that stick with you longest, more than any polished moment ever could.",
      otherGeneratesMe: "Even a small, offhand gesture from them tends to stick with you longer than it probably should — that's this bias's quiet power. A passing comment, a small kindness caught on camera — it lingers in your mind well past the moment itself.",
      iGenerateOther: "You're the type to catch the small details — a lyric change, a background choice — that most people scroll past without noticing. Half the fun of following them is finding the tiny things nobody else clocked.",
      otherOvercomesMe: "Even tiny, easy-to-miss details from them pull you into a rabbit hole you didn't plan on going down. One small, unexplained thing is enough to send you down a whole research spiral at 2am.",
      iOvercomeOther: "You're the one who notices the small, easy-to-miss details — and somehow that's exactly what makes you appreciate them more, not less. The little things other fans overlook are usually the reason your loyalty holds steady.",
    },
  },
  ko: {
    year: {
      same: "왜 하필 이 최애였는지 고민할 필요도 없었어요 — 처음부터 내 에너지를 그대로 보는 느낌이라 끌림이 즉각적이었을 거예요. '왜 좋아하지'가 아니라 '당연히 좋아하지'에 가까운 확신이라, 누구한테 설명할 필요도 없었을 거예요.",
      otherGeneratesMe: "애써 좋아하려고 노력할 필요가 없었어요 — 처음 봤을 때부터 마음이 편해지는 존재였을 거예요. 팬이 되기로 결심하기도 전에 그 존재감 자체가 마음을 편안하게 해줘서, 이 최애는 선택이라기보다 그냥 자연스럽게 다가온 안도감에 가까웠을 거예요.",
      iGenerateOther: "끌리는 게 빨랐고, 일단 빠지고 나면 완전히 다 쏟아붓는 편이에요 — 이 최애한테는 원래 그래요. 천천히 관심이 쌓인 게 아니라 스위치 켜지듯 확 빠졌고, 한번 켜지고 나면 그 마음이 자연스럽게 계속 이어졌을 거예요.",
      otherOvercomesMe: "이렇게까지 빠질 계획은 없었어요 — 한 번 보고 나니 호기심이 판단보다 먼저 움직였을 거예요. 덕질하기로 계산해서 정한 게 아니라, 미처 알아채기도 전에 이미 끌려 들어가 있었던 쪽에 가까워요.",
      iOvercomeOther: "화제성보다는 직감으로 끌렸어요 — 남들이 얘기하기 전에 이미 이 최애한테서 뭔가를 알아봤을 거예요. 다들 이 최애가 왜 중요한지 뒤늦게 알아채는 동안, 나는 이미 조용히 결론을 내리고 있었을 거예요.",
    },
    month: {
      same: "취향이 워낙 잘 맞아서 따라가는 게 전혀 어색하지 않아요 — 원래 좋아하던 결 그대로예요. 컨셉도, 음악도, 심지어 유머 코드까지 원래 내 취향이 있던 자리에 정확히 내려앉아요.",
      otherGeneratesMe: "이 최애 특유의 분위기가 마음을 다독여줘서, 따라가는 게 전혀 부담스럽지 않아요. 아무것도 요구하지 않는 편안한 기운이 있는 최애라, 덕질이 오히려 마음을 가볍게 만들어줘요.",
      iGenerateOther: "취향이 잘 맞아서 응원하는 게 억지로 하는 척이 아니라, 원래 좋아하던 걸 그대로 이어가는 느낌이에요. 낯선 걸 애써 좋아하려는 게 아니라, 원래 자연스러웠던 취향을 그대로 더 많이 하는 느낌에 가까워요.",
      otherOvercomesMe: "취향이랑 이 최애가 하는 것 사이에 묘한 마찰이 있어서, 평소보다 더 유심히 보게 돼요. 완전히 안 맞는 것도 아니고 완전히 딱 맞는 것도 아닌 그 미묘한 틈이, 오히려 대충 넘기지 않고 계속 신경 쓰게 만들어요.",
      iOvercomeOther: "차분한 취향 덕분에 유행보다 진짜 좋은 점을 알아보는 편이에요. 그 주에 팬덤에서 시끄러운 얘기에 휘둘리지 않고, 이 최애를 보는 내 시선은 여론과 상관없이 늘 한결같아요.",
    },
    day: {
      same: "다들 알아보기 전에 이미 이 최애가 진짜 잘하는 걸 알아챘을 거예요 — 이 최애한테는 최애 레이더가 절대 빗나가지 않아요. 어떤 시대가 화제 되거나 무대 하나가 여기저기 퍼지기 훨씬 전부터, 이미 이 사람이 뭘 할 수 있는지 알고 있었을 거예요.",
      otherGeneratesMe: "이 최애가 얼마나 조용히 다정한 사람인지 잘 알아채는 편이에요 — 놓치기 쉬운 부분인데도요. 그냥 지나치듯 보는 사람에겐 좋은 무대로만 보일 걸, 나는 매번 그 밑에 깔린 정성과 노력까지 챙겨서 봐요.",
      iGenerateOther: "남들보다 먼저 이 최애의 진짜 실력을 알아채고 말로도 표현하는 편이에요 — 그 안목이 애초에 팬이 된 이유이기도 해요. 그냥 따라가는 팬이 아니라, 뭐가 다른지 제일 먼저 짚어준 쪽에 가까웠을 거예요.",
      otherOvercomesMe: "이 최애가 대체 뭐가 그렇게 끌리는 건지 계속 알아내려고 하게 돼요 — 완전히 다 파악했다는 느낌이 좀처럼 안 들거든요. 답을 찾았다 싶을 때마다 또 다른 층위가 나타나서, 그 궁금증이 계속 열려있는 채로 남아요.",
      iOvercomeOther: "이 최애의 진짜 강점을 정확하게 읽어내는 편이라, 응원하는 마음도 맹목적이지 않고 근거가 있어요. 그냥 의리로 밀어주는 게 아니라, 정확히 뭘 잘하는지 알고 있어서 나오는 응원이에요.",
    },
    time: {
      same: "웃는 방식이나 말버릇처럼 사소한 것까지 다 매력으로 느껴져요 — 눈에 띄는 장점만이 아니라요. 화려하게 편집된 순간보다, 각본 없는 그 작은 것들이 오히려 오래 마음에 남아요.",
      otherGeneratesMe: "이 최애의 사소한 행동 하나가 생각보다 오래 마음에 남을 거예요 — 이 조합만의 조용한 힘이에요. 지나가듯 한 말이나 카메라에 잡힌 작은 다정함 하나가, 그 순간이 지나고도 한참 머릿속에 남아요.",
      iGenerateOther: "가사 한 줄 바뀐 거, 무대 배경 하나까지 대부분 그냥 지나치는 디테일을 꼭 챙기는 타입이에요. 이 최애를 따라가는 재미의 절반은, 아무도 못 알아챈 그 작은 걸 찾아내는 데 있어요.",
      otherOvercomesMe: "사소하고 놓치기 쉬운 디테일 하나에도 계획에 없던 토끼굴로 빠지게 될 거예요. 설명 안 된 작은 것 하나만으로도 새벽 2시에 자료 파는 여정이 시작되기 충분해요.",
      iOvercomeOther: "남들이 놓치는 사소한 디테일을 잘 알아채는 편인데, 그게 오히려 더 좋아하게 만드는 이유가 돼요. 다른 팬들이 그냥 지나치는 작은 부분들이, 보통 내 마음이 계속 한결같은 진짜 이유예요.",
    },
  },
};

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
      goodFit: {
        subheading: 'No Translation Needed',
        text: "You'd never have to explain your taste to them — your bias basically already gets why you stream what you stream and skip what you skip. Fan content that requires zero context works instantly here: inside jokes, era references, all of it lands without a caption.\n\nYou'd never feel like you're performing fan enthusiasm for an audience that doesn't get it — this energy is mutual, not one-sided. Following this bias feels less like keeping up and more like recognizing your own taste reflected back at you, with no adjustment period and no 'growing into' the bias required.",
      },
      watchFor: {
        subheading: 'Keep a Little Critical Distance',
        text: "Because everything clicks so easily, it's worth occasionally stepping back and looking at this bias with a little more critical distance — twin-flame energy can tip into blind loyalty if you let it run unchecked. You might find yourself agreeing with every take a bias like this makes, which is worth double-checking every so often; make sure it's really your own read, not just an echo.\n\nMatching energy like this can make it easy to overlook actual missteps, so a little healthy skepticism keeps the fandom experience honest rather than uncritical. It's also easy to assume you already 'get' everything about them without digging deeper — worth still doing the reading, not just riding the vibe, and worth keeping an eye on balance with the rest of your interests too.",
      },
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
      goodFit: {
        subheading: 'Comfort Content, No Effort Required',
        text: "This bias is the kind of low-effort, high-comfort fandom experience you don't have to work for — their content just consistently makes your day a little better without you chasing it. You don't need a hype-up moment to enjoy this bias either; their presence in your feed is steady, reliable comfort content, no dramatic highs needed to feel good about it.\n\nThis is the bias you return to on a bad day without even thinking about it — familiar, calming, always there when you need it. Following them takes almost no emotional labor, since the good feelings show up on their own, and they tend to notice what fans actually need in ways that make following them feel easy rather than effortful.",
      },
      watchFor: {
        subheading: "Ease Shouldn't Mean Zero Effort",
        text: "It's easy to become a quiet, passive fan of a bias like this — worth actually engaging (streaming, voting, commenting) instead of just enjoying quietly from a distance. Comfort like this can slide into complacency if you let it, so it's worth still paying attention to their actual growth and choices, not just vibing on autopilot.\n\nBecause this bias asks so little of you, it's easy to under-support them when it actually counts — comebacks, votes, streams — so the ease shouldn't mean the effort disappears entirely. This kind of steady fandom can also stay pleasant but shallow if you never dig past surface-level content into their actual artistry, so it's worth going a little deeper every once in a while.",
      },
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
      goodFit: {
        subheading: 'Your Devotion Has Real Purpose',
        text: "Your enthusiasm here is genuine, not performative — this bias tends to bring out a more devoted, more generous version of your fan self than usual. You're the type to notice their small wins before anyone else does, which makes you a genuinely valuable presence in this fandom rather than just another voice in the crowd.\n\nThis bias gives your fan energy real purpose — streaming, voting, defending them tends to leave you feeling more like yourself, not less. Idols notice fans like this too, even indirectly; this kind of devotion rarely goes completely unseen, even from a distance, and it brings out a warmth in your fan behavior that's easy to lose in more casual, low-investment fandoms.",
      },
      watchFor: {
        subheading: 'Keep the Devotion Sustainable',
        text: "Keep an eye on the balance — this bias works best when your enthusiasm doesn't come at the cost of your own time, money, or energy in the long run. It's worth checking whether you're streaming or voting out of habit or genuine excitement, since burnout sneaks up on the most devoted fans first, often before they notice it happening.\n\nGenerosity toward a bias who never quite reaches you personally can be its own kind of one-sided, so make sure this fandom still feels good, not just dutiful. You may find yourself the loudest defender in every group chat — worth pacing yourself so advocacy doesn't tip into exhaustion, since the same devotion that makes you a great fan can run you thin if fandom life never gives anything back.",
      },
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
      goodFit: {
        subheading: 'The Tension Keeps It Genuinely Exciting',
        text: "The tension here keeps fandom genuinely exciting — you're unlikely to ever feel like you've fully 'figured out' this bias, and that's honestly part of the appeal. This bias pushes you to actually pay attention — lyrics, interviews, small details — instead of following passively the way you might with an easier match.\n\nThe unpredictability is exactly what turns a passing interest into a years-long bias, since this kind of pull rarely fades quickly once it takes hold. Obsessing a little over this bias is part of the fun — the overanalyzing, the rewatching, the parsing every glance is half the appeal, and it teaches you real things about your own taste along the way.",
      },
      watchFor: {
        subheading: 'Pace the Obsession',
        text: "This kind of consuming bias can eat up more time and headspace than casual fandom, so it's worth checking in on balance every so often rather than letting it run unchecked. It's easy to read every ambiguous moment — a look, a lyric, a caption — as more meaningful than it actually is, so a little healthy skepticism goes a long way here.\n\nObsessive energy like this can tip into parasocial overreach if left unchecked, so it's worth remembering the actual boundary between fan and idol as this deepens. The unpredictability that makes this bias magnetic can also make the fandom experience emotionally exhausting, so pace yourself — this one rewards curiosity more than certainty, and that restlessness is just part of the deal.",
      },
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
      goodFit: {
        subheading: 'Others Look to You for Context',
        text: "You bring a protective, organizing energy to this fandom without even trying — the kind of fan who keeps the group chat civil and the misinformation corrected before it spreads. Your instinct to take charge is genuinely useful here; you're the one others in the fandom end up looking to for context and clarity when things get confusing.\n\nYou tend to notice PR issues or misinformation before they spread, which makes you a genuinely useful presence in this fanbase rather than just another bystander. This bias gives you room to lead within the fandom without being asked to — a role you're probably already comfortable in, and other fans lean on your steadiness more than they say out loud.",
      },
      watchFor: {
        subheading: 'Leave Room for Other Takes',
        text: "Watch that protective energy doesn't slide into gatekeeping — not every fan engages the way you do, and that's genuinely fine, not a problem to correct. Because you're comfortable taking charge in group chats and fan spaces, it's worth deliberately making room for other perspectives too, even when your read feels obviously right.\n\nBeing the 'responsible' fan all the time is its own kind of tiring, so it's okay to just enjoy this bias sometimes without moderating everyone else's experience. Your opinions carry real weight in this fandom, which means offhand takes can land harder than intended — worth being a little more deliberate, and worth checking occasionally whether you're advocating for the idol or just enjoying being right in fandom debates.",
      },
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
      goodFit: {
        subheading: '번역이 필요 없는 사이',
        text: "이 최애한테는 내 취향을 따로 설명할 필요가 없어요 — 왜 이 곡은 스밍하고 저건 넘기는지, 최애가 이미 다 이해하고 있는 느낌이에요. 설명 없이도 바로 통하는 팬 콘텐츠가 많은 조합이에요 — 인사이드 조크도, 시대별 레퍼런스도 캡션 없이 바로 이해될 거예요.\n\n이해 못 하는 사람들 앞에서 애써 팬심을 설명할 필요가 없어요 — 이 텐션은 일방통행이 아니라 진짜 서로 통하는 느낌이에요. 이 최애를 따라가는 건 뒤쫓는다는 느낌보다는, 내 취향이 그대로 반영된 걸 발견하는 느낌에 가까워요, 적응 기간 없이 처음부터 잘 맞는 최애니까요.",
      },
      watchFor: {
        subheading: '가끔은 조금 거리를 두고 보세요',
        text: "다 잘 맞으니까 가끔은 이 최애를 조금 더 객관적으로 보는 것도 좋아요 — 완벽한 싱크로율이 자칫 맹목적인 팬심으로 흘러갈 수 있거든요. 이 최애가 하는 말이나 선택에 뭐든 다 동의하게 될 수도 있어요 — 진짜 내 생각인지, 그냥 따라가는 건지 가끔 점검해보세요.\n\n이렇게 잘 맞으면 실수도 그냥 넘어가기 쉬워요 — 건강한 비판적 시선도 팬 생활을 더 오래 즐겁게 만들어줘요. 다 알고 있다고 넘겨짚기 쉬운데, 그래도 꾸준히 알아가려는 노력은 필요해요 — 그냥 텐션에만 올라타지 말고요, 다른 관심사와의 균형도 가끔 챙겨보세요.",
      },
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
      goodFit: {
        subheading: '애쓰지 않아도 되는 힐링 콘텐츠',
        text: "이 최애는 애쓰지 않아도 편하게 즐길 수 있는 덕질이에요 — 콘텐츠가 나올 때마다 꾸준히 하루를 조금씩 나아지게 만들어줘요. 이 최애를 즐기는 데 특별한 텐션업 계기가 필요 없어요 — 피드에 뜨는 것만으로도 편안한 힐링 콘텐츠가 돼요.\n\n힘든 날 별생각 없이 다시 찾게 되는 최애예요 — 익숙하고, 마음이 놓이고, 늘 그 자리에 있어줘요. 이 최애를 따라가는 데 감정 소모가 거의 없어요 — 컴백 텐션을 애써 쫓지 않아도 좋은 기분이 알아서 찾아오고, 팬들이 뭘 원하는지 잘 챙기는 편이라 덕질이 힘들지 않고 자연스러워요.",
      },
      watchFor: {
        subheading: '편하다고 노력까지 사라지면 안 돼요',
        text: "이런 최애는 조용한 관망 팬으로 남기 쉬워요 — 멀리서 즐기기만 하지 말고 스밍·투표·댓글로 직접 참여해보는 것도 좋아요. 이런 편안함이 무관심으로 이어지지 않게 조심하세요 — 그냥 흘려보지 말고 최애의 실제 활동과 선택에도 관심을 가져보세요.\n\n이 최애가 나한테 별로 요구하는 게 없다 보니, 정작 중요한 순간(컴백, 투표, 스밍)에 힘을 덜 보태게 될 수 있어요 — 편하다고 노력까지 사라지면 안 돼요. 이런 편안한 덕질은 표면적인 콘텐츠만 보다가 끝날 수 있어요 — 좀 더 깊이 있는 활동이나 커리어까지 가끔은 챙겨보는 것도 의미 있어요.",
      },
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
      goodFit: {
        subheading: '이 헌신엔 진짜 의미가 있어요',
        text: "이 최애를 향한 팬심은 억지가 아니라 진심이에요 — 더 헌신적이고 다정한 팬으로서의 내 모습을 끌어내는 조합이에요. 다른 사람보다 먼저 최애의 작은 성과를 알아채는 편이라, 이 팬덤 안에서 그냥 스쳐가는 목소리가 아니라 은근히 소중한 존재가 돼요.\n\n이 최애는 팬 활동에 진짜 의미를 부여해줘요 — 스밍하고, 투표하고, 지켜주는 게 오히려 나를 더 나답게 만들어줘요. 직접적으로 티는 안 나도 아이돌 쪽에서도 이런 팬을 알아보는 경우가 많고, 여러 최애를 가볍게 좋아할 때는 잘 안 나오는 따뜻한 팬심이 이 최애한테서는 자연스럽게 나와요.",
      },
      watchFor: {
        subheading: '헌신도 지속 가능해야 해요',
        text: "균형을 계속 살펴보세요 — 이 팬심은 내 시간, 돈, 에너지를 희생하지 않는 선에서 즐기는 게 제일 오래가요. 습관적으로 스밍하고 투표하는 건지, 진짜 신나서 하는 건지 가끔 점검해보세요 — 번아웃은 가장 열심인 팬한테 제일 먼저, 그것도 눈치채기도 전에 찾아와요.\n\n일방적으로 마음만 쓰는 팬심도 있어요 — 이 덕질이 여전히 즐거운지, 그냥 의무처럼 느껴지진 않는지 확인해보세요. 단톡방에서 제일 목소리 큰 방어자가 될 수도 있어요 — 지치지 않게 페이스 조절도 필요해요, 좋은 팬을 만드는 그 헌신이 아무것도 안 돌아오는 상태가 오래되면 나를 지치게 할 수 있으니까요.",
      },
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
      goodFit: {
        subheading: '그 텐션이 진짜 재미를 만들어요',
        text: "이 텐션 덕분에 덕질이 지루할 틈이 없어요 — 이 최애를 완전히 다 파악했다는 느낌이 잘 안 들거든요, 그게 오히려 매력이에요. 이 최애는 그냥 스쳐 지나가지 않고 가사, 인터뷰, 작은 디테일까지 실제로 챙겨보게 만들어요, 수동적으로 따라가는 게 아니라요.\n\n예측 불가능함이야말로 잠깐의 관심을 몇 년짜리 최애로 바꾸는 힘이에요 — 이런 끌림은 쉽게 사그라들지 않아요. 이 최애한테 살짝 집착하는 것도 즐거움의 일부예요 — 과몰입해서 다시 보고, 눈빛 하나 분석하고, 그 과정에서 내 취향에 대해서도 알게 돼요.",
      },
      watchFor: {
        subheading: '몰입에도 페이스 조절이 필요해요',
        text: "이렇게 몰입도 높은 최애는 라이트 덕질보다 시간과 정신적 에너지를 더 많이 가져갈 수 있어요 — 가끔은 균형을 점검해보세요. 애매한 순간(눈빛, 가사, 캡션)을 실제보다 더 의미 있게 해석하기 쉬워요 — 적당한 거리감도 필요해요.\n\n이런 몰입 에너지가 과도해지면 파라소셜한 착각으로 이어질 수 있어요 — 팬과 아이돌 사이의 실제 거리를 잊지 않는 게 중요해요. 이 최애를 자석처럼 끌리게 만드는 그 예측 불가능함이 감정적으로는 조금 지치게 만들 수도 있으니, 확실함보다 궁금증을 계속 자극하는 이 타입의 최애에겐 페이스 조절이 특히 필요해요.",
      },
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
      goodFit: {
        subheading: '다들 나를 찾아와요',
        text: "애쓰지 않아도 이 팬덤 안에서 보호자 같은 존재가 돼요 — 단톡방 분위기 지키고, 잘못된 정보 퍼지기 전에 바로잡는 그런 역할이요. 주도하는 성향이 여기서 특히 유용해요 — 팬덤 안에서 다들 맥락이나 정확한 정보를 나한테 물어보게 돼요.\n\n논란이나 잘못된 정보가 퍼지기 전에 먼저 알아채는 편이라, 이 팬베이스 안에서 진짜 쓸모 있는 존재가 돼요. 이 최애는 팬덤 안에서 부탁받지 않아도 자연스럽게 리드하는 역할을 맡게 해주고, 다른 팬들도 말은 안 해도 내 든든함에 많이 기대는 편이에요.",
      },
      watchFor: {
        subheading: '다른 목소리를 위한 자리도 남기세요',
        text: "보호하려는 마음이 선 넘는 검열로 흐르지 않게 조심하세요 — 모든 팬이 나처럼 덕질하는 건 아니고, 그래도 괜찮아요. 단톡방이나 팬 커뮤니티에서 주도하는 게 편하다 보니, 일부러라도 다른 의견이 들어올 자리를 남겨두는 게 좋아요.\n\n항상 '책임감 있는' 팬으로 있는 것도 나름 피곤한 일이에요 — 남들 덕질까지 관리하지 않고 그냥 즐기기만 해도 괜찮아요. 이 팬덤 안에서 내 의견은 꽤 무게가 있어서, 무심코 한 말도 예상보다 크게 받아들여질 수 있어요 — 내가 최애를 위해 나서는 건지, 논쟁에서 이기고 싶은 건지 가끔 스스로 점검해보세요.",
      },
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

/**
 * Picks compatibility copy for a relation, stable per user+idol pair.
 * Returns the tier name, the seeded `line` (5 variants, picked as always),
 * `goodFit`/`watchFor` — each a fixed { subheading, text } per relation
 * rather than a seeded pick, since they're long enough now (multi-paragraph
 * reads) that one well-written entry per relation serves better than 5
 * near-duplicate variants — and `situational`, a pillar-by-pillar
 * compatibility read built from `pillarCompat` (see getPillarCompatibility
 * in utils/saju.js), one entry per pillar in the order it was given
 * (year/month/day[/time]).
 */
export function getIdolMatchCopy(lang, relation, seedInput, pillarCompat = []) {
  const entry = (idolMatchTemplates[lang] || idolMatchTemplates.en)[relation];
  const pillarBank = pillarSituational[lang] || pillarSituational.en;
  const seed = hashCode(seedInput);
  const idx = seed % entry.lines.length;
  return {
    tier: entry.tier,
    line: entry.lines[idx],
    goodFit: entry.goodFit,
    watchFor: entry.watchFor,
    situational: pillarCompat.map(({ pillar, relation: pillarRelation }) => ({
      pillar,
      text: pillarBank[pillar][pillarRelation],
    })),
  };
}
