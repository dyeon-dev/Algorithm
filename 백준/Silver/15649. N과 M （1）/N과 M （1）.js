let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [n, m] = input[0].split(" ").map(Number);
let arr = new Array(m);
let visited = new Array(n).fill(false);

dfs(0);

function dfs(depth) {
    if(depth==m) {
        console.log(arr.join(" "));
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