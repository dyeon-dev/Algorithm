const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;
const n = input[idx++];
const m = input[idx++];
const arr = [];
const visited = new Array(n).fill(false);

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