function solution(k, tangerine) {
    var answer = 0;
    const count = {};
    tangerine.forEach((x)=>{
        count[x] = (count[x] || 0)+1
    })
    const sort = Object.values(count).sort((a, b)=>b-a)
    
    for(s of sort) {
        answer++;
        if(s<k) k-=s;
        else break;
    }
    return answer;
}