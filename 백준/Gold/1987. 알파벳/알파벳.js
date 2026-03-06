const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

const R = Number(input[idx++]);
const C = Number(input[idx++]);
const board = [];
for(let i=0; i<R; i++) {
    board.push(input[idx++].split(''));
}

let ans = 0;
const visited = new Set();
visited.add(board[0][0]);

const dx = [0,0,1,-1];
const dy = [1,-1,0,0];

dfs(0, 0, 1);

function dfs(x, y, depth) {
    ans = Math.max(ans, depth);
    
    for(let i=0; i<4; i++) {
        const nx = dx[i]+x;
        const ny = dy[i]+y;
        if(nx>=0 && ny>=0 && nx<R && ny<C && !visited.has(board[nx][ny])) {
            visited.add(board[nx][ny]);
            dfs(nx, ny, depth+1);
            visited.delete(board[nx][ny]);
        }
    }
}

console.log(ans);