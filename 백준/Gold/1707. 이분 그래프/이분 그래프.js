let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let k = Number(input[0]);
let index = 1;
let result = [];

function bfs(cur, graph, color) {
  let queue = [cur];
  color[cur] = 1;

  while (queue.length != 0) {
    let current = queue.shift();

    for (let i of graph[current]) {
      if (color[i] == -1) {
        color[i] = 1 - color[current];
        queue.push(i);
      } else if (color[i] == color[current]) return false;
    }
  }
  return true;
}

// function dfs(cur, graph, color) {
//   for (let i of graph[cur]) {
//     if (color[i] == -1) {
//       color[i] = 1 - color[cur];
//       if (!dfs(i, graph, color)) return false;
//     } else if (color[i] == color[cur]) return false;
//   }
//   return true;
// }

for (let t = 0; t < k; t++) {
  let [V, E] = input[index].split(" ").map(Number);
  index++;
  let graph = [];
  let color = new Array(V + 1).fill(-1);
  let isTrue = true;

  for (let i = 0; i <= V; i++) graph.push([]);
  for (let i = 0; i < E; i++) {
    let [u, v] = input[index].split(" ").map(Number);
    index++;
    graph[v].push(u);
    graph[u].push(v);
  }

  for (let i = 1; i <= V; i++) {
    if (color[i] == -1) {
      let res = bfs(i, graph, color);
      if (!res) {
        isTrue = false;
        break;
      }
    }
  }
  result.push(isTrue ? "YES" : "NO");
}

console.log(result.join("\n"));
