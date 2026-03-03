const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;
const n = input[idx++];
const m = input[idx++];
const arr = []; // 조합을 계산하고자 하는 원소가 담긴 배열
const selected = []; // 현재 조합에 포함된 원소 

for(let i=0; i<n; i++) {
    arr.push(input[idx++]);
}

arr.sort((a, b) => a-b);

dfs(0, 0);

function dfs(depth, start) {
    if(depth==m) {
        const result = [];
        for(let i of selected) result.push(arr[i]);
        console.log(result.join(" "));
        return;
    }
    
    for(let i=start; i<arr.length; i++) {
        selected.push(i); // 현재 원소 선택
        dfs(depth+1, i+1);
        selected.pop();
    }
}