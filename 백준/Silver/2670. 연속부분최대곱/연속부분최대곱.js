let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);
let arr = input.slice(1, n + 1).map(Number);
let d = new Array(n).fill(0);

d[0] = arr[0]; // 첫 번째 값은 자기 자신

for (let i = 1; i < n; i++) {
  d[i] = Math.max(d[i - 1] * arr[i], arr[i]); // 이전 값과 현재 값 비교
}

console.log(Math.max(...d).toFixed(3));
