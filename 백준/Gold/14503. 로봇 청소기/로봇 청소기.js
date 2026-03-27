const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

let idx = 0;

let N = input[idx++];
let M = input[idx++];
// r, c, d를 board보다 먼저 받아야 합니다!
let r = input[idx++];
let c = input[idx++];
let d = input[idx++]; 

const board = [];
for(let i=0; i<N; i++) {
    const arr = [];
    for(let j=0; j<M; j++) {
        arr.push(input[idx++]);
    }
    board.push(arr);
}

// 북(0), 동(1), 남(2), 서(3)
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];

let ans = 0;

while(true) {
    // 1. 현재 칸이 아직 청소되지 않은 경우, 현재 칸을 청소한다.
    if(board[r][c] === 0) {
        board[r][c] = 2; // 청소 완료 표시
        ans++;
    }

    let found = false;
    // 2. 현재 칸의 주변 4칸 중 청소되지 않은 빈 칸이 있는지 확인한다.
    for(let i=0; i<4; i++) {
        const nr = r + dr[i];
        const nc = c + dc[i];
        if(nr >= 0 && nc >= 0 && nr < N && nc < M) {
            if(board[nr][nc] === 0) {
                found = true;
                break;
            }
        }
    }

    if(found) {
        // 3. 청소되지 않은 빈 칸이 있는 경우
        for(let i=0; i<4; i++) {
            d = (d + 3) % 4; // 반시계 방향으로 90도 회전
            const nr = r + dr[d];
            const nc = c + dc[d];
            // 바라보는 방향의 앞쪽 칸이 청소되지 않은 빈 칸인 경우 한 칸 전진
            if(nr >= 0 && nc >= 0 && nr < N && nc < M && board[nr][nc] === 0) {
                r = nr;
                c = nc;
                break; 
            }
        }
    } else {
        // 4. 청소되지 않은 빈 칸이 없는 경우
        const backR = r - dr[d];
        const backC = c - dc[d];
        // 바라보는 방향의 뒤쪽 칸이 벽(1)이 아니면 후진
        if(backR >= 0 && backC >= 0 && backR < N && backC < M && board[backR][backC] !== 1) {
            r = backR;
            c = backC;
        } else {
            // 뒤쪽 칸이 벽이라 후진할 수 없다면 작동을 멈춘다.
            break;
        }
    }
}

console.log(ans);