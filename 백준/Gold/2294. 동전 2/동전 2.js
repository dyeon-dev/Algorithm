const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

const N = Number(input[idx++]);
const K = Number(input[idx++]);
const coins = [];
for(let i=0; i<N; i++) {
    coins.push(Number(input[idx++]))
}
const dp = new Array(K+1).fill(Infinity);
dp[0]=0;

for(let i=0; i<=N; i++) {
    const c = coins[i-1];
    for(let j=c; j<=K; j++) {
        dp[j]=Math.min(dp[j], dp[j-c]+1);
    }
}

console.log(dp[K]==Infinity?-1 : dp[K]);