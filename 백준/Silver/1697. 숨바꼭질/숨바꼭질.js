const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

const N = Number(input[idx++]);
const K = Number(input[idx++]);

const visited = new Array(100001).fill(false);

function bfs(start) {
  let q = [[start, 0]];
  let head = 0;
  visited[start]=true;

  while(head<q.length) {
    const [cur, cnt] = q[head++];

    if(cur==K) {
      return cnt;
    }

    for(let n of [cur-1, cur+1, cur*2]) {
      if(!visited[n] && n>=0 && n<100001) {
        visited[n]=true;
        q.push([n, cnt+1]);
      }
    }
  }
  return -1;
}

console.log(bfs(N));