const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

const N = Number(input[idx++]); // 컴퓨터 수 
const K = Number(input[idx++]); // 연결된 컴퓨터 쌍의 수
const node = [];

for(let i=0; i<K; i++) {
  node.push([Number(input[idx++]), Number(input[idx++])]);
}

let graph = Array.from({ length: N+1 }, ()=>[]);
for(let [n1, n2] of node) {
  graph[n1].push(n2);
  graph[n2].push(n1);
}

const visited = Array(N+1).fill(false);
let cnt = 0;

function bfs(n) {
    let q = [n];
    visited[n]=true;
  
    while(q.length) {
      let cur = q.shift();
      for(let next of graph[cur]) {
        if(!visited[next]) {
          visited[next]=true;
          cnt++;
          q.push(next);
        }
      }
    }
  return cnt;
}

console.log(bfs(1));