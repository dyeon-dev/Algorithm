let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, k] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

let cnt = 0;
for (let i = n - 1; i >= 0; i--) {
  cnt += parseInt(k / arr[i]);
  k = k % arr[i];
}

console.log(cnt);
