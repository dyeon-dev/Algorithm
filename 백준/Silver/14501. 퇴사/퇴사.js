const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

const N = Number(input[idx++]);
const arrs = [];
for(let i=0; i<N; i++) {
    const arr = [];
    for(let j=0; j<2; j++) {
        arr.push(Number(input[idx++]))
    }
    arrs.push(arr);
}

const dp = new Array(N+2).fill(0);

for(let i=N; i>0; i--) {
    const [T, P] = arrs[i-1];
    if(T+i <= N+1) {
        dp[i] = Math.max(dp[i+1], P+dp[T+i]);
    } else {
        dp[i] = dp[i+1];
    }
}

console.log(dp[1]);