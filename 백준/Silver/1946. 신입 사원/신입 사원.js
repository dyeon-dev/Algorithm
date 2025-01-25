let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let t = Number(input[0]);
let line = 1;
for (let i = 0; i < t; i++) {
  let n = Number(input[line]);
  let arr = [];
  for (let j = line + 1; j <= n + line; j++) {
    let data = input[j].split(" ").map(Number);
    arr.push(data);
  }
  arr.sort((a, b) => a[0] - b[0]); // 서류 등수 오름차순

  let minValue = Number.MAX_SAFE_INTEGER;
  let ans = 0;
  for (let [x, y] of arr) {
    if (y < minValue) {
      ans++;
      minValue = y;
    }
  }
  console.log(ans);
  line += n + 1;
}
