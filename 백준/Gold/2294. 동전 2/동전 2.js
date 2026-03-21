const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

let idx = 0;

const n =  input[idx++];
const k =  input[idx++];
const coins = [];

for(let i=0; i<n; i++) {
    coins.push(input[idx++]);
}

const dp = new Array(k+1).fill(Infinity);
dp[0]=0;

for(let coin of coins) {
    for(let j=1; j<=k; j++) {
        if(j>=coin) {
            dp[j]=Math.min(dp[j], dp[j-coin]+1);
        }
    }
}

let ans = dp[k];
if(ans==Infinity) {
    console.log(-1);
} else {
    console.log(ans);
}