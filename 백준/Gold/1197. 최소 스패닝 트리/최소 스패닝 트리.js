let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= m; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  arr.push([a, b, c]);
}

let ans = 0;
let p = [];
for (let i = 0; i <= n; i++) {
  p[i] = i;
}

arr.sort((a, b) => a[2] - b[2]);
for (const [a, b, c] of arr) {
  if (union(a, b)) {
    ans += c;
  }
}

function find(e) {
  if (p[e] == e) return e;
  return p[e] = find(p[e]); // 경로 압축
}

function union(a, b) {
  let a1 = find(a);
  let b1 = find(b);
  if (a1 == b1) return false;

  p[a1] = b1; // 한쪽 부모에 붙이기

  return true;
}

console.log(ans);
