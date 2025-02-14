let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let m = Number(input[1]);
let d = new Array(50).fill(0);

// [1, 2, 3, 4, 5, 6, 7, 8, 9] vip= [4, 7]
// 4, 7을 기준으로 좌석 묶음 개수: [3, 2, 2]
// d[3]*d[2]*d[2]=12
// 각 묶음의 가능한 경우의 수는 피보나치 수열과 동일

d[0]=1;
d[1]=1;
d[2]=2;

// 피보나치 수열
function dp(x) {
  if(d[x]!=0) return d[x];
  d[x] = dp(x-1)+dp(x-2);
  return d[x];
}

// VIP 좌석을 기준으로 몇 개씩 묶이는지 확인
let arr = [];
let start = 0;
for (let i = 2; i < m+2; i++) {
  let end = Number(input[i]);
  arr.push(end-1-start);
  start = end;
}
arr.push(n-start);

// 각 묶음의 개수에 대해 DP 테이블 값 가져오기
let res = 1;
for(let x of arr) {
  res *= dp(x);
}
console.log(res);
