const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;
const n = input[idx++];
const m = input[idx++];
const arr = [];
let result = "";

dfs(0);

function dfs(depth) {
    if(depth==m) {
        result += arr.join(" ") + "\n";
        return;
    }
    
    for(let i=1; i<=n; i++) {
        arr[depth]=i;
        dfs(depth+1);
    }
}

console.log(result);