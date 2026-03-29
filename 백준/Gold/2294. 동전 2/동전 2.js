const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

const N = Number(input[idx++]);
const K = Number(input[idx++]);
const coins = [];
for(let i=0; i<N; i++) {
    coins.push(Number(input[idx++]))
}
const dp = Array.from({ length: N+1 }, ()=>new Array(K+1).fill(Infinity));

// 0원을 만드는 방법은 0개
for(let i=0; i<=N; i++) {
    dp[i][0]=0;
}

for(let i=1; i<=N; i++) {
    const c = coins[i-1];
    for(let j=1; j<=K; j++) {
        // 1. 일단 이전 동전까지만 사용해서 만든 최솟값을 그대로 가져옴
        dp[i][j]=dp[i-1][j];
        
		// 2. 현재 동전(c)을 추가로 사용할 수 있다면 비교해서 갱신
        if(j>=c) {
            dp[i][j]=Math.min(dp[i][j-c]+1, dp[i][j]);
        }
    }
}

const ans = dp[N][K];
console.log(ans==Infinity?-1 : ans);