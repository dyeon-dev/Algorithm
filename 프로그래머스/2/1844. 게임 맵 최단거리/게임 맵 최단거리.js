function solution(maps) {
    const n=maps.length;
    const m=maps[0].length;
    const queue=[];
    
    const dx=[0,0,1,-1];
    const dy=[1,-1,0,0];
   
    const visited = Array.from({length: n}, () => Array(m).fill(false));
    
    queue.push([0, 0, 1]);
    visited[0][0]=true;
    let heap=0;
    
    while(heap < queue.length) {
        let [row, col, dist] = queue[heap++];
        
        if(row==n-1 && col==m-1) return dist;
        
        for(let i=0; i<4; i++) {
            let nx=row+dx[i];
            let ny=col+dy[i];
            if(nx>=0 && ny>=0 && nx<n && ny<m) {
                if(!visited[nx][ny] && maps[nx][ny]==1) {
                    visited[nx][ny]=true;
                    queue.push([nx, ny, dist+1]);
                }
            }
        }
    }
    return -1;
}