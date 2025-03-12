class Queue {
    constructor() {
        this.q=[];
        this.head=0;
        this.tail=0;
    }
    enqueue(value) {
        this.q[this.tail++] = value;
    }
    dequeue() {
        return this.q[this.head++];
    }
    isEmpty() {
        return this.head==this.tail;
    }
}
function solution(maps) {
    let n=maps.length;
    let m=maps[0].length;
    let q=[];
    
    let dx=[0,0,1,-1];
    let dy=[1,-1,0,0];
    let visited = Array.from({length: n}, () => new Array(m).fill(false));
    
    q.push([0, 0, 1]);
    visited[0][0]=true;
    
    while(q.length>0) {
        let [row, col, dist] = q.shift();
        
        if(row==n-1 && col==m-1) return dist;
        for(let i=0; i<4; i++) {
            let nx=row+dx[i];
            let ny=col+dy[i];
            if(nx>=0 && ny>=0 && nx<n && ny<m) {
                if(!visited[nx][ny] && maps[nx][ny]==1) {
                    visited[nx][ny]=true;
                    q.push([nx, ny, dist+1]);
                }
            }
        }
    }
    return -1;
}