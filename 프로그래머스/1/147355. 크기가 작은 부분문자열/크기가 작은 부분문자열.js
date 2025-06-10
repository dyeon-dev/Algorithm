function solution(t, p) {
    var answer = 0;
    let len = p.length
    for(let i=0; i<t.length-len+1; i++) {
        let ans = t.slice(i, i+len)
        
        if(ans<=p) {
            answer++
        }
    }
    return answer;
}