function solution(begin, target, words) {
    let answer = 0;
    let visited=[]
    function dfs(str, depth) {
        if(str==target) {
            answer=depth
            return answer;
        }
        for(let i=0; i<words.length; i++) {
            if(!visited[i] && isCheck(words[i], str)) {
                visited[i]=true;
                dfs(words[i], depth+1);
                visited[i]=false;
            }
        }
    }
    dfs(begin, 0)
    
    return answer;
}

function isCheck(cur, word) {
    let cnt=0;
    for(let i=0; i<cur.length; i++) {
        if(cur[i]!=word[i]) cnt++;
    }
    if(cnt==1) return true;
    return false;
}