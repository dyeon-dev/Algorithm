let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input[0].split("").map(Number);
arr.sort((a, b) => b - a);

let ans = "";
for (let word of arr) {
  ans += word;
}
console.log(ans);
