let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let queen = []; // 현재 체스판에 놓인 퀸의 위치정보

let cnt = 0;

dfs(0); // 0행부터 백트래킹 시작

function dfs(row) {
  if (row == n) cnt++;

  for (let i = 0; i < n; i++) {
    if (possible(row, i)) {
      queen.push([row, i]);
      dfs(row + 1);
      queen.pop();
    }
  }
}

function possible(x, y) {
  for ([a, b] of queen) {
    if (a == x || b == y) return false;
    else if (Math.abs(a - x) == Math.abs(b - y)) return false;
  }
  return true;
}

console.log(cnt);
