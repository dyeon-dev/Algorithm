const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

const N = Number(input[idx++]);
const nums = [];
for(let i=0; i<N; i++) {
    nums.push(Number(input[idx++]))
}

// dp[i] : i번째 계단까지 올랐을 때 얻을 수 있는 최대 점수의 합
const dp = new Array(N).fill(0);
// 조건: 연속된 세개의 계단을 모두 밟아서는 안된다
dp[0] = nums[0];
dp[1] = nums[0]+nums[1];
dp[2] = Math.max(nums[0]+nums[2], nums[1]+nums[2]);

// 마지막 계단 = 이전전 계단에 이르는 경우의 수 + 이전 계단에 이르는 경우의 수
for(let i=3; i<N; i++) {
    // 전전 계단(i-2)에서 2칸 점프해서 온 경우 
    // 전 계단(i-1)에서 1칸 올라온 경우
        // 이때는 그 전전 계단(i-2)을 밟았으면 안된다(3개 연속이 되니까)
        // 따라서 반드시 i-3에서 i-1로 2칸 점프해서 온 상태여야 한다
    dp[i] = Math.max(dp[i-2]+nums[i], dp[i-3] + nums[i-1] + nums[i]); 
}

console.log(dp[N-1])