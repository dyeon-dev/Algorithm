let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// S={1,2,3,4,5,6,7,8} K=8일 경우 모든 조합의 수 Combination(8,6)=28

for (let i = 0; i < input.length; i++) {
    let data = input[i].split(' ').map(Number);
    if (data[0]==0) break;
    else {
        n = data[0];
        arr = data.splice(1);
        visited = new Array(n).fill(false);
        selected=[];
        ans='';
        
        dfs(0, 0, arr);
        
        console.log(ans);
    }
}

function dfs(depth, start, arr) {
    if (depth==6) {
        result=[];
        for(i of selected) {
            result.push(arr[i]);
        }
        for(x of result) {
            ans += x + ' ';
        }
        ans += '\n';
        return;
    }
    
    for(let i = start; i < n; i++) {
        if(!visited[i]) {
            visited[i]=true;
            selected.push(i);
            dfs(depth+1, i+1, arr);
            selected.pop();
            visited[i]=false;
        }
    }
}