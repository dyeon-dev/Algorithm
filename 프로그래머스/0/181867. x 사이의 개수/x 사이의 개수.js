function solution(myString) {
    var answer = [];
    let cnt=0;
    let res=[];
    for(let i=0; i<=myString.length; i++) {
        cnt++;
        if(myString[i]=='x') {
            res.push(cnt-1);
            cnt=0;
        } else if(i==myString.length) {
            res.push(cnt-1)
        }
    }
    return res;
}