function solution(tickets) {
    let answer = [];
    
    // 오름차순 정렬
    tickets.sort();
    
    let res = []; // dfs를 돌면서 방문하는 역
    let visited = [];
    function dfs(str, depth) {
        res.push(str); // 해당 역을 리스트에 삽입
        
        if(depth==tickets.length) {
            answer = res;
            return true;
        }
        
        
        for(let i=0; i<tickets.length; i++) {
            if(!visited[i] && str==tickets[i][0]) {
                visited[i]=true;
                if(dfs(tickets[i][1], depth+1)) return true;
                visited[i]=false;
            }
        }
        
        // 전체를 탐색하지 못한 경우가 발생하면 탐색한 역은 유효 경로가 아니다.
        // 따라서 pop을 통해 제거해주고 다시 이전으로 돌아가야한다.
        res.pop();
        
        return false;
    }
    
    dfs("ICN", 0);
    
    return answer;
}