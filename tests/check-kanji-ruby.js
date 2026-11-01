// 未習漢字に常時ふりがな（{漢字|よみ|!}）が付いているかを確かめる検査。
// 使い方: node tests/check-kanji-ruby.js   （問題があれば一覧を出して exit 1）
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const dir = path.join(__dirname, "..", "kokugo");

function load(file, name) {
  const ctx = {};
  vm.runInNewContext(fs.readFileSync(path.join(dir, file), "utf8") + `\nthis.__v = ${name};`, ctx);
  return ctx.__v;
}

// 漢字 → {grade, no}
const order = new Map();
const units = [];
for (let g = 1; g <= 6; g++) {
  for (const u of load(`kanji${g}-data.js`, g === 3 ? "KANJI_UNITS" : `KANJI_UNITS_G${g}`)) {
    units.push(u);
    for (const k of u.kanji) if (!order.has(k.k)) order.set(k.k, { grade: g, no: u.no });
  }
}
const learned = (k, grade, no) => {
  const o = order.get(k);
  if (!o) return false; // 小学校配当外
  return o.grade <= grade; // 同学年は50音順の配列なので学年単位で判定
};

const problems = [];
const TOKEN = /\{([^|{}]+)\|([^|{}]+)(\|!)?\}/g;
function scan(text, grade, no, where) {
  if (typeof text !== "string") return;
  let m;
  while ((m = TOKEN.exec(text))) {
    const [, k, r, bang] = m;
    if (!bang && [...k].some(ch => /\p{Script=Han}/u.test(ch) && !learned(ch, grade, no))) {
      problems.push(`${where}: {${k}|${r}} は未習（${[...k].map(c => { const o = order.get(c); return o ? `${c}=${o.grade}年${o.no}` : `${c}=配当外`; }).join(",")}）`);
    }
  }
  // 中かっこの外に裸の漢字が無いか
  // 記法の外の漢字（ふりがなが一度も出ない）。既習なら許容、未習は問題。
  const bare = (text.replace(TOKEN, "").match(/\p{Script=Han}/gu) || []).filter(ch => !learned(ch, grade, no));
  if (bare.length) problems.push(`${where}: ふりがな無しの未習漢字 ${bare.join("")}`);
}

for (const u of units) {
  const g = Number(u.grade);
  for (const k of u.kanji) {
    for (const w of k.words || []) scan(w.w, g, u.no, `${u.id} ${k.k} 語`);
    scan(k.sent, g, u.no, `${u.id} ${k.k} 文`);
  }
}

if (problems.length) {
  console.log(problems.join("\n"));
  console.log(`\n${problems.length} 件`);
  process.exit(1);
}
console.log("OK: 未習漢字のふりがな漏れ 0件");
