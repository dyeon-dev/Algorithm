let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
for (let t = 0; t < input.length; t++) {
  let arr = input[t].split(" ").map(Number);
  if (arr[0] == 0) break;
  let k = arr[0];
  let s = arr.splice(1);
  let visited = new Array(k).fill(false);
  let result = [];
  let answer = "";

  function dfs(depth, start) {
    if (depth == 6) {
      for (x of result) {
        answer += s[x] + " ";
      }
      answer += "\n";
    }

    for (let i = start; i < k; i++) {
      if (!visited[i]) {
        visited[i] = true;
        result.push(i);
        dfs(depth + 1, i + 1);
        visited[i] = false;
        result.pop();
      }
    }
  }
  dfs(0, 0);
  console.log(answer);
}
