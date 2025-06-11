function solution(weights) {
    let answer = 0;
    const map = new Map();
    const ratio = [1, 1/2, 2/3, 3/4]

    weights.sort((a,b)=>a-b)
    for(x of weights) {
        for(y of ratio) {
            if(map.has(x*y)) answer+=map.get(x*y)
        }
        map.set(x, (map.get(x)||0)+1)
    }
    return answer;
}
