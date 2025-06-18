function solution(s) {
    const tuples = JSON.parse(s.replace(/{/g,"[").replace(/}/g,"]"))
    tuples.sort((a, b)=>a.length-b.length)
    
    let set = new Set();
    for(const t of tuples) {
        for(const v of t) {
            set.add(v)            
        }
    }
    let answer = [...set]
    return answer;
}