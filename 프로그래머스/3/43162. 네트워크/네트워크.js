function solution(n, computers) {
    let ans=0;
    let visited = new Array(n).fill(false);
    
    function dfs(x) {
        visited[x]=true;
        for(let i=0; i<n; i++) {
            if(computers[x][i]==1 && !visited[i]) {
                dfs(i);
            }
        }
    }
    
    function bfs(x) {
        let q = [];
        q.push(x);
        visited[x]=true;
        while(q.length!=0) {
            let now = q.shift();
            for(let i=0; i<n; i++) {
                if(computers[now][i]==1 && !visited[i]) {
                    visited[i]=true;
                    q.push(i);
                }
            }
            
        }
    }
    for(let i=0; i<n; i++) {
        if(!visited[i]) {
            bfs(i);
            ans++;
        }
    }
    return ans;
}