function solution(n) {    
    return dfs(0, n, []);
}

function dfs(row, n, q) {
    let cnt=0;
    if(row==n) return 1;
    for(let i=0; i<n; i++) {
        if(isTrue(i, row, q)) {
            q.push([i, row])
            cnt+=dfs(row+1, n, q)
            q.pop()
        }
        
    }
    return cnt;
}

function isTrue(x, y, q) {
    for([a, b] of q) {
        if(a==x||b==y) {
            return false;
        } else if(Math.abs(a-x)==Math.abs(b-y)) {
            return false;
        }
    }
    return true;
}