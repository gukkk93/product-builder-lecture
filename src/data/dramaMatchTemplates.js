// K-drama actor match copy — same Five Element relationship keys as
// idolMatchTemplates.js, reworded around watching/following an actor's
// career instead of a K-pop idol's fandom activities.
//
// Each relation has three parallel line banks (line/goodFit/watchFor), all
// the same length, picked with the same seeded index so the three texts
// read as one consistent "read" rather than three random fragments.
//
// Per-pillar situational content, keyed [pillar][relation] — same mechanic
// as idolMatchTemplates.js's pillarSituational, reworded around watching an
// actor's career instead of a K-pop idol's fandom activities. The relation
// here is each *pillar's own* Five Element relation (from
// getPillarCompatibility), independent of the overall relation used for
// tier/lines/goodFit/watchFor above. Framing stays fan-intimacy language
// throughout ("why you were drawn in", "why their work feels easy") — never
// couple/romantic-partner framing.
export const pillarSituational = {
  en: {
    year: {
      same: "There wasn't really a debate about why you got into their work — the pull was instant, like recognizing your own instincts on screen. It's less 'why do I like this actor' and more 'of course I like this actor,' a certainty that never really needed explaining.",
      otherGeneratesMe: "You didn't have to talk yourself into liking them — their presence on screen just made things easier from the first project you saw. Something about how they carried a scene settled you before you'd even decided to follow their career, which is exactly why this favorite never felt like a choice so much as a relief.",
      iGenerateOther: "You were drawn to them fast, and once you were in, you were all in — that's just how this actor works for you. There wasn't a slow build-up; it was more like flipping a switch, and once it flipped, your loyalty just followed naturally.",
      otherOvercomesMe: "You didn't plan on getting this invested — one scene and the curiosity took over before you decided anything. It wasn't a calculated decision to become a fan; it was closer to getting pulled in before you'd fully registered what was happening.",
      iOvercomeOther: "You were drawn in less by hype and more by instinct — you clocked something in them worth watching before anyone told you to. While other people were catching up on why this actor mattered, you'd already quietly decided.",
    },
    month: {
      same: "Your taste and their choices line up so closely that following their career never feels like an adjustment — it already matches what draws you in. The projects they pick, the roles they take, even their sense of humor in interviews all land exactly where your taste already lives.",
      otherGeneratesMe: "Their whole screen presence settles something in you, which is exactly why following their career never feels like effort. There's a specific kind of ease that comes from an actor whose work doesn't ask anything of you — it just makes things lighter.",
      iGenerateOther: "Their choices line up with your taste enough that supporting them never feels like performance — it's just an extension of what you already like. You're not stretching to appreciate something unfamiliar; you're just doing more of what already came naturally.",
      otherOvercomesMe: "There's a friction between what you like and what they choose to do that keeps you paying closer attention than usual. It's not quite a mismatch, but it's not seamless either — and that gap is exactly what keeps you actually watching instead of coasting.",
      iOvercomeOther: "Your steadier taste means you see through the noise to what's actually good about their work, not just what's trending. You're not swayed by whatever's loud that week — your read on their career holds up regardless of the discourse.",
    },
    day: {
      same: "You clocked what makes them genuinely talented before the reviews caught up — this is the kind of eye that doesn't miss with them. Long before a performance made headlines or a role went viral, you already knew exactly what they were capable of.",
      otherGeneratesMe: "You see clearly how much quiet skill is behind their performances — that's not lost on you, even when it's easy to overlook. Where a casual viewer might just see a good scene, you clock the craft underneath it every time.",
      iGenerateOther: "You notice their real skill before anyone else does, and you say so — that eye for talent is part of why you became a fan in the first place. You were never just along for the ride; you were the one pointing out what made them different.",
      otherOvercomesMe: "You keep circling back to figuring out what actually makes them so compelling — that itch to fully 'get' them never quite resolves. Every time you think you've landed on it, another layer shows up that keeps the question open.",
      iOvercomeOther: "You read their real strengths accurately, and that clear-eyed take is exactly what makes your support feel earned, not blind. You're not hyping them up out of loyalty alone — you actually know, specifically, what they're good at and why.",
    },
    time: {
      same: "Even their smallest choices — a pause, a glance, a line reading — read as impressive to you, not just the obvious big scenes. It's the tiny, unscripted-feeling moments that stick with you longest, more than any big dramatic beat ever could.",
      otherGeneratesMe: "Even a small, easy-to-miss choice in a scene tends to stick with you longer than it probably should — that's this actor's quiet power. A subtle line delivery, a small gesture — it lingers in your mind well past the scene itself.",
      iGenerateOther: "You're the type to catch the small details — a line delivery, a background choice — that most people scroll past without noticing. Half the fun of following their career is finding the tiny things nobody else clocked.",
      otherOvercomesMe: "Even a tiny, easy-to-miss choice pulls you into a rewatch spiral you didn't plan on. One small, unexplained line reading is enough to send you into a whole rewatch at 2am.",
      iOvercomeOther: "You're the one who notices the small, easy-to-miss choices — and somehow that's exactly what makes you appreciate them more, not less. The little things other fans overlook are usually the reason your loyalty holds steady.",
    },
  },
  ko: {
    year: {
      same: "왜 하필 이 배우였는지 고민할 필요도 없었어요 — 화면 속에서 내 감각을 그대로 보는 느낌이라 끌림이 즉각적이었을 거예요. '왜 좋아하지'가 아니라 '당연히 좋아하지'에 가까운 확신이라, 딱히 설명이 필요한 적도 없었을 거예요.",
      otherGeneratesMe: "애써 좋아하려고 노력할 필요가 없었어요 — 처음 본 작품부터 마음이 편해지는 존재였을 거예요. 커리어를 따라가기로 결심하기도 전에 그 장면 하나가 마음을 편안하게 해줘서, 이 배우는 선택이라기보다 그냥 자연스럽게 다가온 안도감에 가까웠을 거예요.",
      iGenerateOther: "끌리는 게 빨랐고, 일단 빠지고 나면 완전히 다 쏟아붓는 편이에요 — 이 배우한테는 원래 그래요. 천천히 관심이 쌓인 게 아니라 스위치 켜지듯 확 빠졌고, 한번 켜지고 나면 그 마음이 자연스럽게 계속 이어졌을 거예요.",
      otherOvercomesMe: "이렇게까지 빠질 계획은 없었어요 — 장면 하나 보고 나니 호기심이 판단보다 먼저 움직였을 거예요. 팬이 되기로 계산해서 정한 게 아니라, 미처 알아채기도 전에 이미 끌려 들어가 있었던 쪽에 가까워요.",
      iOvercomeOther: "화제성보다는 직감으로 끌렸어요 — 남들이 얘기하기 전에 이미 이 배우한테서 뭔가를 알아봤을 거예요. 다들 이 배우가 왜 좋은지 뒤늦게 알아채는 동안, 나는 이미 조용히 결론을 내리고 있었을 거예요.",
    },
    month: {
      same: "취향이랑 이 배우의 선택이 워낙 잘 맞아서 커리어를 따라가는 게 전혀 어색하지 않아요. 고르는 작품도, 맡는 배역도, 인터뷰에서 보이는 유머 코드까지 원래 내 취향이 있던 자리에 정확히 내려앉아요.",
      otherGeneratesMe: "이 배우 특유의 스크린 존재감이 마음을 다독여줘서, 커리어를 따라가는 게 전혀 부담스럽지 않아요. 아무것도 요구하지 않는 편안한 존재감이 있는 배우라, 팬으로 지켜보는 게 오히려 마음을 가볍게 만들어줘요.",
      iGenerateOther: "취향이 이 배우의 선택과 잘 맞아서 응원하는 게 억지가 아니라, 원래 좋아하던 걸 그대로 이어가는 느낌이에요. 낯선 걸 애써 좋아하려는 게 아니라, 원래 자연스러웠던 취향을 그대로 더 많이 하는 느낌에 가까워요.",
      otherOvercomesMe: "취향이랑 이 배우의 선택 사이에 묘한 마찰이 있어서, 평소보다 더 유심히 보게 돼요. 완전히 안 맞는 것도 아니고 완전히 딱 맞는 것도 아닌 그 미묘한 틈이, 오히려 대충 넘기지 않고 계속 신경 쓰게 만들어요.",
      iOvercomeOther: "차분한 취향 덕분에 유행보다 진짜 좋은 연기를 알아보는 편이에요. 그 주에 시끄러운 화제에 휘둘리지 않고, 이 배우를 보는 내 시선은 여론과 상관없이 늘 한결같아요.",
    },
    day: {
      same: "리뷰가 나오기도 전에 이미 이 배우가 진짜 잘한다는 걸 알아챘을 거예요 — 이 배우한테는 안목이 절대 빗나가지 않아요. 어떤 연기가 화제 되거나 배역이 여기저기 회자되기 훨씬 전부터, 이미 이 사람이 뭘 할 수 있는지 알고 있었을 거예요.",
      otherGeneratesMe: "이 배우 연기 안에 숨어 있는 조용한 실력을 잘 알아채는 편이에요 — 놓치기 쉬운 부분인데도요. 그냥 지나치듯 보는 사람에겐 좋은 장면으로만 보일 걸, 나는 매번 그 밑에 깔린 공력까지 챙겨서 봐요.",
      iGenerateOther: "남들보다 먼저 이 배우의 진짜 실력을 알아채고 말로도 표현하는 편이에요 — 그 안목이 애초에 팬이 된 이유이기도 해요. 그냥 따라가는 팬이 아니라, 뭐가 다른지 제일 먼저 짚어준 쪽에 가까웠을 거예요.",
      otherOvercomesMe: "이 배우가 대체 뭐가 그렇게 끌리는 건지 계속 알아내려고 하게 돼요 — 완전히 다 파악했다는 느낌이 좀처럼 안 들거든요. 답을 찾았다 싶을 때마다 또 다른 층위가 나타나서, 그 궁금증이 계속 열려있는 채로 남아요.",
      iOvercomeOther: "이 배우의 진짜 강점을 정확하게 읽어내는 편이라, 응원하는 마음도 맹목적이지 않고 근거가 있어요. 그냥 의리로 밀어주는 게 아니라, 정확히 뭘 잘하는지 알고 있어서 나오는 응원이에요.",
    },
    time: {
      same: "잠깐의 정지, 눈빛, 대사 톤처럼 사소한 것까지 다 인상적으로 느껴져요 — 눈에 띄는 명장면만이 아니라요. 각본에 없는 듯한 그 작은 순간들이, 오히려 큰 명장면보다 더 오래 마음에 남아요.",
      otherGeneratesMe: "장면 속 사소한 선택 하나가 생각보다 오래 마음에 남을 거예요 — 이 배우만의 조용한 힘이에요. 미묘한 대사 톤이나 작은 몸짓 하나가, 그 장면이 지나고도 한참 머릿속에 남아요.",
      iGenerateOther: "대사 톤 하나, 배경 소품 하나까지 대부분 그냥 지나치는 디테일을 꼭 챙기는 타입이에요. 이 배우를 따라가는 재미의 절반은, 아무도 못 알아챈 그 작은 걸 찾아내는 데 있어요.",
      otherOvercomesMe: "사소하고 놓치기 쉬운 선택 하나에도 계획에 없던 정주행에 빠지게 될 거예요. 설명 안 된 대사 톤 하나만으로도 새벽 2시에 정주행이 시작되기 충분해요.",
      iOvercomeOther: "남들이 놓치는 사소한 선택을 잘 알아채는 편인데, 그게 오히려 더 좋아하게 만드는 이유가 돼요. 다른 팬들이 그냥 지나치는 작은 부분들이, 보통 내 마음이 계속 한결같은 진짜 이유예요.",
    },
  },
};

