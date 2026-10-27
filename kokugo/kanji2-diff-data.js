/*
 * 2年生 配当漢字 似ている漢字の選択（視覚的弁別・短文定着）プリント用データ
 * 全8単元（各5問・計40問）
 */
const KANJI_DIFF_UNITS_G2 = [
  {
    id: "diff2-01", grade: "2", no: 1,
    title: "貝と買・答と合（パーツの追加）",
    focus: "【貝】に あみ（罒）がつくと【買】／【合】に たけかんむり（⺮）で【答】",
    items: [
      {
        ans: "貝", pair: ["貝", "買"],
        sentPre: "きれいな 海の ", sentPost: "がら。", yomi: "かい",
        point: "うみの かいがら＝「貝（かい）」", full: "きれいな 海の 貝がら。"
      },
      {
        ans: "買", pair: ["買", "貝"],
        sentPre: "お店で えんぴつを ", sentPost: "う。", yomi: "か",
        point: "上に あみ（罒）がついて「買う（かう）」", full: "お店で えんぴつを 買う。"
      },
      {
        ans: "答", pair: ["答", "合"],
        sentPre: "さんすうの もんだいの ", sentPost: "え。", yomi: "こた",
        point: "竹の ふだ（⺮）に こたえを 書く＝「答え」", full: "さんすうの もんだいの 答え。"
      },
      {
        ans: "合", pair: ["合", "答"],
        sentPre: "みんなで 力を ", sentPost: "わせる。", yomi: "あ",
        point: "ふたを あわせる形＝「合わせる」", full: "みんなで 力を 合わせる。"
      },
      {
        ans: "寺", pair: ["寺", "時"],
        sentPre: "京都の 古い お", sentPost: "を みる。", yomi: "てら",
        point: "日へんが ないのが「寺（おてら）」", full: "京都の 古い お寺を みる。"
      }
    ]
  },
  {
    id: "diff2-02", grade: "2", no: 2,
    title: "へんのちがい（時・寺・持／毎・海／話・語）",
    focus: "【日】＝じかん ／ 【氵】＝うみ ／ 【言】＝ことば",
    items: [
      {
        ans: "時", pair: ["時", "寺"],
        sentPre: "おひるの １２", sentPost: "の チャイム。", yomi: "じ",
        point: "たいよう（日）で 時間をはかる＝「時」", full: "おひるの １２時の チャイム。"
      },
      {
        ans: "海", pair: ["海", "毎"],
        sentPre: "なつ休みに 青い ", sentPost: "でおよぐ。", yomi: "うみ",
        point: "みず（氵）があるから「海（うみ）」", full: "なつ休みに 青い 海でおよぐ。"
      },
      {
        ans: "毎", pair: ["毎", "海"],
        sentPre: "", sentPost: "日 あさがおに 水をやる。", yomi: "まい",
        point: "さんずいが ない「毎日（まいにち）」", full: "毎日 あさがおに 水をやる。"
      },
      {
        ans: "話", pair: ["話", "語"],
        sentPre: "先生と たのしく お", sentPost: "しする。", yomi: "はな",
        point: "「言」＋「舌（した）」で「話す（はなす）」", full: "先生と たのしく お話しする。"
      },
      {
        ans: "語", pair: ["語", "話"],
        sentPre: "外国の ことば（えい", sentPost: "）。", yomi: "ご",
        point: "「言」＋「五」＋「口」で「語（ご）」", full: "外国の ことば（えい語）。"
      }
    ]
  },
  {
    id: "diff2-03", grade: "2", no: 3,
    title: "もんがまえ の なかま（門・間・問・聞）",
    focus: "門の なかに 何が 入っているかな？",
    items: [
      {
        ans: "門", pair: ["門", "間"],
        sentPre: "がっこうの 校", sentPost: "を くぐる。", yomi: "もん",
        point: "なにも 入っていないのが「門（もん）」", full: "がっこうの 校門を くぐる。"
      },
      {
        ans: "間", pair: ["間", "門"],
        sentPre: "友だちと あそぶ 時", sentPost: "。", yomi: "かん",
        point: "門の すきまから 日の光＝「間（あいだ）」", full: "友だちと あそぶ 時間。"
      },
      {
        ans: "聞", pair: ["聞", "問"],
        sentPre: "きれいな 鳥のこえを ", sentPost: "く。", yomi: "き",
        point: "門の なかに 耳がある「聞く（きく）」", full: "きれいな 鳥のこえを 聞く。"
      },
      {
        ans: "読", pair: ["読", "話"],
        sentPre: "としょしつで 本を ", sentPost: "む。", yomi: "よ",
        point: "言へんに「売」で「読む（よむ）」", full: "としょしつで 本を 読む。"
      },
      {
        ans: "書", pair: ["書", "昼"],
        sentPre: "おじいちゃんへ 手紙を ", sentPost: "く。", yomi: "か",
        point: "ふでを 手にもつ形「書く（かく）」", full: "おじいちゃんへ 手紙を 書く。"
      }
    ]
  },
  {
    id: "diff2-04", grade: "2", no: 4,
    title: "よく似たどうぶつ・形（鳥・馬／丸・円／同・向）",
    focus: "【鳥】＝羽・目 ／ 【馬】＝たてがみ ／ 【丸】＝点がある",
    items: [
      {
        ans: "鳥", pair: ["鳥", "馬"],
        sentPre: "青い 小", sentPost: "が 空をとぶ。", yomi: "とり",
        point: "目があって 尾羽がある「鳥（とり）」", full: "青い 小鳥が 空をとぶ。"
      },
      {
        ans: "馬", pair: ["馬", "鳥"],
        sentPre: "牧場で 茶色い ", sentPost: "に のる。", yomi: "うま",
        point: "たてがみがある「馬（うま）」", full: "牧場で 茶色い 馬に のる。"
      },
      {
        ans: "丸", pair: ["丸", "円"],
        sentPre: "", sentPost: "い ボールを ける。", yomi: "まる",
        point: "なかに チョンがある「丸い（まるい）」", full: "丸い ボールを ける。"
      },
      {
        ans: "円", pair: ["円", "丸"],
        sentPre: "百", sentPost: "玉を ちょきんばこに入れる。", yomi: "えん",
        point: "おかねの「円（えん）」", full: "百円玉を ちょきんばこに入れる。"
      },
      {
        ans: "同", pair: ["同", "向"],
        sentPre: "友だちと ", sentPost: "じ クラスになる。", yomi: "おな",
        point: "なかに「一」がある「同じ（おなじ）」", full: "友だちと 同じ クラスになる。"
      }
    ]
  },
  {
    id: "diff2-05", grade: "2", no: 5,
    title: "天気ときせつ（雪・雲／冬・夏／画・田）",
    focus: "【雨 あめかんむり】のしたのパーツ／きせつの漢字",
    items: [
      {
        ans: "雪", pair: ["雪", "雲"],
        sentPre: "冬に 白い ", sentPost: "が ふる。", yomi: "ゆき",
        point: "「雨」に「ヨ（ほうき）」で「雪（ゆき）」", full: "冬に 白い 雪が ふる。"
      },
      {
        ans: "雲", pair: ["雲", "雪"],
        sentPre: "青空に 白い ", sentPost: "が うかぶ。", yomi: "くも",
        point: "「雨」に「云」で「雲（くも）」", full: "青空に 白い 雲が うかぶ。"
      },
      {
        ans: "冬", pair: ["冬", "夏"],
        sentPre: "さむい ", sentPost: "休みに スキーに行く。", yomi: "ふゆ",
        point: "こおりの 粒（冫）がある「冬（ふゆ）」", full: "さむい 冬休みに スキーに行く。"
      },
      {
        ans: "夏", pair: ["夏", "冬"],
        sentPre: "あつい ", sentPost: "休みに プールに入る。", yomi: "なつ",
        point: "お面をかぶって おどる形「夏（なつ）」", full: "あつい 夏休みに プールに入る。"
      },
      {
        ans: "画", pair: ["画", "田"],
        sentPre: "おもしろい まん", sentPost: "を よむ。", yomi: "が",
        point: "枠で かこまれた「画（が・かく）」", full: "おもしろい まん画を よむ。"
      }
    ]
  },
  {
    id: "diff2-06", grade: "2", no: 6,
    title: "いとへん の なかま（線・細・絵・紙・組）",
    focus: "【糸 いとへん】の右がわのパーツに ちゅうもく！",
    items: [
      {
        ans: "線", pair: ["線", "細"],
        sentPre: "ものさしで まっすぐな ", sentPost: "を ひく。", yomi: "せん",
        point: "「糸」に「泉（いずみ）」で「線（せん）」", full: "ものさしで まっすぐな 線を ひく。"
      },
      {
        ans: "細", pair: ["細", "線"],
        sentPre: "えんぴつを ", sentPost: "く けずる。", yomi: "ほそ",
        point: "「糸」に「田」で「細い（ほそい）」", full: "えんぴつを 細く けずる。"
      },
      {
        ans: "絵", pair: ["絵", "紙"],
        sentPre: "クレヨンで きれいな ", sentPost: "を かく。", yomi: "え",
        point: "「糸」に「会」で「絵（えのぐ・え）」", full: "クレヨンで きれいな 絵を かく。"
      },
      {
        ans: "紙", pair: ["紙", "絵"],
        sentPre: "赤と 青の おり", sentPost: "を つかう。", yomi: "がみ",
        point: "「糸」に「氏」で「紙（かみ）」", full: "赤と 青の おり紙を つかう。"
      },
      {
        ans: "組", pair: ["組", "線"],
        sentPre: "２年 １", sentPost: "の 教室。", yomi: "くみ",
        point: "「糸」に「目」を あわせる「組（くみ）」", full: "２年 １組の 教室。"
      }
    ]
  },
  {
    id: "diff2-07", grade: "2", no: 7,
    title: "しんにょう の なかま（通・道・近・遠）",
    focus: "【辶 しんにょう】＝道を行く ／ なかのパーツを 見分けよう！",
    items: [
      {
        ans: "通", pair: ["通", "道"],
        sentPre: "まいにち 通学路を ", sentPost: "る。", yomi: "とお",
        point: "「辶」に「甬」で「通る（とおる）」", full: "まいにち 通学路を 通る。"
      },
      {
        ans: "道", pair: ["道", "通"],
        sentPre: "ひろい 帰り", sentPost: "を あるく。", yomi: "みち",
        point: "「辶」に「首（あたま）」で「道（みち）」", full: "ひろい 帰り道を あるく。"
      },
      {
        ans: "遠", pair: ["遠", "近"],
        sentPre: "がっこうから ", sentPost: "い ところ。", yomi: "とお",
        point: "「辶」に「袁」で「遠い（とおい）」", full: "がっこうから 遠い ところ。"
      },
      {
        ans: "近", pair: ["近", "遠"],
        sentPre: "いえの ", sentPost: "くの スーパー。", yomi: "ちか",
        point: "「辶」に「斤（おの）」で「近い（ちかい）」", full: "いえの 近くの スーパー。"
      },
      {
        ans: "週", pair: ["週", "通"],
        sentPre: "来", sentPost: "の 月曜日の よてい。", yomi: "しゅう",
        point: "「辶」に「周（まわる）」で「週（一週間）」", full: "来週の 月曜日の よてい。"
      }
    ]
  },
  {
    id: "diff2-08", grade: "2", no: 8,
    title: "くさかんむり・その他（草・花／原・野／方・万）",
    focus: "【艹 くさかんむり】のした／画数のすくない漢字",
    items: [
      {
        ans: "草", pair: ["草", "花"],
        sentPre: "みどりの ざっ", sentPost: "を ぬく。", yomi: "そう",
        point: "「艹」に「早」で「草（くさ）」", full: "みどりの ざっ草を ぬく。"
      },
      {
        ans: "花", pair: ["花", "草"],
        sentPre: "あかい チューリップの ", sentPost: "。", yomi: "はな",
        point: "「艹」に「化」で「花（はな）」", full: "あかい チューリップの花。"
      },
      {
        ans: "方", pair: ["方", "万"],
        sentPre: "あっちの ", sentPost: "を ゆびさす。", yomi: "ほう",
        point: "上に チョンがある「方（ほう・かた）」", full: "あっちの 方を ゆびさす。"
      },
      {
        ans: "万", pair: ["万", "方"],
        sentPre: "一", sentPost: "円さつを おさいふに入れる。", yomi: "まん",
        point: "チョンがない「万（まん）」", full: "一万円さつを おさいふに入れる。"
      },
      {
        ans: "原", pair: ["原", "野"],
        sentPre: "ひろい 草", sentPost: "で かけっこする。", yomi: "はら",
        point: "がけ（厂）から 水がわく「原（はら・野原）」", full: "ひろい 草原で かけっこする。"
      }
    ]
  }
];
