function solution(money) {
    var answer = 0;
    // dp[i]는 i번째 집을 방문했을 때 최댓값 (첫집을 방문했을 때와 안했을 때로 나누어 계산)
    
    // dp1은 첫집을 방문했을 때 배열
    let dp1 = new Array(money.length).fill(0);
    
    // 첫집을 방문하므로 모두 첫 집의 금액과 같다.
    dp1[0]=dp1[1]=money[0];
    
    // 마지막집을 방문할 수 없기 때문에 len-1까지 반복
    for(let i=2; i<money.length-1; i++) {
         // 연달아 집을 털 수 없기 때문에 현재 Max로 dp[i]의 최대값 갱신
        dp1[i]=Math.max(dp1[i-2]+money[i], dp1[i-1]);
    }
   
    // dp2은 첫집을 방문하지 않았을 때 배열
    let dp2 = new Array(money.length).fill(0);
    
    dp2[0]=0;
    dp2[1]=money[1];
    
    // 마지막집을 방문할 수 있기 때문에 len까지 반복
    for(let i=2; i<money.length; i++) {
        dp2[i]=Math.max(dp2[i-2]+money[i], dp2[i-1]);
    }
    
    return Math.max(dp1[money.length-2], dp2[money.length-1]);
}