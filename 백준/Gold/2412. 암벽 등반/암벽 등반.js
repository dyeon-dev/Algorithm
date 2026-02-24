const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

let idx = 0;
const n = input[idx++];
const T = input[idx++];
const position = [];

for(let i=0; i<n; i++) {
    const x = input[idx++];
    const y = input[idx++];
    position.push([x,y]);
}
position.sort((a, b)=> a[1]!==b[1] ? a[1]-b[1] : a[0]-b[0]);

const visited = new Uint8Array(n+1);
visited.fill(0);
console.log(bfs());

function bfs() {
    const queue  = [[0,0,0]];
    while(queue.length) {
        const [cx, cy, cd] = queue.shift(); // [현재 x, 현재 y, 이동횟수]
        if(cy===T) {
            return cd;
        }
        for(let i=0; i<n; i++) {
            if(visited[i]) continue;

            const [nx, ny] = position[i];

            if(ny>cy+2) break;
            if(ny<cy-2) continue;

            if(Math.abs(nx-cx) <=2) {
                queue.push([nx,ny,cd+1]);
                visited[i] = 1;
            }
        }
    }
    return -1;
}