let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}
arr.sort((a, b) => a - b);

let start = 0;
let end = 0;
let ans = Infinity;

while (start <= end && end < n) {
  let diff = arr[end] - arr[start];
  if (diff < m) {
    end++;
  } else {
    ans = Math.min(diff, ans);
    start++;
  }
  //if (m == diff) break;
}

console.log(ans);