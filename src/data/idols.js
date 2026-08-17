// K-pop idol birthdates (solar/Gregorian calendar), used for the idol
// compatibility feature. Birth times aren't public for idols, so
// getCompatibility() always computes their saju without an hour pillar.
// Every group also carries a `gender` field ('M'/'F'), used to filter the
// candidate pool for the Idol Match best-match recommender.
//
// Sourced via web research (KProfiles, Wikipedia, IdolInsights,
// FamousBirthdays, news coverage), cross-checked across 2+ sources per
// member where possible. Limited to groups' current officially-promoting
// lineups as of this writing:
//   - EXO: only Suho, Lay, Chanyeol, D.O., Kai, Sehun are included. Chen,
//     Baekhyun, and Xiumin are excluded — as of the 2025-2026 contract
//     dispute with SM Entertainment they operate independently and were
//     left out of EXO's latest comeback lineup. Kris, Luhan, and Tao left
//     the group around 2014-2015 and aren't considered current members.
//   - NewJeans: only Minji, Hanni, Haerin, Hyein are included. Danielle's
//     membership status has been contested/fluid since the ADOR legal
//     dispute — revisit this if her status is resolved.
//   - ENHYPEN: Heeseung is excluded (departed the group March 2026).
//   - THE BOYZ: "New" is excluded (departed August 2026); Ju Haknyeon (left
//     2025) was already excluded.
//   - Kep1er: reduced to 6 members after several 2024-2026 departures.
//   - fromis_9: reduced to 5 members after 2025 departures (Saerom, Jisun,
//     Seoyeon).
// RIIZE's Sohee/Anton, GOT7's Jay B, Kep1er's Hikaru/Dayeon, and NMIXX's
// Bae/Jiwoo/Kyujin were originally sourced from a single site; a follow-up
// pass re-verified all 8 against 2+ independent sources (KProfiles plus at
// least one of NamuWiki/Generasia/Kpopping/dbkpop/Kbizoom) with no
// discrepancies found.
export const idolGroups = [
  {
    id: 'bts',
    name: 'BTS',
    gender: 'M',
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
    gender: 'F',
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
    gender: 'F',
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
    gender: 'M',
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
    gender: 'M',
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
    gender: 'F',
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
    gender: 'M',
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
    gender: 'M',
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
    gender: 'F',
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
    gender: 'M',
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
  {
    id: 'enhypen',
    name: 'ENHYPEN',
    gender: 'M',
    members: [
      { id: 'enh-jay', name: 'Jay', year: 2002, month: 4, day: 20 },
      { id: 'enh-jake', name: 'Jake', year: 2002, month: 11, day: 15 },
      { id: 'enh-sunghoon', name: 'Sunghoon', year: 2002, month: 12, day: 8 },
      { id: 'enh-sunoo', name: 'Sunoo', year: 2003, month: 6, day: 24 },
      { id: 'enh-jungwon', name: 'Jungwon', year: 2004, month: 2, day: 9 },
      { id: 'enh-niki', name: 'Ni-Ki', year: 2005, month: 12, day: 9 },
    ],
  },
  {
    id: 'the-boyz',
    name: 'THE BOYZ',
    gender: 'M',
    members: [
      { id: 'tbz-sangyeon', name: 'Sangyeon', year: 1996, month: 11, day: 4 },
      { id: 'tbz-jacob', name: 'Jacob', year: 1997, month: 5, day: 30 },
      { id: 'tbz-younghoon', name: 'Younghoon', year: 1997, month: 8, day: 8 },
      { id: 'tbz-hyunjae', name: 'Hyunjae', year: 1997, month: 9, day: 13 },
      { id: 'tbz-juyeon', name: 'Juyeon', year: 1998, month: 1, day: 15 },
      { id: 'tbz-kevin', name: 'Kevin', year: 1998, month: 2, day: 23 },
      { id: 'tbz-q', name: 'Q', year: 1998, month: 11, day: 5 },
      { id: 'tbz-sunwoo', name: 'Sunwoo', year: 2000, month: 4, day: 12 },
      { id: 'tbz-eric', name: 'Eric', year: 2000, month: 12, day: 22 },
    ],
  },
  {
    id: 'zerobaseone',
    name: 'ZEROBASEONE',
    gender: 'M',
    members: [
      { id: 'zb1-jiwoong', name: 'Kim Jiwoong', year: 1998, month: 12, day: 14 },
      { id: 'zb1-zhanghao', name: 'Zhang Hao', year: 2000, month: 7, day: 25 },
      { id: 'zb1-hanbin', name: 'Sung Hanbin', year: 2001, month: 6, day: 13 },
      { id: 'zb1-matthew', name: 'Seok Matthew', year: 2002, month: 5, day: 28 },
      { id: 'zb1-taerae', name: 'Kim Taerae', year: 2002, month: 7, day: 14 },
      { id: 'zb1-ricky', name: 'Ricky', year: 2004, month: 5, day: 20 },
      { id: 'zb1-gyuvin', name: 'Kim Gyuvin', year: 2004, month: 8, day: 30 },
      { id: 'zb1-gunwook', name: 'Park Gunwook', year: 2005, month: 1, day: 10 },
      { id: 'zb1-yujin', name: 'Han Yujin', year: 2007, month: 3, day: 20 },
    ],
  },
  {
    id: 'riize',
    name: 'RIIZE',
    gender: 'M',
    members: [
      { id: 'riz-shotaro', name: 'Shotaro', year: 2000, month: 11, day: 25 },
      { id: 'riz-eunseok', name: 'Eunseok', year: 2001, month: 3, day: 19 },
      { id: 'riz-sungchan', name: 'Sungchan', year: 2001, month: 9, day: 13 },
      { id: 'riz-wonbin', name: 'Wonbin', year: 2002, month: 3, day: 2 },
      { id: 'riz-sohee', name: 'Sohee', year: 2003, month: 11, day: 21 },
      { id: 'riz-anton', name: 'Anton', year: 2004, month: 3, day: 21 },
    ],
  },
  {
    id: 'nct-dream',
    name: 'NCT DREAM',
    gender: 'M',
    members: [
      { id: 'nctd-mark', name: 'Mark', year: 1999, month: 8, day: 2 },
      { id: 'nctd-renjun', name: 'Renjun', year: 2000, month: 3, day: 23 },
      { id: 'nctd-jeno', name: 'Jeno', year: 2000, month: 4, day: 23 },
      { id: 'nctd-haechan', name: 'Haechan', year: 2000, month: 6, day: 6 },
      { id: 'nctd-jaemin', name: 'Jaemin', year: 2000, month: 8, day: 13 },
      { id: 'nctd-chenle', name: 'Chenle', year: 2001, month: 11, day: 22 },
      { id: 'nctd-jisung', name: 'Jisung', year: 2002, month: 2, day: 5 },
    ],
  },
  {
    id: 'nct-127',
    name: 'NCT 127',
    gender: 'M',
    members: [
      { id: 'nct127-johnny', name: 'Johnny', year: 1995, month: 2, day: 9 },
      { id: 'nct127-taeyong', name: 'Taeyong', year: 1995, month: 7, day: 1 },
      { id: 'nct127-yuta', name: 'Yuta', year: 1995, month: 10, day: 26 },
      { id: 'nct127-doyoung', name: 'Doyoung', year: 1996, month: 2, day: 1 },
      { id: 'nct127-jaehyun', name: 'Jaehyun', year: 1997, month: 2, day: 14 },
      { id: 'nct127-winwin', name: 'WinWin', year: 1997, month: 10, day: 28 },
      { id: 'nct127-jungwoo', name: 'Jungwoo', year: 1998, month: 2, day: 19 },
    ],
  },
  {
    id: 'monsta-x',
    name: 'MONSTA X',
    gender: 'M',
    members: [
      { id: 'mx-shownu', name: 'Shownu', year: 1992, month: 6, day: 18 },
      { id: 'mx-minhyuk', name: 'Minhyuk', year: 1993, month: 11, day: 3 },
      { id: 'mx-kihyun', name: 'Kihyun', year: 1993, month: 11, day: 22 },
      { id: 'mx-hyungwon', name: 'Hyungwon', year: 1994, month: 1, day: 15 },
      { id: 'mx-joohoney', name: 'Joohoney', year: 1994, month: 10, day: 6 },
      { id: 'mx-im', name: 'I.M', year: 1996, month: 1, day: 26 },
    ],
  },
  {
    id: 'got7',
    name: 'GOT7',
    gender: 'M',
    members: [
      { id: 'got7-mark', name: 'Mark', year: 1993, month: 9, day: 4 },
      { id: 'got7-jayb', name: 'Jay B', year: 1994, month: 1, day: 6 },
      { id: 'got7-jackson', name: 'Jackson', year: 1994, month: 3, day: 28 },
      { id: 'got7-jinyoung', name: 'Jinyoung', year: 1994, month: 9, day: 22 },
      { id: 'got7-youngjae', name: 'Youngjae', year: 1996, month: 9, day: 17 },
      { id: 'got7-bambam', name: 'BamBam', year: 1997, month: 5, day: 2 },
      { id: 'got7-yugyeom', name: 'Yugyeom', year: 1997, month: 11, day: 17 },
    ],
  },
  {
    id: 'treasure',
    name: 'TREASURE',
    gender: 'M',
    members: [
      { id: 'trsr-hyunsuk', name: 'Hyunsuk', year: 1999, month: 4, day: 21 },
      { id: 'trsr-jihoon', name: 'Jihoon', year: 2000, month: 3, day: 14 },
      { id: 'trsr-yoshi', name: 'Yoshi', year: 2000, month: 5, day: 15 },
      { id: 'trsr-junkyu', name: 'Junkyu', year: 2000, month: 9, day: 9 },
      { id: 'trsr-jaehyuk', name: 'Jaehyuk', year: 2001, month: 7, day: 23 },
      { id: 'trsr-asahi', name: 'Asahi', year: 2001, month: 8, day: 20 },
      { id: 'trsr-doyoung', name: 'Doyoung', year: 2003, month: 12, day: 4 },
      { id: 'trsr-haruto', name: 'Haruto', year: 2004, month: 4, day: 5 },
      { id: 'trsr-jeongwoo', name: 'Jeongwoo', year: 2004, month: 9, day: 28 },
      { id: 'trsr-junghwan', name: 'Junghwan', year: 2005, month: 2, day: 18 },
    ],
  },
  {
    id: 'boynextdoor',
    name: 'BOYNEXTDOOR',
    gender: 'M',
    members: [
      { id: 'bnd-sungho', name: 'Sungho', year: 2003, month: 9, day: 4 },
      { id: 'bnd-riwoo', name: 'Riwoo', year: 2003, month: 10, day: 22 },
      { id: 'bnd-jaehyun', name: 'Jaehyun', year: 2003, month: 12, day: 4 },
      { id: 'bnd-taesan', name: 'Taesan', year: 2004, month: 8, day: 10 },
      { id: 'bnd-leehan', name: 'Leehan', year: 2004, month: 10, day: 20 },
      { id: 'bnd-woonhak', name: 'Woonhak', year: 2006, month: 11, day: 29 },
    ],
  },
  {
    id: 'ive',
    name: 'IVE',
    gender: 'F',
    members: [
      { id: 'ive-yujin', name: 'Yujin', year: 2003, month: 9, day: 1 },
      { id: 'ive-gaeul', name: 'Gaeul', year: 2002, month: 9, day: 24 },
      { id: 'ive-rei', name: 'Rei', year: 2004, month: 2, day: 3 },
      { id: 'ive-wonyoung', name: 'Wonyoung', year: 2004, month: 8, day: 31 },
      { id: 'ive-liz', name: 'Liz', year: 2004, month: 11, day: 21 },
      { id: 'ive-leeseo', name: 'Leeseo', year: 2007, month: 2, day: 21 },
    ],
  },
  {
    id: 'lesserafim',
    name: 'LE SSERAFIM',
    gender: 'F',
    members: [
      { id: 'lsf-sakura', name: 'Sakura', year: 1998, month: 3, day: 19 },
      { id: 'lsf-chaewon', name: 'Chaewon', year: 2000, month: 8, day: 1 },
      { id: 'lsf-yunjin', name: 'Yunjin', year: 2001, month: 10, day: 8 },
      { id: 'lsf-kazuha', name: 'Kazuha', year: 2003, month: 8, day: 9 },
      { id: 'lsf-eunchae', name: 'Eunchae', year: 2006, month: 11, day: 10 },
    ],
  },
  {
    id: 'itzy',
    name: 'ITZY',
    gender: 'F',
    members: [
      { id: 'itzy-yeji', name: 'Yeji', year: 2000, month: 5, day: 26 },
      { id: 'itzy-lia', name: 'Lia', year: 2000, month: 7, day: 21 },
      { id: 'itzy-ryujin', name: 'Ryujin', year: 2001, month: 4, day: 17 },
      { id: 'itzy-chaeryeong', name: 'Chaeryeong', year: 2001, month: 6, day: 5 },
      { id: 'itzy-yuna', name: 'Yuna', year: 2003, month: 12, day: 9 },
    ],
  },
  {
    id: 'gidle',
    name: '(G)I-DLE',
    gender: 'F',
    members: [
      { id: 'gidle-miyeon', name: 'Miyeon', year: 1997, month: 1, day: 31 },
      { id: 'gidle-minnie', name: 'Minnie', year: 1997, month: 10, day: 23 },
      { id: 'gidle-soyeon', name: 'Soyeon', year: 1998, month: 8, day: 26 },
      { id: 'gidle-yuqi', name: 'Yuqi', year: 1999, month: 9, day: 23 },
      { id: 'gidle-shuhua', name: 'Shuhua', year: 2000, month: 1, day: 6 },
    ],
  },
  {
    id: 'redvelvet',
    name: 'Red Velvet',
    gender: 'F',
    members: [
      { id: 'rv-irene', name: 'Irene', year: 1991, month: 3, day: 29 },
      { id: 'rv-seulgi', name: 'Seulgi', year: 1994, month: 2, day: 10 },
      { id: 'rv-wendy', name: 'Wendy', year: 1994, month: 2, day: 21 },
      { id: 'rv-joy', name: 'Joy', year: 1996, month: 9, day: 3 },
      { id: 'rv-yeri', name: 'Yeri', year: 1999, month: 3, day: 5 },
    ],
  },
  {
    id: 'mamamoo',
    name: 'MAMAMOO',
    gender: 'F',
    members: [
      { id: 'mmoo-solar', name: 'Solar', year: 1991, month: 2, day: 21 },
      { id: 'mmoo-moonbyul', name: 'Moonbyul', year: 1992, month: 12, day: 22 },
      { id: 'mmoo-wheein', name: 'Wheein', year: 1995, month: 4, day: 17 },
      { id: 'mmoo-hwasa', name: 'Hwasa', year: 1995, month: 7, day: 23 },
    ],
  },
  {
    id: 'kep1er',
    name: 'Kep1er',
    gender: 'F',
    members: [
      { id: 'kep-yujin', name: 'Yujin', year: 1996, month: 8, day: 12 },
      { id: 'kep-xiaoting', name: 'Xiaoting', year: 1999, month: 11, day: 12 },
      { id: 'kep-chaehyun', name: 'Chaehyun', year: 2002, month: 4, day: 26 },
      { id: 'kep-dayeon', name: 'Dayeon', year: 2003, month: 3, day: 2 },
      { id: 'kep-hikaru', name: 'Hikaru', year: 2004, month: 3, day: 12 },
      { id: 'kep-bahiyyih', name: 'Bahiyyih', year: 2004, month: 7, day: 27 },
    ],
  },
  {
    id: 'stayc',
    name: 'STAYC',
    gender: 'F',
    members: [
      { id: 'stayc-sumin', name: 'Sumin', year: 2001, month: 3, day: 13 },
      { id: 'stayc-sieun', name: 'Sieun', year: 2001, month: 8, day: 1 },
      { id: 'stayc-isa', name: 'Isa', year: 2002, month: 1, day: 23 },
      { id: 'stayc-seeun', name: 'Seeun', year: 2003, month: 6, day: 14 },
      { id: 'stayc-yoon', name: 'Yoon', year: 2004, month: 4, day: 14 },
      { id: 'stayc-j', name: 'J', year: 2004, month: 12, day: 9 },
    ],
  },
  {
    id: 'fromis9',
    name: 'fromis_9',
    gender: 'F',
    members: [
      { id: 'fromis-hayoung', name: 'Hayoung', year: 1997, month: 9, day: 29 },
      { id: 'fromis-jiwon', name: 'Jiwon', year: 1998, month: 3, day: 20 },
      { id: 'fromis-chaeyoung', name: 'Chaeyoung', year: 2000, month: 5, day: 14 },
      { id: 'fromis-nagyung', name: 'Nagyung', year: 2000, month: 6, day: 1 },
      { id: 'fromis-jiheon', name: 'Jiheon', year: 2003, month: 4, day: 17 },
    ],
  },
  {
    id: 'nmixx',
    name: 'NMIXX',
    gender: 'F',
    members: [
      { id: 'nmixx-lily', name: 'Lily', year: 2002, month: 10, day: 17 },
      { id: 'nmixx-haewon', name: 'Haewon', year: 2003, month: 2, day: 25 },
      { id: 'nmixx-sullyoon', name: 'Sullyoon', year: 2004, month: 1, day: 26 },
      { id: 'nmixx-bae', name: 'Bae', year: 2004, month: 12, day: 28 },
      { id: 'nmixx-jiwoo', name: 'Jiwoo', year: 2005, month: 4, day: 13 },
      { id: 'nmixx-kyujin', name: 'Kyujin', year: 2006, month: 5, day: 26 },
    ],
  },
  {
    id: 'viviz',
    name: 'VIVIZ',
    gender: 'F',
    members: [
      { id: 'viviz-eunha', name: 'Eunha', year: 1997, month: 5, day: 30 },
      { id: 'viviz-sinb', name: 'SinB', year: 1998, month: 6, day: 3 },
      { id: 'viviz-umji', name: 'Umji', year: 1998, month: 8, day: 19 },
    ],
  },
];

export function findMember(groupId, memberId) {
  const group = idolGroups.find((g) => g.id === groupId);
  const member = group?.members.find((m) => m.id === memberId);
  return { group, member };
}
