const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;
const n = Number(input[idx++]);
const s = Number(input[idx++]);
const arr = [];
let ans=0;

for(let i=0; i<n; i++) {
    arr.push(Number(input[idx++]));
}

dfs(0, 0);

function dfs(index, sum) {
    if(index==n) {
        if(sum===s) ans++;
        return;
    }
    
    // 현재 원소를 포함하는 경우
    dfs(index+1, sum+arr[index]);
    // 현재 원소를 포함하지 않는 경우
    dfs(index+1, sum);
}

// 목표 합 s가 0일 때, 아무것도 선택하지 않은 '공집합' 케이스 제외
if(s===0) {
    console.log(ans-1);
} else {
    console.log(ans);
}