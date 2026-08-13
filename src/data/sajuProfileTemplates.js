// Content about the saju chart itself — personality/temperament — as
// opposed to fortuneTemplates.js, which is entirely about "today" relative
// to the chart. Nothing in this file changes based on the date.
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
  },
};

export function getSajuProfile(lang, dominantElement) {
  return (sajuProfileTemplates[lang] || sajuProfileTemplates.en).dominant[dominantElement];
}

export function getDayMasterLine(lang, dayGanElement) {
  return (sajuProfileTemplates[lang] || sajuProfileTemplates.en).dayMaster[dayGanElement];
}
