const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;
const N = Number(input[idx++]);
const M = Number(input[idx++]);

let board = [];
for (let i = 0; i < N; i++) {
  let row = [];
  for (let j = 0; j < M; j++) {
    row.push(Number(input[idx++]));
  }
  board.push(row);
}

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

// 1. 빙산 덩어리 개수를 세는 BFS
function getIslandCount() {
  let visited = Array.from({ length: N }, () => Array(M).fill(false));
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] > 0 && !visited[i][j]) {
        count++;
        // BFS 시작
        let q = [[i, j]];
        visited[i][j] = true;
        let head = 0;
        while (head < q.length) {
          const [cx, cy] = q[head++];
          for (let k = 0; k < 4; k++) {
            const nx = cx + dx[k];
            const ny = cy + dy[k];
            if (nx >= 0 && ny >= 0 && nx < N && ny < M && !visited[nx][ny] && board[nx][ny] > 0) {
              visited[nx][ny] = true;
              q.push([nx, ny]);
            }
          }
        }
      }
    }
  }
  return count;
}

// 2. 빙산을 녹이는 함수
function meltIce() {
  const melt = Array.from({ length: N }, () => Array(M).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] > 0) {
        let seaCount = 0;
        for (let k = 0; k < 4; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];
          if (nx >= 0 && ny >= 0 && nx < N && ny < M && board[nx][ny] === 0) {
            seaCount++;
          }
        }
        melt[i][j] = seaCount;
      }
    }
  }

  // 한꺼번에 녹이기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      board[i][j] = Math.max(0, board[i][j] - melt[i][j]);
    }
  }
}

let year = 0;
while (true) {
  const islandCount = getIslandCount();

  if (islandCount >= 2) {
    console.log(year);
    break;
  }
  if (islandCount === 0) {
    console.log(0);
    break;
  }

  meltIce();
  year++;
}