function solution(signals) {
    let answer = 0;
    let len = 1;
    for(let i=0; i<signals.length; i++) {
        const g = signals[i][0];
        const y = signals[i][1];
        const r = signals[i][2];
        
        len *= (g+y+r);
    }
    
    const arr = Array(len+1).fill(0);
    
    for(let i=0; i<signals.length; i++) {
        const g = signals[i][0];
        const y = signals[i][1];
        const r = signals[i][2];
        
        let offset = (g+y+r);
        
        for(let j=1; j<=len; j+=offset) {
            for(let k=0; k<y; k++) {
                const yellow = g+j+k;
                if(yellow<=len) {
                    arr[yellow]++;
                }
            }
        }
    }
    
    for(let i=1; i<=len; i++) {
        if(arr[i]==signals.length) {
            return i;
        }
    }
    
    return -1;
}