let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// N=2 -> 3의 1제곱=3의경우, N=3 -> 3의 2제곱=9개의경우, N=4 -> 3의 3제곱=27개의경우
// 모든 경우를 다 탐색하면서 계산해야 한다. => 백트래킹
let t = Number(input[0]);
let n = 0;
let arr = []; // 숫자 배열

for(let tc= 1; tc<=t; tc++) {
    n = Number(input[tc]);
    arr = []; // 테스트 케이스마다 초기화
    for(let i=1; i<=n; i++) {
        arr.push(i);
    }
    
    dfs([], 0);
    console.log();
}

function dfs(result, depth) {
    if(depth == n-1) {
        let str = '';
        for(let i = 0; i < n-1; i++) {
            str += arr[i] + result[i];
        }
        str += arr[n-1];
        
        // 공백 제거 후 계산
        cal = eval(str.split(' ').join(''));
        if(cal==0) {
            console.log(str);
        }
        return;
    }
    for(let x of [' ', '+', '-']) {
        result.push(x);
        dfs(result, depth+1);
        result.pop();
    }
    
}