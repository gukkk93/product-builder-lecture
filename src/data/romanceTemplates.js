// Romance copy bank for /romance — same 5 Five Element relation keys as
// compatibilityTemplates.js, layered under 3 "situations" (reunion, crush,
// theirFeelings). No fandom vocabulary; this is general relationship
// content. Reunion also gets one shared closing line (see
// getRomanceClosing) appended after the per-relation line at render time,
// rather than duplicated into all 25 reunion lines — keeps that one editable
// in one place.
//
// Each situation+relation pair also has a `situational` bank of exactly 5
// entries tied to concrete relationship moments — a different set of 5 per
// situation (see the per-situation situationalTitles i18n keys), always
// returned in full by getRomanceCopy rather than picked by seed, since the
// UI shows all 5 as separate sections. theirFeelings' situational texts are
// written from the other person's point of view ("they'd probably..."),
// matching that situation's existing line/goodFit/watchFor voice.
export const romanceTemplates = {
  en: {
    reunion: {
      same: {
        tier: 'Same Wavelength, Still',
        situational: [
          "you'd probably type three different messages before sending the simple one — but even the simple one would land exactly the way it used to.",
          "it wouldn't sting the way it does with most exes — you'd read it and just feel like you already knew.",
          "the conversation would likely pick up mid-sentence, like no time passed at all.",
          "it'd feel less like news and more like confirmation of something you already sensed.",
          "you'd both probably think of the same thing without saying it — that kind of sync doesn't need a calendar reminder.",
        ],
        lines: [
          "The reason this is hard to let go of is simple — you two were never really out of sync to begin with. That kind of ease doesn't just disappear because the relationship did.",
          "You'd probably fall back into old rhythms faster than either of you expects. Familiarity like this doesn't fade, it just goes quiet for a while.",
          "Getting back together wouldn't feel like starting over — it would feel like picking up a conversation you paused, not ended.",
          "This is the kind of history that doesn't really close. Even apart, you'd likely still finish each other's sentences without trying.",
          "If you're wondering whether the connection is still there, it probably is — this pairing rarely fully switches off, it just dims.",
        ],
        goodFit: [
          "If you got back together, the sync would likely return almost immediately — you rarely had to work hard to understand each other, and that doesn't reset just because you took a break.",
          "This is one of the easier types of reunion to picture working — you're not learning a new person, you're returning to one you already understood well.",
          "Whatever pulled you apart probably wasn't a fundamental mismatch — this pairing's ease was real, and ease like that tends to still be there on the other side.",
          "You'd likely skip most of the awkward re-getting-to-know-you phase — the shorthand you built doesn't really expire.",
          "If trust is intact, this reunion has fewer obstacles than most — the hard part here was never understanding each other.",
        ],
        watchFor: [
          "Easy chemistry doesn't automatically mean the actual issue that ended things got resolved — worth naming what that was before assuming it won't repeat.",
          "It's tempting to read the ease of reconnecting as proof you should get back together — comfort and rightness aren't always the same thing.",
          "Because you understand each other so well, it's easy to avoid the harder conversation about why you broke up in the first place — that conversation still needs to happen.",
          "Two people this similar can also share the same blind spot that caused the breakup — worth checking whether that's actually been addressed.",
          "The pull back might be nostalgia for how easy it felt, more than a real plan for what changes this time — worth being honest about which one it is.",
        ],
      },
      otherGeneratesMe: {
        tier: 'They Still Show Up For You',
        situational: [
          "you'd hesitate less than you think — some part of you already knows reaching out to them tends to make things easier, not harder.",
          "you'd probably feel steadier just seeing that they're doing okay, even without exchanging a word.",
          "it wouldn't feel like reopening something — more like running into someone who was always going to be gentle with you.",
          "you'd likely hear it and feel oddly relieved, the way good news about someone who was good to you tends to land.",
          "you might notice the date and feel warmth before you feel anything complicated — that's this pairing's signature.",
        ],
        lines: [
          "Even now, their energy has a way of steadying yours — that's probably part of why moving on has felt harder than you expected.",
          "This is the kind of ex who, if they reached out, would still know exactly what to say to make your day easier. That doesn't wear off quickly.",
          "You'd likely notice, if you got back in touch, that being around them still feels like relief rather than effort.",
          "Some relationships take from you even after they end. This isn't that kind — whatever you got from them probably still lingers, quietly.",
          "If there's a version of them showing up again that would actually help you, it's this one — steady, generous, in no rush.",
        ],
        goodFit: [
          "If they came back, you'd likely feel steadied by them again almost immediately — that kind of support tends to hold up even after time apart.",
          "This is a reunion where the comfort was probably real and mutual, not one-sided — worth trusting that part of the memory.",
          "Whatever they gave you before, there's a good chance they still would — this dynamic doesn't usually run out on its own.",
          "You wouldn't have to convince yourself the good parts were real — the steadiness this person offered tends to be consistent, not a phase.",
          "If you're nervous about reaching out, it helps to remember: this was never a relationship where you had to chase their support.",
        ],
        watchFor: [
          "It's worth asking what you gave back, not just what they gave you — comfort like this can quietly become one-directional over time if it isn't checked.",
          "Missing how they made you feel isn't quite the same as missing them specifically — worth separating those two things before reaching out.",
          "If the relationship ended anyway despite this comfort, something else was likely the real issue — worth naming it instead of assuming the good parts will fix it.",
          "It's easy to romanticize how steady they were without remembering what wasn't working — worth revisiting both sides honestly.",
          "Reunions built mostly on relief can start strong and then quietly stall if nothing else gets addressed — the comfort alone won't carry the whole relationship.",
        ],
      },
      iGenerateOther: {
        tier: 'You Were the One Giving',
        situational: [
          "you'd catch yourself drafting a message that gives more than it asks — worth noticing that pattern before you hit send.",
          "seeing them doing well might sting a little, mixed with pride you didn't expect to still feel.",
          "you'd probably be the one who says something first, the way you usually were — worth asking if that's what you actually want to repeat.",
          "hearing it secondhand might make you want to reach out and check on them, before you check on yourself.",
          "the date might make you want to do something for them, before you've asked what they'd do for you.",
        ],
        lines: [
          "You were likely the one keeping the relationship fed — the effort, the initiating, the emotional labor. If you're considering reunion, ask what would be different this time.",
          "This dynamic tends to leave the giver a little depleted. Before reaching back out, it's worth knowing whether you'd be doing the same thing again.",
          "You probably gave more than you got here, and that doesn't just resolve itself with time apart — it resolves with an actual conversation.",
          "If you go back, go back with clearer terms. This pairing works best when the generosity runs both ways, not just from you.",
          "Missing someone you gave a lot to isn't the same as missing a relationship that worked. Worth separating those two feelings before deciding anything.",
        ],
        goodFit: [
          "If you go back with clearer boundaries, this pairing can actually work better the second time — the generosity was never the problem, the balance was.",
          "You already know exactly what you're capable of giving here — that clarity is useful going into round two, as long as it's not one-sided again.",
          "A reunion here has real potential if it starts with an honest conversation about reciprocity — the warmth you bring was never in question.",
          "This dynamic can genuinely improve with time apart, since distance tends to clarify what each person actually needs from the other.",
          "If they've grown enough to meet you halfway, the same qualities that made you a great partner the first time still apply.",
        ],
        watchFor: [
          "Before reaching out, it's worth asking honestly whether anything would actually be different this time, or if you'd fall into the same one-sided pattern.",
          "Missing someone you gave a lot to can feel a lot like missing the relationship itself — worth untangling which one you're actually feeling.",
          "If they haven't shown any sign of meeting you halfway, hope alone won't rebalance this dynamic — watch for actual behavior, not intentions.",
          "This pairing tends to repeat its pattern unless something concrete changes — a returned apology isn't the same as returned effort.",
          "It's worth checking whether you're missing them, or missing being needed — those two feelings point to very different next steps.",
        ],
      },
      otherOvercomesMe: {
        tier: 'Unfinished Tension',
        situational: [
          "you'd probably rewrite that message more times than you'd admit — this pairing never made anything simple, even a text.",
          "it might hit harder than you expect, in a way that surprises you — this connection was never quiet, even from a distance.",
          "your stomach would probably drop a little, the good-bad kind of feeling this pairing specializes in.",
          "you might feel unsettled in a way that's hard to explain to a friend who didn't know how it actually was.",
          "the date creeping closer might stir up more than you planned for — this pairing doesn't really do neutral anniversaries.",
        ],
        lines: [
          "This wasn't an easy relationship, and it's probably not an easy thing to move on from either — the ones with real friction tend to stay unresolved the longest.",
          "If you're still thinking about them, it's likely because something here never got fully worked out, not because the relationship itself was simple or good.",
          "This is the kind of ex you'd overanalyze a single text from. That tension hasn't gone anywhere, whether or not the relationship should have.",
          "Reunion here isn't a clean idea — it's a complicated one, and it's okay to admit that's exactly why it's tempting.",
          "Some connections don't end quietly. If this is one of them, the pull back isn't really about them being right for you — it's about the story feeling unfinished.",
        ],
        goodFit: [
          "If there's real chemistry underneath the friction, that part likely hasn't gone anywhere — this pairing rarely fades from lack of interest.",
          "The intensity that made this relationship hard is often the same intensity that made it feel worth having — that part of the pull is real.",
          "If you both do the work of talking through what caused the friction, this reunion has more depth to draw on than an easier relationship would.",
          "This isn't a bond that goes quiet easily — if you're both still willing, there's real substance here to work with.",
          "The push and pull that made this hard also made it memorable — that kind of charge doesn't come from nowhere.",
        ],
        watchFor: [
          "Unresolved tension has a way of resurfacing almost immediately after reunion — it's worth actually addressing the root cause, not just the urge to reconnect.",
          "It's easy to mistake unfinished business for enduring love — worth being honest about which one is actually pulling you back.",
          "If the friction was never actually worked through, getting back together usually just restarts the same cycle on a delay.",
          "This kind of pull can feel like fate, but it's worth checking whether it's actually compatibility, or just difficulty you haven't fully processed.",
          "Reunions built on unresolved tension need an honest conversation up front — skipping that step tends to just postpone the same ending.",
        ],
      },
      iOvercomeOther: {
        tier: 'You Held the Steadier Hand',
        situational: [
          "you'd probably think twice before sending anything, weighing whether you'd end up steadying them again.",
          "seeing them might bring up a protective instinct before anything else — old habits like that don't fade fast.",
          "you might catch yourself hoping they're doing alright, the way you used to check without being asked.",
          "hearing about them might make you want to make sure they're okay before you decide how you feel about it.",
          "the date might make you wonder if they're managing without you the way they used to lean on you.",
        ],
        lines: [
          "You were probably the more grounded one in this relationship — the one holding things together more often than not. That's worth remembering before you go back to doing it again.",
          "If they've reached out, or you're considering reaching out, ask honestly whether they've grown into meeting you halfway, or whether you'd still be carrying most of it.",
          "This dynamic can look like devotion from the outside and feel like exhaustion from the inside. Worth being honest with yourself about which one it actually was.",
          "You'd likely be the one steadying things again if you got back together — not necessarily a bad thing, just worth going in with eyes open.",
          "Missing being needed isn't quite the same as missing the relationship. Worth sitting with that difference before deciding anything.",
        ],
        goodFit: [
          "If they've genuinely grown since, this reunion could look very different from the first round — worth giving that possibility real consideration.",
          "The stability you brought before is still something you're capable of offering — the question is just whether it's asked of you fairly this time.",
          "A more balanced version of this relationship is possible if the roles shift even slightly — worth exploring what that would actually look like.",
          "You already know you can hold this relationship together if needed — the more useful question is whether you should have to.",
          "If there's real mutual effort this time, the steadiness you bring becomes a strength shared between you, not a job assigned to just one person.",
        ],
        watchFor: [
          "Before going back, it's worth asking honestly whether they've grown into meeting you halfway, or whether you'd still be carrying most of it.",
          "Missing being needed by someone isn't quite the same as missing a healthy relationship — worth sitting with that difference.",
          "This dynamic can look like devotion from the outside and feel like exhaustion from the inside — worth being honest with yourself about which one it actually was.",
          "If you go back into the same role without any real change, burnout tends to return on a similar timeline as before.",
          "It's worth asking what they'd actually change, specifically, not just whether they say they've changed in general.",
        ],
      },
    },
    crush: {
      same: {
        tier: 'Kindred Spirits',
        situational: [
          "you'd check your phone a little too fast when their name pops up — and honestly, they're probably doing the same on their end.",
          "running into them would derail your whole day in the best way — and there's a decent chance it does the same to them.",
          "you'd linger on their posts a beat too long, reading into details that probably aren't even subtext — except this time they might actually be.",
          "you'd get unusually quiet trying not to smile when their name comes up — your friends have probably already noticed.",
          "you'd talk yourself out of it more than the actual odds justify — this is exactly the kind of crush that's rarely as one-sided as it feels.",
        ],
        lines: [
          "There's a real chance this isn't one-sided for long — matching energy like this tends to get noticed, even if nothing's been said yet.",
          "You'd probably feel unusually understood around them, like they get your sense of humor without you having to explain it. That's rarely one-directional.",
          "This is the kind of crush that could turn into something real fast, precisely because there'd be so little translating to do between you two.",
          "If you're overthinking every interaction, it might be worth remembering — people this in sync with you tend to notice you back.",
          "This isn't a crush you'd have to talk yourself into. The ease you feel around them is a pretty good sign, not just wishful thinking.",
        ],
        goodFit: [
          "The ease you feel around them is a real signal, not just wishful thinking — people this in sync rarely stay unaware of each other for long.",
          "You wouldn't have to build chemistry from scratch here — it's already there, which gives this crush a real head start over most.",
          "If you did tell them how you felt, the conversation would likely feel more like confirming something than announcing it.",
          "This is the kind of crush where the friendship groundwork is basically already done — the shift to something more wouldn't require reinventing the dynamic.",
          "Feeling unusually understood by someone this early on is a good sign, not a coincidence — this pairing tends to click fast for a reason.",
        ],
        watchFor: [
          "Because the friendship feels so easy, it's worth being clear (to yourself and eventually them) about wanting more than that — easy chemistry can stay platonic by default if no one names it.",
          "It's worth checking whether the closeness you feel is romantic interest or just really strong friendship compatibility — both are real, but they call for different next moves.",
          "Two people this alike can also both avoid bringing up feelings out of the same instinct to keep things comfortable — someone has to break that pattern eventually.",
          "Don't assume they already know how you feel just because things feel easy — comfort isn't the same as communication.",
          "If this stays unspoken too long, the friendship-shaped comfort can become its own reason to never risk changing it — worth noticing if that's what's happening.",
        ],
      },
      otherGeneratesMe: {
        tier: 'They Make Everything Easier',
        situational: [
          "seeing their message land would make your whole afternoon lighter, no matter what it actually says.",
          "running into them would feel like an unplanned good thing happening to your day, not a nerve-wracking one.",
          "you'd end up smiling at their posts without meaning to — their presence online does the same thing their presence in person does.",
          "you'd probably fail at playing it cool, because your face tends to soften without your permission around anything related to them.",
          "you'd probably talk yourself into it faster than usual — this crush has never asked much bravery of you, just honesty.",
        ],
        lines: [
          "Just being around them probably makes your day better without much effort on their part — which is exactly the kind of energy that's easy to fall for.",
          "This is the kind of crush that sneaks up on you. You didn't decide to like them so much as you noticed, one day, that they'd become a bright spot.",
          "If you're looking for a sign this feeling is worth acting on, it's this: they make things feel lighter, and that's not nothing.",
          "You'd likely feel more like yourself around them, not less — a good sign for a crush that could turn into something steadier.",
          "This crush isn't complicated to explain, even if it's hard to admit out loud: they're just genuinely good for your mood.",
        ],
        goodFit: [
          "The fact that they make things easier for you is exactly the kind of quiet, real evidence worth trusting over any single grand gesture.",
          "This crush isn't built on fantasy — it's built on how you actually feel around them, which tends to be a more reliable foundation than most.",
          "Feeling more like yourself around someone, not less, is one of the better signs a crush has real potential.",
          "If you're waiting for a dramatic sign this is worth pursuing, this might be it — steady, genuine improvement to your day isn't a small thing.",
          "This is the kind of crush that could turn into something lasting precisely because it's built on comfort rather than intensity alone.",
        ],
        watchFor: [
          "It's worth checking whether you like them, specifically, or just like how good they make you feel — worth being honest about which one this actually is.",
          "Comfort like this can be easy to sit with indefinitely without ever acting on it — worth noticing if you're using the ease as an excuse not to say anything.",
          "Don't mistake their easygoing warmth toward you as necessarily romantic — some people are just naturally like that with everyone.",
          "If this crush stays quiet for too long, it risks settling into a comfortable non-romance that neither of you disrupts.",
          "The steadiness you feel is real, but it's still worth actually finding out whether they feel the same before building too much around it.",
        ],
      },
      iGenerateOther: {
        tier: "You're Already All In",
        situational: [
          "you'd notice you're the one checking first, more often than not — worth being honest with yourself about that pattern.",
          "running into them, you'd probably ask about their day before you've said anything about yours.",
          "you'd catch yourself liking, saving, and remembering things they post — quietly cataloging without meaning to.",
          "you'd be the friend who slips up and says too much before catching yourself — the enthusiasm doesn't hide easily.",
          "you'd lean toward confessing sooner than feels comfortable — this crush tends to make patience the harder option, not the easier one.",
        ],
        lines: [
          "You're probably the one noticing every little thing about them — that's this pairing's signature. The risk is caring before you know if it's mutual.",
          "This crush would bring out your most generous, most attentive self. Just make sure you're getting some of that energy reflected back before you go all in.",
          "You'd likely find yourself making excuses to talk to them, remembering small details, rooting for their good days. That's real investment — worth eventually finding out if it's returned.",
          "This is the kind of crush where you give first and hope the timing works out. It often does, but it's fair to want to know sooner rather than later.",
          "You're the type to fall for someone through their actual personality, not just the idea of them — which makes this crush a little more real than most.",
        ],
        goodFit: [
          "Your attentiveness here is genuine, not performative — if this crush turns into something, that same devotion will likely be one of its strengths.",
          "Caring this much this early is a good sign of real investment, not just infatuation — worth trusting that instinct.",
          "This is the kind of crush built on actually noticing someone as a person, which tends to hold up better than crushes built on less.",
          "If they do feel the same, your attentiveness will likely already feel familiar to them — this kind of care rarely goes completely unnoticed.",
          "You're the type to fall for someone's actual personality, which makes whatever you're feeling here more durable than a surface-level crush.",
        ],
        watchFor: [
          "Worth checking in on the balance before this goes further — this pairing works best when the interest is confirmed as mutual, not assumed.",
          "Giving this much attention to someone who hasn't reciprocated yet can lead to reading more into small gestures than is actually there.",
          "It's fair to want to know sooner rather than later whether this is mutual — you don't have to keep giving indefinitely without any signal back.",
          "Watch for the pattern of always initiating — if it's always you reaching out, that's worth noticing rather than explaining away.",
          "This much devotion, if unreciprocated for too long, can turn into quiet resentment even when you don't want it to — worth being honest with yourself about the timeline.",
        ],
      },
      otherOvercomesMe: {
        tier: 'The Magnetic, Confusing Kind',
        situational: [
          "you'd read way too much into whether they texted first or not — this crush turns every small thing into a clue.",
          "running into them would leave you replaying the thirty seconds of small talk for the rest of the day.",
          "you'd screenshot something they posted, not sure why, just needing to look at it again later.",
          "you'd fail spectacularly at hiding it the second their name comes up — your friends already know before you've said a word.",
          "you'd talk yourself into and out of confessing on the same afternoon, more than once.",
        ],
        lines: [
          "This isn't a calm, easy crush — it's the kind that keeps you a little off-balance, replaying moments you can't quite read.",
          "You'd probably overanalyze one glance from them more than a whole conversation with anyone else. That's not comfortable, but it is compelling.",
          "This crush has an edge to it — you never fully know where you stand, and that uncertainty is exactly what keeps you hooked.",
          "Not every crush is supposed to feel simple. This one asks a little more of you — more patience, more nerve — which is part of why it feels so real.",
          "If this crush has you a little unsettled, that's on brand for this pairing — the confusing ones often turn out to be the ones worth paying attention to.",
        ],
        goodFit: [
          "The uncertainty is part of what makes this feel so real — crushes that ask nothing of you rarely stick around this long in your head.",
          "This kind of pull tends to mean there's real chemistry underneath the confusion — it's rarely nothing when it's this hard to shake.",
          "Not knowing exactly where you stand is uncomfortable, but it also means you're genuinely invested rather than just casually interested.",
          "This crush asking more of you — more patience, more nerve — is part of why it feels more significant than an easier one would.",
          "If this crush has stuck around despite the confusion, that persistence is itself a pretty reliable signal worth paying attention to.",
        ],
        watchFor: [
          "It's easy to read too much into ambiguous moments with someone like this — worth checking your interpretations against what's actually being said and done.",
          "This kind of magnetic uncertainty can also just mean unclear signals, not necessarily mutual interest — worth not assuming meaning that hasn't been confirmed.",
          "Obsessing over a single glance or message is part of the pull, but it's also worth eventually asking directly instead of endlessly interpreting.",
          "The excitement of not knowing can become its own reason to avoid finding out for sure — worth noticing if that's happening.",
          "This crush can be emotionally tiring if it goes on too long without resolution — it's okay to want clarity instead of staying in the uncertainty indefinitely.",
        ],
      },
      iOvercomeOther: {
        tier: "You're the Calm in Their Storm",
        situational: [
          "you'd probably be the one who texts back calm and collected, even if you weren't feeling that way when it came in.",
          "running into them, you'd likely be the steady one setting the tone — without really trying to.",
          "you'd scroll their posts without much drama, just quietly keeping up, the way you do with people you care about.",
          "your friends might not even clock it, because you don't perform this crush loudly — it just shows up as attentiveness.",
          "you'd approach confessing like a decision, not a leap — weighing it calmly instead of spiraling, which is very on-brand for you.",
        ],
        lines: [
          "You'd probably come across as the steady, grounded one to them — which is a quietly attractive quality, even if it doesn't feel exciting from the inside.",
          "This crush would bring out your protective side before you even realize it. Not a bad look, just worth knowing that about yourself.",
          "You might be the person they didn't expect to feel calm around — and calm, it turns out, is more magnetic than most people think.",
          "There's a good chance they notice your steadiness before you notice their interest. Worth paying attention either way.",
          "This isn't a chaotic crush — it's one where you'd likely be the anchor. Being someone's calm can be its own kind of romantic.",
        ],
        goodFit: [
          "Being the calm, steady presence in someone's life is a quietly attractive quality — it's worth not underselling that about yourself.",
          "There's a good chance they've noticed your steadiness already, even if they haven't said anything — calm has a way of standing out.",
          "If this turns into something, your groundedness would likely be one of the things that made the relationship actually work.",
          "You don't have to be the flashiest person in the room to be the one someone remembers — being steady is its own kind of magnetic.",
          "This crush has real potential precisely because what you offer (calm, reliability) is rarer than people think, and often more wanted than excitement.",
        ],
        watchFor: [
          "Being the steady one can sometimes read as 'just a friend' rather than romantic interest — worth being a little more direct if you want them to see it differently.",
          "It's worth checking whether they see your calm as attractive or just convenient — those read very differently to the person offering it.",
          "Don't assume they'll notice your interest just because you're consistently present — steadiness can go unread as romantic without a clearer signal.",
          "If you're always the one keeping things calm, it's worth eventually letting them see the parts of you that aren't just composed.",
          "This dynamic works best when your calm is met with genuine curiosity from them — worth watching for whether that's actually there.",
        ],
      },
    },
    theirFeelings: {
      same: {
        tier: 'They See Themselves in You',
        situational: [
          "a message from you probably doesn't feel like effort to answer — it likely feels closer to a relief, something easy to reply to.",
          "if someone else comes up, there's a good chance they quietly compare that person's energy to yours, whether they realize it or not.",
          "when something hard happens, you might be one of the first people they think of, not because you'd fix it, but because you'd get it.",
          "as things wind down, they've probably thought at least once that they didn't want it to end yet.",
          "in a group, they likely find themselves checking whether you laughed at the same thing they did.",
        ],
        lines: [
          "There's a good chance they feel unusually understood around you — like they don't have to explain themselves as much as they do with other people.",
          "To them, you probably read as familiar in a good way — not boring, just easy. That's rarer than it sounds, and they likely notice it.",
          "They'd probably describe you, if asked, as someone who just gets it — gets them — without needing much explained.",
          "In their head, you're likely filed under 'easy to be around,' which from this pairing is a genuine compliment, not a small one.",
          "If they think about it, they probably feel like less of a performance is required around you than around most people.",
        ],
        goodFit: [
          "Feeling this understood by someone is rare, and they likely know it — this kind of ease tends to register as significant, even if it's not said out loud.",
          "If they've ever thought about it directly, they probably already sense this connection has more potential than an average friendship.",
          "People don't usually forget who made them feel unusually at ease — that alone puts you in a different category for them than most people they know.",
          "This kind of natural sync is exactly the type of thing that quietly turns into something more, if either of you ever names it.",
          "They likely feel less alone in some specific way around you — that's not a small thing to represent for someone, even if it's never discussed.",
        ],
        watchFor: [
          "Feeling understood by you doesn't necessarily mean they've connected that feeling to romantic interest yet — worth not assuming they've drawn the same conclusion you have.",
          "This kind of comfort can also just read as 'great friend' to them unless something shifts the framing — worth considering whether that needs to be said explicitly.",
          "They may value this ease specifically because it feels safe and low-stakes — worth being aware that changing the dynamic carries real risk for both of you.",
          "Just because they feel at ease around you doesn't mean they've been thinking about what that ease could turn into — those are two different realizations.",
          "It's worth not overestimating how much they've actually reflected on this — comfort can be felt without being consciously examined.",
        ],
      },
      otherGeneratesMe: {
        tier: 'They Feel Steadied By You',
        situational: [
          "a message from you probably lands as a small lift in their day, even on days they wouldn't say so.",
          "when someone else comes up, they might notice that person doesn't make things feel as easy as you do.",
          "when something hard happens, they may reach for you specifically because you tend to make things feel more manageable, not more complicated.",
          "as a hangout winds down, they might feel a version of reluctance they don't fully examine — just a quiet 'already?'",
          "in a group, they probably relax a little more than usual just because you're there, even if neither of you would name why.",
        ],
        lines: [
          "You likely have a settling effect on them, even if neither of you has named it — they probably feel calmer, not more anxious, after spending time with you.",
          "In their mind, you're probably the person who makes things feel more manageable. That's a quiet but real kind of importance.",
          "They may not say it outright, but you likely function as a kind of relief for them — someone who makes hard days a little easier.",
          "If you asked them what they liked about you, 'you make things easier' is a strong guess for what they'd land on, even if it's not the first thing they'd say.",
          "They probably don't fully realize how much they lean on your presence until it's missing — that's this pairing's quiet signature.",
        ],
        goodFit: [
          "Being someone's steadying presence is a real, valued role — even if they haven't said it, this kind of impact tends to matter more to people than louder gestures.",
          "If they've ever had a hard week and felt better after time with you, that's not nothing to them, even if it's gone unspoken.",
          "People remember who made things feel more manageable during a hard time — that kind of memory tends to stick.",
          "This is the sort of quiet importance that often becomes clearer to someone in hindsight — worth trusting that the impact is real, even without confirmation yet.",
          "If they were asked what they liked about you, this steadying quality would likely come up, even if it's not the first thing they'd mention.",
        ],
        watchFor: [
          "Being someone's calm presence is valuable, but it's worth checking they see you as more than just a source of relief — you deserve to be wanted for more than utility.",
          "This kind of quiet reliance doesn't always get acknowledged out loud — worth eventually asking directly rather than waiting for them to notice on their own.",
          "It's possible they haven't fully registered how much they lean on you until it's missing — worth deciding whether you're willing to wait for that realization.",
          "Steadying someone can start to feel one-directional if it's never reciprocated — worth paying attention to whether they show up for you in a similar way.",
          "Don't assume the relief you provide automatically translates to romantic interest on their end — it's a real form of care, but it isn't proof of feelings by itself.",
        ],
      },
      iGenerateOther: {
        tier: 'They Notice You Trying',
        situational: [
          "a message from you probably registers as thoughtful, even if they don't always reply with the same energy right away.",
          "when someone else comes up, they might quietly notice that person doesn't put in the effort you do.",
          "when something hard happens, they may not reach out first, but they'd likely notice and appreciate it if you did.",
          "as a hangout winds down, they've probably clocked how much you tend to show up for them, even if they haven't said it out loud.",
          "in a group, they might not perform gratitude toward you, but there's a decent chance they've registered your effort more than they let on.",
        ],
        lines: [
          "They're likely aware, on some level, that you put in effort for them — and it probably reads as genuine, not performative.",
          "In their head, you're probably someone who shows up — reliably, generously, without making a big deal of it. That doesn't go unnoticed.",
          "They may not always reciprocate at the same pace, but they likely do register how much thought you put in. That awareness counts for something.",
          "If they had to describe your role in their life, 'someone who's there for me' is a likely answer, whether or not they've said it out loud.",
          "They probably feel a quiet gratitude toward you, even if it doesn't come up in conversation — this dynamic tends to register more than it announces.",
        ],
        goodFit: [
          "Effort like yours rarely goes completely unnoticed, even when it's not acknowledged in the moment — there's a good chance it's registered more than you think.",
          "Consistent, unflashy care is exactly the kind of thing people come to rely on and eventually miss if it stopped — that says something about your role in their life.",
          "If they had to describe someone who shows up for them, there's a real chance you'd come to mind first.",
          "This kind of quiet dependability tends to build trust over time, even without big declarations — worth trusting that the pattern is working in your favor.",
          "They likely feel a kind of gratitude toward you even if it hasn't come up directly — that's still a real, positive signal worth paying attention to.",
        ],
        watchFor: [
          "It's worth checking whether your effort is being noticed and appreciated, or just quietly expected — those read very differently over time.",
          "Noticing effort isn't the same as reciprocating feelings — worth being clear-eyed about that distinction before reading too much into their gratitude.",
          "If you've been giving a lot without much said in return, it's fair to want some acknowledgment rather than assuming they'll eventually say something.",
          "Watch for whether this appreciation ever turns into them making an effort too — one-sided noticing isn't quite the same as mutual investment.",
          "It's okay to ask directly how they feel instead of waiting to be sure they've noticed everything you've done — clarity beats guessing.",
        ],
      },
      otherOvercomesMe: {
        tier: "You're Hard for Them to Read",
        situational: [
          "a message from you probably doesn't feel neutral to them — there's a decent chance they read into it more than they'd admit.",
          "when someone else comes up, they might find themselves oddly attentive to how you react, more than the topic itself.",
          "when something hard happens, you might be someone they think of even if they don't reach out — hard to explain, harder to ignore.",
          "as a hangout winds down, they may feel an unease they can't quite name — this pairing rarely ends on a fully settled note.",
          "in a group, they might find themselves watching you a little more than they'd planned to.",
        ],
        lines: [
          "You probably keep them a little on their toes, which — whether or not you intend it — tends to hold someone's attention rather than lose it.",
          "In their head, you're likely someone they can't quite predict, and that unpredictability is doing more work than you'd expect.",
          "They may find you a little hard to figure out, and that's not necessarily a bad sign — this pairing tends to stay interested precisely because nothing's fully settled.",
          "There's a good chance they think about your interactions more than they let on, replaying them the way people do with things they can't quite resolve.",
          "You probably don't fully register as 'easy' to them — but easy isn't always what keeps someone's attention. This might be.",
        ],
        goodFit: [
          "Being hard to fully predict tends to hold someone's attention rather than lose it — that unpredictability is likely doing real work here.",
          "If they think about your interactions more than they let on, that's a meaningful sign, even without a clear declaration yet.",
          "This kind of magnetic uncertainty often means they're genuinely intrigued, not just casually curious — worth taking that seriously.",
          "Not being instantly 'easy' to read isn't a flaw here — this dynamic tends to stay interesting precisely because nothing's fully settled yet.",
          "If they keep coming back to conversations with you even when they can't quite explain why, that's a real sign of interest worth noting.",
        ],
        watchFor: [
          "Being hard to read cuts both ways — it's worth checking that the mystery isn't also creating real confusion or hesitation on their end.",
          "This kind of intrigue doesn't stay effective forever — at some point it's worth letting them see more of what's actually going on with you.",
          "It's possible they're intrigued but also unsure where they stand — worth considering whether more clarity from you would help rather than hurt.",
          "Unpredictability can hold attention, but it can also make someone hesitant to invest further without more certainty from you.",
          "If you want this to move somewhere specific, relying on mystery alone eventually stalls things out — worth being a little more direct at some point.",
        ],
      },
      iOvercomeOther: {
        tier: 'They Feel Safe With You',
        situational: [
          "a message from you probably lands as reassuring — the kind they don't have to brace for or overthink.",
          "when someone else comes up, they might notice that person doesn't give them the same sense of steadiness you do.",
          "when something hard happens, there's a decent chance you're one of the first people they'd trust to keep a level head about it.",
          "as a hangout winds down, they've likely clocked, at least once, how much calmer they feel around you than around most people.",
          "in a group, they might quietly relax knowing you're there to keep things from getting out of hand.",
        ],
        lines: [
          "They likely feel a kind of quiet safety around you — like you're someone who wouldn't let things get out of hand, even if they never said that out loud.",
          "In their mind, you're probably the dependable one — the person they'd trust to keep a level head when they can't.",
          "They may lean on your steadiness more than they'd admit, especially when things around them feel unpredictable.",
          "If asked to describe you, 'grounded' or 'someone I trust' would be a reasonable guess for what they'd say.",
          "They probably feel more like themselves, not less, when you're around — which is this pairing's quiet strength.",
        ],
        goodFit: [
          "Being the person someone trusts to keep a level head is a real foundation for something lasting, even if it's not the most dramatic quality.",
          "If they lean on your steadiness, especially when things feel unpredictable, that's a strong, quiet sign of trust worth valuing.",
          "People don't usually feel safe with just anyone — being that person for them puts you in a smaller, more significant category.",
          "If asked to describe you, words like 'grounded' or 'trustworthy' carry real weight as first impressions of someone worth being close to.",
          "Feeling more like themselves around you is a genuinely good sign — that kind of ease is hard to fake and rarely accidental.",
        ],
        watchFor: [
          "Feeling safe with you is valuable, but it's worth checking whether that safety has been read as romantic interest, or simply as a good friendship.",
          "Being the reliable, grounded one can sometimes get someone comfortable enough that they never feel urgency to define things further — worth noticing that pattern.",
          "It's fair to want them to see you as more than just 'the safe option' — worth eventually finding out how they'd describe their actual feelings, not just their comfort level.",
          "Trust is a strong foundation, but it isn't proof of romantic interest by itself — worth keeping that distinction in mind.",
          "If you're always the steady one, it's worth letting them see a fuller picture of you too — safety plus a little unpredictability tends to deepen interest, not just maintain it.",
        ],
      },
    },
  },
  ko: {
    reunion: {
      same: {
        tier: '여전히 같은 파장',
        situational: [
          "메시지를 세 번쯤 다르게 써봤다가 결국 제일 담백한 걸 보내게 될 거예요 — 그런데 그 담백한 말도 예전이랑 똑같이 가닿을 거예요.",
          "다른 전 애인 소식만큼 아프지 않을 거예요 — 그냥 이미 알고 있던 걸 확인하는 느낌에 가까울 거예요.",
          "대화가 끊긴 데서부터 다시 이어질 확률이 높아요 — 시간이 하나도 안 지난 것처럼요.",
          "새로운 소식이라기보다는, 원래 어렴풋이 느끼고 있던 걸 다시 확인하는 느낌일 거예요.",
          "말 안 해도 둘 다 같은 생각을 하고 있을 확률이 높아요 — 이런 싱크로율엔 굳이 알림이 필요 없어요.",
        ],
        lines: [
          "쉽게 못 놓는 이유가 간단해요 — 애초에 두 사람, 결이 어긋난 적이 없었거든요. 이런 편안함은 관계가 끝났다고 갑자기 사라지지 않아요.",
          "다시 만나면 예상보다 빨리 예전 리듬으로 돌아갈 확률이 높아요. 이런 익숙함은 사라지는 게 아니라 잠깐 조용해질 뿐이에요.",
          "재회한다면 처음부터 다시 시작하는 느낌보다는, 잠깐 멈췄던 대화를 이어가는 느낌에 가까울 거예요.",
          "쉽게 안 끝나는 인연이에요. 떨어져 있어도 애쓰지 않고 서로 말을 알아듣는 사이일 확률이 높아요.",
          "아직 연결이 남아있는지 궁금하다면, 아마 남아있을 거예요 — 이런 조합은 완전히 꺼지기보다 잠깐 어두워지는 쪽에 가까워요.",
        ],
        goodFit: [
          "다시 만나면 그 싱크로율은 거의 바로 돌아올 확률이 높아요 — 원래 서로 이해하는 데 힘들었던 적이 별로 없었으니, 잠깐 떨어져 있었다고 리셋되진 않아요.",
          "이건 비교적 잘 될 확률이 높은 재회 유형이에요 — 새로운 사람을 알아가는 게 아니라, 이미 잘 알던 사람에게 돌아가는 거니까요.",
          "헤어진 이유가 근본적으로 안 맞아서는 아니었을 확률이 높아요 — 이 조합의 편안함은 진짜였고, 그런 편안함은 보통 다시 만나도 여전히 남아있어요.",
          "어색한 재적응 기간을 거의 건너뛸 확률이 높아요 — 둘이 쌓아온 그 케미는 유통기한이 따로 없어요.",
          "신뢰만 남아있다면, 이 재회는 다른 재회보다 걸림돌이 적어요 — 여기서 어려운 건 서로를 이해하는 부분이 아니었으니까요.",
        ],
        watchFor: [
          "케미가 좋다고 해서 헤어진 진짜 이유가 저절로 풀린 건 아니에요 — 다시 반복되지 않을 거라고 넘겨짚기 전에 그 이유부터 짚어보세요.",
          "다시 연락했을 때 느껴지는 편안함을 재회해야 하는 근거로 착각하기 쉬워요 — 편안한 것과 맞는 것은 항상 같지 않아요.",
          "서로 너무 잘 이해하다 보니 헤어진 진짜 이유에 대한 어려운 대화를 자꾸 미루기 쉬워요 — 그 대화는 여전히 필요해요.",
          "이렇게 닮은 두 사람은 헤어짐의 원인이 된 같은 맹점도 공유하고 있을 수 있어요 — 그게 실제로 해결됐는지 확인해보세요.",
          "다시 끌리는 이유가 그때 느꼈던 편안함에 대한 그리움일 수도 있어요, 이번엔 뭐가 달라질지에 대한 진짜 계획이 아니라요 — 둘 중 뭔지 솔직해지는 게 좋아요.",
        ],
      },
      otherGeneratesMe: {
        tier: '여전히 채워주는 사람',
        situational: [
          "생각보다 덜 망설이게 될 거예요 — 이 사람한테 먼저 연락하면 대체로 편해진다는 걸 마음 한쪽에서 이미 알고 있으니까요.",
          "그냥 잘 지내는구나 싶은 것만으로도 마음이 놓일 확률이 높아요, 말 한마디 안 해도요.",
          "다시 여는 느낌보다는, 원래 나한테 다정했던 사람을 우연히 다시 만난 느낌에 가까울 거예요.",
          "그 소식을 듣고 묘하게 안심하게 될 거예요 — 나한테 좋았던 사람의 좋은 소식은 원래 그렇게 다가와요.",
          "날짜를 보는 순간 복잡한 감정보다 따뜻함이 먼저 들 수도 있어요 — 이 조합의 특징이에요.",
        ],
        lines: [
          "지금도 그 사람 기운이 은근히 나를 다독여주고 있을 거예요 — 그래서 놓는 게 생각보다 힘들었던 걸지도요.",
          "연락이 다시 닿으면, 그 사람은 여전히 뭐라고 말해야 내 하루가 편해지는지 정확히 아는 사람일 확률이 높아요.",
          "다시 연락해보면 알 수 있을 거예요 — 옆에 있는 게 애쓰는 느낌이 아니라 여전히 편안함에 가깝다는 걸요.",
          "어떤 관계는 끝나도 계속 뭔가를 가져가요. 이건 그런 관계가 아니에요 — 그 사람에게서 받았던 건 아마 지금도 조용히 남아있을 거예요.",
          "다시 나타나서 진짜 도움이 될 사람이 있다면, 이 조합이에요 — 든든하고, 베풀 줄 알고, 서두르지 않는 쪽이요.",
        ],
        goodFit: [
          "다시 돌아온다면 그 사람에게 다시 안정감을 느낄 확률이 높아요 — 이런 종류의 지지는 시간이 지나도 잘 사라지지 않아요.",
          "이 재회는 그 편안함이 진짜였고, 일방적이지 않았을 가능성이 높은 재회예요 — 그 기억을 믿어도 괜찮아요.",
          "그 사람이 전에 나한테 줬던 게 있다면, 지금도 여전히 줄 확률이 높아요 — 이 조합은 보통 스스로 고갈되지 않아요.",
          "좋았던 기억이 진짜였는지 스스로 설득할 필요 없어요 — 이 사람이 준 안정감은 대체로 일시적인 게 아니라 꾸준한 성격이에요.",
          "연락을 망설이고 있다면 이걸 기억하세요 — 원래 그 사람의 지지를 애써 쫓아다녀야 했던 관계는 아니었어요.",
        ],
        watchFor: [
          "그 사람이 뭘 줬는지만 보지 말고 나는 뭘 돌려줬는지도 물어보세요 — 이런 편안함은 점검 안 하면 조용히 일방통행이 될 수 있어요.",
          "그 사람이 나를 어떻게 느끼게 해줬는지 그리운 것과, 그 사람 자체가 그리운 건 좀 달라요 — 연락하기 전에 이 둘을 구분해보세요.",
          "이런 편안함에도 관계가 결국 끝났다면, 진짜 문제는 다른 데 있었을 확률이 높아요 — 좋았던 부분이 알아서 해결해줄 거라 넘겨짚지 말고 그 문제부터 짚어보세요.",
          "그 사람의 안정감만 미화하고 안 맞았던 부분은 잊기 쉬워요 — 양쪽 다 솔직하게 다시 들여다보는 게 좋아요.",
          "안도감만으로 시작한 재회는 처음엔 좋다가 다른 게 안 풀리면 조용히 멈출 수 있어요 — 편안함만으로 관계 전체를 끌고 갈 순 없어요.",
        ],
      },
      iGenerateOther: {
        tier: '내가 더 많이 준 쪽',
        situational: [
          "묻는 것보다 주는 게 더 많은 메시지를 쓰고 있는 나 자신을 발견할 수도 있어요 — 보내기 전에 그 패턴부터 알아채는 게 좋아요.",
          "잘 지내는 모습을 보면 살짝 마음이 아프면서도, 예상 못 한 뿌듯함이 같이 들 수 있어요.",
          "예전처럼 먼저 말 거는 쪽이 될 확률이 높아요 — 그게 정말 다시 반복하고 싶은 패턴인지 스스로에게 물어보는 게 좋아요.",
          "건너서 소식을 들으면 내 마음보다 그 사람 안부부터 챙기고 싶어질 수 있어요.",
          "그 날짜가 다가오면 그 사람이 나한테 뭘 해줄지보다 내가 뭘 해줄지부터 고민하게 될 수 있어요.",
        ],
        lines: [
          "관계를 먹여 살리던 쪽은 아마 나였을 거예요 — 노력도, 먼저 다가가는 것도, 감정 노동도요. 재회를 생각한다면 이번엔 뭐가 달라질지부터 물어보세요.",
          "이 조합은 주는 쪽을 자꾸 지치게 만들어요. 다시 연락하기 전에, 또 같은 걸 반복하게 되는 건 아닌지부터 확인하는 게 좋아요.",
          "받은 것보다 준 게 많았을 확률이 높고, 이건 그냥 시간이 지난다고 저절로 풀리는 문제가 아니에요 — 진짜 대화가 필요해요.",
          "다시 만난다면, 이번엔 조건을 좀 더 명확히 하세요. 이 조합은 베푸는 게 한쪽에서만이 아니라 양쪽에서 오갈 때 제일 잘 작동해요.",
          "많이 줬던 사람이 그리운 것과, 잘 맞았던 관계가 그리운 건 다른 감정이에요. 결정 내리기 전에 이 둘을 구분해보는 게 좋아요.",
        ],
        goodFit: [
          "이번엔 조건을 더 명확히 하고 돌아간다면, 이 조합은 두 번째에 오히려 더 잘 될 수 있어요 — 문제는 베푸는 마음이 아니라 균형이었으니까요.",
          "내가 여기서 얼마나 줄 수 있는지는 이미 잘 알고 있어요 — 그 명확함은 다시 시작할 때 유용해요, 다시 일방적으로 흐르지만 않는다면요.",
          "상호성에 대해 솔직한 대화로 시작한다면 이 재회는 진짜 가능성이 있어요 — 내가 가진 다정함 자체는 원래 문제가 아니었어요.",
          "떨어져 있던 시간이 오히려 이 관계를 더 나아지게 만들 수 있어요 — 거리를 두면 서로 진짜 필요한 게 뭔지 더 명확해지는 경우가 많거든요.",
          "그 사람이 정말 성장해서 이제 나만큼 다가올 줄 안다면, 처음에 나를 좋은 상대로 만들었던 그 특징들은 여전히 유효해요.",
        ],
        watchFor: [
          "연락하기 전에 솔직하게 물어보세요 — 이번엔 진짜 뭐가 달라질지, 아니면 또 같은 일방적인 패턴에 빠지게 될지요.",
          "많이 줬던 사람이 그리운 건 관계 자체가 그리운 것처럼 느껴질 수 있어요 — 지금 느끼는 게 실제로 뭔지 풀어보는 게 필요해요.",
          "그 사람이 나만큼 다가올 조짐이 전혀 없었다면, 희망만으로는 이 균형이 다시 맞춰지지 않아요 — 의도가 아니라 실제 행동을 지켜보세요.",
          "구체적으로 뭔가 바뀌지 않으면 이 패턴은 반복되는 경향이 있어요 — 돌아온 사과가 돌아온 노력과 같은 건 아니에요.",
          "그 사람이 그리운 건지, 필요한 존재가 되는 게 그리운 건지 확인해보세요 — 이 둘은 완전히 다른 다음 걸음을 요구해요.",
        ],
      },
      otherOvercomesMe: {
        tier: '끝나지 않은 긴장감',
        situational: [
          "그 메시지를 인정하는 것보다 훨씬 더 많이 고쳐 쓰게 될 거예요 — 이 조합은 문자 하나도 절대 간단하게 안 만들었으니까요.",
          "예상보다 더 세게 다가올 수 있어요 — 이 인연은 멀리서도 절대 조용한 적이 없었으니까요.",
          "속이 살짝 철렁할 확률이 높아요, 이 조합 특유의 좋기도 하고 나쁘기도 한 그 느낌이요.",
          "그때가 어땠는지 모르는 친구한테는 설명하기 힘든 방식으로 마음이 흔들릴 수 있어요.",
          "날짜가 다가올수록 예상보다 더 많은 감정이 올라올 수 있어요 — 이 조합엔 원래 무덤덤한 기념일이 없거든요.",
        ],
        lines: [
          "편한 연애는 아니었을 거고, 놓는 것도 쉽지 않았을 거예요 — 진짜 마찰이 있던 관계일수록 오래 마음에 남거든요.",
          "여전히 그 사람 생각이 난다면, 관계가 단순히 좋았기 때문이 아니라 뭔가 제대로 풀리지 않은 게 남아있어서일 확률이 높아요.",
          "문자 하나에도 유난히 신경 쓰게 만드는 상대였을 거예요. 그 긴장감은 관계가 끝났다고 사라지지 않아요.",
          "여기서 재회는 깔끔한 선택이 아니에요 — 복잡한 선택이고, 그게 오히려 끌리는 이유라는 걸 인정해도 괜찮아요.",
          "어떤 인연은 조용히 끝나지 않아요. 이게 그런 경우라면, 다시 끌리는 이유는 그 사람이 맞아서가 아니라 이야기가 아직 안 끝난 것 같아서일 거예요.",
        ],
        goodFit: [
          "마찰 밑에 진짜 케미가 있다면 그건 어디 안 가고 그대로 남아있을 확률이 높아요 — 이 조합은 관심이 없어서 흐지부지되는 경우가 드물어요.",
          "이 관계를 힘들게 만들었던 그 강렬함이 동시에 이 관계를 가질 가치가 있다고 느끼게 만든 부분이기도 해요 — 그 끌림은 진짜예요.",
          "마찰의 원인을 둘 다 제대로 풀어낸다면, 이 재회는 더 편했던 관계보다 훨씬 깊이 있는 관계로 이어질 수 있어요.",
          "이건 쉽게 조용해지는 인연이 아니에요 — 둘 다 여전히 마음이 있다면, 여기엔 진짜 다뤄볼 만한 게 있어요.",
          "이 관계를 힘들게 만들었던 그 밀당이 동시에 이 관계를 잊기 힘들게 만든 이유이기도 해요 — 그런 긴장은 그냥 생기지 않아요.",
        ],
        watchFor: [
          "풀리지 않은 긴장은 재회 직후에 거의 바로 다시 떠오르는 경향이 있어요 — 다시 만나고 싶은 충동 말고 진짜 원인을 짚고 넘어가는 게 좋아요.",
          "못다 한 일을 진짜 사랑으로 착각하기 쉬워요 — 지금 나를 끌어당기는 게 실제로 뭔지 솔직해지는 게 좋아요.",
          "마찰의 원인이 제대로 풀린 적이 없다면, 재회는 보통 같은 사이클을 시차를 두고 다시 시작하는 것뿐이에요.",
          "이런 끌림은 운명처럼 느껴질 수 있지만, 실제로 잘 맞는 건지 아니면 아직 제대로 소화 못 한 어려움인지 확인해볼 필요가 있어요.",
          "풀리지 않은 긴장 위에 세운 재회는 미리 솔직한 대화가 필요해요 — 그 단계를 건너뛰면 보통 같은 결말을 잠깐 미루는 것뿐이에요.",
        ],
      },
      iOvercomeOther: {
        tier: '더 단단했던 건 나',
        situational: [
          "뭘 보내기 전에 두 번은 생각하게 될 거예요 — 결국 또 그 사람을 챙기는 쪽이 되는 건 아닌지 재보면서요.",
          "그 사람을 보면 다른 무엇보다 보호 본능이 먼저 올라올 수 있어요 — 그런 오래된 습관은 쉽게 안 없어져요.",
          "물어보지도 않았는데 예전처럼 그 사람이 잘 지내나 은근히 신경 쓰고 있는 나를 발견할 수도 있어요.",
          "소식을 들으면 내 감정을 정리하기 전에 그 사람이 괜찮은지부터 확인하고 싶어질 수 있어요.",
          "날짜가 다가오면 예전에 나한테 기대던 것처럼 지금도 혼자 잘 버티고 있을지 궁금해질 수 있어요.",
        ],
        lines: [
          "이 관계에서 더 중심을 잡던 쪽은 아마 나였을 거예요 — 다시 그 역할로 돌아가기 전에, 그걸 기억해두는 게 좋아요.",
          "연락이 왔거나 먼저 연락을 고민 중이라면, 그 사람이 이제는 나만큼 다가올 줄 아는 사람이 됐는지, 아니면 여전히 내가 대부분을 짊어지게 될지 솔직하게 확인해보세요.",
          "이 조합은 밖에서 보면 헌신처럼 보이고 안에서 느끼면 지침처럼 느껴질 수 있어요. 실제로 어느 쪽이었는지 스스로에게 솔직해지는 게 좋아요.",
          "다시 만난다면 또 한 번 중심을 잡는 쪽이 될 확률이 높아요 — 나쁜 건 아니지만, 알고 시작하는 게 나아요.",
          "필요한 사람이 되는 게 그리운 것과, 그 관계 자체가 그리운 건 조금 달라요. 결정하기 전에 그 차이를 한번 들여다보세요.",
        ],
        goodFit: [
          "그 사람이 진짜 성장했다면 이번 재회는 처음과 많이 다를 수 있어요 — 그 가능성을 진지하게 고려해볼 가치가 있어요.",
          "전에 내가 줬던 그 안정감은 여전히 내가 줄 수 있는 거예요 — 문제는 이번엔 그게 공평하게 요구되는지예요.",
          "역할이 조금이라도 바뀐다면 더 균형 잡힌 관계가 가능해요 — 그게 실제로 어떤 모습일지 한번 그려보는 게 좋아요.",
          "필요하다면 이 관계를 지탱할 수 있다는 걸 이미 알고 있어요 — 더 중요한 질문은 그걸 내가 또 해야만 하느냐는 거예요.",
          "이번엔 진짜 서로 노력한다면, 내가 주는 안정감은 한 사람에게 떠맡겨진 일이 아니라 둘이 나누는 강점이 될 수 있어요.",
        ],
        watchFor: [
          "다시 돌아가기 전에 솔직하게 물어보세요 — 그 사람이 이제 나만큼 다가올 줄 아는 사람이 됐는지, 아니면 여전히 내가 대부분을 짊어지게 될지요.",
          "누군가에게 필요한 사람이 되는 게 그리운 것과, 건강한 관계가 그리운 건 좀 달라요 — 그 차이를 한번 들여다보세요.",
          "이 조합은 밖에서 보면 헌신처럼 보이고 안에서 느끼면 지침처럼 느껴질 수 있어요 — 실제로 어느 쪽이었는지 스스로에게 솔직해지세요.",
          "실질적인 변화 없이 같은 역할로 돌아간다면, 번아웃도 비슷한 시점에 다시 찾아오는 경향이 있어요.",
          "그 사람이 전반적으로 '변했다'고 말하는 것 말고, 구체적으로 뭘 바꿀 건지 물어보는 게 좋아요.",
        ],
      },
    },
    crush: {
      same: {
        tier: '닮은 마음',
        situational: [
          "이름 뜨는 순간 폰을 너무 빨리 확인하게 될 거예요 — 근데 아마 그쪽도 똑같이 하고 있을 확률이 높아요.",
          "우연히 마주치면 그날 하루가 통째로 흔들릴 거예요, 제일 좋은 의미로요 — 그리고 상대도 그럴 확률이 꽤 있어요.",
          "그 사람 게시물을 필요 이상으로 오래 들여다보게 될 거예요 — 근데 이번엔 그게 진짜 의미 있는 신호일 수도 있어요.",
          "이름만 나와도 웃음 참느라 유난히 조용해질 거예요 — 친구들은 이미 눈치챘을 확률이 높아요.",
          "실제 가능성보다 더 많이 스스로를 설득하려 들 거예요 — 이런 짝사랑은 생각보다 일방적이지 않은 경우가 많거든요.",
        ],
        lines: [
          "이 마음, 짝사랑으로 오래 안 남을 가능성이 꽤 있어요 — 이렇게 결이 비슷하면 아직 말 안 했어도 상대도 눈치챘을 확률이 높거든요.",
          "그 사람 앞에서 유난히 이해받는 느낌이 들 거예요 — 농담 코드까지 설명 안 해도 통하는 그런 느낌이요. 이런 건 보통 일방적이지 않아요.",
          "이런 짝사랑은 생각보다 빨리 진짜가 될 수 있어요, 서로 맞춰갈 게 별로 없어서요.",
          "매 순간을 너무 곱씹고 있다면 이걸 기억하세요 — 이렇게 잘 통하는 사람은 보통 나도 눈치채고 있을 확률이 높다는 거요.",
          "억지로 좋아하려고 애쓸 필요 없는 마음이에요. 함께 있을 때 느끼는 편안함 자체가 꽤 괜찮은 신호예요, 그냥 희망 사항이 아니라요.",
        ],
        goodFit: [
          "그 사람 앞에서 느끼는 이 편안함은 진짜 신호예요, 그냥 희망 사항이 아니라요 — 이렇게 잘 통하는 사람들은 서로를 오래 모른 채로 남는 경우가 드물어요.",
          "여기선 케미를 처음부터 쌓을 필요가 없어요 — 이미 있으니까요, 그게 이 짝사랑을 다른 것보다 한발 앞서게 만들어요.",
          "마음을 고백한다면, 그 대화는 뭔가를 새로 알리는 느낌보다는 이미 서로 알고 있던 걸 확인하는 느낌에 가까울 확률이 높아요.",
          "이런 짝사랑은 친구로서의 기반이 이미 거의 다 갖춰진 경우예요 — 더 깊은 관계로 넘어가는 데 새로 관계를 재구성할 필요가 없어요.",
          "이렇게 초반부터 유난히 이해받는 느낌이 드는 건 좋은 신호예요, 우연이 아니라요 — 이 조합은 이유가 있어서 빨리 통해요.",
        ],
        watchFor: [
          "우정이 워낙 편하다 보니, 그 이상을 원한다는 걸 나 자신에게, 그리고 언젠가는 그 사람에게 분명히 밝히는 게 필요해요 — 편안한 케미는 아무도 말 안 하면 그냥 우정으로 남을 수 있거든요.",
          "지금 느끼는 친밀감이 연애 감정인지, 아니면 그냥 아주 잘 맞는 우정인지 확인해보세요 — 둘 다 진짜 감정이지만 다음 걸음이 달라요.",
          "이렇게 닮은 두 사람은 관계를 편하게 유지하고 싶은 같은 본능 때문에 서로 감정 얘기를 피할 수도 있어요 — 결국 누군가는 그 패턴을 깨야 해요.",
          "다 편하다고 해서 그 사람이 내 마음을 이미 알고 있을 거라 넘겨짚지 마세요 — 편안함이 곧 소통은 아니에요.",
          "이 마음을 너무 오래 말 안 하고 두면, 우정이 주는 편안함 자체가 굳이 바꾸지 않을 이유가 될 수 있어요 — 지금 그런 상황인지 살펴보세요.",
        ],
      },
      otherGeneratesMe: {
        tier: '모든 걸 편하게 만드는 사람',
        situational: [
          "메시지 오는 것만 봐도 오후 전체가 가벼워질 거예요, 내용이 뭐든 상관없이요.",
          "우연히 마주치면 긴장되는 일이 아니라 그날 예상 못 한 좋은 일이 생긴 느낌일 거예요.",
          "게시물 보다가 나도 모르게 웃고 있을 거예요 — 온라인에서도 실제로 만났을 때랑 똑같은 효과를 줘요.",
          "티 안 내려고 해도 잘 안 될 확률이 높아요 — 이 사람 관련이면 표정이 허락도 없이 풀어지거든요.",
          "평소보다 빨리 마음을 정하게 될 거예요 — 이 짝사랑은 원래 큰 용기를 요구한 적이 없어요, 그냥 솔직함만요.",
        ],
        lines: [
          "그 사람 옆에 있는 것만으로 하루가 나아지는 느낌일 거예요, 별로 애쓰지 않아도요 — 딱 빠지기 쉬운 그런 에너지예요.",
          "이런 짝사랑은 어느새 스며들어요. 좋아하기로 결심했다기보다, 어느 날 문득 그 사람이 내 하루의 밝은 부분이 됐다는 걸 깨닫는 쪽에 가까워요.",
          "이 마음이 행동으로 옮길 만한 가치가 있는지 신호를 찾고 있다면, 이거예요 — 그 사람만 있으면 뭔가 가벼워진다는 것, 그게 작은 게 아니에요.",
          "그 사람 앞에서 나답지 않아지는 게 아니라 오히려 더 나다워질 확률이 높아요 — 더 단단한 관계로 이어질 만한 좋은 신호예요.",
          "이 마음은 설명하기 어렵지 않아요, 말로 꺼내기 조금 민망할 뿐이죠 — 그 사람은 그냥 내 기분을 진짜로 좋게 만들어주는 사람이라는 것뿐이에요.",
        ],
        goodFit: [
          "그 사람이 나를 편하게 만들어준다는 사실 자체가, 어떤 극적인 순간보다 믿을 만한 조용하고 진짜인 증거예요.",
          "이 짝사랑은 환상 위에 세워진 게 아니에요 — 그 사람 옆에서 실제로 느끼는 감정 위에 세워진 거라, 대부분보다 더 믿을 만한 기반이에요.",
          "그 사람 옆에서 덜한 내가 아니라 더 나다워지는 느낌이 드는 건, 이 짝사랑에 진짜 가능성이 있다는 좋은 신호 중 하나예요.",
          "행동으로 옮길 만한 극적인 신호를 기다리고 있다면, 이게 그거일 수 있어요 — 꾸준하고 진짜로 하루를 나아지게 하는 건 작은 게 아니에요.",
          "이 짝사랑은 강렬함만으로 세워진 게 아니라 편안함 위에 세워졌기 때문에, 오히려 오래가는 관계로 이어질 가능성이 있어요.",
        ],
        watchFor: [
          "그 사람 자체를 좋아하는 건지, 아니면 그 사람이 만들어주는 기분을 좋아하는 건지 확인해보세요 — 지금 느끼는 게 실제로 뭔지 솔직해지는 게 좋아요.",
          "이런 편안함은 끝없이 그냥 즐기기만 하고 절대 행동으로 안 옮길 수도 있어요 — 이 편안함을 아무 말 안 할 핑계로 쓰고 있는 건 아닌지 살펴보세요.",
          "그 사람의 다정함이 나한테만 특별한 건지, 원래 누구한테나 그런 성격인지 착각하지 마세요.",
          "이 마음이 너무 오래 조용히 있으면, 둘 다 굳이 깨고 싶지 않은 편안한 '연애 아닌 무언가'로 자리 잡을 위험이 있어요.",
          "지금 느끼는 안정감은 진짜지만, 그 사람도 같은 마음인지는 여전히 직접 확인해봐야 알 수 있어요 — 너무 많은 걸 미리 쌓아 올리기 전에요.",
        ],
      },
      iGenerateOther: {
        tier: '이미 마음 다 준 쪽',
        situational: [
          "먼저 확인하는 쪽이 나라는 걸 자주 느끼게 될 거예요 — 그 패턴에 스스로 솔직해지는 게 좋아요.",
          "마주치면 내 하루 얘기보다 그 사람 하루부터 물어보게 될 확률이 높아요.",
          "올린 걸 좋아요 누르고, 저장하고, 기억하고 있는 나를 발견할 거예요 — 의도치 않게 조용히 다 기록해두면서요.",
          "티 안 내려다가 결국 말이 너무 많아지는 친구가 될 거예요 — 이 설렘은 쉽게 숨겨지지 않아요.",
          "편한 것보다 더 빨리 고백 쪽으로 기울게 될 거예요 — 이 짝사랑은 참는 게 오히려 더 어려운 쪽이에요.",
        ],
        lines: [
          "그 사람의 사소한 것까지 다 눈치채는 쪽은 아마 나일 거예요 — 이 조합의 특징이죠. 위험한 건 마음이 닿았는지 모른 채 먼저 마음을 쏟는다는 거예요.",
          "이 짝사랑은 가장 다정하고 배려 깊은 내 모습을 끌어내요. 다만 그만큼의 마음이 돌아오고 있는지도 챙기면서 가는 게 좋아요.",
          "그 사람과 이야기할 핑계를 자꾸 만들고, 사소한 걸 기억하고, 좋은 날을 응원하게 될 거예요. 이건 진짜 마음이에요 — 언젠가는 이게 서로인지 확인해볼 가치가 있어요.",
          "이런 짝사랑은 내가 먼저 주고 타이밍이 맞기를 바라는 쪽이에요. 대체로 잘 맞긴 하지만, 너무 늦지 않게 알고 싶은 마음도 당연해요.",
          "이미지가 아니라 그 사람의 진짜 성격에 반하는 타입이에요 — 그래서 이 짝사랑이 다른 것보다 조금 더 진짜에 가까워요.",
        ],
        goodFit: [
          "여기서 보이는 세심함은 억지가 아니라 진심이에요 — 이 짝사랑이 뭔가로 이어진다면, 그 헌신은 이 관계의 강점이 될 확률이 높아요.",
          "이렇게 초반부터 마음을 많이 쓰는 건 단순한 반함이 아니라 진짜 투자의 좋은 신호예요 — 그 직감을 믿어도 좋아요.",
          "이 짝사랑은 상대를 진짜 한 사람으로서 알아가는 데서 시작된 거라, 그보다 덜한 걸로 시작한 짝사랑보다 더 오래 버티는 경향이 있어요.",
          "그 사람도 같은 마음이라면, 내 세심함이 이미 익숙하게 느껴질 확률이 높아요 — 이런 정성은 멀리서라도 잘 안 사라져요.",
          "이미지가 아니라 그 사람의 진짜 성격에 반하는 타입이라, 지금 느끼는 감정이 겉핥기식 짝사랑보다 훨씬 단단해요.",
        ],
        watchFor: [
          "더 나아가기 전에 균형을 점검해보세요 — 이 조합은 관심이 서로라는 게 확인됐을 때 제일 잘 작동해요, 넘겨짚을 때가 아니라요.",
          "아직 돌아오지 않은 마음에 이만큼 관심을 쏟다 보면, 작은 행동에 실제보다 더 많은 의미를 부여하게 될 수 있어요.",
          "이게 서로인지 빨리 알고 싶은 건 당연한 마음이에요 — 아무 신호도 없이 계속 주기만 할 필요는 없어요.",
          "항상 내가 먼저 다가가는 패턴은 아닌지 살펴보세요 — 계속 그렇다면, 넘기지 말고 그 사실 자체를 눈여겨보세요.",
          "이 정도의 헌신이 너무 오래 돌아오지 않으면, 원치 않아도 조용히 서운함으로 바뀔 수 있어요 — 지금까지의 시간에 대해 스스로 솔직해지는 게 좋아요.",
        ],
      },
      otherOvercomesMe: {
        tier: '설레면서도 헷갈리는 마음',
        situational: [
          "먼저 문자했는지 안 했는지에 과하게 의미를 부여하게 될 거예요 — 이 짝사랑은 사소한 것도 다 단서로 만들어버려요.",
          "마주치고 나면 30초짜리 스몰토크를 하루 종일 곱씹게 될 거예요.",
          "이유도 모른 채 그 사람 게시물을 캡처해두게 될 거예요, 나중에 다시 보고 싶어서요.",
          "이름만 나와도 티 숨기는 데 완전히 실패할 거예요 — 말 꺼내기도 전에 친구들은 이미 알고 있어요.",
          "같은 오후에 고백하기로 마음먹었다가 그만두기를 몇 번씩 반복하게 될 거예요.",
        ],
        lines: [
          "편안하고 잔잔한 짝사랑은 아니에요 — 순간순간을 자꾸 곱씹게 만들고, 살짝 흔들리게 만드는 쪽이에요.",
          "다른 사람과의 대화 전체보다 그 사람의 눈빛 하나를 더 오래 곱씹게 될 거예요. 편하진 않지만, 확실히 끌려요.",
          "이 마음엔 날카로운 구석이 있어요 — 내가 어디 서 있는지 잘 모르겠는 느낌, 그 불확실함이 오히려 계속 신경 쓰이게 만들어요.",
          "모든 짝사랑이 다 단순해야 하는 건 아니에요. 이건 조금 더 많은 걸 요구해요 — 인내심도, 용기도요. 그래서 더 진짜처럼 느껴지는 거고요.",
          "이 마음이 좀 불안정하게 느껴진다면, 이 조합답게 흘러가는 거예요 — 헷갈리는 마음일수록 결국 신경 쓸 가치가 있는 경우가 많아요.",
        ],
        goodFit: [
          "이 불확실함이 오히려 이 마음을 더 진짜처럼 느껴지게 만드는 부분이에요 — 아무것도 안 요구하는 짝사랑은 이렇게 오래 머릿속에 안 남아요.",
          "이런 끌림은 보통 혼란 밑에 진짜 케미가 있다는 뜻이에요 — 이렇게 떨쳐내기 힘든 감정은 아무것도 아닌 경우가 드물어요.",
          "내가 어디 서 있는지 정확히 모르는 게 불편하긴 해도, 그만큼 가볍게 스쳐가는 관심이 아니라 진짜 마음을 쓰고 있다는 뜻이기도 해요.",
          "이 짝사랑이 더 많은 걸 요구하는 것(더 많은 인내심, 더 많은 용기) 자체가, 쉬운 짝사랑보다 더 의미 있게 느껴지는 이유예요.",
          "이 짝사랑이 혼란스러운데도 계속 남아있다면, 그 지속성 자체가 눈여겨볼 만한 신뢰할 만한 신호예요.",
        ],
        watchFor: [
          "이런 상대와의 애매한 순간을 실제보다 더 의미 있게 해석하기 쉬워요 — 내 해석을 실제 말과 행동이랑 비교해보는 게 좋아요.",
          "이런 자석 같은 불확실함은 서로 마음이 있다는 뜻이 아니라 그냥 신호가 불분명한 것일 수도 있어요 — 확인 안 된 의미를 넘겨짚지 마세요.",
          "눈빛 하나, 메시지 하나에 과몰입하는 것도 이 끌림의 일부지만, 결국은 계속 해석만 하지 말고 직접 물어보는 것도 필요해요.",
          "모르는 상태가 주는 설렘이 오히려 확실히 알아보는 걸 미루는 핑계가 될 수도 있어요 — 지금 그런 상황인지 살펴보세요.",
          "이 짝사랑은 해결 없이 너무 오래가면 감정적으로 지칠 수 있어요 — 불확실함 속에 계속 머무는 대신 명확함을 원해도 괜찮아요.",
        ],
      },
      iOvercomeOther: {
        tier: '폭풍 속 나만 침착한 쪽',
        situational: [
          "메시지 받을 땐 속으로 어떻든 겉으론 침착하게 답장하는 쪽일 확률이 높아요.",
          "마주치면 별로 애쓰지 않아도 분위기를 차분하게 이끄는 쪽이 될 거예요.",
          "게시물은 큰 동요 없이 그냥 조용히 챙겨보게 될 거예요 — 원래 소중한 사람들한테 그렇게 하듯이요.",
          "친구들도 잘 눈치 못 챌 수 있어요 — 이 마음을 요란하게 드러내는 타입이 아니라, 그냥 세심함으로 티가 나는 쪽이니까요.",
          "고백도 충동보다는 결정에 가깝게 접근할 거예요 — 소용돌이치기보다 차분히 재보는 쪽, 딱 나답게요.",
        ],
        lines: [
          "그 사람 눈엔 내가 든든하고 중심 잡힌 사람으로 보일 확률이 높아요 — 설레는 매력은 아니어도 은근히 끌리는 포인트예요.",
          "이 짝사랑은 나도 모르게 보호 본능을 끌어내요. 나쁜 인상은 아니니, 내가 그런 사람이라는 것만 알아두면 돼요.",
          "그 사람이 예상 못 했던 방식으로 내 옆에서 편안함을 느낄 수도 있어요 — 그리고 편안함은 생각보다 훨씬 매력적이에요.",
          "내가 그 사람한테 관심 있다는 걸 눈치채기 전에, 그 사람이 먼저 내 안정감을 눈치챌 확률이 커요. 어느 쪽이든 주의 깊게 볼 만해요.",
          "혼란스러운 짝사랑이 아니에요 — 오히려 내가 중심이 되는 쪽이에요. 누군가의 안정감이 돼주는 것도 하나의 로맨스예요.",
        ],
        goodFit: [
          "누군가의 삶에서 차분하고 든든한 존재가 되는 건 은근히 매력적인 자질이에요 — 스스로 그 부분을 과소평가하지 마세요.",
          "그 사람이 이미 내 안정감을 눈치챘을 확률이 꽤 높아요, 말은 안 했어도요 — 차분함은 은근히 눈에 띄는 법이에요.",
          "이게 뭔가로 이어진다면, 내 안정감이 이 관계를 실제로 잘 작동하게 만드는 요소 중 하나가 될 확률이 높아요.",
          "방 안에서 제일 화려한 사람일 필요는 없어요 — 오래 기억되는 사람이 되려면요. 든든함도 그 자체로 매력이에요.",
          "이 짝사랑은 진짜 가능성이 있어요, 내가 주는 것(차분함, 믿음직함)이 생각보다 드물고, 흥분보다 오히려 더 원해지는 경우가 많거든요.",
        ],
        watchFor: [
          "든든한 쪽으로 있는 게 가끔은 연애 감정이 아니라 '그냥 친구'로 읽힐 수 있어요 — 다르게 봐주길 원한다면 조금 더 직접적으로 다가가는 게 좋아요.",
          "그 사람이 내 차분함을 매력으로 느끼는지, 그냥 편리해서 좋아하는지 확인해보세요 — 이 둘은 받아들이는 사람 입장에서 꽤 다르게 느껴져요.",
          "꾸준히 곁에 있다고 해서 그 사람이 내 마음을 알아챌 거라 넘겨짚지 마세요 — 확실한 신호 없이는 든든함이 연애 감정으로 안 읽힐 수도 있어요.",
          "항상 분위기를 차분하게 만드는 쪽이라면, 언젠가는 차분하지만은 않은 내 모습도 보여주는 게 좋아요.",
          "이 조합은 내 차분함에 그 사람이 진짜 호기심을 가질 때 제일 잘 작동해요 — 실제로 그런지 눈여겨보세요.",
        ],
      },
    },
    theirFeelings: {
      same: {
        tier: '당신에게서 자신을 봐요',
        situational: [
          "메시지가 오면 답장하는 게 일처럼 느껴지지 않을 거예요 — 오히려 안도감에 더 가까울 확률이 높아요.",
          "다른 사람 얘기가 나오면, 본인도 모르게 그 사람 결을 나랑 은근히 비교하고 있을 확률이 높아요.",
          "힘든 일이 생기면 나를 먼저 떠올릴 수도 있어요, 해결해줄 사람이라서가 아니라 이해해줄 사람이라서요.",
          "만남이 끝나갈 때쯤엔 아직 안 끝났으면 좋겠다고 한 번쯤 생각했을 확률이 높아요.",
          "여럿이 있을 때는 내가 같은 포인트에서 웃었는지 은근히 확인하고 있을 거예요.",
        ],
        lines: [
          "그 사람도 나와 있을 때 유난히 이해받는 느낌을 받을 확률이 높아요 — 다른 사람들 앞에서보다 덜 설명해도 되는 느낌이요.",
          "그 사람에게 나는 좋은 의미로 익숙한 사람일 거예요 — 지루한 게 아니라 편한 쪽으로요. 생각보다 흔치 않은 거라 아마 눈치챘을 거예요.",
          "물어보면 아마 이렇게 말할 거예요 — 굳이 설명 안 해도 이해해주는 사람이라고요.",
          "그 사람 머릿속에서 나는 '편한 사람' 카테고리에 들어가 있을 확률이 높아요, 이 조합에선 이게 진짜 칭찬이에요.",
          "곰곰이 생각해보면, 그 사람은 나랑 있을 때 다른 사람들 앞에서보다 덜 애써도 된다고 느낄 거예요.",
        ],
        goodFit: [
          "누군가에게 이렇게까지 이해받는 느낌은 흔치 않고, 그 사람도 아마 그걸 알고 있을 거예요 — 이런 편안함은 말로 안 해도 중요하게 느껴지는 법이에요.",
          "그 사람이 이걸 직접 생각해본 적이 있다면, 이 관계가 평범한 우정보다 더 가능성이 있다는 걸 이미 어렴풋이 느끼고 있을 확률이 높아요.",
          "사람들은 보통 자신을 유난히 편하게 만들어준 사람을 잊지 않아요 — 그것만으로도 그 사람 안에서 나는 다른 사람들과는 다른 카테고리에 속해있을 거예요.",
          "이런 자연스러운 싱크로율은 누군가 이름을 붙이는 순간 조용히 그 이상으로 변하는 종류의 감정이에요.",
          "그 사람은 나와 있을 때 어떤 면에서 덜 외로움을 느낄 확률이 높아요 — 말은 안 해도, 그건 누군가에게 작지 않은 의미예요.",
        ],
        watchFor: [
          "나한테 이해받는다고 느낀다고 해서 그 사람이 그 감정을 연애 감정과 연결 지었다는 뜻은 아니에요 — 나랑 같은 결론에 도달했을 거라 넘겨짚지 마세요.",
          "이런 편안함은 뭔가 계기가 없으면 그냥 '좋은 친구'로만 읽힐 수도 있어요 — 그걸 명확하게 말로 꺼낼 필요가 있는지 생각해보세요.",
          "이 편안함이 안전하고 부담 없다는 이유만으로 소중하게 여기고 있을 수도 있어요 — 관계의 성격을 바꾸는 건 둘 다에게 실제 위험이 따른다는 걸 알아두세요.",
          "나와 있을 때 편안함을 느낀다고 해서 그 편안함이 뭔가로 바뀔 수 있다는 생각까지 해본 건 아닐 수 있어요 — 이 둘은 다른 깨달음이에요.",
          "그 사람이 이걸 실제로 얼마나 곱씹어봤는지 과대평가하지 마세요 — 편안함은 의식적으로 들여다보지 않아도 느껴질 수 있거든요.",
        ],
      },
      otherGeneratesMe: {
        tier: '당신 덕분에 편안해져요',
        situational: [
          "메시지가 오면 말은 안 해도 그날 기분이 살짝 좋아질 확률이 높아요.",
          "다른 사람 얘기가 나오면, 그 사람은 나만큼 편하게 해주지 않는다는 걸 은근히 느낄 수도 있어요.",
          "힘든 일이 생기면 나를 찾을 수도 있어요, 복잡하게 만드는 사람이 아니라 편하게 만들어주는 사람이라서요.",
          "만남이 끝나갈 때쯤엔 딱히 설명 못 할 아쉬움을 한 번쯤 느낄 수도 있어요 — 그냥 '벌써?' 정도의 감정으로요.",
          "여럿이 있을 때는 이유는 몰라도 내가 있으면 평소보다 조금 더 편해질 확률이 높아요.",
        ],
        lines: [
          "둘 다 말한 적은 없어도, 나는 그 사람을 은근히 안정시켜주는 존재일 확률이 높아요 — 같이 있으면 더 불안해지는 게 아니라 더 차분해질 거예요.",
          "그 사람 마음속에서 나는 상황을 더 감당할 만하게 만들어주는 사람일 거예요. 조용하지만 진짜 중요한 존재감이에요.",
          "대놓고 말은 안 해도, 나는 그 사람에게 일종의 위안 같은 존재일 확률이 높아요 — 힘든 날을 조금 덜 힘들게 만들어주는요.",
          "내 어떤 점이 좋냐고 물으면, '네가 있으면 편해져'가 가장 유력한 답일 거예요, 첫마디로 안 나올 수는 있어도요.",
          "내 존재를 얼마나 많이 의지하고 있는지 그 사람도 모를 수 있어요 — 없어져 봐야 알게 되는 게 이 조합의 특징이에요.",
        ],
        goodFit: [
          "누군가의 안정감이 되어주는 건 진짜 가치 있는 역할이에요 — 말은 안 해도, 이런 영향력은 화려한 제스처보다 사람들에게 더 크게 남는 경우가 많아요.",
          "그 사람이 힘든 한 주를 보내다가 나랑 시간을 보내고 나아졌다면, 말은 안 해도 그건 그 사람에게 작지 않은 의미예요.",
          "사람들은 힘든 시기에 상황을 더 감당할 만하게 만들어준 사람을 기억해요 — 그런 기억은 보통 오래 남아요.",
          "이런 조용한 중요함은 시간이 지나서야 그 사람에게 더 뚜렷해지는 경우가 많아요 — 아직 확인은 못 했어도 그 영향력이 진짜라는 걸 믿어도 좋아요.",
          "그 사람에게 내 어떤 점이 좋냐고 물으면, 이 안정감을 주는 부분이 나올 확률이 높아요, 제일 먼저 말하는 건 아니어도요.",
        ],
        watchFor: [
          "누군가의 차분한 존재가 되어주는 건 소중하지만, 그 사람이 나를 그냥 위안의 원천 이상으로 보고 있는지 확인해보세요 — 나는 쓸모 이상으로 원해질 자격이 있어요.",
          "이런 조용한 의지는 대놓고 인정받지 못하는 경우가 많아요 — 그 사람이 알아서 눈치채길 기다리기보다 언젠가 직접 물어보는 게 좋아요.",
          "내가 없을 때야 비로소 얼마나 의지하고 있었는지 깨닫는 경우도 있어요 — 그 깨달음을 기다릴 의향이 있는지 스스로 결정해보세요.",
          "누군가를 안정시켜주는 일이 계속 돌아오지 않으면 일방적으로 느껴지기 시작할 수 있어요 — 그 사람도 비슷하게 나를 챙기고 있는지 살펴보세요.",
          "내가 주는 안도감이 자동으로 그 사람의 연애 감정으로 이어진다고 넘겨짚지 마세요 — 진짜 배려의 한 형태이긴 해도, 그 자체가 마음의 증거는 아니에요.",
        ],
      },
      iGenerateOther: {
        tier: '노력을 알아채는 사람',
        situational: [
          "메시지가 오면 다정하다고 느낄 확률이 높아요, 바로 같은 텐션으로 답 못 할 때도요.",
          "다른 사람 얘기가 나오면, 그 사람은 나만큼 신경 써주지 않는다는 걸 은근히 느낄 수도 있어요.",
          "힘든 일이 생기면 먼저 연락은 안 해도, 내가 먼저 연락하면 알아채고 고마워할 확률이 높아요.",
          "만남이 끝나갈 때쯤엔 내가 얼마나 챙겨주는 사람인지 이미 눈치챘을 확률이 높아요, 말은 안 해도요.",
          "여럿이 있을 때는 티 나게 고마워하진 않아도, 생각보다 내 노력을 많이 알아채고 있을 확률이 높아요.",
        ],
        lines: [
          "내가 그 사람을 위해 애쓰고 있다는 걸 어느 정도는 알아채고 있을 확률이 높아요 — 그리고 그게 진심으로 느껴질 거예요, 과하게 티 내지 않아도요.",
          "그 사람 머릿속에서 나는 꾸준히, 아낌없이, 별로 티 안 내면서 곁에 있어주는 사람일 거예요. 그런 건 눈에 안 띄어도 잊히지 않아요.",
          "속도는 나랑 다를 수 있어도, 내가 얼마나 신경 쓰고 있는지는 분명히 느끼고 있을 거예요. 그 정도 알아채는 것만으로도 의미가 있어요.",
          "내 역할을 한마디로 말해달라면, '내 곁에 있어주는 사람'이라고 답할 확률이 높아요, 입 밖으로 안 냈어도요.",
          "말로 꺼내진 않아도 조용한 고마움을 느끼고 있을 거예요 — 이 조합은 대놓고 티 내기보다 조용히 쌓이는 쪽이에요.",
        ],
        goodFit: [
          "나 같은 노력은 그 순간 인정받지 못해도 완전히 안 보이고 지나가는 경우는 드물어요 — 생각보다 더 잘 느껴지고 있을 확률이 높아요.",
          "꾸준하고 화려하지 않은 배려는 사람들이 결국 의지하게 되고, 없어지면 그리워하게 되는 종류예요 — 그건 그 사람 삶에서 내 위치에 대해 뭔가 말해줘요.",
          "그 사람이 자기 곁에 있어주는 사람을 떠올려야 한다면, 내가 제일 먼저 떠오를 확률이 꽤 있어요.",
          "이런 조용한 믿음직함은 큰 선언 없이도 시간이 지나면서 신뢰를 쌓아요 — 이 패턴이 내게 유리하게 작용하고 있다는 걸 믿어도 좋아요.",
          "직접적으로 언급된 적은 없어도 그 사람은 나에게 조용한 고마움을 느끼고 있을 확률이 높아요 — 그것도 눈여겨볼 만한 진짜 긍정적인 신호예요.",
        ],
        watchFor: [
          "내 노력이 알아차려지고 고마워하고 있는 건지, 아니면 그냥 조용히 당연시되고 있는 건지 확인해보세요 — 시간이 지나면 이 둘은 꽤 다르게 느껴져요.",
          "노력을 알아채는 것과 마음을 돌려주는 건 달라요 — 그 사람의 고마움을 너무 확대 해석하기 전에 이 차이를 분명히 해두는 게 좋아요.",
          "돌아오는 말 없이 많이 주고 있었다면, 언젠가 알아서 뭔가 말해주겠지 기대하기보다 어느 정도 인정을 원해도 괜찮아요.",
          "이 고마움이 그 사람도 노력하는 쪽으로 이어지는지 지켜보세요 — 일방적인 알아챔은 서로 투자하는 것과는 좀 달라요.",
          "그 사람이 내가 한 모든 걸 다 알아챘는지 확신이 설 때까지 기다리지 말고, 직접 마음이 어떤지 물어봐도 괜찮아요 — 추측보다 명확함이 나아요.",
        ],
      },
      otherOvercomesMe: {
        tier: '쉽게 안 읽히는 사람',
        situational: [
          "메시지가 오면 그 사람한텐 그냥 무덤덤한 일이 아닐 확률이 높아요 — 인정하는 것보다 더 많은 의미를 부여하고 있을 수 있어요.",
          "다른 사람 얘기가 나오면, 주제 자체보다 내 반응을 유난히 신경 써서 보고 있을 수 있어요.",
          "힘든 일이 생기면 먼저 연락은 안 해도 나를 떠올릴 수 있어요 — 설명하긴 어려워도 무시하긴 더 어려운 감정이에요.",
          "만남이 끝나갈 때쯤엔 콕 집어 말하기 힘든 찜찜함을 느낄 수도 있어요 — 이 조합은 깔끔하게 끝나는 경우가 드물어요.",
          "여럿이 있을 때는 계획한 것보다 나를 조금 더 자주 쳐다보고 있을 수 있어요.",
        ],
        lines: [
          "나는 그 사람을 살짝 긴장하게 만드는 존재일 확률이 높아요 — 의도했든 안 했든, 그런 예측 불가함이 관심을 놓치게 하기보단 더 붙잡아둬요.",
          "그 사람 머릿속에서 나는 쉽게 예측이 안 되는 사람일 거예요, 그리고 그 예측불가함이 생각보다 훨씬 큰 역할을 하고 있어요.",
          "나를 조금 어려운 사람으로 느낄 수도 있어요, 근데 그게 꼭 나쁜 신호는 아니에요 — 이 조합은 뭔가 완전히 정리되지 않았을 때 오히려 계속 관심이 가는 쪽이거든요.",
          "겉으로 티는 안 내도, 나와의 대화를 생각보다 자주 곱씹고 있을 확률이 높아요 — 딱 떨어지지 않는 걸 계속 되짚어보는 사람들이 그렇듯이요.",
          "그 사람에게 나는 딱히 '편한' 사람으로 안 느껴질 수도 있어요 — 근데 관심을 붙잡아두는 게 항상 편안함은 아니에요. 이게 그 경우일 수도 있고요.",
        ],
        goodFit: [
          "완전히 예측이 안 되는 사람으로 남는 건 관심을 잃게 만들기보다 오히려 붙잡아두는 경향이 있어요 — 그 예측 불가함이 실제로 여기서 역할을 하고 있을 확률이 높아요.",
          "그 사람이 나와의 대화를 말한 것보다 더 자주 생각한다면, 아직 확실한 고백은 아니어도 의미 있는 신호예요.",
          "이런 자석 같은 불확실함은 보통 그 사람이 그냥 궁금해하는 정도가 아니라 진짜 끌리고 있다는 뜻이에요 — 진지하게 받아들일 만해요.",
          "바로 '편한 사람'으로 안 읽히는 게 여기선 단점이 아니에요 — 이 조합은 아직 뭔가 확실히 정리되지 않았을 때 오히려 계속 흥미를 유지하는 경향이 있어요.",
          "왜인지 정확히 설명은 못 해도 자꾸 나와의 대화로 돌아온다면, 그건 눈여겨볼 만한 진짜 관심의 신호예요.",
        ],
        watchFor: [
          "예측이 안 되는 건 양날의 검이에요 — 그 미스터리가 그 사람 쪽에 진짜 혼란이나 망설임을 만들고 있는 건 아닌지 확인해보세요.",
          "이런 종류의 흥미는 영원히 효과 있지는 않아요 — 어느 시점부터는 실제 내 모습을 조금 더 보여주는 게 좋아요.",
          "궁금해하면서도 자기 위치를 확신 못 하고 있을 수도 있어요 — 내가 좀 더 명확하게 다가가는 게 오히려 도움이 될지 생각해보세요.",
          "예측 불가함은 관심을 붙잡아둘 수 있지만, 동시에 더 확신 없이는 더 다가가길 망설이게 만들 수도 있어요.",
          "이걸 구체적으로 어딘가로 이어가고 싶다면, 미스터리에만 의존하는 건 결국 정체되기 마련이에요 — 어느 시점엔 조금 더 직접적으로 다가가는 게 좋아요.",
        ],
      },
      iOvercomeOther: {
        tier: '당신 곁에서 안심해요',
        situational: [
          "메시지가 오면 마음을 졸이지 않아도 되는, 안심되는 연락으로 느낄 확률이 높아요.",
          "다른 사람 얘기가 나오면, 그 사람은 나만큼 든든한 느낌을 주지 않는다는 걸 은근히 느낄 수도 있어요.",
          "힘든 일이 생기면 침착하게 얘기할 수 있는 사람으로 나를 제일 먼저 믿을 확률이 꽤 있어요.",
          "만남이 끝나갈 때쯤엔 다른 사람들이랑 있을 때보다 나랑 있을 때 훨씬 편안하다는 걸 한 번쯤 느꼈을 확률이 높아요.",
          "여럿이 있을 때는 내가 있으면 상황이 크게 흐트러지지 않을 거라는 걸 은근히 믿고 편안해할 수 있어요.",
        ],
        lines: [
          "나와 있을 때 그 사람은 조용한 안전함을 느낄 확률이 높아요 — 입 밖으로 낸 적은 없어도, 내가 상황을 크게 흔들지 않을 사람이라는 걸 아는 거죠.",
          "그 사람 머릿속에서 나는 믿을 수 있는 사람, 흔들릴 때 중심을 잡아줄 사람일 확률이 높아요.",
          "인정은 안 해도 내 안정감에 은근히 기대고 있을 거예요, 특히 주변이 예측 불가능하게 느껴질 때요.",
          "나를 어떻게 설명할지 물으면, '든든한 사람' 또는 '믿을 수 있는 사람'이라는 답이 나올 확률이 높아요.",
          "내가 옆에 있을 때 그 사람은 오히려 더 자기다워질 확률이 높아요 — 이 조합의 조용한 강점이에요.",
        ],
        goodFit: [
          "누군가가 믿고 중심을 맡길 수 있는 사람이 되는 건, 화려하지는 않아도 오래가는 관계의 진짜 기반이에요.",
          "그 사람이 특히 상황이 예측 불가능하게 느껴질 때 내 안정감에 기댄다면, 그건 눈여겨볼 만한 조용하지만 강한 신뢰의 신호예요.",
          "사람들은 아무한테나 안전함을 느끼지 않아요 — 그 사람에게 그런 존재가 된다는 건 더 작고 더 의미 있는 카테고리에 든다는 뜻이에요.",
          "나를 설명해달라고 하면 '든든한 사람'이나 '믿을 수 있는 사람' 같은 표현이 나온다면, 그건 가까이 지낼 만한 사람에 대한 진짜 무게 있는 첫인상이에요.",
          "그 사람이 나와 있을 때 더 자기다워지는 느낌을 받는다면, 그건 진짜 좋은 신호예요 — 그런 편안함은 억지로 만들기 어렵고 우연히 생기지도 않아요.",
        ],
        watchFor: [
          "안전하게 느껴지는 건 소중하지만, 그 안전함이 연애 감정으로 읽히고 있는지, 그냥 좋은 우정으로 읽히고 있는지 확인해보세요.",
          "든든하고 안정적인 사람으로만 있으면, 그 사람이 굳이 관계를 더 명확히 정의할 필요를 못 느낄 정도로 편해질 수도 있어요 — 그 패턴을 눈여겨보세요.",
          "그 사람이 나를 그냥 '안전한 선택지' 이상으로 봐주길 바라는 건 당연해요 — 편안함의 정도 말고 진짜 마음이 어떤지 언젠가는 확인해보는 게 좋아요.",
          "신뢰는 강한 기반이지만 그 자체로 연애 감정의 증거는 아니에요 — 그 차이를 염두에 두세요.",
          "항상 든든한 쪽으로만 있다면, 내 좀 더 다양한 모습도 보여주는 게 좋아요 — 안전함에 약간의 예측 불가함이 더해지면 관심을 유지하는 것뿐 아니라 더 깊어지는 경우가 많아요.",
        ],
      },
    },
  },
};

