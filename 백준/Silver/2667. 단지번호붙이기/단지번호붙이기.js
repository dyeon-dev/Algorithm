let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  let a = input[i].split("").map(Number);
  arr.push(a);
}

let ans = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] == 1) {
      arr[i][j] = 0;
      ans.push(bfs([i, j]));
    }
  }
}
console.log(ans.length);
console.log(ans.sort((a, b) => a - b).join("\n"));

function bfs(start) {
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];

  let q = [start];
  let cnt = 0;

  while (q.length) {
    let [nowX, nowY] = q.shift();
    cnt++;
    for (let i = 0; i < 4; i++) {
      let nx = dx[i] + nowX;
      let ny = dy[i] + nowY;
      if (nx >= 0 && ny >= 0 && nx < n && ny < n && arr[nx][ny] == 1) {
        arr[nx][ny] = 0;
        q.push([nx, ny]);
      }
    }
  }
  return cnt;
}
