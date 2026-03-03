const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;
const n = Number(input[idx++]); // 4
const m = Number(input[idx++]); // 2
const selected = []; 
let result = "";

// 15650번은 1부터 n까지의 숫자를 사용하므로 별도의 입력 배열이 필요 없습니다.
// 만약 15654번처럼 입력값이 따로 주어진다면 아래처럼 정렬 후 사용하세요.
// const arr = input.slice(2).map(Number).sort((a, b) => a - b);

function dfs(depth, start) {
    if (depth === m) {
        // 인덱스가 아니라 숫자 자체를 넣었다면 바로 join 가능합니다.
        result += selected.join(" ") + "\n";
        return;
    }
    
    for (let i = start; i <= n; i++) {
        selected.push(i); // 숫자 i를 직접 넣음
        dfs(depth + 1, i + 1); // 다음 숫자는 현재 숫자보다 커야 함 (i+1)
        selected.pop();
    }
}

dfs(0, 1); 

console.log(result);