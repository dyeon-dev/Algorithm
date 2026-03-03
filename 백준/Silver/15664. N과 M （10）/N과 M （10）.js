const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;
const n = input[idx++];
const m = input[idx++];
const arr = []; // 조합을 계산하고자 하는 원소가 담긴 배열
const selected = []; // 현재 조합에 포함된 원소 
const result = new Set(); // 전역에서 모든 조합 결과 누적 선언


for(let i=0; i<n; i++) {
    arr.push(input[idx++]);
}

arr.sort((a, b) => a-b);

dfs(0, 0);

function dfs(depth, start) {
    if(depth==m) {
        // result.add(selected.map(x => arr[x]).join(" "))
        const combo = [];
        for(let x of selected) combo.push(arr[x]);
        result.add(combo.join(" "));
    }
    for(let i=start; i<n; i++) {
        selected.push(i);
        dfs(depth+1, i+1);
        selected.pop();
    }
}

console.log([...result].join("\n"));