let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = input.map(Number);
let setA = new Set();

for(let i=0; i<10; i++) {
    setA.add(a[i]%42);
}

console.log(setA.size);