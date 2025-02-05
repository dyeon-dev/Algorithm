let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 0부터 9까지 숫자 중에 k+1개를 중복 없이 모든 순열 선택
let k = Number(input[0]); // 부등호 문자의 개수
let arr = input[1].split(" "); // 부등호
let result=[];
let visited = new Array(10).fill(false);
let first="";
let cur ="";

dfs(0);

function dfs(depth) {
    if (depth == k+1) {
        let check = true;
        for(let i = 0; i < k; i++) {
            if(arr[i]=='<') {
                if(result[i] > result[i+1]) check=false; 
            } else if(arr[i]=='>') {
                if(result[i] < result[i+1]) check=false; 
            }
        }
        if(check) {
            cur="";
            for(x of result) {
                cur+=x+"";  // 마지막 cur에 남아있는 값이 가장 큰 수
            }
            if(first=="") first=cur; // 첫번째 문자열은 가장 작은 수
        }
        return;
    }
    for(let i = 0; i < 10; i++) {
        if (!visited[i]) {
            visited[i]=true;
            result.push(i);
            dfs(depth+1);
            result.pop();
            visited[i]=false;
        }
    }
}

console.log(cur+"\n"+first);