let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n,m] = input[0].split(' ').map(Number);

let graph=[];
for(let i=1; i<=n; i++) {
    graph[i]=[];
}

for(let i=1; i<n; i++) {
    let [x, y, d] = input[i].split(' ').map(Number);
    graph[x].push([y, d]);
    graph[y].push([x, d]);
}

for(let i=0; i<m; i++) {
    let [a, b] = input[i+n].split(' ').map(Number);
    visited = new Array(n+1).fill(false);
    distance = new Array(n+1).fill(-1);
    
    dfs(a, 0);
    
    console.log(distance[b]);
}


function dfs(x, d) {
    if(visited[x]) return;
    visited[x]=true;
    distance[x]=d;
    for(let [y, dist] of graph[x]) {
        dfs(y, dist+d);
    }
}