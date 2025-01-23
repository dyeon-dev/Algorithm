let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  let [age, name] = input[i].split(" ");
  arr.push([age, name]);
}

arr.sort((a, b) => a[0] - b[0]);

let ans = "";
for (let word of arr) {
  ans += word[0] + " " + word[1] + "\n";
}
console.log(ans);
