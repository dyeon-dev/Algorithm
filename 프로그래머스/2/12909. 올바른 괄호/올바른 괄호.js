function solution(s){
    let answer = true;

    let stack=[];
    for(x of s) {
        if(x=='(') {
            stack.push(x);
        } else {
            if(stack.length==0) answer=false;
            stack.pop();
        }
    }
    
    if(stack.length) {
        answer=false;
    }

    return answer;
}