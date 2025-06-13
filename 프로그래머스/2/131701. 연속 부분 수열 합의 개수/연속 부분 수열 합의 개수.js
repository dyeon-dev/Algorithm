function solution(elements) {
    var answer = 0;
    let s = new Set();
    
    let k=elements.length;

    for(let i=0; i<k; i++) {
        let sum=0;
        for(let j=i; j<i+k; j++) {
             sum+=elements[j%k]
             s.add(sum)
        }
    }
    return s.size;
}