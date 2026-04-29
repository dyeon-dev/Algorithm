function solution(n) {
    // n-1까지 타일이 채워져있는 경우와 n-2까지 타일이 채워져있는 경우를 더하면 n의 타일의 개수이다
    const dp = Array(n+1).fill(0);
    dp[1]=1; // 2x1일 때 타일의 경우의 수
    dp[2]=2; // 2x2일 때 타일의 경우의 수
    for(let i=3; i<=n; i++) {
        dp[i] = (dp[i-1]+dp[i-2]) % 1000000007;
    }
    return dp[n];
}