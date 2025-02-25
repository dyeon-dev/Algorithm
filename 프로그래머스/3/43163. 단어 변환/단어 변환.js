function solution(begin, target, words) {
    let answer = 1e9;
    
    if (!words.includes(target)) return 0; // target이 words에 없으면 변환 불가능

    
    function dfs(cur, visited, cnt) {
        if(cur==target){
            answer = Math.min(answer, cnt);
            return;
        }
        for(let i=0; i<words.length; i++) {
            // 방문하지 않은 단어이면서 다른 알파벳이 1개일때
            if(!visited[i] && checkWord(cur, words[i])) {
                visited[i]=true;
                dfs(words[i], visited, cnt+1);
                visited[i]=false;
            }
        }
    }
    
    function checkWord(cur, word) {
        let diff=0;

        for(let i=0; i<cur.length; i++) {
            if(word[i]!==cur[i]) diff++;
        }

        return diff==1 ? true : false;
    }
    dfs(begin, [], 0)
    
    return answer== 1e9 ? 0 : answer;
}