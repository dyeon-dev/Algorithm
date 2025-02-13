let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let arr = [];
let d = [];
for(let i=1; i<=n; i++) {
  let [r, g, b] = input[i].split(' ').map(Number)
  arr.push([r, g, b]);
  d.push(new Array(3).fill(1000000));
}
// d[i][j]: i번째 집을 j번째 색으로 칠했을 때의 최소비용
// 초기값 설정 (첫 번째 집의 비용 그대로 사용)
d[0][0] = arr[0][0]; // 첫번째 집을 빨강으로 칠한 경우
d[0][1] = arr[0][1]; // 두번째 집을 초록으로 칠한 경우
d[0][2] = arr[0][2]; // 세번째 집을 파랑으로 칠한 경우 

// 현재 집(i)에서 R, G, B 각각 이전 집(i-1)의 두 가지 다른 색 중 최소 비용을 더해줌
for(let i=1; i<n; i++) { // 집을 하나씩 확인하며
  d[i][0] = Math.min(d[i-1][1], d[i-1][2]) + arr[i][0]; // 빨강
  d[i][1] = Math.min(d[i-1][0], d[i-1][2]) + arr[i][1]; // 초록
  d[i][2] = Math.min(d[i-1][0], d[i-1][1]) + arr[i][2]; // 파랑
}

console.log(Math.min(d[n-1][0], d[n-1][1], d[n-1][2]));