let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let m = Number(input[2]);

let start = 1; // 이진 탐색을 위한 시작 점
let end = arr.reduce((a, b) => Math.max(a, b)); // 가장 높은 요청액이 상한액이 될 수 있다

let result = 0;
while (start <= end) { // 이진탐색 (반복문)
  let mid = parseInt((start + end) / 2); // 현재의 중간점(상한액)
  let total = 0; // 배정된 예산의 총액 계산
  for (x of arr) { // 각 지방에서 요청한 예산을 하나씩 확인하며
    total += Math.min(x, mid); // 상한액보다 작은 예산만 배정
  }
  if (total <= m) { // 조건을 만족한다면, 상한액을 증가시키기
    result = mid;
    start = mid + 1;
  } else { // 조건을 만족하지 못한다면, 상한액을 감소시키기
    end = mid - 1;
  }
}
console.log(result);
