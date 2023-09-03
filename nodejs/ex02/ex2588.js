let fs = require('fs');
let input= fs.readFileSync('/dev/stdin').toString().split('/n');

let a = input[0];
let b = input[1];

b1 = b[2]; // 백
b2 = b[1]; // 십
b3 = b[0]; // 일

console.log(Number(a) * Numbr(b1));
console.log(Number(a) * Number(b2));
console.log(Number(a) * Number(b3));
console.log(Number(a) * Number(b));