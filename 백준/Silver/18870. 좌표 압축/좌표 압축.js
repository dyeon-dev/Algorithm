let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let uniqueArr = [...new Set(arr)];
uniqueArr.sort((a, b) => a - b);

let dic = new Map();
for (let i = 0; i < uniqueArr.length; i++) {
  dic.set(uniqueArr[i], i);
}

let ans = "";
for (let word of arr) {
  ans += dic.get(word) + " ";
}
console.log(ans);
