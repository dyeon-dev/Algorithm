let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = input[0];
let arr = [];
for (let i = 1; i <= n; i++) {
  let [s, t] = input[i].split(" ").map(Number);
  arr.push([s, t]);
}
// 회의 끝 시간 기준으로 정렬
arr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0]; // 끝나는 시간이 같으면 시작 시간 오름차순
  return a[1] - b[1]; // 기본은 끝나는 시간 오름차순
});

let roomEnd = arr[0][1];
let cnt = 1;
for (let i = 1; i < n; i++) {
  if (arr[i][0] >= roomEnd) {
    roomEnd = arr[i][1];
    cnt++;
  }
}
console.log(cnt);
