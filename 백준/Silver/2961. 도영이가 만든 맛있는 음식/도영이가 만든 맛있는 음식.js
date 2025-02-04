let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); // 재료 개수
let arr = [];
for(let i = 1; i <= n; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    arr.push([a, b]);
}


let visited = new Array(10).fill(false);
let result = [];
let min = 1e9;

function dfs(depth, start) {
    // 모든 경우에 대해서 조합 계산
    if (depth >= 1) {
        let a = 1;
        let b = 0;
        for(i of result) {
            let [x, y] = arr[i]; 
            a *= x;
            b += y;
            
            min = Math.min(min, Math.abs(a-b));
        }
    }
    
    for (let i = start; i < n; i++) {
        if (!visited[i]) {
            visited[i]=true;
            result.push(i);
            dfs(depth+1, i+1);
            result.pop();
            visited[i]=false;
        }
    }
}

dfs(0,0);

console.log(min);