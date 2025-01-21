let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0]);
let ans = "";

for(let t=1; t<=a; t++) {
    let data = input[t].split(' ');
    let a = Number(data[0]);
    let b = Number(data[1]);
    ans += a+b+'\n';
}

console.log(ans);