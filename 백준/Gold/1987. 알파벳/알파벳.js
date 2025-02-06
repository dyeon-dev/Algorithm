let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [r, c] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= r; i++) arr.push(input[i]);
let visited = new Set(); // 방문한 적 있는 알파벳 집합

let max = 0;
let dx = [0, 0, 1, -1];
let dy = [1, -1, 0, 0];

function dfs(x, y, depth) {
  max = Math.max(max, depth);

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx >= 0 && ny >= 0 && nx < r && ny < c && !visited.has(arr[nx][ny])) {
      visited.add(arr[nx][ny]);
      dfs(nx, ny, depth + 1);
      visited.delete(arr[nx][ny]);
    }
  }
}

// 좌측 상단부터 시작
visited.add(arr[0][0]);
dfs(0, 0, 1);
console.log(max);

