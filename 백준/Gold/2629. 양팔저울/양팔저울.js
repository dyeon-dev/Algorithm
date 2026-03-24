const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

let idx = 0;

const N = input[idx++]; // 추의 개수
const chu = [];
for(let i=0; i<N; i++) {
    chu.push(input[idx++]); // 추 무게
}
const K = input[idx++]; // 무게 구슬 개수
const weight = [];
for(let i=0; i<K; i++) {
    weight.push(input[idx++]); // 확인할 구슬 무게
}

// 추로 만들 수 있는 최대 무게는 30개 * 500g = 15000g
const MAX_WEIGHT = 150000
// dp[i][j]: i번째 추까지 고려했을 때 무게 j를 만들 수 있는가?
const dp = Array.from({length: N+1} ,  () => new Array(MAX_WEIGHT+1).fill(false));
dp[0][0]=true;


for(let i=1; i<=N; i++) {
    const now = chu[i-1];
    for(let j=0; j<=MAX_WEIGHT; j++) {
        if(dp[i-1][j]) {
            dp[i][j]=true; // 추를 안쓴다 (이전 상태 그대로)
            if(j+now <= MAX_WEIGHT) dp[i][j+now]=true; // 추를 구슬 반대에 높는다 (더하기)
            dp[i][Math.abs(j-now)]=true; // 추를 구슬 쪽에 놓는다 (빼기)
        }
    }
}

const results = [];
for(let i=0; i<K; i++) {
    const marble = weight[i];

    if(dp[N][marble]) {
        results.push("Y")
    } else {
        results.push("N")
    }
}

console.log(results.join(" "));