// Reunion-only closing line, appended after the per-relation line at render
// time rather than baked into all 25 reunion lines — one place to edit.
export const romanceClosing = {
  en: {
    reunion: "Whether you get back together or not, what matters most is what you do from here.",
  },
  ko: {
    reunion: '다시 만나든 아니든, 지금부터가 중요해요.',
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
 * Picks copy for a situation+relation, stable per pair of birthdates.
 * Returns the tier name, three parallel texts (line/goodFit/watchFor) all
 * drawn from the same seeded variant index, plus `situational` — all 5
 * concrete-moment texts for this situation+relation, always returned in
 * full rather than picked by seed, since the UI shows all 5 as separate
 * sections. The seed still keeps line/goodFit/watchFor stable per pair of
 * birthdates — it just no longer decides which situational text gets
 * shown, since all of them do.
 */
export function getRomanceCopy(lang, situation, relation, seedInput) {
  const bank = romanceTemplates[lang] || romanceTemplates.en;
  const entry = bank[situation][relation];
  const seed = hashCode(seedInput);
  const idx = seed % entry.lines.length;
  return {
    tier: entry.tier,
    line: entry.lines[idx],
    goodFit: entry.goodFit[idx],
    watchFor: entry.watchFor[idx],
    situational: entry.situational,
  };
}

/** Shared closing line for a situation, if one exists (currently just reunion). */
export function getRomanceClosing(lang, situation) {
  const bank = romanceClosing[lang] || romanceClosing.en;
  return bank[situation] || null;
}
