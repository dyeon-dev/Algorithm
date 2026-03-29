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

// 해당 방식은 루프 에러 발생 확률이 높다.
// 그래서 for...of 문 사용하는 것이 더 깔끔하고 안전하다.
for(let i=0; i<N; i++) {
    const c = coins[i];
    for(let j=c; j<=K; j++) {
        dp[j]=Math.min(dp[j], dp[j-c]+1);
    }
}

console.log(dp[K]==Infinity?-1 : dp[K]);