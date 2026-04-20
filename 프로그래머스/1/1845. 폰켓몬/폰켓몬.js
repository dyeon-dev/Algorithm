function solution(nums) {
    const pick = nums.length/2;
    const s = new Set();
    for(let n of nums) {
        if(!s.has(n) && s.size<pick) {
            s.add(n);
        } else if(s.size<pick) {
            s.add(n);
        }
        
    }
    return s.size;
}
