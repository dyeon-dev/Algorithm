function solution(s) {
    var answer = 0;
    let cnt = 0;
    let other = 0;
    let first = s[0];
    for(let i=0; i<s.length; i++) {
        if(cnt==other) {
            answer++;
            first=s[i];
        }
        
        if(first===s[i]) {
            cnt++;
        } else {
            other++;
        }

    }
    return answer;
}