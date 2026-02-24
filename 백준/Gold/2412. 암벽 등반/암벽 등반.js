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

const pointSet = new Set();
for(let i=0; i<n; i++) {
    const [x, y] = position[i]
    pointSet.add(`${x},${y}`)  // 문자열 키 생성
}

console.log(bfs());

function bfs() {
    const queue = [[0,0,0]];
    let head=0;
    
    while(head<queue.length) {
        const [cx, cy, cd] = queue[head++];
        if(cy===T) return cd;
         // 현재 위치에서 이동 가능한 모든 좌표(25개 조합)를 직접 생성
        for(let nx=cx-2; nx<=cx+2; nx++) {
            for(let ny=cy-2; ny<=cy+2; ny++) {
                if(nx < 0 || ny < 0) continue;
                
                const key = `${nx},${ny}`;
                // 해당 좌표에 홈이 있는지 O(1)로 확인
                if(pointSet.has(key)) {
                   // 밟은 홈은 리스트에서 즉시 제거 (방문 처리와 동일)
                   pointSet.delete(key);
                   queue.push([nx, ny, cd+1]);
                }
            }
        }
    }
    return -1;
}