export const dramaMatchTemplates = {
  en: {
    same: {
      tier: 'Screen Soulmates',
      lines: [
        "You two would be running on the exact same frequency — less admiring someone different from you, more recognizing a slightly more polished version of your own energy on screen.",
        "Same element, same wavelength. You'd get their choices immediately — why they took that role, why that scene worked — no explaining required.",
        "This is the kind of parasocial connection that feels less like fantasy and more like familiarity. You'd rewatch their interviews and just get it.",
        "Matching energy like this means you'd never have to talk yourself into liking their next project — you'd already be there opening night.",
        "Watching them feels less like watching a stranger and more like watching a slightly more glamorous version of yourself hit their mark.",
      ],
      goodFit: {
        subheading: 'No Justification Needed',
        text: "You'd never have to justify your watchlist to them — their choices basically already match the taste you already have, before you even explain why. No context is needed to enjoy their work with other fans either; the references, the callbacks, all of it lands without explanation.\n\nYou'd never feel like you're talking yourself into liking a project of theirs — the excitement is already there, mutual and immediate. Following their career feels less like keeping up and more like watching your own instincts play out on screen, with no warming-up period required to become a fan.",
      },
      meetingScenario: {
        subheading: 'Conversation That Just Flows',
        text: "With this kind of chemistry, running into them at a premiere would probably feel easy from the first hello — talking about their films or their filmography wouldn't feel forced at all. Your prepared questions would likely lead somewhere natural, and they'd probably react just as comfortably back.",
      },
      watchFor: {
        subheading: 'Watch With a Slightly More Critical Eye',
        text: "Because everything clicks so easily, it's worth occasionally watching their work with a more critical eye — matching taste can tip into uncritical hype if you let it run unchecked. You might end up agreeing with every casting choice or interview take of theirs by default, which is worth double-checking every so often; make sure it's your own read, not just an echo.\n\nMatching taste like this can make it easy to overlook an actual weak performance, so a little honesty keeps the fandom fun instead of blind. It's also easy to assume you already 'get' their whole career without digging into the earlier, lesser-known work — worth doing the deep cuts too, and worth leaving room in your watchlist for other actors and shows.",
      },
    },
    otherGeneratesMe: {
      tier: 'Comfort Rewatch',
      lines: [
        "Their energy feeds yours — this is the actor whose scenes you replay on a hard day without quite knowing why it helps. Comfort-watching, basically.",
        "They'd be the steady, generous screen presence you put on when you need things to feel okay. Not flashy, just deeply, reliably comforting.",
        "Following their career would feel less like fandom and more like being looked after — their performances have a way of settling you.",
        "This is the actor whose new drama you clear your evening for, not out of obligation, just because it's the closest thing to a guaranteed good time.",
        "They'd be the name that makes your bad days better just by showing up in a trailer.",
      ],
      goodFit: {
        subheading: 'Comfort Viewing, No Effort Required',
        text: "This actor is the low-effort, high-comfort watch you don't have to work for — their scenes consistently make your evening better without you chasing that feeling. You don't need a big trailer moment to enjoy their work either; their presence in your queue is steady, reliable comfort viewing, no dramatic highs needed.\n\nThis is the actor you return to on a bad night without even thinking about it — familiar, calming, always a safe pick when you need one. Following their career takes almost no effort, since the good feelings show up on their own, and their interviews tend to feel like they already know what fans need.",
      },
      meetingScenario: {
        subheading: 'A Moment That Puts You At Ease',
        text: "Meeting them in person would probably feel calming before anything else — their screen presence carries over in real life, so any nerves you walked in with would likely fade fast. Even if you blank on what you planned to say, they seem like the type to gently carry the conversation for you.",
      },
      watchFor: {
        subheading: 'Push Past the Easy Picks Occasionally',
        text: "It's easy to become a passive, background fan of an actor like this — worth actually engaging (reviews, recommending them, watching opening week) instead of just enjoying quietly from a distance. Comfort-watching like this can slide into never trying their more challenging work, so it's worth pushing past the easy picks every so often.\n\nBecause this actor asks so little of your attention, you might miss when a project of theirs actually needs real support — low viewership, an underrated role — so the ease shouldn't mean zero effort. This kind of steady fandom can also stay pleasant but shallow if you never dig into their earlier or lesser-known work, so it's worth going a little deeper once in a while.",
      },
    },
    iGenerateOther: {
      tier: 'Number One Fan',
      lines: [
        "You'd be the one doing the giving here — the streams, the reviews, the group chat updates. Lucky for them, you never seem to run out of enthusiasm.",
        "This match would turn you into the friend who brings up their filmography unprompted in every conversation — not annoying, just genuinely, helplessly proud.",
        "You'd be the one live-tweeting through the finale, not because you have to, but because the excitement just pours out of you around their work.",
        "You'd find yourself defending their acting choices in comment sections in ways that surprise even you — that's the devotion this pairing brings out.",
        "This is the actor you'd clear your whole weekend for — bingeing the entire filmography, not just the new release.",
      ],
      goodFit: {
        subheading: 'This Devotion Has Real Purpose',
        text: "Your enthusiasm here is genuine, not performative — this actor tends to bring out a more devoted, more vocal version of your fan self than usual. You're the type to notice their underrated performances before anyone else does, which makes you a genuinely valuable voice in this fandom rather than just another viewer.\n\nThis match gives your viewing energy real purpose — recommending, reviewing, defending their choices tends to leave you feeling more like yourself, not less. Actors notice fans like this too, even indirectly; this kind of devotion rarely goes completely unseen, even from a distance, and it brings out a warmth in your fan behavior that's easy to lose with more casual favorites.",
      },
      meetingScenario: {
        subheading: "You'd Bring the Energy",
        text: "At a premiere, you'd probably be the one pouring energy into the conversation — there's a good chance you'd have more to say about their work than the time allows. They'd likely meet that enthusiasm warmly, which means even a short interaction could end up being one you replay for a while.",
      },
      watchFor: {
        subheading: 'Keep the Devotion Sustainable',
        text: "Keep an eye on the balance — this match works best when your enthusiasm doesn't come at the cost of your own time or energy in the long run. It's worth checking whether you're watching or reviewing out of habit or genuine excitement, since burnout sneaks up on the most devoted fans first, often before they notice it happening.\n\nGenerosity toward a favorite who never quite reaches you personally can be its own kind of one-sided, so make sure this fandom still feels good, not just dutiful. You may find yourself the loudest defender in every comment section — worth pacing yourself so advocacy doesn't tip into exhaustion, since the same devotion that makes you a great fan can run you thin if it never gives anything back.",
      },
    },
    otherOvercomesMe: {
      tier: 'Plot Twist Chemistry',
      lines: [
        "There's real friction in this pairing — the can't-look-away kind that turns a casual watch into a full rewatch spiral. Not a comfortable pick, a consuming one.",
        "Not an easy match, but a compelling one — the kind where you'd overanalyze a single trailer shot more than the whole synopsis.",
        "This is the actor who sneaks up on you — you'd insist you're \"just curious about the project\" right up until you've watched everything they've ever been in.",
        "There's an edge to this pairing that keeps things interesting; you'd never fully predict their next role, and that unpredictability is exactly the hook.",
        "Not a soft landing of a favorite — more like the performance you'd end up thinking about at inconvenient times, unable to fully explain why.",
      ],
      goodFit: {
        subheading: 'The Tension Keeps It Genuinely Exciting',
        text: "The tension here keeps following their career genuinely exciting — you're unlikely to ever feel like you've fully 'figured out' their next move, and that's honestly part of the appeal. This actor pushes you to actually pay attention — line delivery, small choices, subtext — instead of watching passively the way you might with an easier favorite.\n\nThe unpredictability is exactly what turns a casual watch into a years-long favorite, since this kind of pull rarely fades quickly once it takes hold. Obsessing a little over their filmography is part of the fun — the rewatching, the parsing every scene is half the appeal, and it teaches you real things about your own taste along the way.",
      },
      meetingScenario: {
        subheading: 'Nervous At First, Memorable After',
        text: "Meeting them for the first time might come with a flicker of nerves — the kind of actor who makes you pause for a second on how to even start the conversation. That same edge is exactly what tends to make the moment stick, resurfacing in your memory long after the event is over.",
      },
      watchFor: {
        subheading: 'Pace the Obsession',
        text: "This kind of consuming favorite can eat up more time than casual viewing, so it's worth checking in on balance every so often rather than letting it run unchecked. It's easy to read every ambiguous interview answer or casting rumor as more meaningful than it actually is, so a little healthy skepticism goes a long way here.\n\nObsessive energy like this can tip into parasocial overreach if left unchecked, so it's worth remembering the actual boundary between viewer and actor as this deepens. The unpredictability that makes this actor magnetic can also make following their career emotionally exhausting, so pace yourself — this one rewards curiosity more than certainty, and that restlessness is just part of the deal.",
      },
    },
    iOvercomeOther: {
      tier: 'Their Biggest Advocate',
      lines: [
        "You'd be the calm, grounding presence in this dynamic — the fan correcting misinformation in the comments and generally rooting for their next project, quietly and firmly.",
        "This match would bring out your protective, take-charge side. You'd be the one recommending them for roles you're convinced they'd nail.",
        "You'd be the friend who somehow ends up moderating the group chat about their new drama — organized, protective, quietly in charge of the hype.",
        "This actor would bring out your steady side — you'd be the one keeping perspective when everyone else is spiraling over one clip.",
        "You'd root for their career the way you'd root for a friend's — grounded, a little protective, always in their corner.",
      ],
      goodFit: {
        subheading: 'Others Look to You for Context',
        text: "You bring a protective, organizing energy to this fandom without even trying — the kind of fan who keeps the comment section civil and the misinformation corrected before it spreads. Your instinct to take charge is genuinely useful here; you're the one other fans end up looking to for context and recommendations when things get confusing.\n\nYou tend to notice miscasting rumors or bad-faith takes before they spread, which makes you a genuinely useful presence in this fanbase rather than just another bystander. This match gives you room to lead within the fandom without being asked to — a role you're probably already comfortable in, and other fans lean on your steadiness more than they say out loud.",
      },
      meetingScenario: {
        subheading: "You'd Set the Tone",
        text: "In person, you'd likely be the one keeping things easy and grounded — calm enough to open the conversation and put them at ease in return. Even in a short window, that steadiness tends to make for a conversation that flows without either side feeling rushed.",
      },
      watchFor: {
        subheading: 'Leave Room for Other Opinions',
        text: "Watch that protective energy doesn't slide into gatekeeping — not every fan engages the way you do, and that's genuinely fine, not a problem to correct. Because you're comfortable taking charge in fan spaces, it's worth deliberately making room for other opinions too, even when your read feels obviously right.\n\nBeing the 'responsible' fan all the time is its own kind of tiring, so it's okay to just enjoy their work sometimes without moderating everyone else's experience. Your opinions carry real weight in this fandom, which means offhand takes can land harder than intended — worth being a little more deliberate, and worth checking occasionally whether you're advocating for the actor or just enjoying being right in fandom debates.",
      },
    },
  },
  ko: {
    same: {
      tier: '인생캐 케미',
      lines: [
        "완전히 같은 결로 움직이는 조합이에요 — 그냥 좋아하는 배우가 아니라, 화면 속에서 조금 더 빛나는 나 자신을 보는 느낌에 가까워요.",
        "같은 오행, 같은 리듬이에요. 왜 그 배역을 골랐는지, 왜 그 장면이 통했는지 굳이 설명 안 해도 바로 이해될 거예요.",
        "다른 배우에게선 느끼기 힘든 편안함이 있는 조합이에요. 인터뷰를 다시 봐도 그냥 '아, 이런 사람이지' 하고 납득이 돼요.",
        "이 정도 싱크로율이면 차기작을 억지로 기대할 필요가 없어요 — 개봉일부터 이미 그 자리에 있을 거예요.",
        "이 배우를 보는 건 낯선 사람을 보는 느낌이 아니라, 조금 더 화려한 나를 보는 느낌에 가까워요.",
      ],
      goodFit: {
        subheading: '따로 정당화할 필요가 없는 취향',
        text: "이 배우한테는 내 시청 취향을 따로 설명할 필요가 없어요 — 이미 내 취향이랑 거의 겹치는 선택을 하는 느낌이에요. 다른 팬들과 설명 없이 바로 통하는 콘텐츠가 많은 조합이에요 — 레퍼런스도, 밈도 캡션 없이 바로 이해될 거예요.\n\n이 배우 작품을 억지로 좋아하려고 애쓸 필요가 없어요 — 텐션이 이미 서로 통하는, 즉각적인 반응이에요. 이 배우의 커리어를 따라가는 건 뒤쫓는다는 느낌보다는, 내 감각이 화면 위에서 그대로 재생되는 느낌에 가까워요, 팬 되는 데 적응 기간이 따로 필요 없이요.",
      },
      meetingScenario: {
        subheading: '편하게 술술 풀리는 대화',
        text: "이 케미라면 시사회에서 마주쳐도 대화가 술술 풀릴 확률이 높아요 — 좋아하는 작품 얘기부터 필모 얘기까지 어색할 틈 없이 이어질 거예요. 준비한 질문도 자연스럽게 대화로 이어지고, 배우 쪽에서도 편하게 반응해줄 것 같은 분위기예요.",
      },
      watchFor: {
        subheading: '가끔은 조금 더 비판적으로 봐도 좋아요',
        text: "다 잘 맞으니까 가끔은 이 배우의 작품을 좀 더 비판적으로 봐도 좋아요 — 완벽한 싱크로율이 무조건적인 하이프로 흘러갈 수 있거든요. 이 배우의 캐스팅이나 인터뷰 발언에 뭐든 다 동의하게 될 수도 있어요 — 진짜 내 생각인지 가끔 점검해보세요.\n\n취향이 잘 맞으면 실제로 약한 연기도 그냥 넘기기 쉬워요 — 솔직한 시선이 오히려 덕질을 더 재밌게 만들어줘요. 이 배우의 커리어를 다 안다고 넘겨짚기 쉬운데, 초반의 덜 알려진 작품들도 챙겨보는 게 의미 있고, 다른 배우나 작품에도 자리를 남겨두는 게 좋아요.",
      },
    },
    otherGeneratesMe: {
      tier: '힐링 최애',
      lines: [
        "저쪽 기운이 나를 채워주는 조합이에요 — 힘든 날 이유도 모른 채 그 배우 장면만 계속 돌려보게 되는, 그런 힐링 최애예요.",
        "화려하진 않아도 든든하게 챙겨주는 느낌의 배우예요. 뭘 봐도 마음이 편해지는 그런 조합이죠.",
        "덕질이라기보다 위로에 가까운 관계예요. 이 배우의 연기는 유난히 나를 다독여주는 느낌이 있어요.",
        "이 배우 신작이 뜨면 저녁 일정을 비우게 되는 조합이에요 — 의무감이 아니라, 그냥 확실한 힐링이 보장되니까요.",
        "예고편에 이름만 떠도 하루가 나아지는, 그런 존재감의 배우예요.",
      ],
      goodFit: {
        subheading: '애쓰지 않아도 되는 힐링 콘텐츠',
        text: "이 배우는 애쓰지 않아도 편하게 즐길 수 있는 최애예요 — 나오는 장면마다 꾸준히 저녁을 조금씩 나아지게 만들어줘요. 이 배우를 즐기는 데 화려한 예고편이 필요 없어요 — 왓치리스트에 떠 있는 것만으로도 편안한 힐링 콘텐츠가 돼요.\n\n힘든 밤 자연스럽게 다시 찾게 되는 배우예요 — 익숙하고, 마음이 놓이고, 늘 믿고 보는 선택이에요. 이 배우의 커리어를 따라가는 데 큰 노력이 필요 없어요 — 화제작을 애써 쫓지 않아도 좋은 기분이 알아서 찾아오고, 인터뷰나 비하인드 콘텐츠도 팬들이 뭘 원하는지 이미 아는 느낌이라 덕질이 힘들지 않고 자연스러워요.",
      },
      meetingScenario: {
        subheading: '마음이 편안해지는 순간',
        text: "이 배우 앞에서는 긴장보다 편안함이 먼저 찾아올 것 같아요 — 존재감 자체가 마음을 다독여주는 타입이라, 시사회에서 마주쳐도 이상하게 마음이 놓일 거예요. 준비한 말이 다 안 나와도 배우 쪽에서 먼저 편하게 대화를 이끌어줄 것 같은 케미예요.",
      },
      watchFor: {
        subheading: '편한 선택 너머도 가끔은 챙겨보세요',
        text: "이런 배우는 조용한 관망 팬으로 남기 쉬워요 — 리뷰 남기고, 추천하고, 첫 주에 챙겨보는 것도 좋아요. 편하게 보는 게 습관이 되면 이 배우의 더 도전적인 작품은 안 보게 될 수 있어요 — 가끔은 쉬운 선택 너머로 가보세요.\n\n이 배우가 나한테 별로 요구하는 게 없다 보니, 정작 힘 보태야 할 순간(저조한 시청률, 저평가된 배역)을 놓칠 수 있어요. 이런 편안한 덕질은 표면적인 콘텐츠만 보다가 끝날 수 있어요 — 초반 작품이나 덜 알려진 필모까지 가끔은 챙겨보는 것도 의미 있어요.",
      },
    },
    iGenerateOther: {
      tier: '본방사수 대장',
      lines: [
        "여기선 내가 주는 쪽이에요 — 스밍, 리뷰, 단톡방 홍보까지 다요. 다행히 이 애정은 잘 마르지 않는 타입이에요.",
        "단톡방에서 이 배우 필모 얘기를 먼저 꺼내는 사람이 되는 조합이에요 — 부담스럽지 않게, 그냥 진심으로 자랑스러워서요.",
        "본방송 내내 실시간으로 반응하게 되는 조합이에요, 억지로가 아니라 그냥 애정이 흘러넘쳐서요.",
        "이 배우의 연기와 선택을 스스로도 놀랄 만큼 열심히 변호하게 되는 케미예요.",
        "신작 나오면 주말을 통째로 비우게 되는 배우예요 — 신작만이 아니라 필모 전체를 정주행하면서요.",
      ],
      goodFit: {
        subheading: '이 헌신엔 진짜 의미가 있어요',
        text: "이 배우를 향한 팬심은 억지가 아니라 진심이에요 — 더 헌신적이고 목소리 큰 팬으로서의 내 모습을 끌어내는 조합이에요. 다른 사람보다 먼저 이 배우의 저평가된 연기를 알아채는 편이라, 이 팬덤 안에서 그냥 스쳐가는 목소리가 아니라 은근히 소중한 목소리가 돼요.\n\n이 매치는 시청 활동에 진짜 의미를 부여해줘요 — 추천하고, 리뷰 남기고, 선택을 옹호하는 게 오히려 나를 더 나답게 만들어줘요. 직접적으로 티는 안 나도 배우 쪽에서도 이런 팬을 알아보는 경우가 많고, 여러 배우를 가볍게 좋아할 때는 잘 안 나오는 따뜻한 팬심이 이 배우한테서는 자연스럽게 나와요.",
      },
      meetingScenario: {
        subheading: '내가 먼저 에너지를 건네는 순간',
        text: "시사회 자리라면 내가 먼저 에너지를 쏟아붓는 쪽이 될 것 같아요 — 작품 얘기, 연기 얘기로 하고 싶은 말이 많아서 시간이 순식간에 지나갈 거예요. 배우도 그 텐션을 반갑게 받아줄 것 같아서, 짧은 순간이어도 기억에 남는 대화가 될 확률이 높아요.",
      },
      watchFor: {
        subheading: '헌신도 지속 가능해야 해요',
        text: "균형을 계속 살펴보세요 — 이 팬심은 내 시간과 에너지를 희생하지 않는 선에서 즐기는 게 제일 오래가요. 습관적으로 챙겨보고 리뷰 남기는 건지, 진짜 신나서 하는 건지 가끔 점검해보세요 — 번아웃은 가장 열심인 팬한테 제일 먼저, 그것도 눈치채기도 전에 찾아와요.\n\n일방적으로 마음만 쓰는 팬심도 있어요 — 이 덕질이 여전히 즐거운지, 그냥 의무처럼 느껴지진 않는지 확인해보세요. 댓글창에서 제일 목소리 큰 방어자가 될 수도 있어요 — 지치지 않게 페이스 조절도 필요해요, 좋은 팬을 만드는 그 헌신이 아무것도 안 돌아오는 상태가 오래되면 나를 지치게 할 수 있으니까요.",
      },
    },
    otherOvercomesMe: {
      tier: '예측불가 케미',
      lines: [
        "이 조합엔 진짜 텐션이 있어요 — 눈을 못 떼는, 그런 종류의 끌림이요. 편안한 최애라기보단 확 빠져드는 쪽이에요.",
        "편안한 매치는 아니지만, 확실히 매력적인 조합이에요 — 예고편 한 장면에도 유난히 신경 쓰이게 돼요.",
        "이 배우는 예상을 자꾸 빗나가게 해요 — '그냥 궁금해서'라고 하다가 어느새 필모 전체를 다 본 자신을 발견하게 될 거예요.",
        "다음 작품이 뭘지 전혀 예측이 안 되는 배우예요, 그리고 그 예측불가함이 바로 매력 포인트예요.",
        "편안하게 좋아하게 되는 배우는 아니지만, 문득 생각나는 건 오히려 이런 쪽이에요.",
      ],
      goodFit: {
        subheading: '그 텐션이 진짜 재미를 만들어요',
        text: "이 텐션 덕분에 이 배우의 커리어를 따라가는 게 지루할 틈이 없어요 — 다음 행보를 완전히 다 예측했다는 느낌이 잘 안 들거든요, 그게 오히려 매력이에요. 이 배우는 그냥 스쳐 지나가지 않고 대사 톤, 작은 선택, 서브텍스트까지 실제로 챙겨보게 만들어요.\n\n예측 불가능함이야말로 가벼운 관심을 몇 년짜리 최애로 바꾸는 힘이에요 — 이런 끌림은 쉽게 사그라들지 않아요. 이 배우의 필모에 살짝 집착하는 것도 즐거움의 일부예요 — 다시 보고, 장면 하나 분석하고, 그 과정에서 내 취향에 대해서도 알게 돼요.",
      },
      meetingScenario: {
        subheading: '처음엔 긴장, 오래 남는 순간',
        text: "이 케미면 처음 마주쳤을 때 살짝 긴장될 수 있어요 — 어떻게 말을 걸어야 할지 순간 멈칫하게 되는 그런 배우예요. 하지만 그 어색함이 오히려 더 또렷하게 기억에 남아서, 시간이 지나도 자꾸 떠오르는 순간이 될 거예요.",
      },
      watchFor: {
        subheading: '몰입에도 페이스 조절이 필요해요',
        text: "이렇게 몰입도 높은 최애는 라이트 시청보다 시간을 더 많이 가져갈 수 있어요 — 가끔은 균형을 점검해보세요. 애매한 인터뷰 발언이나 캐스팅 루머를 실제보다 더 의미 있게 해석하기 쉬워요 — 적당한 거리감도 필요해요.\n\n이런 몰입 에너지가 과도해지면 파라소셜한 착각으로 이어질 수 있어요 — 시청자와 배우 사이의 실제 거리를 잊지 않는 게 중요해요. 이 배우를 자석처럼 끌리게 만드는 그 예측 불가능함이 감정적으로는 조금 지치게 만들 수도 있으니, 확실함보다 궁금증을 계속 자극하는 이 타입의 배우에겐 페이스 조절이 특히 필요해요.",
      },
    },
    iOvercomeOther: {
      tier: '든든한 팬수호대',
      lines: [
        "이 관계에서 내가 차분하고 든든한 쪽이에요 — 댓글창에서 잘못된 정보 바로잡아주고, 조용히 다음 작품을 응원하는 그런 조합이에요.",
        "보호 본능을 자극하는 배우예요. 어울릴 것 같은 배역을 먼저 추천하게 되는, 그런 케미요.",
        "이 배우 신작 단톡방에서 은근히 총무를 맡게 되는 조합이에요 — 정리하고, 지켜주고, 분위기를 이끄는 쪽이요.",
        "다들 클립 하나에 호들갑일 때 혼자 침착하게 상황 정리하는, 그런 든든한 쪽이 되는 배우예요.",
        "스타보다는 친구처럼 응원하게 되는 배우예요 — 든든하고, 살짝 보호적이고, 항상 이 배우 편이에요.",
      ],
      goodFit: {
        subheading: '다들 나를 찾아와요',
        text: "애쓰지 않아도 이 팬덤 안에서 보호자 같은 존재가 돼요 — 댓글창 분위기 지키고, 잘못된 정보 퍼지기 전에 바로잡는 그런 역할이요. 주도하는 성향이 여기서 특히 유용해요 — 팬덤 안에서 다들 맥락이나 추천작을 나한테 물어보게 돼요.\n\n미스캐스팅 루머나 악의적인 반응이 퍼지기 전에 먼저 알아채는 편이라, 이 팬베이스 안에서 진짜 쓸모 있는 존재가 돼요. 이 매치는 팬덤 안에서 부탁받지 않아도 자연스럽게 리드하는 역할을 맡게 해주고, 다른 팬들도 말은 안 해도 내 든든함에 많이 기대는 편이에요.",
      },
      meetingScenario: {
        subheading: '내가 분위기를 편하게 만드는 순간',
        text: "이 배우 앞에서는 오히려 내가 분위기를 편하게 이끄는 쪽이 될 것 같아요 — 침착하게 대화를 시작하고, 배우가 편하게 반응할 수 있게 만들어주는 타입이에요. 짧은 시간이어도 서로 부담 없이 대화가 이어질 확률이 높아요.",
      },
      watchFor: {
        subheading: '다른 목소리를 위한 자리도 남기세요',
        text: "보호하려는 마음이 선 넘는 검열로 흐르지 않게 조심하세요 — 모든 팬이 나처럼 덕질하는 건 아니고, 그래도 괜찮아요. 팬 커뮤니티에서 주도하는 게 편하다 보니, 일부러라도 다른 의견이 들어올 자리를 남겨두는 게 좋아요.\n\n항상 '책임감 있는' 팬으로 있는 것도 나름 피곤한 일이에요 — 남들 덕질까지 관리하지 않고 그냥 즐기기만 해도 괜찮아요. 이 팬덤 안에서 내 의견은 꽤 무게가 있어서, 무심코 한 말도 예상보다 크게 받아들여질 수 있어요 — 내가 배우를 위해 나서는 건지, 논쟁에서 이기고 싶은 건지 가끔 스스로 점검해보세요.",
      },
    },
  },
};

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

