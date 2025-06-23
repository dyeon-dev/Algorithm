function solution(a, b) {
    var answer = '';
    const day = ["FRI","SAT", "SUN","MON","TUE","WED","THU"]
    
    let date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    let sum=0;
    for(let i=0; i<a-1; i++) {
        sum+=date[i]
    }
    sum+=b;
    
    for(let i=0; i<sum; i++) {
        answer=day[i%7]
    }
    return answer;
}