let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [f, s, g, u, d] = input[0].split(" ").map(Number);
function bfs(start) {
  const visited = Array(f + 1).fill(false);
  const q = [[start, 0]]; // 현재층, 버튼횟수

  while (q.length) {
    let [cur, cnt] = q.shift();
    if (cur == g) return cnt;

    const up = u + cur;
    const down = cur - d;

    if (up <= f && !visited[up]) {
      visited[up] = true;
      q.push([up, cnt + 1]);
    }
    if (down >= 1 && !visited[down]) {
      visited[down] = true;
      q.push([down, cnt + 1]);
    }
  }
  return "use the stairs";
}
console.log(bfs(s));
