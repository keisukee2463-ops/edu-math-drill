/*
 * 1年生 配当漢字 似ている漢字の選択（視覚的弁別・短文定着）プリント用データ
 * 全6単元（各5問・計30問）
 */
const KANJI_DIFF_UNITS_G1 = [
  {
    id: "diff1-01", grade: "1", no: 1,
    title: "線の長さ・つきぬけのちがい（土・士／千・十／力・刀）",
    focus: "よこ線の 長さや つきぬけ方を よく見くらべよう！",
    items: [
      {
        ans: "土", pair: ["土", "士"],
        sentPre: "にわの くろい ", sentPost: "を さわる。", yomi: "つち",
        point: "下が長い「土（つち）」", full: "にわの くろい 土を さわる。"
      },
      {
        ans: "士", pair: ["士", "土"],
        sentPre: "かっこいい 武", sentPost: "（ぶし）。", yomi: "し",
        point: "上が長い「士（さむらい）」", full: "かっこいい 武士（ぶし）。"
      },
      {
        ans: "千", pair: ["千", "十"],
        sentPre: "おとしだまで ", sentPost: "円もらう。", yomi: "せん",
        point: "ななめの はらいがある「千（せん）」", full: "おとしだまで 千円もらう。"
      },
      {
        ans: "十", pair: ["十", "千"],
        sentPre: "ぜんぶで ", sentPost: "こ あつめる。", yomi: "じゅう",
        point: "まっすぐな じゅうじ「十（とお）」", full: "ぜんぶで 十こ あつめる。"
      },
      {
        ans: "力", pair: ["力", "刀"],
        sentPre: "重いにもつを ", sentPost: "いっぱい もつ。", yomi: "ちから",
        point: "上が つきぬける「力（ちから）」", full: "重いにもつを 力いっぱい もつ。"
      }
    ]
  },
  {
    id: "diff1-02", grade: "1", no: 2,
    title: "点がある？ない？（犬・大／太・大／玉・王）",
    focus: "チョン（点）が どこについているか 見つけよう！",
    items: [
      {
        ans: "犬", pair: ["犬", "大"],
        sentPre: "かわいい 子", sentPost: "が ワンとなく。", yomi: "いぬ",
        point: "みぎ上に 点（耳）がある「犬（いぬ）」", full: "かわいい 子犬が ワンとなく。"
      },
      {
        ans: "大", pair: ["大", "犬"],
        sentPre: "大きな こえで ", sentPost: "きく うたう。", yomi: "おおか",
        point: "点が ない「大（おおきい）」", full: "大きな こえで 大声で うたう。"
      },
      {
        ans: "太", pair: ["太", "大"],
        sentPre: "木の ", sentPost: "い みき。", yomi: "ふと",
        point: "足の あいだに 点がある「太い（ふとい）」", full: "木の 太い みき。"
      },
      {
        ans: "玉", pair: ["玉", "王"],
        sentPre: "きれいな ビー", sentPost: "を なげる。", yomi: "だま",
        point: "右下に 点がある「玉（たま）」", full: "きれいな ビー玉を なげる。"
      },
      {
        ans: "王", pair: ["王", "玉"],
        sentPre: "お城の ", sentPost: "さま。", yomi: "おう",
        point: "点が ないのが「王（おうさま）」", full: "お城の 王さま。"
      }
    ]
  },
  {
    id: "diff1-03", grade: "1", no: 3,
    title: "右と左・手と毛（向きとパーツのちがい）",
    focus: "【右】＝口 ／ 【左】＝エ ／ 【手】＝ハネ ／ 【毛】＝そる",
    items: [
      {
        ans: "右", pair: ["右", "左"],
        sentPre: "ごはんを たべる ", sentPost: "手。", yomi: "みぎ",
        point: "口（くち）がついているのが「右（みぎ）」", full: "ごはんを たべる 右手。"
      },
      {
        ans: "左", pair: ["左", "右"],
        sentPre: "ちゃわんを もつ ", sentPost: "手。", yomi: "ひだり",
        point: "エ（こう）がついているのが「左（ひだり）」", full: "ちゃわんを もつ 左手。"
      },
      {
        ans: "手", pair: ["手", "毛"],
        sentPre: "ごはんの まえに ", sentPost: "を あらう。", yomi: "て",
        point: "さいごが まっすぐ はねる「手（て）」", full: "ごはんの まえに 手を あらう。"
      },
      {
        ans: "毛", pair: ["毛", "手"],
        sentPre: "ねこの ふわふわな ", sentPost: "。", yomi: "け",
        point: "さいごが くるんと まがる「毛（け）」", full: "ねこの ふわふわな 毛。"
      },
      {
        ans: "右", pair: ["右", "左"],
        sentPre: "くるまが ", sentPost: "に まがる。", yomi: "みぎ",
        point: "口（くち）があるのが「右（みぎ）」", full: "くるまが 右に まがる。"
      }
    ]
  },
  {
    id: "diff1-04", grade: "1", no: 4,
    title: "木から生まれた漢字（木・本・休・林・森）",
    focus: "【木】の形が どうかわったか 見くらべよう！",
    items: [
      {
        ans: "木", pair: ["木", "本"],
        sentPre: "こうえんの 大きな ", sentPost: "。", yomi: "き",
        point: "みきと えだの形「木（き）」", full: "こうえんの 大きな 木。"
      },
      {
        ans: "本", pair: ["本", "木"],
        sentPre: "としょかんの え", sentPost: "を よむ。", yomi: "ほん",
        point: "下の ねっこに 線がある「本（ほん）」", full: "としょかんの え本を よむ。"
      },
      {
        ans: "休", pair: ["休", "体"],
        sentPre: "きょうは がっこうを ", sentPost: "む。", yomi: "やす",
        point: "人が 木によりかかる＝「休む」", full: "きょうは がっこうを 休む。"
      },
      {
        ans: "林", pair: ["林", "森"],
        sentPre: "木が ２本ならぶ こば", sentPost: "。", yomi: "やし",
        point: "木が ２つで「林（はやし）」", full: "木が ２本ならぶ こばやし。"
      },
      {
        ans: "森", pair: ["森", "林"],
        sentPre: "木が いっぱいの ふかい ", sentPost: "。", yomi: "もり",
        point: "木が ３つで「森（もり）」", full: "木が いっぱいの ふかい 森。"
      }
    ]
  },
  {
    id: "diff1-05", grade: "1", no: 5,
    title: "四角の中の線のちがい（日・白・百・目／口・田）",
    focus: "四角の中に 何本 線があるかな？",
    items: [
      {
        ans: "日", pair: ["日", "白"],
        sentPre: "あかるい お", sentPost: "さま。", yomi: "ひ",
        point: "四角のなかに 横線が１本「日（ひ）」", full: "あかるい お日さま。"
      },
      {
        ans: "白", pair: ["白", "百"],
        sentPre: "まっ", sentPost: "い ゆきが ふる。", yomi: "しろ",
        point: "上に チョンがある「白（しろ）」", full: "まっ白い ゆきが ふる。"
      },
      {
        ans: "百", pair: ["百", "白"],
        sentPre: "テストで ", sentPost: "てんを とる。", yomi: "ひゃく",
        point: "いち（一）が ついた「百（ひゃく）」", full: "テストで 百てんを とる。"
      },
      {
        ans: "目", pair: ["目", "日"],
        sentPre: "大きな ", sentPost: "を パチパチする。", yomi: "め",
        point: "四角のなかに 横線が２本「目（め）」", full: "大きな 目を パチパチする。"
      },
      {
        ans: "田", pair: ["田", "口"],
        sentPre: "おいしい お米の ", sentPost: "んぼ。", yomi: "た",
        point: "田んぼの あぜみち（十）がある「田」", full: "おいしい お米の 田んぼ。"
      }
    ]
  },
  {
    id: "diff1-06", grade: "1", no: 6,
    title: "はらい・向きのちがい（人・入・八／上・下）",
    focus: "どちらが 上？ どちらが 長い？",
    items: [
      {
        ans: "人", pair: ["人", "入"],
        sentPre: "やさしい 女の ", sentPost: "。", yomi: "ひと",
        point: "左が 上に乗っている「人（ひと）」", full: "やさしい 女の人。"
      },
      {
        ans: "入", pair: ["入", "人"],
        sentPre: "あたたかい おふろに ", sentPost: "る。", yomi: "はい",
        point: "右が つきぬけている「入る（はいる）」", full: "あたたかい おふろに入る。"
      },
      {
        ans: "八", pair: ["八", "人"],
        sentPre: "ぜんぶで ", sentPost: "こ ある。", yomi: "やっ",
        point: "上が くっつかない「八（やっつ）」", full: "ぜんぶで 八こ ある。"
      },
      {
        ans: "上", pair: ["上", "下"],
        sentPre: "つくえの ", sentPost: "に ノートをおく。", yomi: "うえ",
        point: "線が 上に向く「上（うえ）」", full: "つくえの 上に ノートをおく。"
      },
      {
        ans: "下", pair: ["下", "上"],
        sentPre: "木の ", sentPost: "で 雨やどり。", yomi: "した",
        point: "線が 下に向く「下（した）」", full: "木の 下で 雨やどり。"
      }
    ]
  }
];
