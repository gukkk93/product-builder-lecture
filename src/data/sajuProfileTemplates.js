// Content about the saju chart itself — personality/temperament — as
// opposed to fortuneTemplates.js, which is entirely about "today" relative
// to the chart. Nothing in this file changes based on the date.
import {
  getTenGodCategoryCounts,
  getDayBranchTenGodCategory,
  getWeakestElement,
  getElementRelation,
  getOvercomingElement,
  getNobleman,
  getCurrentDaeunPeriod,
} from '../utils/saju';

export const sajuProfileTemplates = {
  en: {
    dominant: {
      Wood: {
        title: 'Wood: The Grower',
        paragraphs: [
          "Wood energy is about growth — reaching for more, expanding, refusing to stay small. If Wood dominates your chart, you're probably the friend who's always mid-project, mid-plan, or mid-glow-up, because standing still has never really suited you. You take initiative naturally and recover from setbacks by immediately starting the next thing.",
          "The flip side: growth without direction turns into overextension. Wood-dominant people can spread themselves across too many projects, too many people, too many group chats, and burn out from sheer forward motion. The lesson your chart is quietly handing you is that not every branch needs to be climbed — some just need to be let go.",
        ],
      },
      Fire: {
        title: 'Fire: The Spark',
        paragraphs: [
          "Fire energy is charisma, warmth, and a kind of magnetism that draws people in without you trying very hard. If Fire dominates your chart, you're probably the one who makes a group chat feel alive, the one people quote back to you without realizing it, the one whose mood sets the room's mood.",
          "The flip side: fire that burns bright can also burn fast. Fire-dominant people are prone to intense highs followed by real crashes — big enthusiasm for something that fizzles out in a week, relationships that flare hot then cool suddenly. Your chart's advice: bank some embers for later instead of spending every spark the moment you feel it.",
        ],
      },
      Earth: {
        title: 'Earth: The Anchor',
        paragraphs: [
          "Earth energy is stability — the friend everyone calls when something's falling apart, the one who remembers birthdays, the one whose word actually means something. If Earth dominates your chart, you're probably the emotional infrastructure of your friend group, whether or not anyone's ever said it out loud.",
          "The flip side: being everyone's anchor is exhausting when no one's anchoring you back. Earth-dominant people tend to under-ask for help and over-deliver on everyone else's needs, quietly resentful long before they'd ever admit it. Your chart's advice: being needed and being used aren't the same thing — it's fine to let some weight drop.",
        ],
      },
      Metal: {
        title: 'Metal: The Blade',
        paragraphs: [
          "Metal energy is precision, discipline, and a refusal to accept sloppy anything — sloppy thinking, sloppy plans, sloppy relationships. If Metal dominates your chart, you're probably the one who notices the typo, holds the boundary, and says the honest thing everyone else was too polite to say.",
          "The flip side: a blade that's always sharp can cut people who didn't ask to be cut. Metal-dominant people can come across as cold or overly critical, even when the intent is just clarity. Your chart's advice: precision is a gift, but not everything needs to be corrected the moment it's noticed.",
        ],
      },
      Water: {
        title: 'Water: The Current',
        paragraphs: [
          "Water energy is intuition, adaptability, and a kind of quiet depth that takes people a while to actually reach. If Water dominates your chart, you're probably the one who reads a room before anyone speaks, adjusts without announcing it, and somehow always knows more than you're letting on.",
          "The flip side: water that only flows around obstacles never actually breaks through them. Water-dominant people can avoid confrontation so thoroughly that real problems just get rerouted instead of resolved. Your chart's advice: sometimes the current needs to hit the rock head-on instead of finding the tenth way around it.",
        ],
      },
    },
    dayMaster: {
      Wood: "Your day pillar — the part of your chart considered the truest read of who you are underneath everything else — runs on Wood. Whatever else is happening in your chart, at your core you're building toward something, always slightly further along than you were yesterday.",
      Fire: "Your day pillar runs on Fire, considered your chart's most honest read of you. Underneath whatever else is going on, your core self needs to be seen, needs to be felt, and lights up brightest when there's someone around to share it with.",
      Earth: "Your day pillar runs on Earth, the part of your chart considered closest to your true self. Underneath everything else, you're built for consistency — the version of you that shows up is the same one, day after day, whether or not anyone's watching.",
      Metal: "Your day pillar runs on Metal, considered the most accurate read of your core self. Underneath whatever else your chart says, you're built around standards — for yourself first, and for everyone else by extension, whether they asked for it or not.",
      Water: "Your day pillar runs on Water, the part of your chart considered the truest version of you. Underneath everything else, you adapt faster than people give you credit for, and you're holding more depth than most people ever get to see.",
    },
    // Based on the Day Branch's (일지, the "spouse palace") Ten God
    // category relative to the day master — traditionally the chart
    // position most associated with how someone experiences a romantic
    // partner. Doesn't need gender or a strength reading, so it's always
    // computable. See getDayBranchTenGodCategory in utils/saju.js.
    romanceStyle: {
      title: 'Your Love Style',
      subtopicTitles: {
        overall: 'Overall Love Style',
        attraction: 'What Draws People In',
        avoidType: 'A Type to Watch For',
        marriageTiming: 'On Marriage Timing',
      },
      companion: "Your spouse palace (일지, the Day Branch — traditionally the chart's marker for how you experience a partner) carries Companion energy. This tends to mean you look for a partner who feels like an equal — someone you relate to easily, almost like a close friend first, romance second. Think back to a first date where someone tried too hard to impress you and it actually cooled things off, versus one where the conversation just clicked and you were on a nickname basis before dessert arrived — you've probably lived both versions. It's less about the butterflies of \"dating\" and more about the ease of hanging out with someone you already trust, which is why you might quietly bristle at overly formal early-relationship gestures. On the flip side, a partner who wants to be put on a pedestal, or who needs to be the one steering the relationship, tends to feel exciting at first but gradually starts to grate the longer things go on.",
      output: "Your spouse palace (일지, the Day Branch) carries Output energy — traditionally linked to expression and creativity. This tends to mean you're drawn to a partner who lets you be genuinely expressive, playful, or unguarded, and relationships work best for you when there's room for real fun and self-expression, not just seriousness. Whether a relationship kept going probably came down to a small moment you can still picture — you made a dumb joke and they either laughed with you or went stone-faced, and you knew instantly which way things were headed. You likely stay closer to partners you actually want to text a screenshot to the second something funny happens, and how fast they react has become a quiet gauge for how the relationship's doing. On the flip side, a partner who takes everything a little too seriously, or reads your playfulness as immature, tends to make you dial yourself down over time — and the relationship quietly gets less fun along with it.",
      wealth: "Your spouse palace (일지, the Day Branch) carries Wealth energy, which traditionally points to a partner-oriented, providing kind of love — you likely show affection through concrete care (time, effort, resources) rather than just words, and you tend to value a partner who's grounded and practical alongside being warm. You've probably shown love less with \"I love you\" and more by quietly picking up their favorite snack before they even asked, or taking something off their plate on a bad day — that's just closer to how affection actually feels like you to give. The relationship tends to solidify the moment a partner actually notices those gestures instead of treating them as a given. On the flip side, someone who's all warm words but whose actual life is a mess tends to feel charming at first, then slowly exhausting once the real-world gaps start showing up.",
      officer: "Your spouse palace (일지, the Day Branch) carries Officer energy — traditionally the placement most associated with commitment and structure in a relationship. This tends to mean you take relationships seriously once you're in one, value clear expectations and follow-through, and are drawn to a partner who feels dependable and consistent rather than unpredictable. You've probably felt more unease than excitement around a partner whose replies come whenever and whose plans shift constantly — that inconsistency reads as a red flag to you faster than it might to most people. Someone who shows up exactly when they said they would, who treats even a small promise as one worth keeping, tends to earn your trust disproportionately fast. On the flip side, a spontaneous, go-with-the-flow type might feel refreshing at first, but that same unpredictability tends to turn into fatigue the deeper the relationship goes.",
      resource: "Your spouse palace (일지, the Day Branch) carries Resource energy, traditionally linked to comfort and emotional support. This tends to mean you're drawn to a partner who feels nurturing or steadying to be around — someone who makes things feel easier just by being there — and you likely give that same quality back once you feel safe in a relationship. Think back to a day you showed up completely drained, and just being around that one person let your shoulders drop without either of you saying much — you've likely had that exact moment. Around a partner who gives you that kind of ease, you tend to let your guard down and show the softer, less polished parts of yourself without really trying to. On the flip side, a partner who runs constantly high-energy or emotionally volatile tends to cost you energy every time you see them, until the relationship itself starts to feel like something that drains you instead of restoring you.",
      attraction: {
        companion: "People tend to feel your spouse palace's Companion energy as approachability — you read as easy to be around, someone they could see becoming close to without a lot of formality first. Someone's probably told you before that meeting you felt less like meeting a stranger and more like reconnecting with an old friend. That effortless ease — not something you're performing, just how you naturally show up — tends to read as the actual charm. Compared to someone who keeps people at arm's length or makes closeness feel like work, that easy warmth wins people over noticeably faster.",
        output: "People tend to feel your spouse palace's Output energy as charm — your expressiveness and playfulness make you memorable, and people are often drawn in by how unguarded and genuinely fun you are to be around. You've probably had a moment where one offhand comment at a gathering had the whole room laughing without you even trying — moments like that quietly build the reputation of \"being around them is fun.\" Compared to someone who only ever shows a polished, filtered version of themselves, someone whose reactions are actually alive in the moment tends to stick in people's memory far longer, and makes them want to see you again.",
        wealth: "People tend to feel your spouse palace's Wealth energy as dependability — you come across as someone who'd actually show up and follow through, which reads as attractive in a quieter, more grounded way than flash or charm. You've probably heard someone say they didn't notice you much at first, but slowly fell for you as you kept quietly following through on small promises — the person themselves, not any one gesture. Next to someone who talks a big game but disappears when it actually matters, that quiet reliability tends to stand out even more by comparison.",
        officer: "People tend to feel your spouse palace's Officer energy as seriousness in a good way — you read as someone who takes things (and people) seriously once committed, which is its own kind of magnetic to someone looking for something real. If someone's been cycling through casual, low-stakes connections, meeting someone who approaches things seriously can genuinely throw them off balance in a good way — you've probably been that disorienting presence for someone. One sincere attitude tends to land harder than any amount of playful back-and-forth. Surrounded by people who treat relationships casually, that seriousness reads as rare, and rarity is its own kind of magnetic.",
        resource: "People tend to feel your spouse palace's Resource energy as warmth — you come across as nurturing or easy to open up to, and people are often drawn in by how safe it feels to be around you. There's probably someone who ended up confiding something real in you despite not being especially close — something about you read as a person who'd listen without judging. Surrounded by people who always seem to be quietly evaluating everyone around them, that kind of warmth tends to land even harder, and stay memorable even longer.",
      },
      avoidType: {
        Wood: "Someone whose chart runs heavily on Wood energy may end up feeling like a mismatch in pace for you — their constant forward motion and need for more room to grow can clash with the rhythm you're comfortable at. Every time they bring up a new project or plan before you've even finished processing the last one, you're probably left slightly out of breath just trying to keep up with the conversation. Compare that to time spent with someone who's fine lingering on one thing for a while — you've probably noticed how much calmer that felt, without the same low-grade urgency. Not a hard rule — just worth noticing if that mismatched pace keeps showing up again and again.",
        Fire: "Someone whose chart runs heavily on Fire energy may end up feeling like a mismatch in pace for you — their intensity and need for constant spark can clash with the rhythm you're comfortable at. On a day you just wanted some quiet time together, they were already itching to start something new, and you've probably felt that quiet exhaustion creep in more than once. With someone who can actually enjoy slow, uneventful time alongside you, that same fatigue tends to barely show up at all. Not a hard rule — just worth noticing if that gap in tempo keeps nagging at you.",
        Earth: "Someone whose chart runs heavily on Earth energy may end up feeling like a mismatch in pace for you — their steadiness and resistance to change can clash with the rhythm you're comfortable at. You've probably suggested trying something new only to get a quiet \"let's just do what we always do\" that felt like a subtle brake being pulled. With someone who can actually enjoy change alongside you, that same stuck feeling tends to disappear, replaced by something a lot more freeing. Not a hard rule — just worth noticing if that stalled feeling keeps repeating.",
        Metal: "Someone whose chart runs heavily on Metal energy may end up feeling like a mismatch in pace for you — their bluntness and need for precision can clash with the rhythm you're comfortable at. You've probably said something offhand and gotten hit with a precise, fact-checked rebuttal that made you shrink a little mid-conversation. With someone who can just let a conversation meander without needing a correct answer, you've probably felt noticeably more at ease. Not a hard rule — just worth noticing if that sharpness keeps feeling like a weight.",
        Water: "Someone whose chart runs heavily on Water energy may end up feeling like a mismatch in pace for you — their tendency to hold back and avoid direct confrontation can clash with the rhythm you're comfortable at. You've probably sensed something was off, asked about it, and gotten nothing but a flat \"no, I'm fine\" that left you more frustrated than reassured. With someone who just says what's actually on their mind, you've probably felt real relief at not having to play a guessing game. Not a hard rule — just worth noticing if that guesswork keeps wearing you down.",
      },
      marriageTiming: {
        'strong-companion': "With a strong day master and Companion energy in your spouse palace, you tend to move at your own pace in relationships and won't be rushed into commitment. You've probably weathered a wave of \"so when's the wedding\" questions from family without budging an inch, judging things by your own timeline instead. If anything, the more pressure you feel from outside, the more carefully you slow down and double-check things for yourself. Compared to people who speed up to match everyone else's clock, you might look slow from the outside — but when the time is right, it'll likely be because you've genuinely decided, not because of outside pressure, which is exactly why it tends to stick once you do.",
        'strong-output': "With a strong day master and Output energy in your spouse palace, commitment tends to follow naturally once you've found someone who lets you be fully yourself. You've probably had a relationship where, without ever forcing a \"serious talk,\" you were just joking around and laughing and somehow already discussing next steps before you noticed the shift. Ironically, the moment someone tries to formally announce \"let's get serious now,\" that stiffness might make you tense up instead of feel closer. There's no need to force a timeline — as long as the relationship keeps feeling like yourself, it tends to become obvious to you when it's right.",
        'strong-wealth': "With a strong day master and Wealth energy in your spouse palace, you likely feel ready for commitment once the practical foundation feels solid — not just the feelings, but the sense that a life together could actually work day to day. You've probably caught yourself mentally running the numbers — could this actually work logistically — even while your feelings were already fully certain. Unlike people around you who rush ahead on emotion alone, you tend to hold your own brakes until you can actually picture the practical shape of it. Once that mental simulation clears and it genuinely feels like it would work, you become the type who moves forward without hesitation.",
        'strong-officer': "With a strong day master and Officer energy in your spouse palace, you tend to take commitment seriously once you decide to move toward it, and you're unlikely to drag your feet once the decision is made. You might have surprised people close to you by agonizing over something for ages and then moving shockingly fast the moment you actually decided. You tend not to tolerate a relationship left in ambiguous limbo for long, and you're usually the one who ends things first rather than let uncertainty drag on. Trust that instinct when it arrives — when it comes, it'll come decisively.",
        'strong-resource': "With a strong day master and Resource energy in your spouse palace, you tend to feel ready for commitment once a relationship feels genuinely steadying rather than effortful. Every time marriage has come up, you've probably checked for one specific feeling first — that being around this person doesn't take effort. In a relationship that requires constant tension or compromise just to keep functioning, that feeling of ease never quite arrives, no matter how much time passes, which has probably left you privately frustrated before. That sense of ease, when it shows up consistently, is usually the sign worth trusting.",
        'weak-companion': "With a gentler day master and Companion energy in your spouse palace, commitment tends to feel right once you've found someone who feels like a true equal — patience here pays off more than rushing toward a milestone. You might have quietly hoped someone would take the lead for you, only to feel far more at ease with someone walking beside you at the same eye level instead. Someone who tries to overwhelm you or over-manage you tends to make you shrink rather than open up. Patience here pays off more than rushing — waiting for that equal footing tends to serve you better than forcing a timeline.",
        'weak-output': "With a gentler day master and Output energy in your spouse palace, you likely need to feel fully comfortable being yourself before commitment feels right — that comfort, once it's genuinely there, tends to be the real signal. You've probably measured it by a specific feeling — the moment you could joke around freely without watching your own reactions, you knew it was safe to be yourself with them. In a relationship where you have to carefully read the room before every reaction, that same confidence never quite settles in. Once that ease is genuinely, consistently there, that's the real signal.",
        'weak-officer': "With a gentler day master and Officer energy in your spouse palace, having a stable, dependable partner tends to matter more to your sense of readiness than any particular timeline — the right steadiness will make the timing feel obvious on its own. Around someone whose replies are unpredictable or whose plans keep shifting, certainty never quite arrives for you — but around someone who shows up the same way every time, you've probably found yourself picturing the future almost without deciding to. With an unstable partner, that certainty tends to stay elusive no matter how much time passes. Meet that kind of steadiness, and the timing tends to feel obvious on its own.",
        'weak-wealth': "With a gentler day master and Wealth energy in your spouse palace, feeling genuinely taken care of tends to matter more than a specific timeline — when that steadiness is consistently there, the timing tends to feel right on its own. Your certainty has probably tipped decisively at a specific memory — a moment your partner took care of you through action, not just words, during a hard stretch. In a relationship that's warm in words but leaves you carrying everything alone in practice, that certainty tends never quite to arrive, no matter how much time passes. When that steadiness is consistently there, the timing tends to feel right on its own.",
        'weak-resource': "With a gentler day master and Resource energy in your spouse palace, you likely need to feel truly supported before commitment feels right — once that foundation is solid, the timing has a way of resolving itself without forcing anything. There's probably a specific moment your certainty first clicked into place — a hard stretch where they stayed close and steadied you instead of pulling away. With a partner who tends to drift further away exactly when things get hard, that same certainty rarely takes shape, no matter how long you wait. Once that foundation is genuinely solid, the timing has a way of resolving itself without you having to force anything.",
      },
    },
    // Based on how many of the chart's 7 non-day-gan characters fall into
    // the Wealth Star (財星) Ten God category — a direct count, not a
    // strength reading, so "many" genuinely means several Wealth-category
    // characters, not just a strong dominant element. See
    // getTenGodCategoryCounts in utils/saju.js.
    wealthStyle: {
      title: 'Your Money Style',
      subtopicTitles: {
        overall: 'Overall Money Style',
        timing: 'Timing Read',
        spendingHabit: 'Spending Habit',
        luckyItem: 'Lucky Item',
      },
      none: "There's little to no Wealth Star (財星) energy in your chart, which tends to mean money just isn't your primary motivator — you're more likely to chase meaning, mastery, or relationships first and let income follow as a side effect. When payday hits, you've probably thought about what you learned or who you spent time with that month before you thought about the number in your account. In a conversation about investing or side hustles, you might have zoned out and only tuned back in halfway through. Next to people whose eyes light up the second money comes up, you might occasionally wonder if you're just indifferent — but really, you're chasing meaning, mastery, or relationships first and letting income follow as a byproduct. This isn't a bad placement; it just means financial ambition probably needs to be built deliberately rather than relied on as a natural drive, since it's not where your instincts already point.",
      moderate: "Your chart carries a moderate amount of Wealth Star (財星) energy — enough that money matters to you, but not so much that it dominates your decisions. When weighing a job change or a big decision, you've probably checked the salary but rarely let it be the only thing that decided it for you. You check your savings occasionally, and once it feels \"good enough,\" you tend to let it be rather than keep chasing more. Around people swinging for the fences on some big bet, your approach might look a little unambitious — but you already know, on some level, that steady saving and planning ahead tends to outlast a big swing in the long run.",
      many: "Your chart is rich in Wealth Star (財星) energy, which tends to show up as a genuinely active relationship with money — you notice opportunities, you're comfortable pursuing them, and building income is likely to feel natural rather than effortful. You've probably spotted a chance worth taking in a room where everyone else walked right past it, and moved on it before overthinking. Once something looks promising, you tend to act without much hesitation, which is exactly why growing your income tends to feel natural rather than like a grind. Next to people who deliberate endlessly before committing, you might look reckless — but that boldness tends to actually pay off more often than not. Worth watching: this same drive can tip into overextending financially if it isn't paired with equally strong discipline.",
      timing: {
        needGender: "Enter a gender above to see which Major Luck Cycle you're currently in, and what that means for your money flow right now.",
        good: "The Major Luck Cycle you're in right now favors wealth — this decade tends to bring opportunities or income that arrive with less friction than usual. An offer or opening you might have hesitated on before probably feels oddly worth taking right now, and once you actually move on it, things tend to go more smoothly than expected. Compared to people around you who are being unusually cautious through this same stretch, this is a window where leaning in a little more is actually the right call. It's a reasonable window to be a little more active — pursuing something that catches your eye, not just sitting on what you've already saved.",
        neutral: "The Major Luck Cycle you're in right now is a steady one for money — no dramatic swing in either direction. You might have noticed it just by checking your account — no sudden windfall, no sudden hit, just an even, unremarkable flow. Some people push hard to force a big change during a stretch like this and end up disrupting a flow that was actually fine on its own. Staying the course with whatever approach has already been working tends to serve you better here than trying to force a change.",
        caution: "The Major Luck Cycle you're in right now asks for a bit more caution with money — this decade tends to bring more spending pressure or unexpected cost than windfall. You've probably noticed money leaving faster than expected lately — an unplanned repair, an unexpected obligation — without having done anything you'd call wasteful. Some people respond to a stretch like this by making bold investments or big financial moves anyway, but holding off tends to be the far safer move right now. Worth holding off on big purchases or major financial commitments until the flow eases.",
      },
      spendingHabit: {
        none: "With light Wealth Star energy, your spending tends to lean careful — you're more likely to plan a purchase than impulse into one. You've probably left something sitting in your cart for days, mulling it over, only to close the tab and never buy it. Next to someone who hits \"buy now\" the second something catches their eye, you might feel a little uptight about it — but there's real comfort for you in watching savings grow rather than watching things arrive. You favor planned spending over impulse buys, and that same caution tends to be exactly what keeps your account healthy.",
        moderate: "With a moderate amount of Wealth Star energy, your spending tends to be balanced — you'll spend without much guilt on what actually matters to you, while still keeping an eye on the bigger picture. You've probably splurged without a second thought on something you genuinely wanted, while somehow refusing to open your wallet for something you didn't actually need. Compared to people who go all-in on one extreme or the other, your approach might look a little wishy-washy — but adjusting case by case, the way you do, tends to be exactly what makes a spending habit actually last.",
        many: "With rich Wealth Star energy, you tend to spend as actively as you earn — comfortable investing in experiences, people, or opportunities without much hesitation. When something or someone genuinely moves you, you tend to open your wallet without doing the math first, and you've probably been mildly shocked looking back at a statement afterward. To someone who saves compulsively, that might read as excessive — but money spent that way genuinely does come back around, in relationships and opportunities, more often than you'd think. Worth pairing that comfort with a deliberate savings habit on the side, since the same ease can make money move through your hands quickly.",
      },
      luckyItem: {
        Wood: "In traditional Five Element symbolism, green tones and living plants are considered a natural match for Wood energy. On a day nothing was going right, you might have caught yourself glancing at a small potted plant on your desk and felt something in you ease up, just slightly. A gray, sterile desk tends to sap a little energy compared to one with even a single plant or green accessory on it. Next to a completely bare, lifeless space, that one small patch of green makes a bigger difference than you'd expect — a small potted plant on your desk, or a green accessory somewhere you pass by often, is the classic pairing.",
        Fire: "In traditional Five Element symbolism, red tones and warm lighting are considered a natural match for Fire energy. You've probably noticed your mood lift under warm lighting in a way it never does under harsh fluorescent light. A single warm-toned lamp tends to completely change the feel of a room compared to something cold and overly bright. A candle, a warm-toned lamp, or a small red accessory is the classic pairing.",
        Earth: "In traditional Five Element symbolism, yellow or ochre tones and ceramics are considered a natural match for Earth energy. When you're unsettled, holding a familiar ceramic mug has probably calmed you down in a way you couldn't quite explain. A piece of ceramic with some texture and weight to it tends to ground you more than a slick, cold glass ever does. A ceramic mug, bowl, or small pottery piece is the classic pairing.",
        Metal: "In traditional Five Element symbolism, white tones and metal accessories are considered a natural match for Metal energy. Before walking into something important, putting on a simple silver ring or watch has probably steadied your nerves in a way you couldn't quite explain. A bare wrist tends to feel less resolved than one with a single, simple metal accessory on it. A simple silver or white-toned accessory, like a ring or a watch, is the classic pairing.",
        Water: "In traditional Five Element symbolism, black or navy tones and water-related objects are considered a natural match for Water energy. Sitting somewhere with the sound of water nearby, or in front of a small fish tank, has probably calmed you down more than you expected. A bare wall tends to feel a little starker than a space with even one water-related object in it, which brings a quieter mood to a room. A water bottle, a small fish tank, or a navy accessory is the classic pairing.",
      },
    },
    // Based on how many of the chart's 7 non-day-gan characters fall into
    // the Officer Star (官星) Ten God category — same counting method as
    // wealthStyle above, just a different category.
    careerStyle: {
      title: 'Your Career Fit',
      subtopicTitles: {
        overall: 'Overall Career Fit',
        talent: 'Your Talent',
        workplaceType: 'Workplace Type',
        helpers: 'Who Helps You',
      },
      none: "There's little to no Officer Star (官星) energy in your chart, which tends to mean rigid hierarchy and top-down structure aren't where you do your best work. In a role where you had to move exactly as told, you've probably felt genuinely suffocated — not because the instructions were wrong, just because they weren't your way of doing things. On a project where you got to call your own shots without anyone looking over your shoulder, you probably produced noticeably better work than usual. You're likely better suited to independent, self-directed roles — freelance, entrepreneurship, or a job with real autonomy — where you set your own standards rather than answering to someone else's.",
      moderate: "Your chart carries a moderate amount of Officer Star (官星) energy — you can work within a structured organization without much friction, and you're comfortable following a system when it makes sense. In a meeting, you've probably followed the official process while still slipping in your own spin on how to actually get it done. In a fully unstructured environment you tend to lose your bearings, and in a fully rigid one you tend to feel boxed in — somewhere in between is genuinely where you're most comfortable. A balanced mix of structure and autonomy tends to suit you best in the long run.",
      many: "Your chart is rich in Officer Star (官星) energy, which tends to mean you actually thrive inside structure and hierarchy — clear roles, defined chains of command, and organizational systems tend to bring out your best rather than holding you back. Walking into an organization with clearly defined roles and a real reporting structure has probably made you feel more settled and focused, not less. In a completely hands-off environment where no one's setting a direction, you might have found yourself genuinely lost on what to even do first. You're likely well-suited to leadership within an established institution, where the structure itself becomes something you can work with rather than around.",
      talent: {
        base: {
          Wood: "Your natural talent leans toward growth and initiative — starting things, expanding scope, pushing a plan further than the original ask. Where everyone else stopped and called it \"good enough,\" you've probably pushed one step further and made the final result noticeably bigger. Compared to people who do exactly what's asked and nothing more, you might look like you're always overextending things — but that's exactly the shape of this talent.",
          Fire: "Your natural talent leans toward visibility and momentum — pitching an idea, energizing a room, getting people excited about something before it's even finished. In a presentation with roughly the same content as everyone else's, people have probably locked in specifically during your turn to speak. Among people who deliver information flatly, you're the one who can completely shift a room's energy with nothing but presence.",
          Earth: "Your natural talent leans toward reliability and follow-through — being the person a project can actually depend on to hold steady from start to finish. When everyone else burned out and dropped off halfway through, you've probably stayed put until the end and earned a \"yeah, just give it to them, they'll finish it\" reputation. Next to people who start strong and fizzle out, sheer consistency is your actual talent.",
          Metal: "Your natural talent leans toward precision and standards — catching what others miss, refining something until it's actually right, not just good enough. In a document everyone else already signed off as fine, you've probably been the one who caught the typo or the error nobody else noticed. Compared to people who wrap things up sloppily and move on, you might look overly picky — but that same precision is what actually raises the finished product's quality.",
          Water: "Your natural talent leans toward adaptability and read — sensing where a situation is headed before it's obvious, and adjusting your approach accordingly. When something unexpected threw everyone else off, you were probably the one person who stayed calm and simply changed direction. Compared to people who stubbornly stick to the original plan until it collapses, reading the flow early and adapting is what makes this talent yours.",
        },
        officerNote: {
          none: "Given how little structure your chart carries, that talent shows up best when you're setting your own direction rather than executing someone else's plan. In a role where you had to follow a fixed manual to the letter, this talent has probably gone half-suppressed without you fully realizing it. On the flip side, being handed a vague \"just figure it out\" with no real instructions has probably been exactly when this talent finally got to show what it can do.",
          moderate: "With a balanced amount of structure in your chart, that talent tends to come through best in mixed environments — some framework to work within, but still real room to make your own calls. In a fully unstructured role you've probably felt directionless, and in a fully rigid one you've probably felt boxed in and suppressed — you might have lived both. Somewhere in between — a real framework, but room to fill in the details your own way — is where this talent shows up most naturally.",
          many: "With strong structure in your chart, that talent is most visible inside a clear system — it shows up as drive to rise within it, not just to build something on your own. Starting completely from scratch with zero system in place has probably left this talent underused before. In an organization with a clear role and a visible path upward, though, that structure itself becomes the platform that lifts the talent higher.",
        },
      },
      workplaceType: {
        none: "You're likely best matched to independent-leaning work — freelance, founding something of your own, or a role where you're mostly answering to your own standards rather than a chain of command. A fixed schedule and a fixed reporting line have probably made you feel physically restless before you could even articulate why. In an environment where you set your own hours and prove yourself purely by results, you tend to act more responsibly and diligently, not less. Rather than forcing yourself to fit an organization, finding a role where you can set your own standards tends to suit you far better.",
        moderate: "You're likely best matched to a mixed environment — enough structure to know what's expected of you, enough freedom to actually do it your way. You might have felt lost in an overly hands-off organization and stifled in an overly controlling one — possibly both, at different points. Where the goal is clear but the process is yours to fill in, you've probably felt the most comfortable and produced your best results.",
        many: "You're likely best matched to an established organization with clear structure — a well-defined team, a known chain of command, a system you can actually work within rather than build from scratch. In a scrappy startup environment where everything has to be built from nothing, you might have found yourself genuinely adrift. In a large, already-structured organization, on the other hand, you've probably felt settled enough to actually show what you're capable of.",
      },
      helpers: {
        yes: "Your chart carries the Heavenly Nobleman (天乙貴人) — traditionally read as a sign that the right person tends to show up at the right time in your career, whether that's a mentor, a well-timed introduction, or someone who simply vouches for you when it matters. Looking back, an unexpected introduction or piece of advice has probably shown up at exactly the right moment more than once — not because you went looking for it, that person just happened to be there when it counted. Compared to people who've had to fight through every obstacle entirely alone, you tend to have someone extend a hand at exactly the moments that matter most.",
        no: "Your chart doesn't carry the Heavenly Nobleman (天乙貴人) placement — which traditionally means less reliance on being helped along, and more of your progress coming from opportunities you built yourself. You've probably had plenty of moments where you had to figure out the answer entirely on your own, quietly hoping someone would step in and help, only to end up finding the way yourself anyway. Compared to people who got a lucky break through a connection or introduction, your path might feel slower — but that tends to make the wins feel more earned, even if they take a bit longer to arrive.",
      },
    },
    // Based on the chart's weakest Five Element (lowest character count),
    // read through the traditional Five Element-organ correspondence —
    // deliberately the weakest element, not the dominant one, since that's
    // the system traditionally worth paying closer attention to. See
    // getWeakestElement in utils/saju.js.
    healthStyle: {
      title: 'Your Health Tendencies',
      subtopicTitles: {
        overall: 'Overall Health Tendencies',
        injuryRisk: 'Injury Risk Areas',
        exercise: 'Exercise That Fits You',
        diet: 'Eating for Balance',
      },
      Wood: "Wood is the quietest element in your chart, which in the traditional Five Element-organ correspondence points to the liver and gallbladder as the system worth paying a little extra attention to. You've probably had days where something small set off way more irritation than it should have, and swallowing it instead of letting it out left your body feeling noticeably stiff afterward. Compared to people who process frustration as it comes, you tend to let stress and anger quietly settle somewhere in the body instead. Practically, that often means being mindful of stress management and not bottling up frustration, since Wood's traditional domain is exactly that — smooth, unblocked flow.",
      Fire: "Fire is the quietest element in your chart, which in the traditional Five Element-organ correspondence points to the heart and small intestine as the system worth paying a little extra attention to. Even a little overexertion has probably left you tired for longer than it should, and there have probably been nights where sleep just didn't leave you feeling rested. Compared to people who bounce back quickly, your body tends to need a bit more time to warm back up. Practically, that often means being mindful of circulation and getting enough genuine rest, since Fire's traditional domain is warmth and circulation throughout the body.",
      Earth: "Earth is the quietest element in your chart, which in the traditional Five Element-organ correspondence points to the spleen and stomach as the system worth paying a little extra attention to. On a day you rushed through a meal or skipped one entirely, your stomach has probably let you know about it more than usual. Compared to people who eat on a steady schedule without thinking twice, your digestion tends to be a lot more sensitive to how well you're actually taking care of yourself. Practically, that often means being mindful of digestion and regular, unhurried meals, since Earth's traditional domain is exactly that — steady nourishment and absorption.",
      Metal: "Metal is the quietest element in your chart, which in the traditional Five Element-organ correspondence points to the lungs and large intestine as the system worth paying a little extra attention to. You've probably been the first one to catch a cough or a sore throat every time the seasons change. Compared to people who barely notice seasonal shifts, your body tends to react more sensitively to air quality and dryness. Practically, that often means being mindful of breathing and air quality, since Metal's traditional domain is exactly that — clean intake and letting go of what doesn't need to be held onto.",
      Water: "Water is the quietest element in your chart, which in the traditional Five Element-organ correspondence points to the kidneys and bladder as the system worth paying a little extra attention to. After a day spent somewhere cold, or pushing yourself too hard, your lower back or legs have probably felt unusually heavy the next day. Compared to people whose stamina holds steady, your body's reserves tend to run out a little faster. Practically, that often means being mindful of staying warm, staying hydrated, and getting real rest, since Water's traditional domain is exactly that — deep reserves and recovery.",
      injuryRisk: {
        Wood: "In the traditional Five Element-body correspondence, Wood governs the muscles and tendons — with Wood running quiet in your chart, sudden overstretching or jumping into intense movement without warming up is worth being a little more careful about. You've probably gone straight into full-intensity movement without warming up and felt a sudden twinge somewhere. Compared to people who take the time to properly loosen up first, this area of your body tends to react more sensitively to being rushed.",
        Fire: "In the traditional Five Element-body correspondence, Fire governs circulation and the blood vessels — with Fire running quiet in your chart, it's worth being a little more careful with anything involving heat (burns, overheating during exercise) and giving your body real recovery time after intense activity. Think back — you might have burned yourself more often than most people just from a moment's carelessness around something hot. Rather than diving straight into the next activity the way someone with faster recovery might, giving yourself one extra beat to rest tends to suit this body better.",
        Earth: "In the traditional Five Element-body correspondence, Earth governs the muscles around the limbs and digestive tract — with Earth running quiet in your chart, knee strain and digestive discomfort during or after activity are worth being a little more careful about. You've probably had your knees ache more than expected after exercise, or your stomach turn on you after moving around right after eating. Compared to people who push through those small signals without a second thought, this body genuinely needs a bit more advance care.",
        Metal: "In the traditional Five Element-body correspondence, Metal governs the skin and respiratory system, with a traditional link to the joints as well — with Metal running quiet in your chart, repetitive strain on the shoulders and wrists, plus dry skin, are worth being a little more careful about. After a day of repeating the same motion over and over, your shoulders or wrists have probably felt stiffer than you expected the next morning. Compared to people who can get away with skipping the extra care, this area genuinely benefits from a bit of stretching or moisturizing ahead of time.",
        Water: "In the traditional Five Element-body correspondence, Water governs the bones and joints — with Water running quiet in your chart, lower back and knee strain (especially from cold or overexertion) are worth being a little more careful about. After standing or sitting somewhere cold for too long, your lower back has probably felt unusually stiff. Compared to people who barely notice the cold, this part of your body genuinely responds well to being kept warm — the difference in how you feel is noticeable.",
      },
      exercise: {
        Wood: "Light cardio and stretching tend to suit you best. On a day you forced yourself through heavy lifting versus a day you just jogged and stretched, you've probably noticed the second one left your body feeling noticeably clearer. Compared to people who push themselves through high-intensity training, this might look like the easy option — but a jog, a bike ride, or a proper stretching routine gives Wood energy exactly the steady, unblocked movement it's looking for.",
        Fire: "High-intensity interval training tends to suit you best. Thirty minutes of slow, steady exercise versus ten minutes of short, intense bursts — you've probably found the short, intense version left you feeling more satisfied afterward. Compared to people who prefer long, slow sessions, short and intense matches Fire energy's natural rhythm far better.",
        Earth: "Strength training tends to suit you best. On a day you barely broke a sweat versus a day you actually lifted something heavy and pushed real effort into it, the second one has probably left you feeling steadier, mentally as well as physically. Compared to people who prefer light, quick workouts, building steady, grounded muscle matches Earth energy's preference for stability far better.",
        Metal: "A consistent, structured routine tends to suit you best. On a day you switched up your workout on a whim versus a day you just followed the same set routine, the routine day has probably left you noticeably more satisfied. Compared to people who improvise their workouts on the fly, the same schedule, the same sets, the same discipline each time matches Metal energy's preference for order far better than spontaneity does.",
        Water: "Swimming and flexibility work tend to suit you best. Grinding through something intense on land versus moving slowly through water — you've probably found your body actually felt lighter after the water session, not more tired. Compared to people who prefer sharp, choppy workouts, anything in or around water, or slow, deliberate stretching, matches Water energy's natural affinity for fluid, adaptive movement far better.",
      },
      diet: {
        Wood: "In the traditional Five Element-food correspondence, sour flavors and green vegetables are linked to Wood. On a day you weren't feeling great, a piece of citrus has probably brought your appetite back almost instantly. Compared to a diet that leans on heavy, greasy food, leafy greens, citrus, and lightly fermented foods tend to genuinely suit your body better.",
        Fire: "In the traditional Five Element-food correspondence, bitter flavors and red foods are linked to Fire. On a day you felt overheated and drained, a cool tomato or a piece of red fruit has probably settled you down in a way you didn't expect. Compared to a diet that leans on spicy, heavy food, bitter greens, tomatoes, and red fruit tend to genuinely suit your body better.",
        Earth: "In the traditional Five Element-food correspondence, sweet flavors and yellow foods are linked to Earth. On a day you felt unsettled and a little empty, a piece of naturally sweet squash or sweet potato has probably calmed you down more than you expected. Compared to rushing to fill an empty stomach with something heavily processed, slowly eating something naturally sweet tends to genuinely suit your body better (naturally sweet, not sugar-heavy).",
        Metal: "In the traditional Five Element-food correspondence, pungent flavors and white foods are linked to Metal. On a day you felt physically stuffy and blocked up, a dish with garlic or onion in it has probably cleared you out in a way that surprised you. Compared to a bland, flat meal, garlic, onion, radish, and white-fleshed fruit tend to genuinely suit your body better.",
        Water: "In the traditional Five Element-food correspondence, salty flavors and dark foods are linked to Water. On a day you felt completely out of energy, a bowl of seaweed soup has probably left you feeling replenished in a way you didn't expect. Compared to skipping a proper meal, seaweed, black beans, and dark leafy greens tend to genuinely suit your body better.",
      },
    },
  },
  ko: {
    dominant: {
      Wood: {
        title: '목: 성장하는 사람',
        paragraphs: [
          "목의 기운은 성장이에요 — 더 많은 걸 향해 손을 뻗고, 넓혀가고, 작은 채로 머무르길 거부하는 힘이죠. 사주에 목이 강하다면, 늘 뭔가 진행 중이고 뭔가 계획 중인 사람일 확률이 높아요. 가만히 있는 게 원래 안 맞는 타입이거든요. 주도적으로 시작하고, 좌절을 겪어도 곧바로 다음 걸 시작하며 회복해요.",
          "다만 방향 없는 성장은 과잉 확장이 되기 쉬워요. 목의 기운이 강한 사람은 너무 많은 프로젝트, 너무 많은 사람, 너무 많은 단톡방으로 스스로를 흩뜨려서, 순전한 추진력만으로 지쳐버리기도 해요. 사주가 조용히 건네는 조언은, 모든 가지를 다 오를 필요는 없다는 것 — 어떤 건 그냥 놓아줘도 괜찮다는 거예요.",
        ],
      },
      Fire: {
        title: '화: 불꽃 같은 사람',
        paragraphs: [
          "화의 기운은 카리스마와 온기, 그리고 별로 애쓰지 않아도 사람을 끌어당기는 매력이에요. 사주에 화가 강하다면, 단톡방을 활기차게 만드는 사람, 다들 자기도 모르게 따라 인용하는 말을 하는 사람, 분위기를 좌우하는 사람일 확률이 높아요.",
          "다만 밝게 타는 불은 빨리 타버릴 수도 있어요. 화의 기운이 강한 사람은 극심한 텐션 뒤에 확실한 다운을 겪기 쉬워요 — 일주일 만에 식어버리는 큰 열정, 확 타올랐다가 갑자기 식는 관계처럼요. 사주의 조언은, 느끼는 순간마다 불꽃을 다 써버리지 말고 나중을 위해 조금씩 남겨두라는 거예요.",
        ],
      },
      Earth: {
        title: '토: 든든한 사람',
        paragraphs: [
          "토의 기운은 안정감이에요 — 뭔가 무너질 때 다들 찾는 친구, 생일을 잊지 않는 사람, 말 한마디에 진짜 무게가 있는 사람이죠. 사주에 토가 강하다면, 아무도 대놓고 말은 안 해도 친구 그룹의 정서적 기둥일 확률이 높아요.",
          "다만 모두의 기둥 역할은, 정작 나를 받쳐주는 사람이 없을 땐 지치는 일이에요. 토의 기운이 강한 사람은 도움을 잘 요청하지 않으면서 남의 필요는 과하게 채워주는 경향이 있어요, 그러다 스스로도 인정하기 전에 조용히 서운함이 쌓이곤 하죠. 사주의 조언은, 필요한 존재인 것과 이용당하는 건 다르다는 것 — 어느 정도 무게는 내려놔도 괜찮다는 거예요.",
        ],
      },
      Metal: {
        title: '금: 날카로운 사람',
        paragraphs: [
          "금의 기운은 정교함과 절제, 그리고 어설픈 건 뭐든 받아들이지 않는 단호함이에요 — 어설픈 생각도, 어설픈 계획도, 어설픈 관계도요. 사주에 금이 강하다면, 오타를 제일 먼저 발견하는 사람, 선을 지키는 사람, 다들 예의상 참고 있던 솔직한 말을 하는 사람일 확률이 높아요.",
          "다만 늘 날카로운 칼날은 베일 생각이 없던 사람도 베게 돼요. 금의 기운이 강한 사람은 의도가 그저 명확함이었을 뿐인데도 차갑거나 과하게 비판적으로 보일 수 있어요. 사주의 조언은, 정교함은 재능이지만 알아차린 순간 바로 모든 걸 지적할 필요는 없다는 거예요.",
        ],
      },
      Water: {
        title: '수: 흐르는 사람',
        paragraphs: [
          "수의 기운은 직관과 유연함, 그리고 사람들이 시간을 들여야 겨우 닿을 수 있는 조용한 깊이예요. 사주에 수가 강하다면, 누가 말하기도 전에 분위기를 읽는 사람, 티 내지 않고 조율하는 사람, 어쩐지 겉으로 드러내는 것보다 늘 더 많이 알고 있는 사람일 확률이 높아요.",
          "다만 장애물을 피해서만 흐르는 물은 결국 뚫고 나가지 못해요. 수의 기운이 강한 사람은 갈등을 너무 철저히 피하다 보니, 진짜 문제가 해결되지 못하고 그냥 우회로만 계속 만들어지는 경우가 있어요. 사주의 조언은, 가끔은 열 번째 우회로를 찾기보다 바위에 정면으로 부딪혀야 할 때도 있다는 거예요.",
        ],
      },
    },
    dayMaster: {
      Wood: "일주는 사주에서 나의 본모습을 가장 정직하게 보여주는 부분인데, 목의 기운을 갖고 있어요. 사주에 다른 어떤 기운이 있든, 본질적으로는 뭔가를 향해 계속 나아가는 사람이에요 — 어제보다 늘 조금씩 더 앞서 있는.",
      Fire: "일주는 화의 기운이에요, 사주에서 나를 가장 솔직하게 보여주는 부분이죠. 다른 기운이 뭐라고 말하든, 마음 깊은 곳에서는 보여지고 느껴지고 싶어 하고, 누군가와 나눌 사람이 있을 때 가장 환하게 빛나요.",
      Earth: "일주는 토의 기운이에요, 사주에서 진짜 나에 가장 가까운 부분이죠. 다른 모든 것과 상관없이, 일관성을 위해 태어난 사람이에요 — 오늘 보여주는 내 모습이, 누가 보든 안 보든 늘 똑같은 그 모습이에요.",
      Metal: "일주는 금의 기운이에요, 사주에서 진짜 나를 가장 정확하게 보여주는 부분이죠. 다른 어떤 것과도 상관없이, 기준을 중심으로 만들어진 사람이에요 — 나 자신에게 먼저, 그리고 원하든 원치 않든 주변 사람들에게도요.",
      Water: "일주는 수의 기운이에요, 사주에서 가장 진짜에 가까운 나를 보여주는 부분이죠. 다른 모든 것과 상관없이, 사람들이 생각하는 것보다 훨씬 빠르게 적응하고, 대부분의 사람들이 못 보는 깊이를 품고 있어요.",
    },
    // 일지(배우자궁) 십성 기준 — 성별/신강신약 상관없이 항상 계산 가능
    romanceStyle: {
      title: '당신의 연애 스타일',
      subtopicTitles: {
        overall: '연애 총운',
        attraction: '이성이 느끼는 매력',
        avoidType: '페이스 조심할 유형',
        marriageTiming: '결혼 시기 조언',
      },
      companion: "배우자궁(일지 — 전통적으로 연애 상대를 어떻게 경험하는지를 보여주는 자리예요)에 비겁(比劫) 기운이 있어요. 이건 보통 나와 대등하게 느껴지는 상대를 찾는다는 뜻이에요 — 연애보다 먼저 친한 친구처럼 편하게 통하는 사람이요. 소개팅 자리에서 상대가 나를 애써 띄워주려 하면 오히려 마음이 살짝 식고, 반대로 편하게 티키타카가 되면서 어느새 별명부터 부르게 되는 사람한테 더 끌렸던 적이 있을 거예요. 데이트하는 느낌보다는 원래 알던 친구랑 노는 느낌에 가까워야 마음이 편해지는 편이라, 연애 초반부터 격식 차리는 분위기를 은근히 불편해했을 수도 있고요. 반대로 나를 떠받들어주길 바라거나 자기가 주도권을 쥐어야 안심하는 상대와는, 처음엔 설레도 시간이 갈수록 서서히 삐걱거림을 느낄 확률이 높아요.",
      output: "배우자궁(일지)에 식상(食傷) 기운이 있어요 — 전통적으로 표현력·창의성과 연결되는 자리예요. 보통 나를 진짜로 표현하고, 장난스럽고, 편안하게 있을 수 있게 해주는 상대에게 끌린다는 뜻이에요. 상대 앞에서 실없는 농담을 던졌을 때 같이 웃어주느냐, 아니면 순간 정색하느냐로 이 사람과 계속 만날지 말지가 갈렸던 경험, 떠올려보면 있을 거예요. 재밌는 걸 발견하면 바로 캡처해서 보내고 싶어지는 상대일수록 오래가는 편이고, 그 반응 속도 하나로 관계의 온도를 가늠하곤 해요. 반대로 매사 진지하게만 반응하거나 내 장난기를 '유치하다'고 받아들이는 상대 앞에서는, 나답게 있는 걸 슬며시 줄이게 되면서 관계 자체가 조금씩 재미없어지는 경우가 많아요.",
      wealth: "배우자궁(일지)에 재성(財星) 기운이 있어요 — 전통적으로 상대를 챙기고 베푸는 성향의 사랑을 가리키는 자리예요. 말보다는 구체적인 행동(시간, 노력, 물질적인 것)으로 애정을 표현하는 편이고, 다정함과 더불어 현실적이고 안정된 상대를 중요하게 여기는 편이에요. \"사랑해\"라는 말보다 상대가 좋아하는 걸 미리 사다 놓거나, 힘든 날 대신 일을 처리해주는 쪽으로 마음을 표현했던 적이 있을 거예요 — 그게 더 나다운 애정 표현이니까요. 상대가 그런 행동을 그냥 \"당연한 것\"으로 넘기지 않고 알아봐 줄 때 관계가 확실히 더 단단해지는 걸 느끼고요. 반대로 말로만 다정하고 실제 생활은 정리가 안 되는 상대와는, 처음엔 설레도 점점 현실적인 피로감이 쌓이기 쉬워요.",
      officer: "배우자궁(일지)에 관성(官星) 기운이 있어요 — 전통적으로 관계 안에서 책임감·안정성과 가장 많이 연결되는 자리예요. 한번 관계를 시작하면 진지하게 임하는 편이고, 명확한 약속과 그걸 지키는 걸 중요하게 여기고, 예측 불가능한 사람보다는 믿음직하고 한결같은 상대에게 끌리는 편이에요. 연락 텀이 들쭉날쭉하거나 약속을 자주 바꾸는 상대 앞에서는 설렘보다 불안이 먼저 올라왔던 경험, 있을 거예요. \"만나자\"고 한 시간에 정확히 나타나는 사람, 별거 아닌 약속도 지키는 사람한테 오히려 더 마음이 기우는 편이고요. 반대로 즉흥적이고 자유로운 스타일의 상대는 처음엔 신선하게 느껴져도, 관계가 깊어질수록 그 불안정함이 피로로 바뀌기 쉬워요.",
      resource: "배우자궁(일지)에 인성(印星) 기운이 있어요 — 전통적으로 편안함·정서적 지지와 연결되는 자리예요. 곁에 있는 것만으로 마음이 편해지고 다독여지는 느낌을 주는 상대에게 끌리는 편이고, 관계 안에서 안전하다고 느끼면 나도 그런 편안함을 상대에게 돌려주는 편이에요. 하루 종일 지친 채로 만나도 그 사람 앞에서만큼은 긴장이 스르르 풀렸던 경험, 떠올려보면 있을 거예요 — 별말 안 해도 옆에 있는 것만으로 충분했던 순간이요. 그런 안정감을 주는 상대 앞에서는 방어를 내려놓고 여린 모습까지 자연스럽게 보여주게 되고요. 반대로 늘 텐션이 높거나 감정 기복이 큰 상대와는, 만날 때마다 에너지를 써야 해서 관계 자체가 스스로를 갉아먹는 느낌으로 변하기 쉬워요.",
      attraction: {
        companion: "배우자궁의 비겁(比劫) 기운은 상대에게 '편안함'으로 느껴지는 편이에요 — 격식 없이도 금방 가까워질 수 있을 것 같은 사람으로 비치고, 그 대등한 느낌이 이유를 설명하기도 전에 상대를 끌어당기는 경우가 많아요. 처음 만난 자리인데도 오래 알던 사람처럼 편하게 대해준다는 얘기, 주변에서 한 번쯤 들어봤을 거예요. 애써 꾸미지 않아도 자연스럽게 나오는 그 여유가 오히려 매력으로 읽히는 거고요. 반대로 상대를 자꾸 어렵게 만들거나 거리를 두려는 사람보다, 있는 그대로 편하게 대해주는 쪽에 훨씬 빨리 마음을 열어주는 편이에요.",
        output: "배우자궁의 식상(食傷) 기운은 상대에게 '매력'으로 느껴지는 편이에요 — 표현력과 장난스러움이 인상에 오래 남고, 꾸밈없이 진짜 재밌는 사람이라는 인상이 상대를 끌어당기는 경우가 많아요. 모임에서 별생각 없이 던진 말 한마디에 다들 웃음이 터졌던 순간, 떠올려보면 있을 거예요 — 그런 순간이 쌓여서 \"저 사람 만나면 재밌겠다\"는 인상으로 남는 거예요. 반대로 늘 정제된 모습만 보여주려는 사람보다, 순간순간의 반응이 살아있는 쪽이 훨씬 오래 기억에 남고 다시 만나고 싶어지게 만들어요.",
        wealth: "배우자궁의 재성(財星) 기운은 상대에게 '믿음직함'으로 느껴지는 편이에요 — 실제로 곁에서 챙겨주고 끝까지 해낼 사람이라는 인상을 주고, 화려함보다는 조용하고 든든한 매력으로 상대를 끌어당기는 경우가 많아요. 처음엔 튀지 않아 눈에 안 들어왔는데, 약속을 하나씩 지키는 그 사람 자체를 보면서 서서히 마음이 기울었다는 얘기 들어본 적 있을 거예요. 반대로 말은 화려한데 막상 중요한 순간엔 자리를 비우는 사람과 비교되면서, 오히려 그 든든함이 더 크게 부각되곤 해요.",
        officer: "배우자궁의 관성(官星) 기운은 상대에게 '진지함'으로 느껴지는 편이에요 — 한번 마음을 정하면 사람도 관계도 진지하게 대한다는 인상을 주고, 그게 진짜를 찾는 사람에게는 나름의 매력으로 다가가는 경우가 많아요. 가벼운 만남만 반복하다가, 진지하게 다가오는 사람 앞에서 오히려 마음이 흔들렸던 경험, 있을 거예요. 장난스러운 밀당보다 진심이 느껴지는 태도 하나가 더 강하게 남거든요. 반대로 관계를 가볍게만 대하는 사람들 사이에서, 이런 진지함은 오히려 희소하게 느껴져서 더 눈에 띄는 매력이 돼요.",
        resource: "배우자궁의 인성(印星) 기운은 상대에게 '다정함'으로 느껴지는 편이에요 — 곁에 있으면 마음을 터놓기 편한 사람이라는 인상을 주고, 그렇게 안전하게 느껴지는 분위기가 상대를 끌어당기는 경우가 많아요. 딱히 친하지 않았는데도 이상하게 고민을 털어놓게 됐던 사람, 한 명쯤 있을 거예요 — 판단하지 않고 들어줄 것 같은 분위기가 그 사람한테 있었던 거예요. 반대로 늘 평가하는 듯한 태도를 보이는 사람들 틈에서, 이런 다정함은 유난히 크게 다가오고 오래 기억에 남아요.",
      },
      avoidType: {
        Wood: "목(木) 기운이 강한 상대는 페이스가 살짝 안 맞을 수 있어요 — 끊임없이 앞으로 나아가고 더 넓혀가려는 성향이, 지금 편안한 리듬과 부딪힐 수 있거든요. 이 사람이 새 프로젝트나 새 계획을 얘기할 때마다 나는 아직 지난 얘기를 소화 중인데 벌써 다음 얘기로 넘어가 있어서, 대화를 따라가다 살짝 숨이 찼던 순간이 있을 거예요. 반대로 한 가지에 오래 머물러도 괜찮은 상대와 있을 땐 그런 조급함 없이 훨씬 편안했던 기억도 함께 있을 거고요. 절대적인 경고는 아니에요 — 다만 유난히 페이스가 안 맞는 느낌이 계속 반복된다면, 한 번쯤 짚어볼 만한 신호예요.",
        Fire: "화(火) 기운이 강한 상대는 페이스가 살짝 안 맞을 수 있어요 — 강한 텐션과 끊임없는 자극을 원하는 성향이, 지금 편안한 리듬과 부딪힐 수 있거든요. 조용히 둘만의 시간을 보내고 싶은 날, 상대는 계속 새로운 일을 벌이고 싶어 해서 은근히 지쳤던 적이 있을 거예요. 반대로 잔잔하게 흘러가는 시간을 편하게 함께 즐길 줄 아는 상대와 있을 땐 그런 피로감이 훨씬 덜했을 거고요. 절대적인 경고는 아니에요 — 다만 그 텐션 차이가 계속 신경 쓰인다면, 한 번쯤 짚어볼 만한 신호예요.",
        Earth: "토(土) 기운이 강한 상대는 페이스가 살짝 안 맞을 수 있어요 — 변화에 저항하는 강한 안정 지향이, 지금 편안한 리듬과 부딪힐 수 있거든요. 뭔가 새로운 걸 시도해보자고 했을 때 상대가 \"그냥 하던 대로 하자\"며 은근히 발목을 잡는 느낌을 받은 적이 있을 거예요. 반대로 변화 자체를 같이 즐길 줄 아는 상대와 있을 땐 그런 답답함 없이 훨씬 자유로웠을 거고요. 절대적인 경고는 아니에요 — 다만 그 정체된 느낌이 자꾸 반복된다면, 한 번쯤 짚어볼 만한 신호예요.",
        Metal: "금(金) 기운이 강한 상대는 페이스가 살짝 안 맞을 수 있어요 — 직설적이고 정확함을 요구하는 성향이, 지금 편안한 리듬과 부딪힐 수 있거든요. 별생각 없이 한 말에 상대가 팩트로 정확하게 반박해와서, 대화하다 말고 순간 위축됐던 경험이 있을 거예요. 반대로 조금 느슨하게, 정답 없이 그냥 흘러가는 대화를 편하게 나눌 수 있는 상대와 있을 땐 훨씬 마음이 놓였을 거고요. 절대적인 경고는 아니에요 — 다만 그 날카로움이 계속 부담스럽다면, 한 번쯤 짚어볼 만한 신호예요.",
        Water: "수(水) 기운이 강한 상대는 페이스가 살짝 안 맞을 수 있어요 — 속을 잘 안 드러내고 직접적인 부딪힘을 피하는 성향이, 지금 편안한 리듬과 부딪힐 수 있거든요. 뭔가 서운한 게 있는 것 같은데 물어봐도 \"아니야, 괜찮아\"라는 말만 돌아와서 답답했던 적이 있을 거예요. 반대로 마음에 있는 걸 바로바로 얘기해주는 상대와 있을 땐 그런 추측 게임 없이 훨씬 편안했을 거고요. 절대적인 경고는 아니에요 — 다만 그 속마음을 읽어야 하는 피로감이 계속된다면, 한 번쯤 짚어볼 만한 신호예요.",
      },
      marriageTiming: {
        'strong-companion': "신강한 일간에 배우자궁 비겁 기운이면, 연애에서도 내 페이스를 지키는 편이라 재촉당한다고 서두르지 않아요. 주변에서 \"언제 결혼해?\"라는 질문이 쏟아져도 크게 흔들리지 않고 내 기준대로 판단해왔던 적, 아마 있을 거예요. 오히려 그런 압박이 강할수록 더 신중하게 확인하고 넘어가려는 성향이 있고요. 반대로 남들 속도에 맞춰 서두르는 사람들과 비교하면 느려 보일 수 있지만, 때가 되면 그건 아마 외부 압박이 아니라 스스로 진짜 결정했기 때문일 거예요 — 그래서 한번 정하면 잘 안 흔들려요.",
        'strong-output': "신강한 일간에 배우자궁 식상 기운이면, 나답게 있을 수 있는 사람을 만났을 때 자연스럽게 관계가 무르익는 편이에요. 억지로 진지한 척하지 않아도, 그냥 편하게 장난치고 웃다 보니 어느새 다음 단계를 자연스럽게 얘기하고 있었던 경험, 있을 거예요. 오히려 \"이제 진지하게 얘기해볼까\"라며 분위기를 딱딱하게 만드는 순간엔 반대로 부담부터 느꼈을 수도 있고요. 시기를 억지로 정할 필요 없이, 나다운 편안함이 이어지는 관계라면 때는 스스로 분명하게 느껴질 거예요.",
        'strong-wealth': "신강한 일간에 배우자궁 재성 기운이면, 감정뿐 아니라 현실적인 기반까지 탄탄하게 느껴질 때 비로소 준비됐다고 느끼는 편이에요. 마음은 확실한데 \"같이 살면 정말 잘 굴러갈까\"를 머릿속으로 시뮬레이션해봤던 순간, 떠올려보면 있을 거예요. 감정만 앞세워서 서두르는 주변 사람들과 다르게, 현실적인 그림이 그려질 때까지는 스스로 브레이크를 거는 편이고요. 그 시뮬레이션이 끝나고 \"이건 진짜 될 것 같다\"는 감각이 들면, 그때부터는 오히려 흔들림 없이 밀고 나가는 타입이에요.",
        'strong-officer': "신강한 일간에 배우자궁 관성 기운이면, 한번 결심하면 진지하게 밀고 나가는 편이라 마음을 정한 뒤엔 크게 미적거리지 않아요. 오래 고민만 하다가 정작 결정한 다음엔 순식간에 일을 진행시켜서 주변을 놀라게 했던 경험, 있을 수도 있어요. 애매하게 질질 끄는 관계는 애초에 오래 못 견디는 편이라, 확신이 없는 상태로 시간만 흘려보내는 상대와는 스스로 먼저 정리하려는 쪽에 가깝고요. 그 결심이 올 때 믿고 따라가면 돼요 — 오면 확실하게 올 거예요.",
        'strong-resource': "신강한 일간에 배우자궁 인성 기운이면, 관계가 애쓰는 느낌이 아니라 진짜로 편안하게 느껴질 때 준비됐다고 느끼는 편이에요. 결혼 얘기가 나올 때마다 \"이 사람이랑 있으면 애쓰지 않아도 되네\"라는 감각을 먼저 확인했던 적 있을 거예요. 반대로 만날 때마다 긴장하거나 서로 맞추느라 애써야 하는 관계에서는, 아무리 오래 만나도 이 감각이 안 와서 스스로도 답답했을 수 있고요. 그 편안함이 꾸준히 이어진다면, 그게 믿을 만한 신호예요.",
        'weak-companion': "신약한 일간에 배우자궁 비겁 기운이면, 진짜 대등하다고 느껴지는 사람을 만났을 때 때가 무르익는 편이에요. 누군가 나를 이끌어주길 은근히 기대했다가, 오히려 같은 눈높이에서 나란히 걸어주는 사람 앞에서 더 마음이 편해졌던 경험, 있을 거예요. 나를 압도하려 하거나 지나치게 챙기려는 상대와는 오히려 위축되기 쉽고요. 서두르기보다 기다리는 쪽이 오히려 더 잘 맞아요 — 그 대등한 느낌이 들 때까지는요.",
        'weak-output': "신약한 일간에 배우자궁 식상 기운이면, 나답게 있어도 괜찮다는 확신이 먼저 필요한 편이에요. 눈치 보지 않고 편하게 장난치고 웃을 수 있었던 순간을 기준으로, \"아, 이 사람 앞에선 나답게 있어도 되는구나\" 확인했던 적이 있을 거예요. 반대로 조심스럽게 반응을 살펴야 하는 관계에서는 결심이 쉽게 안 서고요. 그 편안함이 진짜로 자리 잡으면, 그게 진짜 신호예요.",
        'weak-officer': "신약한 일간에 배우자궁 관성 기운이면, 특정 시기보다는 안정적이고 믿을 수 있는 상대인지가 더 중요한 편이에요. 연락이 뜸하거나 약속이 자꾸 바뀌는 사람 앞에서는 확신이 안 서다가도, 늘 한결같이 곁에 있어주는 사람 앞에서는 자연스럽게 다음을 그려보게 됐던 경험이 있을 거예요. 불안정한 상대와는 아무리 오래 만나도 확신이 잘 안 서고요. 그런 든든함을 만나면 때는 자연스럽게 느껴질 거예요.",
        'weak-wealth': "신약한 일간에 배우자궁 재성 기운이면, 특정 시기보다는 진짜로 보살핌받는다는 느낌이 더 중요한 편이에요. 힘든 순간에 상대가 말보다 행동으로 먼저 챙겨줬던 기억을 계기로 마음이 확실히 기울었던 적, 있을 거예요. 말로만 다정하고 실제로는 혼자 다 감당해야 하는 관계에서는 아무리 시간이 지나도 이 확신이 잘 안 오고요. 그 든든함이 꾸준히 이어지면 때는 자연스럽게 느껴질 거예요.",
        'weak-resource': "신약한 일간에 배우자궁 인성 기운이면, 진짜로 지지받는다는 느낌이 먼저 필요한 편이에요. 힘든 시기를 지날 때 그 사람이 옆에서 다독여준 경험을 계기로, \"이 사람이라면\"이라는 확신이 처음 생겼던 순간이 있을 거예요. 반대로 힘들 때 오히려 더 멀어지거나 무심해지는 상대와는 그 확신이 좀처럼 안 생기고요. 그 기반이 탄탄해지면, 억지로 밀어붙이지 않아도 때는 저절로 풀려요.",
      },
    },
    // 일간 제외 나머지 7글자 중 재성(財星) 개수 기준 (없음/보통/많음)
    wealthStyle: {
      title: '당신의 재물 성향',
      subtopicTitles: {
        overall: '재물 총운',
        timing: '시기별 분석',
        spendingHabit: '소비 습관',
        luckyItem: '행운 아이템',
      },
      none: "사주에 재성(財星) 기운이 거의 없는 편이에요 — 돈이 삶의 첫 번째 동기는 아닌 타입일 확률이 높아요. 월급이 들어와도 \"얼마 모았나\"보다 \"이번 달엔 뭘 배웠나, 누구랑 뭘 했나\"를 먼저 떠올렸던 적이 있을 거예요. 재테크 얘기가 나오는 모임에서 나만 딴생각하다가 뒤늦게 정신 차린 경험, 한 번쯤 있을 수도 있고요. 돈 얘기만 나오면 눈을 반짝이는 사람들과 비교하면 스스로 좀 무심한가 싶을 때도 있겠지만, 의미, 실력, 관계 같은 걸 먼저 좇고 돈은 그 결과로 따라오는 쪽에 가까워요. 나쁜 배치는 아니고, 다만 재정적인 욕심은 타고난 본능에 기대기보다 의식적으로 키워야 하는 부분이라는 뜻이에요.",
      moderate: "사주에 재성(財星) 기운이 적당히 있는 편이에요 — 돈이 신경 쓰이긴 하지만 모든 결정을 좌우할 정도는 아니에요. 이직이나 큰 결정을 할 때, 연봉표를 확인은 하지만 그게 유일한 기준이 된 적은 별로 없었을 거예요. 통장 잔고를 가끔 확인하면서 \"이 정도면 됐다\" 싶으면 크게 더 욕심내지 않고 넘어가는 편이고요. 큰 한 방을 노리는 사람들 옆에서 답답하게 느껴질 수도 있지만, 꾸준히 저축하고 미리 계획하면서 천천히 안정을 쌓아가는 쪽이 결국 더 오래가는 걸 스스로도 알고 있는 타입이에요.",
      many: "사주에 재성(財星) 기운이 풍부한 편이에요 — 돈과의 관계가 꽤 적극적인 타입일 확률이 높아요. 남들은 그냥 지나치는 자리에서 \"저거 되겠다\" 싶은 기회를 먼저 알아채고 움직였던 경험, 떠올려보면 있을 거예요. 기회다 싶으면 재는 시간 없이 바로 실행에 옮기는 편이라, 수입을 늘리는 일이 애쓰지 않아도 자연스럽게 느껴질 거고요. 신중하게 재고 또 재는 사람들과 비교하면 과감해 보일 수 있지만, 그 과감함이 실제 결과로 이어지는 경우가 많아요. 다만 그만큼 절제도 같이 갖추지 않으면 재정적으로 무리하게 확장할 위험도 있으니 주의하세요.",
      timing: {
        needGender: "위에서 성별을 입력하면 지금 어느 대운을 지나고 있는지, 그리고 그게 지금 재물 흐름에 어떤 의미인지 확인할 수 있어요.",
        good: "지금 흐르는 대운은 재물운이 좋은 흐름이에요 — 평소보다 마찰 없이 기회나 수입이 따라오는 시기예요. 예전 같으면 망설였을 제안이나 자리에 이상하게 마음이 가고, 막상 움직여보면 생각보다 술술 풀리는 경험을 하게 될 확률이 높아요. 같은 시기를 지나면서도 유난히 조심스러워하는 주변 사람들과 비교하면, 지금은 오히려 더 적극적으로 움직여도 되는 흐름이에요. 이미 가진 걸 지키기만 하기보다, 눈에 들어온 기회는 한 번 잡아보는 게 이 시기의 결을 잘 타는 방법이에요.",
        neutral: "지금 흐르는 대운은 재물운이 무난하게 흘러가는 시기예요 — 극적인 변화는 없는 흐름이에요. 갑자기 큰돈이 들어오지도, 갑자기 크게 나가지도 않는 평이한 흐름이 이어지고 있다는 걸 통장을 보면서 느꼈을 수도 있어요. 이 시기에 괜히 큰 변화를 만들려고 무리하다가 오히려 흐름을 흐트러뜨리는 사람들도 있는데, 지금까지 해온 방식을 꾸준히 이어가는 게 억지로 흐름을 바꾸려는 것보다 훨씬 잘 맞는 시기예요.",
        caution: "지금 흐르는 대운은 재물 흐름에 조금 더 신경 써야 할 시기예요 — 뜻밖의 지출이나 부담이 생기기 쉬운 흐름이에요. 예상에 없던 경조사나 수리비처럼, 딱히 낭비한 것도 아닌데 나가는 돈이 유난히 많다고 느꼈던 적이 있을 거예요. 이런 시기에 오히려 과감하게 투자하거나 큰 결정을 내리는 사람들도 있지만, 지금은 그런 결정을 미루는 쪽이 훨씬 안전해요. 큰 지출이나 무리한 투자 결정은 이 흐름이 지나갈 때까지 미뤄두는 게 좋아요.",
      },
      spendingHabit: {
        none: "재성 기운이 적은 편이라, 소비보다는 신중하게 모으는 쪽에 가까워요. 장바구니에 물건을 담아놓고 며칠씩 고민하다가 결국 안 사고 넘어간 경험, 한 번쯤 있을 거예요. 즉흥적으로 결제 버튼부터 누르는 사람들 옆에서 스스로 답답하게 느껴질 때도 있지만, 목돈이 쌓이는 걸 지켜보는 데서 오히려 더 큰 안정감을 느끼는 타입이에요. 충동구매보다는 계획적인 지출을 선호하고, 그 신중함이 결국 통장을 지켜주는 편이에요.",
        moderate: "재성 기운이 적당한 편이라, 필요한 데는 쓰고 아낄 데는 아끼는 균형 잡힌 소비를 하는 편이에요. 좋아하는 데는 과감하게 지르면서도, 딱히 필요 없는 물건 앞에서는 이상하게 지갑이 안 열리는 자신을 발견했던 적이 있을 거예요. 극단적으로 아끼거나 펑펑 쓰는 사람들과 비교하면 애매해 보일 수도 있지만, 그때그때 상황에 맞게 조절하는 그 감각이 오히려 제일 오래가는 소비 습관이에요.",
        many: "재성 기운이 풍부한 편이라, 버는 데도 쓰는 데도 적극적인 타입이에요. 마음에 드는 경험이나 사람에게는 계산 없이 지갑을 여는 편이라, 나중에 카드 명세서를 보고 스스로도 놀랐던 적이 있을 거예요. 아끼기만 하는 사람들 눈엔 헤퍼 보일 수도 있지만, 그렇게 쓴 돈이 관계나 기회로 돌아오는 경우도 실제로 많고요. 다만 그 씀씀이만큼 계획적인 저축 습관을 따로 챙겨두면, 돈이 손에서 너무 빨리 빠져나가는 걸 막을 수 있어요.",
      },
      luckyItem: {
        Wood: "전통 오행 상징에서 초록색 계열과 살아있는 식물은 목(木) 기운과 잘 맞는 조합으로 여겨져요. 유난히 일이 안 풀리던 날, 책상 위에 놓인 작은 화분에 눈이 가서 잠깐이라도 마음이 누그러졌던 경험, 있을 수도 있어요. 삭막한 회색 책상보다는 화분 하나, 초록색 소품 하나 놓인 자리가 은근히 기운을 북돋아 주는 편이고요. 아무것도 없는 삭막한 공간과 비교해보면, 그 작은 초록색 하나가 생각보다 큰 차이를 만들어요 — 책상 위 작은 화분이나 자주 지나는 자리에 초록색 소품을 두는 게 대표적인 조합이에요.",
        Fire: "전통 오행 상징에서 빨간색 계열과 따뜻한 조명은 화(火) 기운과 잘 맞는 조합으로 여겨져요. 형광등 아래에서보다 따뜻한 색감의 조명 아래에서 이상하게 기분이 더 나아졌던 경험, 떠올려보면 있을 거예요. 차갑고 밝기만 한 조명보다는 은은하게 따뜻한 조명 하나가 공간의 분위기를 완전히 바꿔놓곤 하고요. 캔들이나 따뜻한 색감의 조명, 작은 빨간색 소품이 대표적인 조합이에요.",
        Earth: "전통 오행 상징에서 노란색·황토색 계열과 도자기는 토(土) 기운과 잘 맞는 조합으로 여겨져요. 마음이 불안정할 때 손에 익은 도자기 머그컵을 쥐고 있으면 이상하게 진정됐던 경험, 있을 수도 있어요. 차갑고 매끈한 유리잔보다는 손맛이 느껴지는 도자기 그릇 하나가 은근히 마음을 붙잡아주는 편이고요. 도자기 머그컵이나 그릇, 작은 도자기 소품이 대표적인 조합이에요.",
        Metal: "전통 오행 상징에서 흰색 계열과 금속 액세서리는 금(金) 기운과 잘 맞는 조합으로 여겨져요. 중요한 자리에 나갈 때 은색 반지나 시계 하나를 챙기면 이상하게 마음이 다잡아졌던 경험, 떠올려보면 있을 거예요. 아무 장식 없는 손목보다는 심플한 금속 액세서리 하나가 은근히 결단력을 더해주는 느낌을 주고요. 반지나 시계 같은 은색·흰색 계열의 심플한 액세서리가 대표적인 조합이에요.",
        Water: "전통 오행 상징에서 검정·남색 계열과 물 관련 아이템은 수(水) 기운과 잘 맞는 조합으로 여겨져요. 물소리가 들리는 카페나 작은 어항 앞에 앉아 있으면 이상하게 마음이 편안해졌던 경험, 있을 수도 있어요. 삭막한 벽면보다는 작은 어항이나 물 관련 소품 하나가 공간의 분위기를 한결 차분하게 만들어주고요. 텀블러나 작은 어항, 남색 계열 소품이 대표적인 조합이에요.",
      },
    },
    // 일간 제외 나머지 7글자 중 관성(官星) 개수 기준 (없음/보통/많음)
    careerStyle: {
      title: '당신의 커리어 적성',
      subtopicTitles: {
        overall: '직업 총운',
        talent: '재능',
        workplaceType: '잘 맞는 직장 유형',
        helpers: '도와줄 사람들',
      },
      none: "사주에 관성(官星) 기운이 거의 없는 편이에요 — 딱딱한 위계질서나 위에서 정해주는 구조 안에서는 실력이 잘 안 나오는 타입일 확률이 높아요. 상사가 시키는 대로만 움직여야 하는 자리에서 유난히 숨이 막혔던 경험, 있을 거예요 — 틀린 것도 아닌데 그냥 내 방식이 아니라서 답답했던 그런 느낌이요. 반대로 누구 눈치 안 보고 스스로 판단해서 움직일 수 있었던 프로젝트에서는 오히려 평소보다 더 좋은 결과를 냈던 기억도 있을 거고요. 프리랜서, 창업, 또는 재량이 많은 자리처럼 스스로 기준을 세우고 움직이는 독립적인 역할이 더 잘 맞아요.",
      moderate: "사주에 관성(官星) 기운이 적당히 있는 편이에요 — 체계 잡힌 조직 안에서도 큰 마찰 없이 잘 지내는 편이고, 필요하면 시스템을 따르는 것도 어렵지 않아 해요. 회의에서 정해진 절차는 지키면서도, 그 안에서 \"이건 이렇게 해보면 어떨까요\" 하고 나만의 방식을 슬쩍 끼워 넣었던 적이 있을 거예요. 완전히 자유로운 환경에서는 오히려 방향을 잃고, 완전히 꽉 짜인 환경에서는 답답함을 느끼는 편이라, 그 중간 어딘가가 제일 편해요. 구조와 자율성이 적당히 섞인 환경이 결국 가장 오래 잘 맞아요.",
      many: "사주에 관성(官星) 기운이 풍부한 편이에요 — 오히려 체계와 위계질서 안에서 진짜 실력이 나오는 타입일 확률이 높아요. 명확한 역할과 보고 체계가 있는 조직에 들어갔을 때, 오히려 마음이 놓이면서 더 몰입했던 경험이 있을 거예요. 반대로 아무도 방향을 안 정해주는 자유방임 환경에서는 오히려 뭘 해야 할지 몰라 헤맸을 수도 있고요. 이미 자리 잡힌 조직 안에서 리더십을 발휘하는 자리가 잘 맞을 확률이 높아요, 구조 자체를 거스르기보다 활용하는 쪽이 되니까요.",
      talent: {
        base: {
          Wood: "타고난 재능은 성장과 추진력 쪽에 가까워요 — 일을 새로 시작하고, 범위를 넓히고, 원래 요청받은 것보다 더 멀리 밀고 나가는 힘이요. 남들이 \"이 정도면 됐다\" 하고 멈춘 지점에서 혼자 한 발 더 나아가 결과물을 키워놓은 경험, 떠올려보면 있을 거예요. 주어진 일을 딱 그만큼만 하고 마는 사람들과 비교하면 유난히 일을 크게 벌이는 편으로 보일 수도 있는데, 그게 바로 이 재능의 정체예요.",
          Fire: "타고난 재능은 존재감과 추진력 쪽에 가까워요 — 아이디어를 설득력 있게 제시하고, 분위기를 살리고, 아직 완성되지도 않은 걸로 사람들을 설레게 만드는 힘이요. 발표 자리에서 내용은 비슷한데 유난히 내 차례에만 사람들이 몰입했던 경험, 있을 거예요. 담담하게 정보만 전달하는 사람들 사이에서, 그 열기 하나로 분위기를 완전히 바꿔놓는 쪽이 바로 당신이에요.",
          Earth: "타고난 재능은 신뢰와 끝까지 해내는 힘 쪽에 가까워요 — 프로젝트가 처음부터 끝까지 진짜로 믿고 맡길 수 있는 사람이 되는 능력이요. 다들 중간에 지쳐서 나가떨어질 때도 끝까지 자리를 지켜서, \"역시 이 사람한테 맡기면 되지\"라는 말을 들었던 경험이 있을 거예요. 초반엔 화려하게 시작했다가 흐지부지되는 사람들과 비교하면, 꾸준함 그 자체가 당신의 재능이에요.",
          Metal: "타고난 재능은 정교함과 기준 쪽에 가까워요 — 남들이 놓치는 걸 짚어내고, 적당히가 아니라 진짜 맞을 때까지 다듬어내는 힘이요. 다들 \"이 정도면 됐지\" 하고 넘어간 자료에서 혼자 오타나 오류를 잡아냈던 경험, 있을 거예요. 대충 마무리하고 넘어가는 사람들과 비교하면 유난히 깐깐해 보일 수도 있지만, 결국 그 정교함 덕분에 결과물의 완성도가 확실히 달라져요.",
          Water: "타고난 재능은 유연함과 상황 파악 쪽에 가까워요 — 흐름이 뻔해지기 전에 방향을 감지하고, 그에 맞춰 접근 방식을 조율하는 힘이요. 다들 예상 못 했던 변수에서 유일하게 당황하지 않고 방향을 바꿨던 경험, 떠올려보면 있을 거예요. 계획을 끝까지 고집하다 결국 틀어지는 사람들과 비교하면, 미리 흐름을 읽고 유연하게 대응하는 게 당신만의 재능이에요.",
        },
        officerNote: {
          none: "사주에 구조가 약한 편이라, 이 재능은 누군가의 계획을 실행할 때보다 스스로 방향을 정할 때 제일 잘 드러나요. 정해진 매뉴얼대로만 움직여야 하는 자리에서는 이 재능이 반쯤 눌린 채로 지나갔을 수도 있어요. 반대로 아무 지침 없이 \"알아서 해보라\"는 말을 들었을 때, 오히려 물 만난 듯 이 재능이 제대로 발휘됐던 경험이 있을 거예요.",
          moderate: "사주에 구조가 적당히 있는 편이라, 이 재능은 어느 정도 틀은 있지만 내 방식대로 움직일 여지도 있는 환경에서 제일 잘 드러나요. 완전히 자유로운 자리에서는 오히려 방향을 못 잡고, 완전히 꽉 짜인 자리에서는 답답해서 재능이 눌렸던 경험이 둘 다 있을 수도 있어요. 그 중간, 큰 틀은 있지만 세부는 알아서 채울 수 있는 자리에서 이 재능이 제일 자연스럽게 드러나요.",
          many: "사주에 구조가 강한 편이라, 이 재능은 명확한 시스템 안에 있을 때 제일 잘 드러나요 — 혼자 뭔가를 쌓아 올리기보다, 그 안에서 위로 올라가려는 추진력으로 나타나요. 아무 체계 없이 맨땅에서 시작해야 하는 자리에서는 오히려 이 재능이 힘을 못 썼던 경험이 있을 수도 있어요. 반대로 명확한 역할과 승진 경로가 보이는 조직에서는, 그 구조 자체가 재능을 끌어올리는 발판이 돼줘요.",
        },
      },
      workplaceType: {
        none: "독립적인 성향의 일이 잘 맞을 확률이 높아요 — 프리랜서, 스스로 뭔가를 시작하는 창업, 또는 위계보다 스스로의 기준에 답하는 자리요. 정해진 출퇴근, 정해진 보고 라인 안에 있으면 몸이 먼저 답답해지는 걸 느껴본 적이 있을 거예요. 반대로 스스로 일정을 짜고 결과로만 증명하면 되는 환경에서는 오히려 더 책임감 있게, 더 성실하게 움직이는 편이고요. 조직에 억지로 맞추려 하기보다, 스스로 기준을 세울 수 있는 자리를 찾는 쪽이 훨씬 잘 맞아요.",
        moderate: "적당히 섞인 환경이 잘 맞을 확률이 높아요 — 무엇을 해야 할지는 분명하지만, 그걸 어떻게 할지는 내 방식대로 정할 수 있는 자리요. 지나치게 자유방임한 조직에서는 방향을 잃고, 지나치게 통제하는 조직에서는 숨이 막혔던 경험이 둘 다 있을 수도 있어요. 목표는 명확히 주어지되 과정은 알아서 채울 수 있는 자리에서 제일 편안하게, 제일 좋은 결과를 냈던 기억이 있을 거고요.",
        many: "구조가 명확한 조직이 잘 맞을 확률이 높아요 — 역할이 뚜렷하고, 지휘 체계가 분명하고, 처음부터 만들어가기보다 그 안에서 제 몫을 하는 시스템이요. 맨땅에서 모든 걸 새로 만들어야 하는 스타트업 환경에서는 오히려 방향을 못 잡고 헤맸을 수도 있어요. 반대로 이미 체계가 잡힌 큰 조직에 들어갔을 때, 오히려 마음이 놓이면서 제 실력을 더 잘 발휘했던 경험이 있을 거예요.",
      },
      helpers: {
        yes: "사주에 천을귀인(天乙貴人)이 있어요 — 전통적으로 커리어에서 적절한 시기에 적절한 사람이 나타난다는 신호로 읽혀요. 돌이켜보면 결정적인 순간마다 뜻밖의 소개나 조언이 타이밍 좋게 나타났던 경험, 있을 거예요 — 애써 찾아다닌 것도 아닌데 그냥 그때 그 사람이 있었던 순간이요. 아무런 연결 없이 혼자 다 부딪혀야 했던 사람들과 비교하면, 당신에게는 결정적인 순간마다 손 내밀어주는 존재가 유독 자주 나타나는 편이에요. 멘토가 되어줄 사람이든, 타이밍 좋은 소개든, 결정적인 순간에 나를 대신 보증해줄 사람이든요.",
        no: "사주에 천을귀인(天乙貴人) 배치는 없어요 — 전통적으로 누군가의 도움에 기대기보다, 스스로 만든 기회로 나아가는 편이라는 뜻이에요. 도움 없이 혼자 해결법을 찾아내야 했던 순간들, 떠올려보면 꽤 많았을 거예요 — 그때마다 누군가 손 내밀어주길 바랐지만 결국 스스로 방법을 찾아냈고요. 운 좋게 인맥이나 소개로 쉽게 풀린 사람들과 비교하면 더디게 느껴질 수도 있지만, 그만큼 시간은 조금 더 걸릴 수 있어도, 얻는 성과는 더 온전히 내 것으로 느껴질 거예요.",
      },
    },
    // 사주에서 가장 약한(개수 최소) 오행 기준 — dominantElement 아님
    healthStyle: {
      title: '당신의 건강 기질',
      subtopicTitles: {
        overall: '건강 총운',
        injuryRisk: '부상 위험 부위',
        exercise: '잘 맞는 운동',
        diet: '식습관',
      },
      Wood: "사주에서 목(木) 기운이 가장 약한 편이에요 — 전통 오행-장기 대응론에서는 이게 간·담을 조금 더 챙겨볼 부위로 가리켜요. 별일 아닌 걸로 유난히 짜증이 확 올라오고, 그걸 표현 못 하고 삼켰던 날 유독 몸이 뻐근했던 경험, 떠올려보면 있을 거예요. 감정을 그때그때 잘 풀어내는 사람들과 비교하면, 화나 스트레스가 몸 어딘가에 조용히 쌓이는 편에 가깝고요. 실질적으로는 스트레스 관리와 화를 쌓아두지 않는 게 중요하다는 뜻이에요, 목의 전통적인 영역이 정확히 '막힘없이 흐르는 것'이라서요.",
      Fire: "사주에서 화(火) 기운이 가장 약한 편이에요 — 전통 오행-장기 대응론에서는 이게 심장·소장을 조금 더 챙겨볼 부위로 가리켜요. 조금만 무리해도 유난히 피곤이 오래가고, 잠을 자도 개운하지 않았던 날이 종종 있었을 거예요. 쉽게 회복하는 사람들과 비교하면, 몸이 다시 데워지는 데 시간이 좀 더 필요한 편이고요. 실질적으로는 혈액순환과 충분한 진짜 휴식을 챙기는 게 중요하다는 뜻이에요, 화의 전통적인 영역이 몸 전체의 온기와 순환이라서요.",
      Earth: "사주에서 토(土) 기운이 가장 약한 편이에요 — 전통 오행-장기 대응론에서는 이게 비장·위를 조금 더 챙겨볼 부위로 가리켜요. 끼니를 대충 때우거나 급하게 먹은 날 유난히 속이 더부룩했던 경험, 있을 거예요. 규칙적으로 잘 챙겨 먹는 사람들과 비교하면, 소화 기능이 컨디션에 더 민감하게 반응하는 편이고요. 실질적으로는 소화와 규칙적이고 여유 있는 식사를 챙기는 게 중요하다는 뜻이에요, 토의 전통적인 영역이 정확히 꾸준한 영양 섭취와 흡수라서요.",
      Metal: "사주에서 금(金) 기운이 가장 약한 편이에요 — 전통 오행-장기 대응론에서는 이게 폐·대장을 조금 더 챙겨볼 부위로 가리켜요. 환절기마다 유난히 먼저 기침이나 목 감기를 달고 살았던 경험, 떠올려보면 있을 거예요. 계절 변화에 무던한 사람들과 비교하면, 공기 질이나 건조함에 몸이 더 예민하게 반응하는 편이고요. 실질적으로는 호흡과 공기의 질을 챙기는 게 중요하다는 뜻이에요, 금의 전통적인 영역이 정확히 깨끗하게 받아들이고 필요 없는 건 놓아주는 거라서요.",
      Water: "사주에서 수(水) 기운이 가장 약한 편이에요 — 전통 오행-장기 대응론에서는 이게 신장·방광을 조금 더 챙겨볼 부위로 가리켜요. 찬 데서 오래 있거나 무리한 다음 날, 유난히 허리나 다리가 무거웠던 경험이 있을 거예요. 체력이 쉽게 안 떨어지는 사람들과 비교하면, 몸의 '비축'이 조금 더 빨리 바닥나는 편이고요. 실질적으로는 몸을 따뜻하게 하고, 수분을 챙기고, 진짜 휴식을 취하는 게 중요하다는 뜻이에요, 수의 전통적인 영역이 정확히 깊은 비축과 회복이라서요.",
      injuryRisk: {
        Wood: "전통 오행-신체 대응론에서 목(木)은 근육과 힘줄을 주관해요 — 사주에서 목 기운이 약한 편이라, 준비운동 없이 갑자기 강도 높게 움직이거나 무리하게 스트레칭하는 건 조금 더 조심하는 게 좋아요. 운동 시작하자마자 바로 전력으로 몸을 쓰다가 뭔가 뜨끔했던 경험, 있을 수도 있어요. 충분히 몸을 풀고 시작하는 사람들과 비교하면, 이 부위가 유난히 예민하게 반응하는 편이라서요.",
        Fire: "전통 오행-신체 대응론에서 화(火)는 혈액순환과 혈관을 주관해요 — 사주에서 화 기운이 약한 편이라, 화상 같은 열 관련 위험이나 운동 중 과열, 그리고 격한 활동 후 회복 시간을 충분히 갖는 데 조금 더 신경 쓰는 게 좋아요. 뜨거운 걸 만지다 순간 놀라서 데었던 경험, 유난히 잦지 않았나 떠올려보세요. 회복이 빠른 사람들처럼 곧바로 다음 활동에 뛰어들기보다는, 한 박자 쉬어가는 게 이 몸에는 더 잘 맞아요.",
        Earth: "전통 오행-신체 대응론에서 토(土)는 사지 근육과 소화기를 주관해요 — 사주에서 토 기운이 약한 편이라, 무릎에 부담 가는 동작이나 활동 전후 소화 불편은 조금 더 조심하는 게 좋아요. 운동하고 나서 유난히 무릎이 뻐근하거나, 먹자마자 움직여서 속이 안 좋았던 경험이 있을 거예요. 그런 신호를 무시하고 계속 밀어붙이는 사람들과 비교하면, 이 몸은 조금 더 미리미리 챙겨줄 필요가 있어요.",
        Metal: "전통 오행-신체 대응론에서 금(金)은 피부·호흡기와 함께 관절과도 전통적으로 연결돼요 — 사주에서 금 기운이 약한 편이라, 어깨·손목의 반복 사용으로 인한 부담과 피부 건조는 조금 더 조심하는 게 좋아요. 같은 동작을 오래 반복한 다음 날, 유난히 어깨나 손목이 뻑뻑했던 경험, 떠올려보면 있을 거예요. 신경 안 써도 괜찮은 사람들과 비교하면, 이 부위는 미리 스트레칭이나 보습으로 조금 더 챙겨줄 필요가 있어요.",
        Water: "전통 오행-신체 대응론에서 수(水)는 뼈와 관절을 주관해요 — 사주에서 수 기운이 약한 편이라, 특히 냉기나 과로로 인한 허리·무릎 부담은 조금 더 조심하는 게 좋아요. 추운 날 오래 서 있거나 앉아 있고 나서 허리가 뻣뻣했던 경험, 있을 수도 있어요. 추위를 잘 안 타는 사람들과 비교하면, 이 부위는 따뜻하게 유지하는 것만으로도 컨디션이 확실히 달라져요.",
      },
      exercise: {
        Wood: "가벼운 유산소 운동과 스트레칭이 잘 맞는 편이에요. 억지로 무거운 기구를 드는 날보다, 가볍게 조깅하고 스트레칭한 날 몸이 더 개운했던 경험, 떠올려보면 있을 거예요. 고강도 운동으로 몸을 몰아붙이는 사람들과 비교하면 느긋해 보일 수 있지만, 조깅이나 자전거, 제대로 된 스트레칭 루틴이 목 기운이 필요로 하는 막힘없는 움직임을 훨씬 잘 채워줘요.",
        Fire: "고강도 인터벌 트레이닝이 잘 맞는 편이에요. 느릿느릿한 운동을 30분 하는 것보다, 짧고 강렬하게 10분 몰아붙이고 끝냈을 때 오히려 더 개운했던 경험이 있을 거예요. 천천히 오래 하는 운동을 선호하는 사람들과 비교하면, 짧고 강렬한 쪽이 화 기운의 리듬과 훨씬 더 잘 맞아요.",
        Earth: "근력 운동이 잘 맞는 편이에요. 가볍게 몸만 풀고 끝난 날보다, 무게를 들고 제대로 힘을 쓴 날 오히려 마음까지 안정됐던 경험, 있을 수도 있어요. 가볍고 빠른 운동을 선호하는 사람들과 비교하면, 꾸준하고 단단한 근육을 만드는 쪽이 토 기운이 선호하는 안정감과 훨씬 잘 맞아요.",
        Metal: "규칙적이고 체계적인 루틴이 잘 맞는 편이에요. 그날그날 기분 내키는 대로 운동을 바꾼 날보다, 정해진 루틴을 그대로 따라간 날 훨씬 더 만족스러웠던 경험이 있을 거예요. 즉흥적으로 운동을 바꾸는 사람들과 비교하면, 매번 같은 스케줄, 같은 세트, 같은 절제가 금 기운의 질서 선호와 훨씬 잘 맞아요.",
        Water: "수영과 유연성 운동이 잘 맞는 편이에요. 땅 위에서 하는 격렬한 운동보다, 물속에서 천천히 움직였을 때 오히려 몸이 더 가벼워졌던 경험, 떠올려보면 있을 거예요. 딱딱 끊어지는 운동을 선호하는 사람들과 비교하면, 물 안팎에서 하는 운동이나 천천히 신경 써서 하는 스트레칭이 유동적이고 적응하는 움직임을 선호하는 수 기운과 훨씬 잘 맞아요.",
      },
      diet: {
        Wood: "전통 오행-음식 대응론에서 신맛과 초록빛 음식은 목(木)과 연결돼요. 컨디션 안 좋은 날 새콤한 과일 하나에 입맛이 확 돌았던 경험, 떠올려보면 있을 거예요. 자극적이고 기름진 음식만 찾는 식습관과 비교하면, 잎채소나 감귤류, 가볍게 발효된 음식을 챙기는 쪽이 몸에 훨씬 잘 맞아요.",
        Fire: "전통 오행-음식 대응론에서 쓴맛과 붉은빛 음식은 화(火)와 연결돼요. 유난히 지치고 열이 오르던 날, 시원한 토마토나 붉은 과일 한 조각이 이상하게 몸을 가라앉혀준 경험, 있을 수도 있어요. 자극적이고 뜨거운 음식만 찾는 식습관과 비교하면, 쌉싸름한 채소나 붉은 과일을 챙기는 쪽이 몸에 훨씬 잘 맞아요.",
        Earth: "전통 오행-음식 대응론에서 단맛과 노란빛 음식은 토(土)와 연결돼요. 속이 허하고 예민한 날, 달콤한 호박이나 고구마 한 조각에 마음까지 편안해졌던 경험이 있을 거예요. 자극적인 음식으로 허기를 급하게 채우는 식습관과 비교하면, 자연스러운 단맛의 음식을 천천히 챙겨 먹는 쪽이 몸에 훨씬 잘 맞아요(설탕이 아니라 자연스러운 단맛 기준이에요).",
        Metal: "전통 오행-음식 대응론에서 매운맛과 흰빛 음식은 금(金)과 연결돼요. 컨디션이 답답하게 막힌 것 같던 날, 마늘이나 양파가 들어간 음식 한 그릇에 몸이 개운해졌던 경험, 떠올려보면 있을 거예요. 밍밍하고 단조로운 식사와 비교하면, 마늘, 양파, 무, 흰 과육의 과일을 챙기는 쪽이 몸에 훨씬 잘 맞아요.",
        Water: "전통 오행-음식 대응론에서 짠맛과 검은빛 음식은 수(水)와 연결돼요. 유난히 기력이 없던 날, 미역국 한 그릇에 몸이 다시 채워지는 느낌을 받은 경험이 있을 거예요. 가볍게 거르는 식사와 비교하면, 해조류, 검은콩, 짙은 잎채소를 챙기는 쪽이 몸에 훨씬 잘 맞아요.",
      },
    },
  },
};

