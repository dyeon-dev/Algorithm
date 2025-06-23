function solution(skill, skill_trees) {
    let answer = skill_trees.length
    
    for(ski of skill_trees) {
        let s = [...skill]
        for(let i=0; i<ski.length; i++) {
            if(!s.includes(ski[i])) continue;
            if(ski[i]!==s.shift()) {
                answer--
                break
            }
        }
    }
    return answer
}