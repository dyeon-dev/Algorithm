let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let score = input[1].split(' ').map(Number);

let m = score.reduce((a, b)=> Math.max(a, b));

let sum = 0;
for(let i=0; i<n; i++) {
    let a = score[i]/m*100;  
    sum+=a;
}

console.log(sum/n);