const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);
let idx = 0;
const n = input[idx++];

// 인접 리스트 생성
const graph = Array.from({ length: n+1 }, () => []);

for(let i=0; i<n-1; i++) {
    const u = input[idx++]; // 정점 번호
    const v = input[idx++];
    const w = input[idx++];
    graph[u].push({ node: v, dist: w });
    graph[v].push({ node: u, dist: w });
}

// visited 배열을 한번만 선언하여 재사용
const visited = new Uint8Array(n+1);

function dfs(start) {
    visited[start]=1;
    let maxNode = start;
    let maxDist=0;
    const stack = [[start, 0]];

    while(stack.length) {
        const [curr, dist] = stack.pop();
        if(maxDist<dist) {
            maxDist=dist;
            maxNode=curr;
        }
        for(let i=0; i<graph[curr].length; i++) {
            const { node: nextNode, dist: nextDist } = graph[curr][i];
            if(!visited[nextNode]) {
                visited[nextNode]=1;
                stack.push([nextNode, dist+nextDist]);
            }
        }
    }
    
   return { node: maxNode, dist: maxDist }
}

visited.fill(0);
const first = dfs(1);
visited.fill(0);
const second = dfs(first.node);
console.log(second.dist);
