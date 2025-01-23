let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const arr = [];
for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(" ").map(Number);

  arr.push([x, y]);
}

arr.sort(function (a, b) {
  if (a[0] !== b[0]) return a[0] - b[0];
  return a[1] - b[1];
});

let ans = "";
for (let point of arr) {
  ans += point[0] + " " + point[1] + "\n";
}

console.log(ans);
