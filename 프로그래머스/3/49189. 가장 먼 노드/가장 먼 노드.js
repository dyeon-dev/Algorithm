function solution(n, edge) {
    let graph = Array.from({length: n+1}, ()=>[]);
    // 양방향 그래프
    for([a, b] of edge) {
        graph[a].push(b);
        graph[b].push(a);
    }
    let dist = Array(n+1).fill(0);
    let q = [1];
    dist[1]=1;
    while(q.length!=0) {
        let now = q.shift();
        for(x of graph[now]) {
            if(dist[x]==0) {
                q.push(x);
                dist[x]=dist[now]+1;
            }
        }
    }
    dist.sort((a, b)=>b-a);
    const answer = dist.filter((it)=>it==dist[0]);
    return answer.length;
}