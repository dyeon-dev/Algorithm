const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;
const n = input[idx++];
const m = input[idx++];
const arr = [];
const ans = [];

let result = "";

for(let i=0; i<n; i++) {
    arr.push(input[idx++]);
}

arr.sort((a, b) => a-b);

dfs(0);

function dfs(depth) {
    if(depth==m) {
        result += ans.join(" ") + "\n";
        return;
    }
    
    for(let i=0; i<n; i++) {
        ans[depth]=arr[i];
        dfs(depth+1);
    }
}

console.log(result);