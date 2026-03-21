const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

let idx = 0;

const T = input[idx++]; // 테스트케이스 개수
for(let i=0; i<T; i++) {
    const N = input[idx++]; // 동전 종류 개수
    const coins = [];
    for(let i=0; i<N; i++) {
        coins.push(input[idx++]); // 동전 금액
    }
    const M = input[idx++]; // 동전으로 만들 금액
    const dp = new Array(M+1).fill(0); // dp[j]: j금액을 만드는 경우의 수
    dp[0] = 1;
    
    for(let coin of coins) {
        for(let j=coin; j<=M; j++) {
            dp[j] += dp[j-coin];
        }
    }
    console.log(dp[M]);
}