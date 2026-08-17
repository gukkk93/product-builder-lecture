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
      { id: 'bts-rm', name: 'RM', nameKo: '알엠', year: 1994, month: 9, day: 12 },
      { id: 'bts-jin', name: 'Jin', nameKo: '진', year: 1992, month: 12, day: 4 },
      { id: 'bts-suga', name: 'Suga', nameKo: '슈가', year: 1993, month: 3, day: 9 },
      { id: 'bts-jhope', name: 'J-Hope', nameKo: '제이홉', year: 1994, month: 2, day: 18 },
      { id: 'bts-jimin', name: 'Jimin', nameKo: '지민', year: 1995, month: 10, day: 13 },
      { id: 'bts-v', name: 'V', nameKo: '뷔', year: 1995, month: 12, day: 30 },
      { id: 'bts-jungkook', name: 'Jungkook', nameKo: '정국', year: 1997, month: 9, day: 1 },
    ],
  },
  {
    id: 'blackpink',
    name: 'BLACKPINK',
    gender: 'F',
    members: [
      { id: 'bp-jisoo', name: 'Jisoo', nameKo: '지수', year: 1995, month: 1, day: 3 },
      { id: 'bp-jennie', name: 'Jennie', nameKo: '제니', year: 1996, month: 1, day: 16 },
      { id: 'bp-rose', name: 'Rosé', nameKo: '로제', year: 1997, month: 2, day: 11 },
      { id: 'bp-lisa', name: 'Lisa', nameKo: '리사', year: 1997, month: 3, day: 27 },
    ],
  },
  {
    id: 'newjeans',
    name: 'NewJeans',
    gender: 'F',
    members: [
      { id: 'nj-minji', name: 'Minji', nameKo: '민지', year: 2004, month: 5, day: 7 },
      { id: 'nj-hanni', name: 'Hanni', nameKo: '하니', year: 2004, month: 10, day: 6 },
      { id: 'nj-haerin', name: 'Haerin', nameKo: '해린', year: 2006, month: 5, day: 15 },
      { id: 'nj-hyein', name: 'Hyein', nameKo: '혜인', year: 2008, month: 4, day: 21 },
    ],
  },
  {
    id: 'seventeen',
    name: 'SEVENTEEN',
    gender: 'M',
    members: [
      { id: 'svt-scoups', name: 'S.Coups', nameKo: '에스쿱스', year: 1995, month: 4, day: 26 },
      { id: 'svt-jeonghan', name: 'Jeonghan', nameKo: '정한', year: 1995, month: 10, day: 4 },
      { id: 'svt-joshua', name: 'Joshua', nameKo: '조슈아', year: 1995, month: 12, day: 30 },
      { id: 'svt-jun', name: 'Jun', nameKo: '준', year: 1996, month: 6, day: 10 },
      { id: 'svt-hoshi', name: 'Hoshi', nameKo: '호시', year: 1996, month: 6, day: 15 },
      { id: 'svt-wonwoo', name: 'Wonwoo', nameKo: '원우', year: 1996, month: 7, day: 17 },
      { id: 'svt-woozi', name: 'Woozi', nameKo: '우지', year: 1996, month: 11, day: 22 },
      { id: 'svt-dk', name: 'DK', nameKo: '도겸', year: 1997, month: 2, day: 18 },
      { id: 'svt-mingyu', name: 'Mingyu', nameKo: '민규', year: 1997, month: 4, day: 6 },
      { id: 'svt-the8', name: 'The8', nameKo: '디에잇', year: 1997, month: 11, day: 7 },
      { id: 'svt-seungkwan', name: 'Seungkwan', nameKo: '승관', year: 1998, month: 1, day: 16 },
      { id: 'svt-vernon', name: 'Vernon', nameKo: '버논', year: 1998, month: 2, day: 18 },
      { id: 'svt-dino', name: 'Dino', nameKo: '디노', year: 1999, month: 2, day: 11 },
    ],
  },
  {
    id: 'stray-kids',
    name: 'Stray Kids',
    gender: 'M',
    members: [
      { id: 'skz-bangchan', name: 'Bang Chan', nameKo: '방찬', year: 1997, month: 10, day: 3 },
      { id: 'skz-leeknow', name: 'Lee Know', nameKo: '리노', year: 1998, month: 10, day: 25 },
      { id: 'skz-changbin', name: 'Changbin', nameKo: '창빈', year: 1999, month: 8, day: 11 },
      { id: 'skz-hyunjin', name: 'Hyunjin', nameKo: '현진', year: 2000, month: 3, day: 20 },
      { id: 'skz-han', name: 'Han', nameKo: '한', year: 2000, month: 9, day: 14 },
      { id: 'skz-felix', name: 'Felix', nameKo: '필릭스', year: 2000, month: 9, day: 15 },
      { id: 'skz-seungmin', name: 'Seungmin', nameKo: '승민', year: 2000, month: 9, day: 22 },
      { id: 'skz-in', name: 'I.N', nameKo: '아이엔', year: 2001, month: 2, day: 8 },
    ],
  },
  {
    id: 'twice',
    name: 'TWICE',
    gender: 'F',
    members: [
      { id: 'tw-nayeon', name: 'Nayeon', nameKo: '나연', year: 1995, month: 9, day: 22 },
      { id: 'tw-jeongyeon', name: 'Jeongyeon', nameKo: '정연', year: 1996, month: 11, day: 1 },
      { id: 'tw-momo', name: 'Momo', nameKo: '모모', year: 1996, month: 11, day: 9 },
      { id: 'tw-sana', name: 'Sana', nameKo: '사나', year: 1996, month: 12, day: 29 },
      { id: 'tw-jihyo', name: 'Jihyo', nameKo: '지효', year: 1997, month: 2, day: 1 },
      { id: 'tw-mina', name: 'Mina', nameKo: '미나', year: 1997, month: 3, day: 24 },
      { id: 'tw-dahyun', name: 'Dahyun', nameKo: '다현', year: 1998, month: 5, day: 28 },
      { id: 'tw-chaeyoung', name: 'Chaeyoung', nameKo: '채영', year: 1999, month: 4, day: 23 },
      { id: 'tw-tzuyu', name: 'Tzuyu', nameKo: '쯔위', year: 1999, month: 6, day: 14 },
    ],
  },
  {
    id: 'exo',
    name: 'EXO',
    gender: 'M',
    members: [
      { id: 'exo-suho', name: 'Suho', nameKo: '수호', year: 1991, month: 5, day: 22 },
      { id: 'exo-lay', name: 'Lay', nameKo: '레이', year: 1991, month: 10, day: 7 },
      { id: 'exo-chanyeol', name: 'Chanyeol', nameKo: '찬열', year: 1992, month: 11, day: 27 },
      { id: 'exo-do', name: 'D.O.', nameKo: '디오', year: 1993, month: 1, day: 12 },
      { id: 'exo-kai', name: 'Kai', nameKo: '카이', year: 1994, month: 1, day: 14 },
      { id: 'exo-sehun', name: 'Sehun', nameKo: '세훈', year: 1994, month: 4, day: 12 },
    ],
  },
  {
    id: 'txt',
    name: 'TOMORROW X TOGETHER',
    gender: 'M',
    members: [
      { id: 'txt-yeonjun', name: 'Yeonjun', nameKo: '연준', year: 1999, month: 9, day: 13 },
      { id: 'txt-soobin', name: 'Soobin', nameKo: '수빈', year: 2000, month: 12, day: 5 },
      { id: 'txt-beomgyu', name: 'Beomgyu', nameKo: '범규', year: 2001, month: 3, day: 13 },
      { id: 'txt-taehyun', name: 'Taehyun', nameKo: '태현', year: 2002, month: 2, day: 5 },
      { id: 'txt-hueningkai', name: 'Hueningkai', nameKo: '휴닝카이', year: 2002, month: 8, day: 14 },
    ],
  },
  {
    id: 'aespa',
    name: 'aespa',
    gender: 'F',
    members: [
      { id: 'aespa-karina', name: 'Karina', nameKo: '카리나', year: 2000, month: 4, day: 11 },
      { id: 'aespa-giselle', name: 'Giselle', nameKo: '지젤', year: 2000, month: 10, day: 30 },
      { id: 'aespa-winter', name: 'Winter', nameKo: '윈터', year: 2001, month: 1, day: 1 },
      { id: 'aespa-ningning', name: 'Ningning', nameKo: '닝닝', year: 2002, month: 10, day: 23 },
    ],
  },
  {
    id: 'ateez',
    name: 'ATEEZ',
    gender: 'M',
    members: [
      { id: 'atz-seonghwa', name: 'Seonghwa', nameKo: '성화', year: 1998, month: 4, day: 3 },
      { id: 'atz-hongjoong', name: 'Hongjoong', nameKo: '홍중', year: 1998, month: 11, day: 7 },
      { id: 'atz-yunho', name: 'Yunho', nameKo: '윤호', year: 1999, month: 3, day: 23 },
      { id: 'atz-yeosang', name: 'Yeosang', nameKo: '여상', year: 1999, month: 6, day: 15 },
      { id: 'atz-san', name: 'San', nameKo: '산', year: 1999, month: 7, day: 10 },
      { id: 'atz-mingi', name: 'Mingi', nameKo: '민기', year: 1999, month: 8, day: 9 },
      { id: 'atz-wooyoung', name: 'Wooyoung', nameKo: '우영', year: 1999, month: 11, day: 26 },
      { id: 'atz-jongho', name: 'Jongho', nameKo: '종호', year: 2000, month: 10, day: 12 },
    ],
  },
  {
    id: 'enhypen',
    name: 'ENHYPEN',
    gender: 'M',
    members: [
      { id: 'enh-jay', name: 'Jay', nameKo: '제이', year: 2002, month: 4, day: 20 },
      { id: 'enh-jake', name: 'Jake', nameKo: '제이크', year: 2002, month: 11, day: 15 },
      { id: 'enh-sunghoon', name: 'Sunghoon', nameKo: '성훈', year: 2002, month: 12, day: 8 },
      { id: 'enh-sunoo', name: 'Sunoo', nameKo: '선우', year: 2003, month: 6, day: 24 },
      { id: 'enh-jungwon', name: 'Jungwon', nameKo: '정원', year: 2004, month: 2, day: 9 },
      { id: 'enh-niki', name: 'Ni-Ki', nameKo: '니키', year: 2005, month: 12, day: 9 },
    ],
  },
  {
    id: 'the-boyz',
    name: 'THE BOYZ',
    gender: 'M',
    members: [
      { id: 'tbz-sangyeon', name: 'Sangyeon', nameKo: '상연', year: 1996, month: 11, day: 4 },
      { id: 'tbz-jacob', name: 'Jacob', nameKo: '제이콥', year: 1997, month: 5, day: 30 },
      { id: 'tbz-younghoon', name: 'Younghoon', nameKo: '영훈', year: 1997, month: 8, day: 8 },
      { id: 'tbz-hyunjae', name: 'Hyunjae', nameKo: '현재', year: 1997, month: 9, day: 13 },
      { id: 'tbz-juyeon', name: 'Juyeon', nameKo: '주연', year: 1998, month: 1, day: 15 },
      { id: 'tbz-kevin', name: 'Kevin', nameKo: '케빈', year: 1998, month: 2, day: 23 },
      { id: 'tbz-q', name: 'Q', nameKo: '큐', year: 1998, month: 11, day: 5 },
      { id: 'tbz-sunwoo', name: 'Sunwoo', nameKo: '선우', year: 2000, month: 4, day: 12 },
      { id: 'tbz-eric', name: 'Eric', nameKo: '에릭', year: 2000, month: 12, day: 22 },
    ],
  },
  {
    id: 'zerobaseone',
    name: 'ZEROBASEONE',
    gender: 'M',
    members: [
      { id: 'zb1-jiwoong', name: 'Kim Jiwoong', nameKo: '김지웅', year: 1998, month: 12, day: 14 },
      { id: 'zb1-zhanghao', name: 'Zhang Hao', nameKo: '장하오', year: 2000, month: 7, day: 25 },
      { id: 'zb1-hanbin', name: 'Sung Hanbin', nameKo: '성한빈', year: 2001, month: 6, day: 13 },
      { id: 'zb1-matthew', name: 'Seok Matthew', nameKo: '석매튜', year: 2002, month: 5, day: 28 },
      { id: 'zb1-taerae', name: 'Kim Taerae', nameKo: '김태래', year: 2002, month: 7, day: 14 },
      { id: 'zb1-ricky', name: 'Ricky', nameKo: '리키', year: 2004, month: 5, day: 20 },
      { id: 'zb1-gyuvin', name: 'Kim Gyuvin', nameKo: '김규빈', year: 2004, month: 8, day: 30 },
      { id: 'zb1-gunwook', name: 'Park Gunwook', nameKo: '박건욱', year: 2005, month: 1, day: 10 },
      { id: 'zb1-yujin', name: 'Han Yujin', nameKo: '한유진', year: 2007, month: 3, day: 20 },
    ],
  },
  {
    id: 'riize',
    name: 'RIIZE',
    gender: 'M',
    members: [
      { id: 'riz-shotaro', name: 'Shotaro', nameKo: '쇼타로', year: 2000, month: 11, day: 25 },
      { id: 'riz-eunseok', name: 'Eunseok', nameKo: '은석', year: 2001, month: 3, day: 19 },
      { id: 'riz-sungchan', name: 'Sungchan', nameKo: '성찬', year: 2001, month: 9, day: 13 },
      { id: 'riz-wonbin', name: 'Wonbin', nameKo: '원빈', year: 2002, month: 3, day: 2 },
      { id: 'riz-sohee', name: 'Sohee', nameKo: '소희', year: 2003, month: 11, day: 21 },
      { id: 'riz-anton', name: 'Anton', nameKo: '앤톤', year: 2004, month: 3, day: 21 },
    ],
  },
  {
    id: 'nct-dream',
    name: 'NCT DREAM',
    gender: 'M',
    members: [
      { id: 'nctd-mark', name: 'Mark', nameKo: '마크', year: 1999, month: 8, day: 2 },
      { id: 'nctd-renjun', name: 'Renjun', nameKo: '런쥔', year: 2000, month: 3, day: 23 },
      { id: 'nctd-jeno', name: 'Jeno', nameKo: '제노', year: 2000, month: 4, day: 23 },
      { id: 'nctd-haechan', name: 'Haechan', nameKo: '해찬', year: 2000, month: 6, day: 6 },
      { id: 'nctd-jaemin', name: 'Jaemin', nameKo: '재민', year: 2000, month: 8, day: 13 },
      { id: 'nctd-chenle', name: 'Chenle', nameKo: '천러', year: 2001, month: 11, day: 22 },
      { id: 'nctd-jisung', name: 'Jisung', nameKo: '지성', year: 2002, month: 2, day: 5 },
    ],
  },
  {
    id: 'nct-127',
    name: 'NCT 127',
    gender: 'M',
    members: [
      { id: 'nct127-johnny', name: 'Johnny', nameKo: '쟈니', year: 1995, month: 2, day: 9 },
      { id: 'nct127-taeyong', name: 'Taeyong', nameKo: '태용', year: 1995, month: 7, day: 1 },
      { id: 'nct127-yuta', name: 'Yuta', nameKo: '유타', year: 1995, month: 10, day: 26 },
      { id: 'nct127-doyoung', name: 'Doyoung', nameKo: '도영', year: 1996, month: 2, day: 1 },
      { id: 'nct127-jaehyun', name: 'Jaehyun', nameKo: '재현', year: 1997, month: 2, day: 14 },
      { id: 'nct127-winwin', name: 'WinWin', nameKo: '윈윈', year: 1997, month: 10, day: 28 },
      { id: 'nct127-jungwoo', name: 'Jungwoo', nameKo: '정우', year: 1998, month: 2, day: 19 },
    ],
  },
  {
    id: 'monsta-x',
    name: 'MONSTA X',
    gender: 'M',
    members: [
      { id: 'mx-shownu', name: 'Shownu', nameKo: '셔누', year: 1992, month: 6, day: 18 },
      { id: 'mx-minhyuk', name: 'Minhyuk', nameKo: '민혁', year: 1993, month: 11, day: 3 },
      { id: 'mx-kihyun', name: 'Kihyun', nameKo: '기현', year: 1993, month: 11, day: 22 },
      { id: 'mx-hyungwon', name: 'Hyungwon', nameKo: '형원', year: 1994, month: 1, day: 15 },
      { id: 'mx-joohoney', name: 'Joohoney', nameKo: '주헌', year: 1994, month: 10, day: 6 },
      { id: 'mx-im', name: 'I.M', nameKo: '아이엠', year: 1996, month: 1, day: 26 },
    ],
  },
  {
    id: 'got7',
    name: 'GOT7',
    gender: 'M',
    members: [
      { id: 'got7-mark', name: 'Mark', nameKo: '마크', year: 1993, month: 9, day: 4 },
      { id: 'got7-jayb', name: 'Jay B', nameKo: '제이비', year: 1994, month: 1, day: 6 },
      { id: 'got7-jackson', name: 'Jackson', nameKo: '잭슨', year: 1994, month: 3, day: 28 },
      { id: 'got7-jinyoung', name: 'Jinyoung', nameKo: '진영', year: 1994, month: 9, day: 22 },
      { id: 'got7-youngjae', name: 'Youngjae', nameKo: '영재', year: 1996, month: 9, day: 17 },
      { id: 'got7-bambam', name: 'BamBam', nameKo: '뱀뱀', year: 1997, month: 5, day: 2 },
      { id: 'got7-yugyeom', name: 'Yugyeom', nameKo: '유겸', year: 1997, month: 11, day: 17 },
    ],
  },
  {
    id: 'treasure',
    name: 'TREASURE',
    gender: 'M',
    members: [
      { id: 'trsr-hyunsuk', name: 'Hyunsuk', nameKo: '현석', year: 1999, month: 4, day: 21 },
      { id: 'trsr-jihoon', name: 'Jihoon', nameKo: '지훈', year: 2000, month: 3, day: 14 },
      { id: 'trsr-yoshi', name: 'Yoshi', nameKo: '요시', year: 2000, month: 5, day: 15 },
      { id: 'trsr-junkyu', name: 'Junkyu', nameKo: '준규', year: 2000, month: 9, day: 9 },
      { id: 'trsr-jaehyuk', name: 'Jaehyuk', nameKo: '재혁', year: 2001, month: 7, day: 23 },
      { id: 'trsr-asahi', name: 'Asahi', nameKo: '아사히', year: 2001, month: 8, day: 20 },
      { id: 'trsr-doyoung', name: 'Doyoung', nameKo: '도영', year: 2003, month: 12, day: 4 },
      { id: 'trsr-haruto', name: 'Haruto', nameKo: '하루토', year: 2004, month: 4, day: 5 },
      { id: 'trsr-jeongwoo', name: 'Jeongwoo', nameKo: '정우', year: 2004, month: 9, day: 28 },
      { id: 'trsr-junghwan', name: 'Junghwan', nameKo: '정환', year: 2005, month: 2, day: 18 },
    ],
  },
  {
    id: 'boynextdoor',
    name: 'BOYNEXTDOOR',
    gender: 'M',
    members: [
      { id: 'bnd-sungho', name: 'Sungho', nameKo: '성호', year: 2003, month: 9, day: 4 },
      { id: 'bnd-riwoo', name: 'Riwoo', nameKo: '리우', year: 2003, month: 10, day: 22 },
      { id: 'bnd-jaehyun', name: 'Jaehyun', nameKo: '재현', year: 2003, month: 12, day: 4 },
      { id: 'bnd-taesan', name: 'Taesan', nameKo: '태산', year: 2004, month: 8, day: 10 },
      { id: 'bnd-leehan', name: 'Leehan', nameKo: '이한', year: 2004, month: 10, day: 20 },
      { id: 'bnd-woonhak', name: 'Woonhak', nameKo: '운학', year: 2006, month: 11, day: 29 },
    ],
  },
  {
    id: 'ive',
    name: 'IVE',
    gender: 'F',
    members: [
      { id: 'ive-yujin', name: 'Yujin', nameKo: '유진', year: 2003, month: 9, day: 1 },
      { id: 'ive-gaeul', name: 'Gaeul', nameKo: '가을', year: 2002, month: 9, day: 24 },
      { id: 'ive-rei', name: 'Rei', nameKo: '레이', year: 2004, month: 2, day: 3 },
      { id: 'ive-wonyoung', name: 'Wonyoung', nameKo: '원영', year: 2004, month: 8, day: 31 },
      { id: 'ive-liz', name: 'Liz', nameKo: '리즈', year: 2004, month: 11, day: 21 },
      { id: 'ive-leeseo', name: 'Leeseo', nameKo: '이서', year: 2007, month: 2, day: 21 },
    ],
  },
  {
    id: 'lesserafim',
    name: 'LE SSERAFIM',
    gender: 'F',
    members: [
      { id: 'lsf-sakura', name: 'Sakura', nameKo: '사쿠라', year: 1998, month: 3, day: 19 },
      { id: 'lsf-chaewon', name: 'Chaewon', nameKo: '채원', year: 2000, month: 8, day: 1 },
      { id: 'lsf-yunjin', name: 'Yunjin', nameKo: '윤진', year: 2001, month: 10, day: 8 },
      { id: 'lsf-kazuha', name: 'Kazuha', nameKo: '카즈하', year: 2003, month: 8, day: 9 },
      { id: 'lsf-eunchae', name: 'Eunchae', nameKo: '은채', year: 2006, month: 11, day: 10 },
    ],
  },
  {
    id: 'itzy',
    name: 'ITZY',
    gender: 'F',
    members: [
      { id: 'itzy-yeji', name: 'Yeji', nameKo: '예지', year: 2000, month: 5, day: 26 },
      { id: 'itzy-lia', name: 'Lia', nameKo: '리아', year: 2000, month: 7, day: 21 },
      { id: 'itzy-ryujin', name: 'Ryujin', nameKo: '류진', year: 2001, month: 4, day: 17 },
      { id: 'itzy-chaeryeong', name: 'Chaeryeong', nameKo: '채령', year: 2001, month: 6, day: 5 },
      { id: 'itzy-yuna', name: 'Yuna', nameKo: '유나', year: 2003, month: 12, day: 9 },
    ],
  },
  {
    id: 'gidle',
    name: '(G)I-DLE',
    gender: 'F',
    members: [
      { id: 'gidle-miyeon', name: 'Miyeon', nameKo: '미연', year: 1997, month: 1, day: 31 },
      { id: 'gidle-minnie', name: 'Minnie', nameKo: '민니', year: 1997, month: 10, day: 23 },
      { id: 'gidle-soyeon', name: 'Soyeon', nameKo: '소연', year: 1998, month: 8, day: 26 },
      { id: 'gidle-yuqi', name: 'Yuqi', nameKo: '우기', year: 1999, month: 9, day: 23 },
      { id: 'gidle-shuhua', name: 'Shuhua', nameKo: '슈화', year: 2000, month: 1, day: 6 },
    ],
  },
  {
    id: 'redvelvet',
    name: 'Red Velvet',
    gender: 'F',
    members: [
      { id: 'rv-irene', name: 'Irene', nameKo: '아이린', year: 1991, month: 3, day: 29 },
      { id: 'rv-seulgi', name: 'Seulgi', nameKo: '슬기', year: 1994, month: 2, day: 10 },
      { id: 'rv-wendy', name: 'Wendy', nameKo: '웬디', year: 1994, month: 2, day: 21 },
      { id: 'rv-joy', name: 'Joy', nameKo: '조이', year: 1996, month: 9, day: 3 },
      { id: 'rv-yeri', name: 'Yeri', nameKo: '예리', year: 1999, month: 3, day: 5 },
    ],
  },
  {
    id: 'mamamoo',
    name: 'MAMAMOO',
    gender: 'F',
    members: [
      { id: 'mmoo-solar', name: 'Solar', nameKo: '솔라', year: 1991, month: 2, day: 21 },
      { id: 'mmoo-moonbyul', name: 'Moonbyul', nameKo: '문별', year: 1992, month: 12, day: 22 },
      { id: 'mmoo-wheein', name: 'Wheein', nameKo: '휘인', year: 1995, month: 4, day: 17 },
      { id: 'mmoo-hwasa', name: 'Hwasa', nameKo: '화사', year: 1995, month: 7, day: 23 },
    ],
  },
  {
    id: 'kep1er',
    name: 'Kep1er',
    gender: 'F',
    members: [
      { id: 'kep-yujin', name: 'Yujin', nameKo: '유진', year: 1996, month: 8, day: 12 },
      { id: 'kep-xiaoting', name: 'Xiaoting', nameKo: '샤오팅', year: 1999, month: 11, day: 12 },
      { id: 'kep-chaehyun', name: 'Chaehyun', nameKo: '채현', year: 2002, month: 4, day: 26 },
      { id: 'kep-dayeon', name: 'Dayeon', nameKo: '다연', year: 2003, month: 3, day: 2 },
      { id: 'kep-hikaru', name: 'Hikaru', nameKo: '히카루', year: 2004, month: 3, day: 12 },
      { id: 'kep-bahiyyih', name: 'Bahiyyih', nameKo: '휴닝바히에', year: 2004, month: 7, day: 27 },
    ],
  },
  {
    id: 'stayc',
    name: 'STAYC',
    gender: 'F',
    members: [
      { id: 'stayc-sumin', name: 'Sumin', nameKo: '수민', year: 2001, month: 3, day: 13 },
      { id: 'stayc-sieun', name: 'Sieun', nameKo: '시은', year: 2001, month: 8, day: 1 },
      { id: 'stayc-isa', name: 'Isa', nameKo: '아이사', year: 2002, month: 1, day: 23 },
      { id: 'stayc-seeun', name: 'Seeun', nameKo: '세은', year: 2003, month: 6, day: 14 },
      { id: 'stayc-yoon', name: 'Yoon', nameKo: '윤', year: 2004, month: 4, day: 14 },
      { id: 'stayc-j', name: 'J', nameKo: '재이', year: 2004, month: 12, day: 9 },
    ],
  },
  {
    id: 'fromis9',
    name: 'fromis_9',
    gender: 'F',
    members: [
      { id: 'fromis-hayoung', name: 'Hayoung', nameKo: '하영', year: 1997, month: 9, day: 29 },
      { id: 'fromis-jiwon', name: 'Jiwon', nameKo: '지원', year: 1998, month: 3, day: 20 },
      { id: 'fromis-chaeyoung', name: 'Chaeyoung', nameKo: '채영', year: 2000, month: 5, day: 14 },
      { id: 'fromis-nagyung', name: 'Nagyung', nameKo: '나겸', year: 2000, month: 6, day: 1 },
      { id: 'fromis-jiheon', name: 'Jiheon', nameKo: '지헌', year: 2003, month: 4, day: 17 },
    ],
  },
  {
    id: 'nmixx',
    name: 'NMIXX',
    gender: 'F',
    members: [
      { id: 'nmixx-lily', name: 'Lily', nameKo: '릴리', year: 2002, month: 10, day: 17 },
      { id: 'nmixx-haewon', name: 'Haewon', nameKo: '해원', year: 2003, month: 2, day: 25 },
      { id: 'nmixx-sullyoon', name: 'Sullyoon', nameKo: '설윤', year: 2004, month: 1, day: 26 },
      { id: 'nmixx-bae', name: 'Bae', nameKo: '배이', year: 2004, month: 12, day: 28 },
      { id: 'nmixx-jiwoo', name: 'Jiwoo', nameKo: '지우', year: 2005, month: 4, day: 13 },
      { id: 'nmixx-kyujin', name: 'Kyujin', nameKo: '규진', year: 2006, month: 5, day: 26 },
    ],
  },
  {
    id: 'viviz',
    name: 'VIVIZ',
    gender: 'F',
    members: [
      { id: 'viviz-eunha', name: 'Eunha', nameKo: '은하', year: 1997, month: 5, day: 30 },
      { id: 'viviz-sinb', name: 'SinB', nameKo: '신비', year: 1998, month: 6, day: 3 },
      { id: 'viviz-umji', name: 'Umji', nameKo: '엄지', year: 1998, month: 8, day: 19 },
    ],
  },
];

export function findMember(groupId, memberId) {
  const group = idolGroups.find((g) => g.id === groupId);
  const member = group?.members.find((m) => m.id === memberId);
  return { group, member };
}

/** Displays a member's name in Hangul when the UI is in Korean and a Korean name is on file. */
export function getMemberName(member, lang) {
  return lang === 'ko' && member.nameKo ? member.nameKo : member.name;
}
