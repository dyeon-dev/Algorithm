const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => v.split(' ').map(Number));
const [n, m] = input[0];

// 인접 리스트 생성
// 각 컴퓨터별로 해킹할 수 있는 컴퓨터 저장 (b -> a)
const graph = Array.from({ length: n+1 }, () => []);

for(let i=1; i<=m; i++) {
    const [a, b] = input[i];
    graph[b].push(a); // b를 해킹하면 a도 해킹됨
}

function dfs(start) {
    const stack = [start];
    const visited = new Array(n+1).fill(false);
    let count = 1;
    visited[start] = true;
    
    while(stack.length) {
        const node = stack.pop();
        for(let i=0; i < graph[node].length; i++) {
            let next = graph[node][i];
            if(visited[next]) continue;
            stack.push(next);
            visited[next] = true;
            count++;
        }
    }
    return count;
}

// 최대 해킹 가능한 컴퓨터 수
let max = -1;
let ans = [];
for(let i=1; i<=n; i++) {
    let cnt = dfs(i);
    if(max<cnt) {
        max=cnt;
        ans=[i];
    } else if(max==cnt) {
        ans.push(i);
    }
}

console.log(ans.join(' '));