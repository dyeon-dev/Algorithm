function solution(n, computers) {
    let answer=0;
    let visited = [];
    for(let i=0; i<n; i++) {
        visited[i]=false;
    }
    function dfs(x, computers, visited) {
        visited[x]=true;
        for(let i=0; i<computers.length; i++) {
            if(!visited[i] && computers[x][i]==1) {
                dfs(i, computers, visited)
            }
        }
    }
    
    function bfs(x, computers, visited) {
        visited[x]=true;
        let q=[];
        q.push(x)
        while(q.length>0) {
            let now = q.shift();
            for(let i=0; i<computers.length; i++) {
                if(!visited[i] && computers[now][i]==1) {
                    visited[i]=true
                    q.push(i)
                }
            }
        }
    }
    for(let i=0; i<n; i++) {
        if(!visited[i]) {
            bfs(i, computers, visited);
            answer++;
        }
    }
    return answer;
}