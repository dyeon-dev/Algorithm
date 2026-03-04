const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;
const N = Number(input[idx++]);
const nums = [];
const arr = [];
for (let i = 0; i < N; i++) {
    nums.push(Number(input[idx++]));
}

// 순열 문제: 모든 순열(중복X, 순서O)를 만들고 계산하면 된다. 
const visited = new Array(N).fill(false);
let max = 0;
dfs(0);

function dfs(depth) {
    if(depth===N) {
        max = Math.max(cal(arr), max);
        return;
    }
    
    for(let i=0; i<N; i++) {
        if(!visited[i]) {
            visited[i]=true;
            arr.push(nums[i]);
            dfs(depth+1);
            arr.pop();
            visited[i]=false;
        }
    }
}

function cal(arr) {
    let sum = 0;
    for(let i=0; i<N-1; i++) {
        sum += Math.abs(arr[i]-arr[i+1]);
    }
    return sum;
}

console.log(max);