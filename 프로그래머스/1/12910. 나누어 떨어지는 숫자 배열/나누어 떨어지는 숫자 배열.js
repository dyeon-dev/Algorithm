function solution(arr, divisor) {
    let answer = [];
    for(x of arr) {
        if(x%divisor==0) {
            answer.push(x);
        }
    }
    answer.sort((a, b)=>a-b);
    let ans=[]
    if(answer.length==0) {
        ans.push(-1)
    }
    return answer.length>0 ? answer : ans;
}