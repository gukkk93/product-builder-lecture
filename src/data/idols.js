// K-pop idol birthdates (solar/Gregorian calendar), used for the idol
// compatibility feature. Birth times aren't public for idols, so
// getIdolCompatibility() always computes their saju without an hour pillar.
//
// Sourced via web research (KProfiles, Wikipedia, IdolInsights,
// FamousBirthdays, news coverage), cross-checked across 2+ sources per
// member. Limited to groups' current officially-promoting lineups as of
// this writing:
//   - EXO: only Suho, Lay, Chanyeol, D.O., Kai, Sehun are included. Chen,
//     Baekhyun, and Xiumin are excluded — as of the 2025-2026 contract
//     dispute with SM Entertainment they operate independently and were
//     left out of EXO's latest comeback lineup. Kris, Luhan, and Tao left
//     the group around 2014-2015 and aren't considered current members.
//   - NewJeans: only Minji, Hanni, Haerin, Hyein are included. Danielle's
//     membership status has been contested/fluid since the ADOR legal
//     dispute — revisit this if her status is resolved.
export const idolGroups = [
  {
    id: 'bts',
    name: 'BTS',
    members: [
      { id: 'bts-rm', name: 'RM', year: 1994, month: 9, day: 12 },
      { id: 'bts-jin', name: 'Jin', year: 1992, month: 12, day: 4 },
      { id: 'bts-suga', name: 'Suga', year: 1993, month: 3, day: 9 },
      { id: 'bts-jhope', name: 'J-Hope', year: 1994, month: 2, day: 18 },
      { id: 'bts-jimin', name: 'Jimin', year: 1995, month: 10, day: 13 },
      { id: 'bts-v', name: 'V', year: 1995, month: 12, day: 30 },
      { id: 'bts-jungkook', name: 'Jungkook', year: 1997, month: 9, day: 1 },
    ],
  },
  {
    id: 'blackpink',
    name: 'BLACKPINK',
    members: [
      { id: 'bp-jisoo', name: 'Jisoo', year: 1995, month: 1, day: 3 },
      { id: 'bp-jennie', name: 'Jennie', year: 1996, month: 1, day: 16 },
      { id: 'bp-rose', name: 'Rosé', year: 1997, month: 2, day: 11 },
      { id: 'bp-lisa', name: 'Lisa', year: 1997, month: 3, day: 27 },
    ],
  },
  {
    id: 'newjeans',
    name: 'NewJeans',
    members: [
      { id: 'nj-minji', name: 'Minji', year: 2004, month: 5, day: 7 },
      { id: 'nj-hanni', name: 'Hanni', year: 2004, month: 10, day: 6 },
      { id: 'nj-haerin', name: 'Haerin', year: 2006, month: 5, day: 15 },
      { id: 'nj-hyein', name: 'Hyein', year: 2008, month: 4, day: 21 },
    ],
  },
  {
    id: 'seventeen',
    name: 'SEVENTEEN',
    members: [
      { id: 'svt-scoups', name: 'S.Coups', year: 1995, month: 4, day: 26 },
      { id: 'svt-jeonghan', name: 'Jeonghan', year: 1995, month: 10, day: 4 },
      { id: 'svt-joshua', name: 'Joshua', year: 1995, month: 12, day: 30 },
      { id: 'svt-jun', name: 'Jun', year: 1996, month: 6, day: 10 },
      { id: 'svt-hoshi', name: 'Hoshi', year: 1996, month: 6, day: 15 },
      { id: 'svt-wonwoo', name: 'Wonwoo', year: 1996, month: 7, day: 17 },
      { id: 'svt-woozi', name: 'Woozi', year: 1996, month: 11, day: 22 },
      { id: 'svt-dk', name: 'DK', year: 1997, month: 2, day: 18 },
      { id: 'svt-mingyu', name: 'Mingyu', year: 1997, month: 4, day: 6 },
      { id: 'svt-the8', name: 'The8', year: 1997, month: 11, day: 7 },
      { id: 'svt-seungkwan', name: 'Seungkwan', year: 1998, month: 1, day: 16 },
      { id: 'svt-vernon', name: 'Vernon', year: 1998, month: 2, day: 18 },
      { id: 'svt-dino', name: 'Dino', year: 1999, month: 2, day: 11 },
    ],
  },
  {
    id: 'stray-kids',
    name: 'Stray Kids',
    members: [
      { id: 'skz-bangchan', name: 'Bang Chan', year: 1997, month: 10, day: 3 },
      { id: 'skz-leeknow', name: 'Lee Know', year: 1998, month: 10, day: 25 },
      { id: 'skz-changbin', name: 'Changbin', year: 1999, month: 8, day: 11 },
      { id: 'skz-hyunjin', name: 'Hyunjin', year: 2000, month: 3, day: 20 },
      { id: 'skz-han', name: 'Han', year: 2000, month: 9, day: 14 },
      { id: 'skz-felix', name: 'Felix', year: 2000, month: 9, day: 15 },
      { id: 'skz-seungmin', name: 'Seungmin', year: 2000, month: 9, day: 22 },
      { id: 'skz-in', name: 'I.N', year: 2001, month: 2, day: 8 },
    ],
  },
  {
    id: 'twice',
    name: 'TWICE',
    members: [
      { id: 'tw-nayeon', name: 'Nayeon', year: 1995, month: 9, day: 22 },
      { id: 'tw-jeongyeon', name: 'Jeongyeon', year: 1996, month: 11, day: 1 },
      { id: 'tw-momo', name: 'Momo', year: 1996, month: 11, day: 9 },
      { id: 'tw-sana', name: 'Sana', year: 1996, month: 12, day: 29 },
      { id: 'tw-jihyo', name: 'Jihyo', year: 1997, month: 2, day: 1 },
      { id: 'tw-mina', name: 'Mina', year: 1997, month: 3, day: 24 },
      { id: 'tw-dahyun', name: 'Dahyun', year: 1998, month: 5, day: 28 },
      { id: 'tw-chaeyoung', name: 'Chaeyoung', year: 1999, month: 4, day: 23 },
      { id: 'tw-tzuyu', name: 'Tzuyu', year: 1999, month: 6, day: 14 },
    ],
  },
  {
    id: 'exo',
    name: 'EXO',
    members: [
      { id: 'exo-suho', name: 'Suho', year: 1991, month: 5, day: 22 },
      { id: 'exo-lay', name: 'Lay', year: 1991, month: 10, day: 7 },
      { id: 'exo-chanyeol', name: 'Chanyeol', year: 1992, month: 11, day: 27 },
      { id: 'exo-do', name: 'D.O.', year: 1993, month: 1, day: 12 },
      { id: 'exo-kai', name: 'Kai', year: 1994, month: 1, day: 14 },
      { id: 'exo-sehun', name: 'Sehun', year: 1994, month: 4, day: 12 },
    ],
  },
  {
    id: 'txt',
    name: 'TOMORROW X TOGETHER',
    members: [
      { id: 'txt-yeonjun', name: 'Yeonjun', year: 1999, month: 9, day: 13 },
      { id: 'txt-soobin', name: 'Soobin', year: 2000, month: 12, day: 5 },
      { id: 'txt-beomgyu', name: 'Beomgyu', year: 2001, month: 3, day: 13 },
      { id: 'txt-taehyun', name: 'Taehyun', year: 2002, month: 2, day: 5 },
      { id: 'txt-hueningkai', name: 'Hueningkai', year: 2002, month: 8, day: 14 },
    ],
  },
  {
    id: 'aespa',
    name: 'aespa',
    members: [
      { id: 'aespa-karina', name: 'Karina', year: 2000, month: 4, day: 11 },
      { id: 'aespa-giselle', name: 'Giselle', year: 2000, month: 10, day: 30 },
      { id: 'aespa-winter', name: 'Winter', year: 2001, month: 1, day: 1 },
      { id: 'aespa-ningning', name: 'Ningning', year: 2002, month: 10, day: 23 },
    ],
  },
  {
    id: 'ateez',
    name: 'ATEEZ',
    members: [
      { id: 'atz-seonghwa', name: 'Seonghwa', year: 1998, month: 4, day: 3 },
      { id: 'atz-hongjoong', name: 'Hongjoong', year: 1998, month: 11, day: 7 },
      { id: 'atz-yunho', name: 'Yunho', year: 1999, month: 3, day: 23 },
      { id: 'atz-yeosang', name: 'Yeosang', year: 1999, month: 6, day: 15 },
      { id: 'atz-san', name: 'San', year: 1999, month: 7, day: 10 },
      { id: 'atz-mingi', name: 'Mingi', year: 1999, month: 8, day: 9 },
      { id: 'atz-wooyoung', name: 'Wooyoung', year: 1999, month: 11, day: 26 },
      { id: 'atz-jongho', name: 'Jongho', year: 2000, month: 10, day: 12 },
    ],
  },
];

export function findMember(groupId, memberId) {
  const group = idolGroups.find((g) => g.id === groupId);
  const member = group?.members.find((m) => m.id === memberId);
  return { group, member };
}
