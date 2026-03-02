const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

let idx = 0;
const n = input[idx++];
const m = input[idx++];
const board = [];

for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < m; j++) {
        row.push(input[idx++]);
    }
    board.push(row);
}

let maxArea = 0;

// 벽 세우기 (조합)
function recursive(count) {
    if (count === 3) {
        maxArea = Math.max(maxArea, bfs());
        return;
    }

    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++) {
            if(board[i][j]===0) {
                board[i][j]=1;
                recursive(count+1);
                board[i][j]=0;
            }
        }
    }
}

function bfs() {
    let queue = [];
    const visited = Array.from({ length: n }, () => new Uint8Array(m));
    
    // 초기 바이러스 위치 큐에 삽입
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 2) {
                queue.push([i, j]);
                visited[i][j] = 1;
            }
        }
    }

    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    let head = 0;

    while (head < queue.length) {
        const [x, y] = queue[head++];

        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
                // 원본 board는 0이고, 아직 바이러스가 방문 안 한 곳이라면
                if (board[nx][ny] === 0 && !visited[nx][ny]) {
                    visited[nx][ny] = 1;
                    queue.push([nx, ny]);
                }
            }
        }
    }

    // 안전 영역 계산: 원래 0이었던 곳 중에서 바이러스(visited)가 안 퍼진 곳
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 0 && !visited[i][j]) {
                cnt++;
            }
        }
    }
    return cnt;
}

recursive(0);
console.log(maxArea);