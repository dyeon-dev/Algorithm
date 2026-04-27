const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;
const N = Number(input[idx++]);
const L = Number(input[idx++]);
const R = Number(input[idx++]);

// 1. 2차원 배열로 지도 만들기
let country = [];
for (let i = 0; i < N; i++) {
  let row = [];
  for (let j = 0; j < N; j++) {
    row.push(Number(input[idx++]));
  }
  country.push(row);
}

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let days = 0;

while (true) {
  let isMoved = false; // 오늘 인구 이동이 있었는지 체크
  let visited = Array.from({ length: N }, () => Array(N).fill(false));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        // 2. 방문하지 않은 칸을 발견하면 새로운 연합 찾기(BFS) 시작
        if (bfs(i, j, visited)) {
          isMoved = true;
        }
      }
    }
  }

  if (!isMoved) break; // 더 이상 이동이 없으면 탈출
  days++;
}

function bfs(sx, sy, visited) {
  let q = [[sx, sy]];
  let union = [[sx, sy]]; // 연합에 속한 국가들의 좌표 저장
  visited[sx][sy] = true;
  let sum = country[sx][sy];
  let head = 0;

  while (head < q.length) {
    const [cx, cy] = q[head++];

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (nx >= 0 && ny >= 0 && nx < N && ny < N && !visited[nx][ny]) {
        const diff = Math.abs(country[cx][cy] - country[nx][ny]);
        if (diff >= L && diff <= R) {
          visited[nx][ny] = true;
          q.push([nx, ny]);
          union.push([nx, ny]); // 연합 추가
          sum += country[nx][ny]; // 연합 인구 합계
        }
      }
    }
  }

  // 3. 연합이 형성되었다면 (국가가 2개 이상) 인구 갱신
  if (union.length > 1) {
    const avg = Math.floor(sum / union.length);
    for (const [ux, uy] of union) {
      country[ux][uy] = avg;
    }
    return true; // 이동 발생함
  }
  return false; // 이동 없음
}

console.log(days);