/**
 * Picks compatibility copy for a relation, stable per user+actor pair.
 * Returns the tier name, the seeded `line` (5 variants, picked as always),
 * `goodFit`/`watchFor` — each a fixed { subheading, text } per relation
 * rather than a seeded pick, since they're long enough now (multi-paragraph
 * reads) that one well-written entry per relation serves better than 5
 * near-duplicate variants — and `situational`, a pillar-by-pillar
 * compatibility read built from `pillarCompat` (see getPillarCompatibility
 * in utils/saju.js), one entry per pillar in the order it was given
 * (year/month/day[/time]).
 */
export function getDramaMatchCopy(lang, relation, seedInput, pillarCompat = []) {
  const entry = (dramaMatchTemplates[lang] || dramaMatchTemplates.en)[relation];
  const pillarBank = pillarSituational[lang] || pillarSituational.en;
  const seed = hashCode(seedInput);
  const idx = seed % entry.lines.length;
  return {
    tier: entry.tier,
    line: entry.lines[idx],
    goodFit: entry.goodFit,
    meetingScenario: entry.meetingScenario,
    watchFor: entry.watchFor,
    situational: pillarCompat.map(({ pillar, relation: pillarRelation }) => ({
      pillar,
      text: pillarBank[pillar][pillarRelation],
    })),
  };
}
