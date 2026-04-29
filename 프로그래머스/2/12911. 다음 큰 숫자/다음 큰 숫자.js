function solution(n) {
    let answer = 0;
    // n을 2진수로 변환
    let convert = n.toString(2);
    // 2진수에서 1개수 카운트
    let cnt = 0;
    for(let w of convert) {
        if(w==1) cnt++;
    }
    
    let next=n;
    
    while(true) {
        next++;
        // next을 2진수로 변환
        let nextConvert = next.toString(2);
         // 2진수에서 1개수 카운트
        let nextCnt = 0;
        for(let w of nextConvert) {
            if(w==1) nextCnt++;
        }
        
        if(cnt==nextCnt) {
            answer=next;
            break;
        }
    }
    return answer;
}