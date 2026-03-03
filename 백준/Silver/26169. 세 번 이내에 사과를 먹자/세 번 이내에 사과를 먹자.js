const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;
const N = 5;
const board = [];
for(let i=0; i<N; i++) {
    const row = [];
    for(let j=0; j<N; j++) {
        row.push(Number(input[idx++]));
    }
    board.push(row);
}
    
const r = Number(input[idx++]);
const c = Number(input[idx++]);
const apple = board[r][c]==1? 1:0; // 시작 지점 사과 여부 확인
board[r][c] = -1; // 시작 지점 방문 처리
let found = false;

dfs(r, c, 0, apple);

function dfs(x, y, count, apple) {
    if(apple>=2) {
        found=true;
        return;
    }
    
    if(count==3) {
        return;
    }

    const dx = [0,0,1,-1];
    const dy = [1,-1,0,0];
        
    for(let i=0; i<4; i++) {
        const nx = dx[i]+x;
        const ny = dy[i]+y;
        if(nx>=0 && ny>=0 && nx<N && ny<N && board[nx][ny]!==-1) {
            const origin = board[nx][ny];
            const nextApple = origin==1 ? apple+1 : apple;
            board[nx][ny] = -1;
            dfs(nx, ny, count+1, nextApple);
            board[nx][ny] = origin; // ★백트래킹의 핵심: 원상 복구
        }
    }
}
    
console.log(found ? 1 : 0);