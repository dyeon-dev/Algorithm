let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let k = Number(input[0]);
let index = 1;
let result = [];

function dfs(cur, graph, color) {
  for (let next of graph[cur]) {
    if (color[next] === -1) {
      color[next] = 1 - color[cur]; // 현재 노드와 다른 색 부여
      if (!dfs(next, graph, color)) return false;
    } else if (color[next] === color[cur]) {
      return false; // 같은 색이 나오면 이분 그래프가 아님
    }
  }
  return true;
}

for (let t = 0; t < k; t++) {
  let [V, E] = input[index].split(" ").map(Number);
  index++;

  let graph = Array.from({ length: V + 1 }, () => []);
  for (let i = 0; i < E; i++) {
    let [u, v] = input[index].split(" ").map(Number);
    index++;
    graph[u].push(v);
    graph[v].push(u);
  }

  let color = new Array(V + 1).fill(-1);
  let isBipartite = true;

  for (let i = 1; i <= V; i++) {
    if (color[i] === -1) {
      ///color[i] = 0;
      if (!dfs(i, graph, color)) {
        isBipartite = false;
        break;
      }
    }
  }

  result.push(isBipartite ? "YES" : "NO");
}

console.log(result.join("\n"));
