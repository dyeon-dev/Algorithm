function solution(X, Y) {
    let answer = '';
    
    let numX = {}
    let numY = {}
    for(const x of X) numX[x]= (numX[x]||0)+1
    for(const y of Y) numY[y]= (numY[y]||0)+1
    
    for(let i=9; i>=0; i--) {
        if(numX[i] && numY[i]) {
            answer+=String(i).repeat(Math.min(numX[i], numY[i]))
        }
    }
    
    if(answer[0]=='0') answer='0'
    else if(answer=='') answer='-1'
    return answer;
}