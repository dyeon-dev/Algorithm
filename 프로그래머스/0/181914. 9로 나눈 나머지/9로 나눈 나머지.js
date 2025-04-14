function solution(number) {
    let s = String(number);
    let sum=0;
    for(x of s) {
        sum+=parseInt(x);
    }
    let n = sum%9;
    
    return n;
}