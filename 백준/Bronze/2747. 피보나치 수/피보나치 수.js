const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

const N = Number(input[idx++]);

const dp = new Array(N+1).fill(-1);

dp[0]=0;
dp[1]=1;

// 바텀-업 방식
for(let i=2; i<=N; i++) {
    dp[i] = dp[i-2] + dp[i-1];
}

console.log(dp[N]);