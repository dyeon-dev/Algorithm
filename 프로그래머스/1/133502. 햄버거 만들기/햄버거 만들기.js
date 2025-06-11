function solution(ingredient) {
    let answer = 0;
    let stack=[];
    for(let i=0; i<ingredient.length; i++) {
        stack.push(ingredient[i])
        if(stack.length>=4) {
            let burger = stack.slice(-4).join("")
            if(burger=='1231') {
                answer++
                stack.splice(-4)
            }
        }
    }
    return answer;
}