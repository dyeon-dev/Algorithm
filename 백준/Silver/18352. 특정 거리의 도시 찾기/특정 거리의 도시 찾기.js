const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;
const N = Number(input[idx++]); // 도시의 개수
const M = Number(input[idx++]); // 도로의 개수
const K = Number(input[idx++]); // 거리정보
const X = Number(input[idx++]); // 출발도시 번호

const graph = Array.from({ length: N+1 }. ()=>[]);

for(let i=0; i < M; i++) {
  let a = Number(input[idx++])
  let b = Number(input[idx++])
  graph[a].push(b);
}

const visited = Array(N+1).fill(0);

bfs(X);

function bfs(start) {
  let q = [start];

  while(q.length) {
    let cur = q.shift();
    for(let node of graph[cur]) { 
      if(!visted[node]) {
        visited[node]=visited[cur]+1;
        q.push(node);
      }
    }
  }
}

let answer = [];
for(let i=0; i<visited.length; i++) {
  if(visited[i]==K) {
    answer.push(i)
  }
}

if(answer.length==0) {
  console.log(-1);
} else {
  answer.sort((a, b)=>a-b);
  console.log(answer.join('\n'));
}
