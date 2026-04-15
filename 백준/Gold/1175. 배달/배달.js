const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

const N = Number(input[idx++]);
const M = Number(input[idx++]);
const board = [];

for(let i=0; i<N; i++) {
  board.push(input[idx++].split(""));
}

let start = [];
let c = [];

for(let i=0; i<N; i++) {
  for(let j=0; j<M; j++) {
    if(board[i][j]=='S') {
      start=[i, j];
    }
    if(board[i][j]=='C') {
      c.push([i, j]);
    }
  }
}

// 2. 방문 체크: [x][y][들어온 방향(0~3, 시작은 4)][배달상태(0~3)]
// 배달상태: (0: 없음, 1: 첫 번째 C, 2: 두 번째 C, 3: 둘 다 완료)
const visited = Array.from({ length: N }, ()=> Array.from({ length: M} , () =>
        Array.from({ length: 5 }, () => Array(4).fill(false))));

const dx = [0,0,1,-1];
const dy = [1,-1,0,0];

function bfs(x, y, dir, state, cnt) {
  let q = [[x, y, dir, state, cnt]];
  let head = 0;
  visited[x][y][dir][state]=true;

  while(head<q.length) {
    const [cx, cy, dir, state, cnt] = q[head++];

    let nextState = state;
     if(cx==c[0][0] && cy==c[0][1]) {
      if(state==0 || state==2) nextState += 1;
    } else if(cx==c[1][0] && cy==c[1][1]) {
      if(state==0 || state==1) nextState += 2;
    }

    if(nextState==3) {
      return cnt;
    }

    for(let i=0; i<4; i++) {
      if(i==dir) continue; // 같은 방향 금지

      const nx = dx[i]+cx;
      const ny = dy[i]+cy;

      if(nx>=0 && ny>=0 && nx<N && ny<M && board[nx][ny]!=='#') {

        if(!visited[nx][ny][i][nextState]) {
          visited[nx][ny][i][nextState]=true;
          q.push([nx, ny, i, nextState, cnt+1]);
        }
      }
    }
  }
  return -1;
}

console.log(bfs(start[0], start[1], 4, 0, 0));