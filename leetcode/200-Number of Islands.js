/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
    let ans=0;
    let m=grid.length;
    let n=grid[0].length;
    const visited = Array.from({ length: m }, () => Array(n).fill(false));

    let dx=[0,0,1,-1];
    let dy=[1,-1,0,0];
    
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(grid[i][j]=='1' && !visited[i][j]) {
                bfs(i, j);
                ans++;
            }
        }
    }

    function bfs(x, y) {
        let q = [];
        visited[x][y]=true;
        q.push([x, y]);
        while(q.length>0) {
            let [row, col] = q.shift();
            for(let i=0; i<4; i++) {
                let nx = row+dx[i];
                let ny = col+dy[i];
                if(nx>=0 && ny>=0 && nx<m && ny<n && !visited[nx][ny] && grid[nx][ny]==1) {
                    visited[nx][ny]=true;
                    q.push([nx, ny]);
                }
            }
        }
        
    }
    return ans;
};
