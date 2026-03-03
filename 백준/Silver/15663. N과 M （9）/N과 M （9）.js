const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;
const n = input[idx++];
const m = input[idx++];
const arr = [];
const ans = [];

const visited = new Array(n).fill(false);
const result = new Set();

for(let i=0; i<n; i++) {
    arr.push(input[idx++]);
}

arr.sort((a, b) => a-b);

dfs(0);

function dfs(depth) {
    if(depth==m) {
        result.add(ans.join(" "));
        return;
    }
    
    for(let i=0; i<n; i++) {
        if(!visited[i]) {
            visited[i]=true;
            ans[depth]=arr[i];
            dfs(depth+1);
            visited[i]=false;
        }
    }
}

console.log([...result].join("\n"));