function solution(price, money, count) {
    var answer = 0;
    let res=0;
    for(let i=1; i<=count; i++) {
        res+=price*i;
    }
    if(money<res) answer=res-money;
    
    return answer;
}