function solution(n) {
    let answer = 0;
    
    for(let i=1; i<=n; i++) {
        for(let j=1; j<=n; j++) {
            if(i*j==n) answer+=i
        }
    }
    
    return answer;
}