let N = 0;
let M = 0;
function solution(maps) {
    let answer = [];
    N = maps.length;
    M = maps[0].length;
    const visited = Array.from({ length: N }, () => new Array(M).fill(false));
    
    for(let i=0; i<N; i++) {
        for(let j=0; j<M; j++) {
            if(maps[i][j]!=='X' && !visited[i][j]) {
                const sum = bfs(maps, i, j, visited);
                answer.push(sum);
            }
        }
    }
    if(answer.length==0) return [-1];
    else return answer.sort((a, b)=>a-b);
}
function bfs(maps, x, y, visited) {
    const q = [[x, y]];
    const dx = [0,0,1,-1];
    const dy = [1,-1,0,0];
    visited[x][y]=true;
    let sum = 0;
    sum+= parseInt(maps[x][y]);
    
    while(q.length) {
        const [cx, cy] = q.shift();
        for(let i=0; i<4; i++) {
            const nx = dx[i]+cx;
            const ny = dy[i]+cy;
            if(nx>=0 && ny>=0 && nx<N && ny<M && maps[nx][ny]!=='X' && !visited[nx][ny]) {
                visited[nx][ny]=true;
                sum+=parseInt(maps[nx][ny]);
                q.push([nx, ny]);
            }
        }
    }
    return sum;
}