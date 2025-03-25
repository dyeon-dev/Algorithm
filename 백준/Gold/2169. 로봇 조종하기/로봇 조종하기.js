let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, m] = input[0].split(" ").map(Number);
let map = [];
for (let i = 1; i <= n; i++) {
  map.push(input[i].split(" ").map(Number));
}

let dp = Array.from({ length: n }, () => Array(m).fill(0));

dp[0][0] = map[0][0];

for (let i = 1; i < m; i++) {
  dp[0][i] = dp[0][i - 1] + map[0][i];
}

for (let i = 1; i < n; i++) {
  let temp1 = Array(m).fill(0); // 오른쪽으로 이동할때 최대
  let temp2 = Array(m).fill(0); // 왼쪽으로 이동할때 최대

  // 왼쪽에서 오른쪽으로 이동
  temp1[0] = dp[i - 1][0] + map[i][0];
  for (let j = 1; j < m; j++) {
    temp1[j] = map[i][j] + Math.max(temp1[j - 1], dp[i - 1][j]); // 위에서 아래로 이동했을 때와 오른쪽으로 이동했을 때의 가치 비교
  }

  // 오른쪽에서 왼쪽으로 이동
  temp2[m - 1] = dp[i - 1][m - 1] + map[i][m - 1];
  for (let j = m - 2; j >= 0; j--) {
    temp2[j] = map[i][j] + Math.max(temp2[j + 1], dp[i - 1][j]); // 위에서 아래로 이동했을 때와 왼쪽으로 이동했을 때의 가치 비교
  }

  for (let j = 0; j < m; j++) {
    dp[i][j] = Math.max(temp1[j], temp2[j]);
  }
}

console.log(dp[n - 1][m - 1]);
