const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);
let idx=0;
const n = input[idx++];
const m = input[idx++];

// 인접 리스트 생성
// 각 컴퓨터별로 해킹할 수 있는 컴퓨터 저장 (b -> a)
const graph = Array.from({ length: n+1 }, () => []);

for(let i=0; i<m; i++) {
    const a = input[idx++];
    const b = input[idx++];
    graph[b].push(a); // b를 해킹하면 a도 해킹됨
}

const visited = new Uint8Array(n+1);

function bfs(start) {
    const queue = [start];
    let head = 0;
    let count = 1;
    visited[start] = 1;
    
    while(head < queue.length) {
        const node = queue[head++];
        for(let i=0; i < graph[node].length; i++) {
            let next = graph[node][i];
            if(visited[next]) continue;
            queue.push(next);
            visited[next] = 1;
            count++;
        }
    }
    return count;
}

// 최대 해킹 가능한 컴퓨터 수
let max = 0;
let ans = [];
for(let i=1; i<=n; i++) {
    visited.fill(0); // 매번 새로 생성하는 대신 기존 배열을 0으로 초기화
    let cnt = bfs(i);
    if(max<cnt) {
        max=cnt;
        ans=[i];
    } else if(max==cnt) {
        ans.push(i);
    }
}

console.log(ans.join(' '));