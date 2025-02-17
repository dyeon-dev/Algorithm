function solution(s) {
    let answer = s.length;
    
    // 가장 큰 단위는 문자열 길이 절반이므로 문자열 길이 절반만큼 loop
    for(let i=1; i<=Math.floor(s.length/2); i++) {
        let idx=0; // 문자열 인덱스
        let press='';
        while(idx<s.length) { // 문자열 완전 탐색
            let cnt=1;
            while(s.slice(idx, idx+i)==s.slice(idx+i, idx+i+i)) {
                idx+=i;
                cnt++; // 압축 개수 증가 
            }
            
            if(cnt>1) {
                press+=cnt; // 압축되었다면 문자열에 숫자 추가
            }
            
            const str = s.slice(idx, idx+i); 
            
            press+=str;
            idx+=i;
        }
        answer = Math.min(press.length, answer);
    }
    return answer;
}