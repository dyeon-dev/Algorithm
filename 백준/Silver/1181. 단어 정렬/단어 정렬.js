let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const arr = [];
for (let i = 1; i <= n; i++) {
  let words = input[i];
  let words_length = words.length;
  arr.push([words, words_length]);
}

arr.sort(function (a, b) {
  if (a[1] == b[1]) return a[0].localeCompare(b[0]); // 글자 수가 같으면 사전순으로 오름차순 정렬
  return a[1] - b[1]; // 글자 수로 오름차순 정렬
});

const uniqueWords = new Set(arr.map((point) => point[0]));

let ans = "";
for (let word of uniqueWords) {
  ans += word + "\n";
}

console.log(ans);