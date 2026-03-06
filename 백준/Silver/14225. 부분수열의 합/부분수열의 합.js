const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

const N = Number(input[idx++]);
const S = [];
for(let i=0; i<N; i++) {
    S.push(Number(input[idx++]));
}

// 합을 저장할 Set 생성 
const sums = new Set();

dfs(0, 0);
function dfs(start, sum) {
    for(let i = start; i < N; i++) {
        const nextSum = S[i]+sum;
        // 새로운 합을 Set에 추가
        sums.add(nextSum);
        dfs(i+1, nextSum);
    }
}

let ans = 1;
while(sums.has(ans)) {
    ans++;
}

console.log(ans);
