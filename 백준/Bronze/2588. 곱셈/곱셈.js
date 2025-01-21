let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = input[0];
let b = input[1];

x1 = b[2];
x2 = b[1];
x3 = b[0];

console.log(Number(x1) * Number(a));
console.log(Number(x2) * Number(a));
console.log(Number(x3) * Number(a));
console.log(Number(b) * Number(a));

