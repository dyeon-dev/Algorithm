let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let tc = Number(input[0]);
let line = 1;
for(let t=line; t<=tc; t++) {
    let [m, n, k] = input[line].split(' ').map(Number);
    let arr=[];
    
    for(let i=0; i<n; i++) {
        arr[i] = new Array(m);
    }
    for(let i=1; i<=k; i++) {
        let [y, x] = input[line+i].split(' ').map(Number);
        arr[x][y]=1; // 해당 좌표는 1, 아닌 부분은 0
    }
    
    let ans=0;
    for(let x=0; x<n; x++) {
        for(let y=0; y<m; y++) {
            if(dfs(n, m, x, y, arr)) {
                ans++;
            }
        }
     }
    line+=k+1;
    console.log(ans);
}

function dfs(n, m, x, y, arr) {
    if(x>=n || y>=m || x<=-1 || y<=-1) return false;

    if(arr[x][y]==1) {
        arr[x][y]=-1;
        dfs(n, m, x+1, y, arr);
        dfs(n, m, x, y+1, arr);
        dfs(n, m, x-1, y, arr);
        dfs(n, m, x, y-1, arr);
        return true;
    }
    return false;
}