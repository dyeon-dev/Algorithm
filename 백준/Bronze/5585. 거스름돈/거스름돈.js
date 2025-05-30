let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let m = [500, 100, 50, 10, 5, 1];
let ans = 0;

let res = 1000 - n;

for (let x of m) {
  ans += Math.floor(res / x);
  res %= x;
}
console.log(ans);
