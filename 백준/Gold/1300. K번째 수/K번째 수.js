let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let k = Number(input[1]);
let res = 0;

// 정렬 이후에 k번째 수를 구하는 것이 목표이다. n=4, k=14일때, 답은 12다.
// 초기 설정: start=1, end=16을 두고, mid를 기준으로 행마다 mid보다 작거나 같은 원소의 개수를 구한다.
// mid가 12일 때 => 작거나 같은 원소의 개수: 15>=14 가장 작은 mid 값으로 조건을 만족하는 값이다

let start = 0;
let end = n * n;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += parseInt(Math.min(n, mid / i));
  }
  if (total >= k) {
    end = mid - 1;
    res = mid;
  } else start = mid + 1;
}
console.log(res);
