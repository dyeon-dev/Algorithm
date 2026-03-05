const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;
const N = Number(input[idx++]);
const board = [];
let ans = 0;

dfs(0);

function dfs(row) {
    if(row===N) {
        ans++;
        return;
    }
    
    for(let i=0; i<N; i++) {
        board[row]=i; // row행 i열에 퀸 배치
        if(check(row)) { // 가지치기 유효성검사
            dfs(row+1);
        }
    }
}

function check(row) {
    for(let i=0; i<row; i++) { // 0행부터 현재 행 전까지 배치된 모든 퀸 탐색
        if(board[row]==board[i]) return false; // 이번에 배치한 퀸과 일직선 배치가 있는 경우
        if(Math.abs(row-i) == Math.abs(board[row]-board[i])) return false; // 이번에 배치한 퀸과 대각선 배치가 있는 경우
    }
    return true;
}
console.log(ans);