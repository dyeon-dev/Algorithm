let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let t = Number(input[0]);
let index = 1;
for (let tc = 0; tc < t; tc++) {
  let n = Number(input[index]);
  let arr = input[index + 1].split(" ").map(Number);
  let ans = 0;
  let maxPrice = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] > maxPrice) maxPrice = arr[i]; // 미래 최고가보다 높으면 갱신
    else ans += maxPrice - arr[i]; // 낮으면 이익 계산
  }
  index += 2;
  console.log(ans);
}
