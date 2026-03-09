const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

const N = Number(input[idx++]);
const arr = [];
for(let i=0; i<N; i++) {
    arr.push(Number(input[idx++]))
}

const dp = new Array(N+1).fill(0);
let max = arr[0];

const L = [];
L[0] = arr[0];
for(let i=1; i<N; i++) {
    L[i] = Math.max(arr[i], arr[i]+L[i-1]);
    max = Math.max(max, L[i]); // 연속된 수를 뽑는데 삭제를 안하는 경우 
}

const R = [];
R[N-1] = arr[N-1];
for(let i=N-2; i>0; i--) {
    R[i] = Math.max(arr[i], arr[i]+R[i+1]);
}

for(let i=1; i<N-1; i++) {
    let temp = L[i-1] + R[i+1]; // 수열에서 i번째 수를 하나빼고 만들 수 있는 최대값
    max = Math.max(temp, max);
}

console.log(max);