const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

const N = Number(input[idx++]);  
const M = Number(input[idx++]); 
const K = Number(input[idx++]);
const board = [];

for(let i=0; i<N; i++) {
  board.push(input[idx++].split("").map(Number));
}

let ans = 0;

function bfs() {
  // visited[row][col][broken] -> 거리 저장 (0으로 초기화)
  const visited = Array.from({length: N}, ()=> Array.from({length: M}, ()=> new Int32Array(K+1).fill(0)));
  let q = [[0,0,0]];
  let head=0;
  visited[0][0][0]=1;  // 시작 지점 거리 1

  const dx=[0,0,1,-1];
  const dy=[1,-1,0,0];

  while(head< q.length) {
    let [cx, cy, broken] = q[head++];
    
    if(cx==N-1 && cy==M-1) {
      return visited[cx][cy][broken];
    }

    for(let i=0; i<4; i++) {
      const nx = cx+dx[i];
      const ny = cy+dy[i];

      if(nx>=0 && ny>=0 && nx<N && ny<M) {
         // 1. 벽이 아니고, 아직 방문하지 않은 경우
        if(board[nx][ny]==0 && visited[nx][ny][broken]==0) {
          visited[nx][ny][broken]=visited[cx][cy][broken]+1;
          q.push([nx, ny, broken]);          
        }

        // 2. 벽인데, 아직 부순 적이 없는 경우(벽을 더 부술 수 있는지 체크)
        if(board[nx][ny]==1 && broken<K && visited[nx][ny][broken+1]==0) {
          visited[nx][ny][broken+1] = visited[cx][cy][broken]+1;
          q.push([nx, ny, broken+1]);
        }
      }
    }
  }
  return -1;
}

console.log(bfs());
