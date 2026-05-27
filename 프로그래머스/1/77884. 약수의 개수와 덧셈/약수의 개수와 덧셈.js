function solution(left, right) {
    let answer = 0;
    const prime = (n) => {
        const s = new Set();
        for(let i=1; i<=n; i++) {
            if(n%i==0) {
                s.add(i);
            }
        }
        return s.size;
    }
    
    for(let i=left; i<=right; i++) {
        if(prime(i)%2==0) {
            answer+=i;
        } else {
            answer-=i;
        }
    }

    return answer;
}