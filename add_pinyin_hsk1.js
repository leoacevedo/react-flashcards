const fs = require('fs');
const { pinyin, Pinyin } = require('pinyin');

const p = new Pinyin();

const inputPath = './src/decks/hsk1.json';
const outputPath = inputPath;

const data = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

const result = data.map(entry => {
  const char = entry.character;

  const toneArr = pinyin(char, { style: p.STYLE_TONE, segment: true });
  const tone2Arr = pinyin(char, { style: p.STYLE_TONE2, segment: true });

  const toneStr = toneArr.map(s => s[0]).join(' ');
  const tone2Str = tone2Arr.map(s => s[0]).join(' ');

  return { pinyin2: tone2Str, pinyin: toneStr, character: char };
});

// Serialize: opening bracket, then each entry on one tab-indented line
const lines = result.map((entry, i) => {
  const comma = i < result.length - 1 ? ',' : '';
  return `\t{"pinyin2" : "${entry.pinyin2}", "pinyin" : "${entry.pinyin}", "character" : "${entry.character}" }${comma}`;
});

const output = '[\n' + lines.join('\n') + '\n\t]';
fs.writeFileSync(outputPath, output, 'utf8');
console.log(`Done. Processed ${result.length} entries.`);