export function getSajuProfile(lang, dominantElement) {
  return (sajuProfileTemplates[lang] || sajuProfileTemplates.en).dominant[dominantElement];
}

export function getDayMasterLine(lang, dayGanElement) {
  return (sajuProfileTemplates[lang] || sajuProfileTemplates.en).dayMaster[dayGanElement];
}

function countTier(count) {
  if (count === 0) return 'none';
  if (count <= 2) return 'moderate';
  return 'many';
}

/**
 * Looks up one of the four domain sections, each keyed by a different
 * piece of the chart so the four readings don't all collapse into the
 * same "dominant element + strength" message:
 *   - romanceStyle: Day Branch (일지, "spouse palace") Ten God category
 *   - wealthStyle:  count of Wealth Star (財星) characters, bucketed
 *   - careerStyle:  count of Officer Star (官星) characters, bucketed
 *   - healthStyle:  the chart's weakest Five Element (not the dominant one)
 * Returns { title, text }.
 */
export function getDomainInsight(lang, domain, saju) {
  const bank = (sajuProfileTemplates[lang] || sajuProfileTemplates.en)[domain];
  let key;
  if (domain === 'romanceStyle') {
    key = getDayBranchTenGodCategory(saju);
  } else if (domain === 'wealthStyle') {
    key = countTier(getTenGodCategoryCounts(saju).wealth);
  } else if (domain === 'careerStyle') {
    key = countTier(getTenGodCategoryCounts(saju).officer);
  } else if (domain === 'healthStyle') {
    key = getWeakestElement(saju);
  }
  return { title: bank.title, text: bank[key] };
}

