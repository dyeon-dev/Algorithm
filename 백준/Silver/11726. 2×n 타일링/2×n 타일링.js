const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

const N = Number(input[idx++]);
const dp = new Array(1001).fill(-1);

dp[1] = 1;
dp[2] = 2;

for(let i=3; i<=N; i++) {
    dp[i] = (dp[i-2]+dp[i-1])%10007;
}

console.log(dp[N]);