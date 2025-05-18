let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [n, m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let sum = 0;
let max = 0;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      sum = arr[i] + arr[j] + arr[k];
      if (max < sum && sum <= m) max = sum;
    }
  }
}
console.log(max);