// Traditional reading for "is this a wealth-favorable period": the period
// most favorable for wealth is the one where the Wealth Star (財星, "what
// my dominant element overcomes") is active. Resource/Companion periods
// (the period generates me, or matches me) are steady but not wealth-active;
// Output/Officer periods (I generate the period, or it overcomes me) tend
// to mean spending or pressure rather than accumulation.
const WEALTH_TIMING_TIER = {
  iOvercomeOther: 'good',
  same: 'neutral',
  otherGeneratesMe: 'neutral',
  iGenerateOther: 'caution',
  otherOvercomesMe: 'caution',
};

/**
 * Expands a domain's single "총운" (getDomainInsight above) into a 4-item
 * chapter: the same overall reading, plus 3 subtopics unique to that domain.
 * `daeun` (from getDaeun in utils/saju.js) is only needed for wealthStyle's
 * timing subtopic — every other subtopic is derivable from `saju` alone,
 * same as the overall reading. Returns { title, sections: [{ title, text
 * }, ...] } — 4 entries, `title` on each entry drawn from the domain's own
 * `subtopicTitles` bank (kept alongside the body copy, same convention as
 * every other title in this file).
 */
export function getDomainChapter(lang, domain, saju, daeun = null) {
  const bank = (sajuProfileTemplates[lang] || sajuProfileTemplates.en)[domain];
  const overall = getDomainInsight(lang, domain, saju);
  const titled = (key, text) => ({ title: bank.subtopicTitles[key], text });

  const sections = [titled('overall', overall.text)];

  if (domain === 'romanceStyle') {
    const spouseCategory = getDayBranchTenGodCategory(saju);
    const avoidElement = getOvercomingElement(saju.dominantElement);
    sections.push(
      titled('attraction', bank.attraction[spouseCategory]),
      titled('avoidType', bank.avoidType[avoidElement]),
      titled('marriageTiming', bank.marriageTiming[`${saju.dayGanStrength}-${spouseCategory}`]),
    );
  } else if (domain === 'wealthStyle') {
    const wealthCount = getTenGodCategoryCounts(saju).wealth;
    const period = daeun ? getCurrentDaeunPeriod(daeun) : null;
    const timingText = !daeun
      ? bank.timing.needGender
      : period
        ? bank.timing[WEALTH_TIMING_TIER[getElementRelation(saju.dominantElement, period.ganElement)]]
        : bank.timing.neutral;
    sections.push(
      titled('timing', timingText),
      titled('spendingHabit', bank.spendingHabit[countTier(wealthCount)]),
      titled('luckyItem', bank.luckyItem[saju.dominantElement]),
    );
  } else if (domain === 'careerStyle') {
    const officerCount = getTenGodCategoryCounts(saju).officer;
    const officerTier = countTier(officerCount);
    const nobleman = getNobleman(saju, lang);
    sections.push(
      titled('talent', `${bank.talent.base[saju.dominantElement]} ${bank.talent.officerNote[officerTier]}`),
      titled('workplaceType', bank.workplaceType[officerTier]),
      titled('helpers', bank.helpers[nobleman.hasNobleman ? 'yes' : 'no']),
    );
  } else if (domain === 'healthStyle') {
    const weakest = getWeakestElement(saju);
    sections.push(
      titled('injuryRisk', bank.injuryRisk[weakest]),
      titled('exercise', bank.exercise[weakest]),
      titled('diet', bank.diet[weakest]),
    );
  }

  return { title: bank.title, sections };
}
