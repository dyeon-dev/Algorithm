let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, k] = input[0].split(" ").map(Number);
const num = input[1].split(" ").map(Number);

num.sort(function (a, b) {
  return a - b;
});

console.log(num[k - 1]);
