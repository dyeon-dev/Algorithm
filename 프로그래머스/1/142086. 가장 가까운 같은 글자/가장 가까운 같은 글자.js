function solution(s) {
    let answer = [];
    let word = {}
    
    for(let i=0; i<s.length; i++) {
        let char = s[i];
        if(word[char]==undefined) {
            answer.push(-1)
        } else {
            answer.push(i-word[char])
        }
        word[char]=i
    }
    return answer;
}