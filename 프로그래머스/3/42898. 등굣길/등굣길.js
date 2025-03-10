function solution(m, n, puddles) {
    let dp=[];
    for(let i=0; i<m; i++) dp.push(new Array(n).fill(0));

    
    for(let [x, y] of puddles) {
        dp[x-1][y-1]=-1; // 웅덩이 표시
    }
    
        dp[0][0] = 1;

    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(dp[i][j]==-1) {
                dp[i][j]=0;
                continue;
            }
            if(i>0) dp[i][j]+=dp[i-1][j];
            if(j>0) dp[i][j]+=dp[i][j-1];
            dp[i][j]%= 1000000007;
        }
    }
    return dp[m-1][n-1];
}