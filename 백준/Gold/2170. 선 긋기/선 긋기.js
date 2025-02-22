let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 시작점 오름차순
// 겹치는 부분: 끝 점 갱신해주기
// 완전 포함된 부분: continue로 넘어가기
// 안 겹치는 부분: 끝점-시작점 계산 후 갱신
let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  arr.push([x, y]);
}
arr.sort((a, b) => a[0] - b[0]);

let ans = 0;
let start = arr[0][0];
let end = arr[0][1];
for (let i = 1; i < n; i++) {
  let curStart = arr[i][0];
  let curEnd = arr[i][1];
  // 완전 포함된 부분
  if (curEnd <= end) continue;
  // 겹치는 부분
  else if (curEnd > end && curStart < end) {
    end = curEnd;
  } else if (curStart >= end) {
    // 안겹치는 부분
    ans += end - start; // 4
    end = curEnd;
    start = curStart;
  }
}
ans += end - start; // 1
console.log(ans); // 5
