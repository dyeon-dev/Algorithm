function solution(n, results) {
    var answer = 0;
    let win=Array.from({ length: n+1 },()=>[])
    let lose=Array.from({ length: n+1 },()=>[])
    
    for(let [a, b] of results) {
        win[a].push(b);
        lose[b].push(a);
    }
    
    for(let i=1; i<=n; i++) {
        if(bfs(win, i)+bfs(lose, i)==n-1) answer++;
    }
    return answer;
}

function bfs(graph, start) {
    const q = [start];
    let visited=[];
    visited[start]=true;
    let cnt=0;
    while(q.length) {
        let n = q.shift();
        for(x of graph[n]) {
            if(!visited[x]) {
             visited[x]=true;
             q.push(x);
             cnt++;   
            }
        }
    }
    return cnt;
}
