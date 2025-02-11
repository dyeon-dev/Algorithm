let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [k, n] = input[0].split(' ').map(Number);
let arr = [];
for(let i=1; i<=k; i++) {
  arr.push(Number(input[i]));
}

let start = 1; // 이진 탐색을 위한 시작 점
let end = arr.reduce((a, b) => Math.max(a, b)); // 가장 높은 요청액이 상한액이 될 수 있다

let result = 0;
while (start <= end) { // 이진탐색 (반복문)
  let mid = parseInt((start + end) / 2); // 현재의 중간점(최대 길이 랜선)
  let total = 0; // 가지고있는 각 랜선을 잘라서 길이가 mid인 랜선을 몇 개 만들 수 있는지
  for (x of arr) { 
    total += parseInt(x/mid);
  }

  // 길이를 늘이면, 얻을 수 있는 랜선의 수는 감소한다
  // 길이를 줄이면, 얻을 수 있는 랜선의 수는 증가한다
  if (total < n) { // 만들 수 있는 랜선 개수가 부족한 경우, 랜선길이 줄이기
    end = mid - 1;
  } else { // 만들 수 있는 랜선 개수가 충분할 경우, 랜선길이 늘이기
    result = mid;
    start = mid + 1;
  }
}
console.log(result);
