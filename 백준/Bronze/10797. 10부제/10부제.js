let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let cnt=0;
for(x of arr) {
  if(n==x) cnt++;
}
console.log(cnt);