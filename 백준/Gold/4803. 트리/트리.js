let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let index = 0;
let tc = 1;

while (true) {
  let [n, m] = input[index].split(" ").map(Number);
  if (n === 0 && m === 0) break;

  let ans = 0;
  graph = [];
  for (let i = 1; i <= n; i++) graph[i] = [];
  visited = new Array(n + 1).fill(false);

  for (let i = 1; i <= m; i++) {
    let [a, b] = input[index + i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      let isTree = !dfs(i, 0);
      if (isTree) ans++;
    }
  }

  if (ans === 0) console.log(`Case ${tc}: No trees.`);
  else if (ans === 1) console.log(`Case ${tc}: There is one tree.`);
  else console.log(`Case ${tc}: A forest of ${ans} trees.`);

  index += m + 1;
  tc++;
}

// 무방향 그래프 내 사이클 판별
function dfs(x, prev) {
  visited[x] = true;

  for (let y of graph[x]) {
    if (!visited[y]) {
      if (dfs(y, x)) return true;
    } else if (y !== prev) return true;
  }

  return false;
}
