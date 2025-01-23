let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = input[0];
let arr = input[1].split(" ").map(Number);

// 1 2 3 3 4
arr.sort((a, b) => a - b);

let sum = 0;
let ans = arr.reduce((acc, curr) => {
  sum += curr;
  return acc + sum;
}, 0);

console.log(ans);