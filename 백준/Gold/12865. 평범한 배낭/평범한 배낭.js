const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

const N = Number(input[idx++]);
const K = Number(input[idx++]);
const arr = [];

for(let i=0; i<N; i++) {
    arr.push([Number(input[idx++]), Number(input[idx++])])
}
// const dp = Array.from({ length: N+1 }, () => new Array(K+1).fill(0));
const dp = new Array(K+1).fill(0);

for(let i=1; i<=N; i++) {
    const [w, v] = arr[i-1];
    for(let j=K; j>=w; j--) {
        dp[j]=Math.max(dp[j], dp[j-w]+v);
    }
}

console.log(dp[K]);