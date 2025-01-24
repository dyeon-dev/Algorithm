let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = input[0];
let sum = 0;
let cur = 0;

// n=1 -> 1
// n=2 -> 2
// n=3 -> 1+2
// n=4 -> 1+3
// n=5 -> 1+4
// n=6 -> 1+2+3
// n=7 -> 1+2+4
// n=10 -> 1+2+3+4

while (sum <= n) {
  cur += 1;
  sum += cur;
}

console.log(cur - 1);
