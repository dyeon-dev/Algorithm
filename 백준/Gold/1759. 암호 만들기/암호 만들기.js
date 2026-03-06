const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

const L = Number(input[idx++]);
const C = Number(input[idx++]);
const S = [];
for(let i=0; i<C; i++) {
    S.push(input[idx++]);
}

S.sort();

const result = [];
const selected = [];

dfs(0, 0);
function dfs(depth, start) {
    if(depth==L) {
        if(check(selected)) {
            result.push(selected.join(""));
        }
        return;
    }

    for(let i = start; i < C; i++) {
        selected.push(S[i]);
        dfs(depth+1, i+1);
        selected.pop();
    }
}

function check(arr) {
    const s = ['a', 'e', 'i', 'o', 'u'];
    let m=0;
    let j=0;
    for(let x of arr) {
        if(s.includes(x)) {
            m++;
        } else j++;
    }
    if(m>=1 && j>1) return true;
    return false;
}

console.log(result.join("\n"));
