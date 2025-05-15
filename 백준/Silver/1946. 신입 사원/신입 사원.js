let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let t = input[0];
let idx = 1;
for (let i = 0; i < t; i++) {
  let n = Number(input[idx]);
  let arr = [];
  for (let j = idx + 1; j <= idx + n; j++) {
    let [s, t] = input[j].split(" ").map(Number);
    arr.push([s, t]);
  }
  // 서류 기준으로 정렬 (1등인 사람은 무조건 붙음)
  arr.sort((a, b) => a[0] - b[0]);

  let inter = arr[0][1];
  let cnt = 1;
  for (let k = 1; k < n; k++) {
    if (arr[k][1] < inter) { // 현재 사람보다 면접 등수가 더 높다면 3<4
      inter = arr[k][1]; // 그 사람이 기준이 됨
      cnt++;
    }
  }
  console.log(cnt);
  idx += n + 1;
}
