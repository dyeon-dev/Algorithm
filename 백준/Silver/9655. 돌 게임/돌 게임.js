let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

let ans = "SK";
if (n % 2 == 0) ans = "CY";
console.log(ans);
