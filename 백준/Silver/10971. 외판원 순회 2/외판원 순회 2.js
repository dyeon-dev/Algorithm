let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let graph = [];
// 인접 행렬로 그래프 정보 입력
for(let i=0; i<=n; i++) graph.push([0]);
for(let i=1; i<=n; i++) {
    line=input[i].split(' ').map(Number);
    for(let j=0; j<n; j++) graph[i].push(line[j]);
}

let visited = new Array(n+1).fill(false);
let result = [];
let min = 1e9;

// 모든 노드를 방문해야하기 때문에 1부터 시작한다고 가정
// 2부터 n까지 수를 하나씩 골라 나열하는 모든 순열 계산
function dfs(depth) {
    if(depth==n) {
        let total = 0;
        let cur = 1; // 1번 노드에서 출발
        for(let i=0; i<n-1; i++) {
            let next = result[i]; // 다음 노드까지의 비용 계산
            let cost = graph[cur][next];
            if(cost==0) return; // 이동 불가능하면 무시
            total+=cost;
            cur=next;
        }
        // 1번 노드로 돌아오는 부분
        let cost = graph[cur][1];
        if(cost==0) return;
        total+=cost;
        min=Math.min(total, min); // 경로의 최소 비용 저장
    }
    
    for(let i=2; i<=n; i++) {
        if(!visited[i]) {
            visited[i] = true;
            result.push(i);
            dfs(depth+1);
            result.pop();
            visited[i] = false;
        }
    }
    
}
dfs(1);
console.log(min);


