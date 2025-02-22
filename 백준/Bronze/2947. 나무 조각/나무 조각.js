let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = input[0].split(" ").map(Number);
let ans = "";
for (let i = 0; i < n.length - 1; i++) {
  for (let j = 0; j < n.length - 1; j++) {
    let temp = 0;
    if (n[j] > n[j + 1]) {
      temp = n[j];
      n[j] = n[j + 1];
      n[j + 1] = temp;

      ans = n.join(" ");

      console.log(ans);
    }
  }
}
