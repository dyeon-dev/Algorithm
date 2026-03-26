const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

let N = Number(input[idx++]);
let K = Number(input[idx++]);
const arr = [];
for(let i=1; i<=N; i++) {
    arr.push(i);
}

let res = [];
let index=0;

while(arr.length) {
    index = (index+K-1)%arr.length
    res.push(arr.splice(index, 1));
}

console.log(`<${res.join(", ")}>`)