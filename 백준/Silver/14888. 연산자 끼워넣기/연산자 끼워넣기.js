const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;
const N = Number(input[idx++]);
const nums = [];
const ops = [];
for(let i=0; i<N; i++) {
    nums.push(Number(input[idx++]));
}
for(let i=0; i<4; i++) {
    ops.push(Number(input[idx++]));
}

let max = -Infinity;
let min = Infinity;

dfs(1, nums[0], ops[0], ops[1], ops[2], ops[3]);

function dfs(depth, current, plus, minus, mul, div) {
        if(depth===N) {
            max = Math.max(max, current);
            min = Math.min(min, current);
            return;
        }
        if(plus>0) dfs(depth+1, current+nums[depth], plus-1, minus, mul, div);
        if(minus>0) dfs(depth+1, current-nums[depth], plus, minus-1, mul, div);
        if(mul>0) dfs(depth+1, current*nums[depth], plus, minus, mul-1, div);
        if(div>0) {
            const nextSum = Math.trunc(current/nums[depth]);
            dfs(depth+1, nextSum, plus, minus, mul, div-1);
        }
}

console.log(max + "\n" + min);