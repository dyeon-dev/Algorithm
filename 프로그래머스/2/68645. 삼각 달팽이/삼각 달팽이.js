function solution(n) {
    let arr = Array.from({ length: n }, (_, i) => Array(i+1).fill(0))
    let [x, y, num] = [-1, 0, 1]
    for(let i=0; i<n; i++) {
        for(let j=i; j<n; j++) {
            if(i%3==0) x++
            else if(i%3==1) y++
            else {
                x--; 
                y--;
            }
         arr[x][y]=num++;   
        }
    }
    return arr.flat();
}