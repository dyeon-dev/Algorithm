function solution(s) {
    let answer = [];
    let word = {}
    
    for(let i=0; i<s.length; i++) {
        if(word[s[i]]==undefined) {
            answer.push(-1)
        } else {
            answer.push(i-word[s[i]])
        }
        word[s[i]]=i;
    }
    return answer;
}