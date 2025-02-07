let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(input[i].split(" ").map(Number));

let max = 0;
let visited = [];
for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false));

let dx = [0, 1];
let dy = [1, 0];

function dfs(pairs, sum, x, y) {
  if (pairs == 4) {
    max = Math.max(max, sum);
    return;
  }

  for (let i = x; i < n; i++) {
    for (let j = i == x ? y : 0; j < n; j++) { // 같은 행에서는 y부터 시작, 다음 행에서는 0부터 시작
      if (visited[i][j]) continue;
       // 현재 (i,j)에서 인접한 나무를 찾아 쌍을 만든다.
      for (let k = 0; k < 2; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (nx < n && ny < n && !visited[nx][ny]) {
           // 현재 위치와 인접한 위치를 방문처리
          visited[i][j] = visited[nx][ny] = true;
          dfs(pairs + 1, sum + arr[nx][ny] + arr[i][j], i, j + 1);
          // 백트래킹 (방문 해제)
          visited[i][j] = visited[nx][ny] = false;
        }
      }
    }
  }

  max = Math.max(max, sum);
}

dfs(0, 0, 0, 0);
console.log(max);
