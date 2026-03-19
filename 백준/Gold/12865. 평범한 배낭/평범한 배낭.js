const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

let idx = 0;

const N = input[idx++]; // 물건 개수
const K = input[idx++]; // 최대 무게
const items = [[0,0]];

for(let i=0; i<N; i++) {
    items.push([input[idx++], input[idx++]]); // 무게, 가치
}

// dp[i][j]: 해당 무게에서 얻을 수 있는 최대 가치
// i(행): 고려할 물건의 번호(1~N), w(열): i물건까지 고려했을 때 무게 w에서 얻을 수 있는 최대 가치 (0~K) 
const dp = Array.from({ length: N+1 }, () => new Array(K+1).fill(0));
for(let i=1; i<=N; i++) {
    const [w, v] = items[i]; // w: 현재 넣을까말까 고민중인 물건의 무게
    for(let j=1; j<=K; j++) { // j: 현재 가방이 버틸 수 있는 무게
        if(j >= w) {
            // 물건을 넣을 수 있다면: (안 넣었을 때) vs (공간 비우고 넣었을 때) 중 최댓값
            dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-w]+v)
        } else {
            // 물건이 너무 무거워 못 넣는다면 이전 최댓값 그대로 가져옴
            dp[i][j] = dp[i-1][j];
        }
    }
}


console.log(dp[N][K]);