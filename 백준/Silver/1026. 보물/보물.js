const fs = require("fs");
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = input[0];
const a = input[1].split(' ');
const b = input[2].split(' ');

a.sort((x,y)=>x-y);
b.sort((x,y)=>y-x);

let ans=0;
for(let i=0; i<n; i++) {
    ans += a[i]*b[i];
}
console.log(ans);