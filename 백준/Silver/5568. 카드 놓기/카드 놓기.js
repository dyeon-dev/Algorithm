const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;
const n = Number(input[idx++]);
const k = Number(input[idx++]);
const nums = [];
for (let i = 0; i < n; i++) {
    nums.push(Number(input[idx++]));
}
// 중복 없는 순열 문제: n개의 숫자 중에 k개를 뽑아 만들 수 있는 순열의 개수
const visited = new Array(n).fill(false);
const arr = [];
const result = new Set();

dfs(0);

function dfs(depth) {
    if(depth==k) {
        result.add(arr.join(""));
        return;
    }
    
    for(let i=0; i<n; i++)  {
        if(!visited[i]) {
            visited[i]=true;
            arr.push(nums[i]);
            dfs(depth+1);
            arr.pop();
            visited[i]=false;
        }
    }
}

console.log(result.size);