// nPn 순열
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let arr = new Array(n);
let visited = new Array(n).fill(false);

dfs(0);

function dfs(depth) {
    if(depth==n) {
        console.log(arr.join(' '));
        return;
    }
    
    for(let i=1; i<=n; i++) {
        if(!visited[i]) {
            visited[i]=true;
            arr[depth]=i;
            dfs(depth+1);
            visited[i]=false;
        }
    }
}


