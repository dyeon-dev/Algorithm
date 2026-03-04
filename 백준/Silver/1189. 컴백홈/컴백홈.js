const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;
const R = Number(input[idx++]);
const C = Number(input[idx++]);
const K = Number(input[idx++]);
const board = [];
for (let i = 0; i < R; i++) {
    board.push(input[idx++].split(''))
}

const visited = Array.from({ length: R }, () => Array(C).fill(false));
const dx = [0,0,1,-1];
const dy = [1,-1,0,0];

let ans = 0;
visited[R-1][0]=true; // 출발지점 방문처리

dfs(R-1, 0, 1);

// 출발 지점과 현재 거리(1)를 인자로 넘깁니다.
function dfs(x, y, depth) {
    if(depth==K) {
        if(x===0 && y===C-1) {
            ans++;
            return;
        }
    }

    if(depth>=K) return;

    for(let i=0; i<4; i++) {
        const nx = dx[i]+x;
        const ny = dy[i]+y;
        if(nx>=0 && ny>=0 && nx<R && ny<C && board[nx][ny]!=='T' && !visited[nx][ny]) {
            visited[nx][ny]=true;
            dfs(nx, ny, depth+1);
            visited[nx][ny]=false; // 백트래킹 
        }
    }
}

console.log(ans);