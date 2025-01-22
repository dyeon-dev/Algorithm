let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let s = input[1];

let ans = 0;

for(let x of s) {
    ans += Number(x);
}

console.log(ans);
