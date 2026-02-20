const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(Number);
let idx = 0;
const V = input[idx++];

const graph = Array.from({ length: V+1 }, () => []);

for(let i=0; i<V; i++) {
    const u = input[idx++]; // 정점 번호
    while(true) {
        const n = input[idx++]; // 연결된 노드
        if(n==-1) break;

        const d = input[idx++]; // 간선 가중치
        
        graph[u].push({node: n, dist: d});
    }
}

const visited = new Uint8Array(V+1);

function dfs(start) {
    visited[start]=1;
    let stack = [[start, 0]]; // 현재 노드, 현재까지의 거리를 함께 저장
    let maxDist = 0;
    let maxNode = 0;
    
    while(stack.length) {
        const [curr, dist] = stack.pop();
        
         // 현재까지 발견된 가장 먼 거리와 노드 업데이트
        if(dist > maxDist) {
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
    return {node: maxNode, dist: maxDist};
}

visited.fill(0);
const first = dfs(1);

visited.fill(0);
const second = dfs(first.node);

console.log(second.dist);