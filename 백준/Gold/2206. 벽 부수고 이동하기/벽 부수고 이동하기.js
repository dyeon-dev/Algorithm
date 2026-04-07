const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;
const n = input[idx++];
const m = input[idx++];
const board = [];

for(let i=0; i<n; i++) {
    board.push(input[idx++].split("").map(Number));
}

function bfs() {
    // visited[row][col][broken] -> 거리 저장 (0으로 초기화)
    const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => new Int32Array(2)));
    const queue  = [[0,0,0]]; // x, y, broken
    visited[0][0][0] = 1; // 시작 지점 거리 1
    let head = 0;
    
    const dx = [0,0,1,-1];
    const dy = [1,-1,0,0];
    
    while(head<queue.length) {
        const [cx, cy, broken] = queue[head++]; // [현재 x, 현재 y]

        if(cx==n-1 && cy==m-1) {
            return visited[cx][cy][broken];
        }
        for(let i=0; i<4; i++) {
            const nx = cx + dx[i]
            const ny = cy + dy[i]
            if(nx>=0 && ny>=0 && nx<n && ny<m) {
                // 1. 벽이 아니고, 아직 방문하지 않은 경우
                if(board[nx][ny]==0 && visited[nx][ny][broken]==0) {
                    visited[nx][ny][broken] = visited[cx][cy][broken]+1;
                    queue.push([nx, ny, broken]);
                }
                // 2. 벽인데, 아직 부순 적이 없는 경우
                if(board[nx][ny]==1 && broken==0 && visited[nx][ny][1]==0) {
                    visited[nx][ny][1] = visited[cx][cy][broken] + 1;
                    queue.push([nx, ny, 1]);
                }
            }
         }

        
    }
    
    return -1;
}

console.log(bfs());
