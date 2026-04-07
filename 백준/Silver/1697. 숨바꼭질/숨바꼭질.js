const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

const N = Number(input[idx++]); // 수빈
const K = Number(input[idx++]); // 동생

const visited = Array(1000001).fill(0);

function bfs() {
    const q = [N];
    while(q.length) {
        const cur = q.shift();
        
        if(cur==K) return visited[cur];
        
        for(let next of [cur-1, cur+1, cur*2]) {
            if(visited[next]==0) {
                visited[next]=visited[cur]+1;
                q.push(next);
            }
        }
    }
}

console.log(bfs());