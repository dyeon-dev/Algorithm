let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(input[i].split(" ").map(Number)); // 0: 빈칸, 1: 벽
let position = [];
for (let i = n + 1; i <= n + m; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  position.push([x - 1, y - 1]);
}

let visited = [];
for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false));
let cnt = 0;

let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];

function dfs(x, y, depth) {
  if (depth == m) {
    cnt++;
    return;
  }

  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (
      nx < n &&
      ny < n &&
      nx >= 0 &&
      ny >= 0 &&
      !visited[nx][ny] &&
      arr[nx][ny] != 1
    ) {
      if (nx==position[depth][0] && ny==position[depth][1]) {
        dfs(nx, ny, depth+1); // 목표 지점에 도달했으므로 depth 증가
      } else {
        dfs(nx, ny, depth); // 목표 지점이 아니므로 depth 그대로 유지
      }
    }
  }
  visited[x][y] = false;
}

let [startX, startY] = position[0];

dfs(startX, startY, 1);

console.log(cnt);
