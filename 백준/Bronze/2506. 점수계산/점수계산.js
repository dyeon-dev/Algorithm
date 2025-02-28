let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let ans = 0;
let cnt = 0;
for (let i = 0; i < n; i++) {
  if (arr[i] == 1) {
    cnt += 1;
    ans += cnt;
  } else {
    cnt = 0;
  }
}
console.log(ans);

