const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

let K = Number(input[idx++]);
const nums = [];
for(let i=0; i<K; i++) {
    nums.push(Number(input[idx++]));
}
let stack =[];

for(let n of nums) {
    if(n!==0) {
        stack.push(n);
    } else {
        stack.pop();
    }
}

let ans = stack.reduce((a, b)=>a+b, 0);
console.log(ans);