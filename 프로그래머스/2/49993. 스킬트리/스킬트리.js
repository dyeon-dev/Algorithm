function solution(skill, skill_trees) {
    let answer = skill_trees.length
    
    for(s of skill_trees) {
        let ski = [...skill]
        for(let i=0; i<s.length; i++) {
            if(!ski.includes(s[i])) continue
            if(ski.shift()!==s[i]) {
                answer--;
                break;
            }
        }
    }
    
    return answer;
}