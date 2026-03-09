const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

const N = Number(input[idx++]);
const arr = [];
for(let i=0; i<N; i++) {
    arr.push(Number(input[idx++]));
}
const dp = new Array(N+1).fill(-1);

dp[0]=0;
dp[1]=1;

fibo(N);

// 톱-다운 방식
function fibo(n) {
    if(dp[n]!=-1) return dp[n];

    return dp[n] = fibo(n-2) + fibo(n-1);
}

console.log(dp[N]);
