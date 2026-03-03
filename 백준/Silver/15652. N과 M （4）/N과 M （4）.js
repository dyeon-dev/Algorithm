const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

const n = Number(input[0]);
const m = Number(input[1]);
const selected = [];
let result = "";

function dfs(depth, start) {
    if (depth === m) {
        result += selected.join(" ") + "\n";
        return;
    }

    for (let i = start; i <= n; i++) {
        selected.push(i);
        // 핵심: i + 1이 아니라 i를 넘겨주어 현재 숫자 i를 다시 뽑을 수 있게 함
        dfs(depth + 1, i); 
        selected.pop();
    }
}

dfs(0, 1);
console.log(result);