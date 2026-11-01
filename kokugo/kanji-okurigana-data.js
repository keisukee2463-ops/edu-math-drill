/*
 * 漢字送りがなマスター用データ（3年生配当漢字）
 *
 * 【構造】
 *   id: 単元ID
 *   grade: 対象学年
 *   no: 単元番号
 *   title: 単元名
 *   sub: サブタイトル
 *   lead: 児童向け指示文
 *   items: [
 *     {
 *       type: "pair" | "choice" | "split",
 *       // 各形式に応じたプロパティ
 *     }
 *   ]
 */
const OKURIGANA_UNITS = [
  {
    id: "ok3-01",
    grade: "3",
    no: 1,
    title: "動詞のペア（じどうし・たどうし）",
    sub: "落ちる・落とす / 集まる・集める",
    lead: "にている うごきのことば です。送りがなの ちがいに 気をつけて 書こう。",
    items: [
      {
        q: "水てきが 下に ［　　］。",
        kanji: "落",
        okuri: "ちる",
        yomi: "おちる",
        pair_label: "ペア① 自然になる",
        ans: "落ちる"
      },
      {
        q: "つくえから 筆箱を ［　　］。",
        kanji: "落",
        okuri: "とす",
        yomi: "おとす",
        pair_label: "ペア① 人がする",
        ans: "落とす"
      },
      {
        q: "みんなが 広場に ［　　］。",
        kanji: "集",
        okuri: "まる",
        yomi: "あつまる",
        pair_label: "ペア② 自然になる",
        ans: "集まる"
      },
      {
        q: "こうていの ごみを ［　　］。",
        kanji: "集",
        okuri: "める",
        yomi: "あつめる",
        pair_label: "ペア② 人がする",
        ans: "集める"
      },
      {
        q: "前へ ゆっくり ［　　］。",
        kanji: "進",
        okuri: "む",
        yomi: "すすむ",
        pair_label: "ペア③ 自然になる",
        ans: "進む"
      },
      {
        q: "とけいの はりを ［　　］。",
        kanji: "進",
        okuri: "める",
        yomi: "すすめる",
        pair_label: "ペア③ 人がする",
        ans: "進める"
      },
      {
        q: "へやの 電気が ［　　］。",
        kanji: "消",
        okuri: "える",
        yomi: "きえる",
        pair_label: "ペア④ 自然になる",
        ans: "消える"
      },
      {
        q: "黒板の 字を ［　　］。",
        kanji: "消",
        okuri: "す",
        yomi: "けす",
        pair_label: "ペア④ 人がする",
        ans: "消す"
      },
      {
        q: "この 道は 右に ［　　］。",
        kanji: "曲",
        okuri: "がる",
        yomi: "まがる",
        pair_label: "ペア⑤ 自然になる",
        ans: "曲がる"
      },
      {
        q: "はりがねを 手で ［　　］。",
        kanji: "曲",
        okuri: "げる",
        yomi: "まげる",
        pair_label: "ペア⑤ 人がする",
        ans: "曲げる"
      }
    ]
  },
  {
    id: "ok3-02",
    grade: "3",
    no: 2,
    title: "まちがえやすい送りがな（２たく・弁別）",
    sub: "表す・終わる・始める・答える",
    lead: "まちがえやすい 送りがなです。正しいほうを えらんで、正しく 書こう。",
    items: [
      {
        q: "気持ちを 言葉で （ ①表す　②表わす ）",
        choices: ["① 表す", "② 表わす"],
        correct_idx: 0,
        kanji: "表",
        okuri: "す",
        yomi: "あらわす",
        ans: "① 表す"
      },
      {
        q: "今日の じゅぎょうが （ ①終る　②終わる ）",
        choices: ["① 終る", "② 終わる"],
        correct_idx: 1,
        kanji: "終",
        okuri: "わる",
        yomi: "おわる",
        ans: "② 終わる"
      },
      {
        q: "国語の 勉強を （ ①始める　②初める ）",
        choices: ["① 始める", "② 初める"],
        correct_idx: 0,
        kanji: "始",
        okuri: "める",
        yomi: "はじめる",
        ans: "① 始める"
      },
      {
        q: "先生の しつもんに （ ①答える　②答ええる ）",
        choices: ["① 答える", "② 答ええる"],
        correct_idx: 0,
        kanji: "答",
        okuri: "える",
        yomi: "こたえる",
        ans: "① 答える"
      },
      {
        q: "あさがおの たねを （ ①育てる　②育ててる ）",
        choices: ["① 育てる", "② 育ててる"],
        correct_idx: 0,
        kanji: "育",
        okuri: "てる",
        yomi: "そだてる",
        ans: "① 育てる"
      },
      {
        q: "困っている 友だちを （ ①助ける　②助る ）",
        choices: ["① 助ける", "② 助る"],
        correct_idx: 0,
        kanji: "助",
        okuri: "ける",
        yomi: "たすける",
        ans: "① 助ける"
      },
      {
        q: "急いで 駅へ （ ①向かう　②向かわう ）",
        choices: ["① 向かう", "② 向かわう"],
        correct_idx: 0,
        kanji: "向",
        okuri: "かう",
        yomi: "むかう",
        ans: "① 向かう"
      },
      {
        q: "自分の かかりを （ ①決める　②決めめる ）",
        choices: ["① 決める", "② 決めめる"],
        correct_idx: 0,
        kanji: "決",
        okuri: "める",
        yomi: "きめる",
        ans: "① 決める"
      },
      {
        q: "小川の水が （ ①流れる　②流れれる ）",
        choices: ["① 流れる", "② 流れれる"],
        correct_idx: 0,
        kanji: "流",
        okuri: "れる",
        yomi: "ながれる",
        ans: "① 流れる"
      },
      {
        q: "朝早く （ ①起きる　②起ききる ）",
        choices: ["① 起きる", "② 起ききる"],
        correct_idx: 0,
        kanji: "起",
        okuri: "きる",
        yomi: "おきる",
        ans: "① 起きる"
      }
    ]
  },
  {
    id: "ok3-03",
    grade: "3",
    no: 3,
    title: "どこまで漢字？（マス目ガイド）",
    sub: "泳ぐ・運ぶ・登る・拾う・投げる",
    lead: "どこまでが 漢字で、どこからが ひらがな（送りがな）かな？ わけて書こう。",
    items: [
      {
        q: "プールで 25メートル ［　］（　）。",
        kanji: "泳",
        okuri: "ぐ",
        yomi: "およぐ",
        ans: "［泳］ぐ"
      },
      {
        q: "重いにもつを ［　］（　）。",
        kanji: "運",
        okuri: "ぶ",
        yomi: "はこぶ",
        ans: "［運］ぶ"
      },
      {
        q: "高い山に みんなで ［　］（　）。",
        kanji: "登",
        okuri: "る",
        yomi: "のぼる",
        ans: "［登］る"
      },
      {
        q: "道におちた ゴミを ［　］（　）。",
        kanji: "拾",
        okuri: "う",
        yomi: "ひろう",
        ans: "［拾］う"
      },
      {
        q: "遠くまで ボールを ［　］（　）。",
        kanji: "投",
        okuri: "げる",
        yomi: "なげる",
        ans: "［投］げる"
      },
      {
        q: "走って 駅まで ［　］（　）。",
        kanji: "急",
        okuri: "ぐ",
        yomi: "いそぐ",
        ans: "［急］ぐ"
      },
      {
        q: "とんできた ボールを ［　］（　）。",
        kanji: "受",
        okuri: "ける",
        yomi: "うける",
        ans: "［受］ける"
      },
      {
        q: "校庭を 全力で ［　］（　）。",
        kanji: "走",
        okuri: "る",
        yomi: "はしる",
        ans: "［走］る"
      },
      {
        q: "かりた 本を 図書館に ［　］（　）。",
        kanji: "返",
        okuri: "す",
        yomi: "かえす",
        ans: "［返］す"
      },
      {
        q: "みんなに プリントを ［　］（　）。",
        kanji: "配",
        okuri: "る",
        yomi: "くばる",
        ans: "［配］る"
      }
    ]
  },
  {
    id: "ok3-04",
    grade: "3",
    no: 4,
    title: "動詞と名詞のちがい（活用・名詞化）",
    sub: "話す・話し / 送る・送り / 立つ・立ち",
    lead: "「〜する（うごき）」と「〜のこと（なまえ）」で 送りがなが かわります。",
    items: [
      {
        q: "友だちと なかよく ［　　］。",
        kanji: "話",
        okuri: "す",
        yomi: "はなす",
        pair_label: "ペア① うごき（動詞）",
        ans: "話す"
      },
      {
        q: "先生の ［　　］を よく聞く。",
        kanji: "話",
        okuri: "",
        yomi: "はなし",
        pair_label: "ペア① なまえ（名詞）",
        ans: "話"
      },
      {
        q: "おばあちゃんへ 手紙を ［　　］。",
        kanji: "送",
        okuri: "る",
        yomi: "おくる",
        pair_label: "ペア② うごき（動詞）",
        ans: "送る"
      },
      {
        q: "駅まで 友だちの 見［　　］に行く。",
        kanji: "送",
        okuri: "り",
        yomi: "みおくり",
        ans: "見送り"
      },
      {
        q: "みんなの 前に ［　　］。",
        kanji: "立",
        okuri: "つ",
        yomi: "たつ",
        pair_label: "ペア③ うごき（動詞）",
        ans: "立つ"
      },
      {
        q: "きょうの めあてを ［　　］。",
        kanji: "立",
        okuri: "てる",
        yomi: "たてる",
        pair_label: "ペア③ 工夫する",
        ans: "立てる"
      },
      {
        q: "しあいに ぜったい ［　　］。",
        kanji: "勝",
        okuri: "つ",
        yomi: "かつ",
        pair_label: "ペア④ うごき（動詞）",
        ans: "勝つ"
      },
      {
        q: "赤組の ［　　］が きまった。",
        kanji: "勝",
        okuri: "ち",
        yomi: "かち",
        pair_label: "ペア④ なまえ（名詞）",
        ans: "勝ち"
      },
      {
        q: "約束の 時間を ［　　］。",
        kanji: "守",
        okuri: "る",
        yomi: "まもる",
        pair_label: "ペア⑤ うごき（動詞）",
        ans: "守る"
      },
      {
        q: "神社で お［　　］りを もらう。",
        kanji: "守",
        okuri: "",
        yomi: "おまもり",
        pair_label: "ペア⑤ なまえ（名詞）",
        ans: "お守り"
      }
    ]
  }
];
