function solution(n, edge) {
    let graph = Array.from({ length: n+1 }, ()=>[]);
    // 양방향 그래프
    for([a, b] of edge) {
        graph[a].push(b);
        graph[b].push(a);
    }
    let q=[1];
    let dist=Array(n+1).fill(0);
    dist[1]=1;
    while(q.length) {
        let n = q.shift();
        let cnt=0;
        for(x of graph[n]) {
            if(dist[x]==0) {
                dist[x]=dist[n]+1;
                q.push(x);
            }
        }
    }
    dist.sort((a, b)=>b-a);
    let answer = dist.filter((x)=> x==dist[0])
    return answer.length;
}

