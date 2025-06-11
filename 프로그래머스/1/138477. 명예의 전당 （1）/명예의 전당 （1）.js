function solution(k, score) {
    var answer = [];
    let stack = []
    
    for(const s of score) {
        stack.push(s)
        stack.sort((a, b)=>b-a)
        if(stack.length>k) {
            stack.pop();
        }
        answer.push(stack.at(-1))
    }
    return answer;
}