let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = input.map(x => Number(x));
let max = Math.max(...a);

console.log(max);
console.log(a.indexOf(max)+1);