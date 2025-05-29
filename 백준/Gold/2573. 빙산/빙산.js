let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) {
  let a = input[i].split(" ").map(Number);
  arr.push(a);
}

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

function meltIce() {
  let melt = Array.from({ length: n }, () => Array(m).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] > 0) {
        for (let dir = 0; dir < 4; dir++) {
          const nx = i + dx[dir];
          const ny = j + dy[dir];
          if (nx >= 0 && nx < n && ny >= 0 && ny < m && arr[nx][ny] === 0) {
            melt[i][j]++;
          }
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      arr[i][j] = Math.max(arr[i][j] - melt[i][j], 0);
    }
  }
}

function bfs(x, y, visited) {
  const q = [[x, y]];
  visited[x][y] = true;

  while (q.length) {
    const [cx, cy] = q.shift();

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        arr[nx][ny] > 0 &&
        !visited[nx][ny]
      ) {
        visited[nx][ny] = true;
        q.push([nx, ny]);
      }
    }
  }
}

function countIce() {
  let count = 0;
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] > 0 && !visited[i][j]) {
        bfs(i, j, visited);
        count++;
      }
    }
  }

  return count;
}

let year = 0;
while (true) {
  const parts = countIce();

  if (parts >= 2) {
    console.log(year);
    break;
  }

  if (parts === 0) {
    console.log(0);
    break;
  }

  meltIce();
  year++;
}
