function solution(strings, n) {
    var answer = [];
    let arr = [];
    
    strings.sort((a, b)=>{
        if(a[n]==b[n]) return a.localeCompare(b); // 사전순으로 정렬
        return a[n].localeCompare(b[n])
    }); // 문자열 정렬
    
    for(let i=0; i<strings.length; i++) {
        arr.push([strings[i][n], i]); // n번째 문자 배열
    }
    
    for([a, i] of arr) {
        answer.push(strings[i]);
    }
    return answer;
}