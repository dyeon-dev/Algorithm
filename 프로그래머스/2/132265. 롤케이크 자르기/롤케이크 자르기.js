function solution(topping) {
    let answer = 0;

    const left = new Map()
    const right = new Map();
    
    // 전체 토핑을 오른쪽 토핑에 담기
    for(const t of topping) {
        right.set(t, (right.get(t)||0)+1)
    }
    
    for(let i=0; i<topping.length; i++) {
        let t = topping[i]
       // 현재 토핑을 왼쪽으로 이동
        left.set(t, (left.get(t)||0)+1)
        
        // 오른쪽에서 제거
        right.set(t, right.get(t)-1)
        if(right.get(t)==0) right.delete(t)
        
        if(left.size==right.size) answer++
    }
    return answer;
}