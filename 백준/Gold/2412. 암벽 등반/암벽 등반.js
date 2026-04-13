const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

const N = Number(input[idx++]);
const T = Number(input[idx++]);
const arr = [];

for(let i=0; i<N; i++) {
  arr.push([Number(input[idx++]), Number(input[idx++])])
}

arr.sort((a, b)=>a[1]!==b[1] ? a[1]-b[1] : a[0]-b[0]);

const visited = new Array(N+1).fill(0);

function bfs() {
  let q = [[0, 0, 0]];
  let head = 0;
  visited[0][0]=true;

  while(head<q.length) {
    const [cx, cy, cnt] = q[head++]; // [현재 x, 현재 y, 이동횟수]

    if(cy==T) {
      return cnt;
    }

    for(let i=0; i<N; i++) {
      if(!visited[i]) {
        const [nx, ny] = arr[i];

        if(ny > cy+2) break;
        if(ny < cy-2) continue;

        if(Math.abs(nx-cx)<=2) {
          visited[i]=true;
          q.push([nx, ny, cnt+1]);
        }
      }
    }
  }
  return -1;
}

console.log(bfs());