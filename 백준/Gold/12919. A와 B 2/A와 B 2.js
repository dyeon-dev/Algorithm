const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;
const s = input[idx++];
const t = input[idx++];

let ans = 0;

dfs(t);

console.log(ans);

function dfs(t) {
    if(t===s) {
        ans=1;
        return;
    }
    
    // 역 규칙 1: 맨 끝이 A라면, 제거하고 재귀
    if(t[t.length-1]==='A') dfs(t.slice(0, t.length-1));
    
    // 역 규칙 2: 맨 앞이 B라면, 제거하고 문자열 뒤집고 재귀
    if(t[0]==='B') dfs(t.slice(1).split('').reverse().join(''));
}