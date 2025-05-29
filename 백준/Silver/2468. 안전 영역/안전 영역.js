let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  let a = input[i].split(" ").map(Number);
  arr.push(a);
}

// 1. 전체에서 가장 높은 지형 구하기
let maxHeight = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    maxHeight = Math.max(maxHeight, arr[i][j]);
  }
}

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

function bfs(x, y, visited, height) {
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
        ny < n &&
        !visited[nx][ny] &&
        arr[nx][ny] > height
      ) {
        visited[nx][ny] = true;
        q.push([nx, ny]);
      }
    }
  }
}

let result = 0;

for (let h = 0; h < maxHeight; h++) {
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  let safeZoneCount = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && arr[i][j] > h) {
        bfs(i, j, visited, h);
        safeZoneCount++;
      }
    }
  }

  result = Math.max(result, safeZoneCount);
}

console.log(result);
