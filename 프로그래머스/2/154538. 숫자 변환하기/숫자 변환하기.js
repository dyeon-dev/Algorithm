function solution(x, y, n) {
    var answer = 0;
    let q = [[y, 0]]
    while(q.length) {
        let [now, cnt] = q.shift();
    
        if(now==x) return cnt;
        
        if(now%2==0 && now/2>=x) q.push([now/2, cnt+1])
        if(now%3==0 && now/3>=x) q.push([now/3, cnt+1])
        if(now-n>=x) q.push([now-n, cnt+1])
    }
    
    
    return -1
}