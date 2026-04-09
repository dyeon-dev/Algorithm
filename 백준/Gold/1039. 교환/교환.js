const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

const N = input[idx++];  
const K = Number(input[idx++]);

function bfs() {
  const visited = Array.from({ length: K+1 }, () => new Set());
  let q = [[N, 0]]; // [숫자문자열, 현재교환횟수]
  let ans = -1;
  let head = 0;
  
  while(head < q.length) {
    const [cur, cnt] = q[head++];

    if(cnt==K) {
      ans = Math.max(ans, Number(cur));
      continue;
    }
    
    const len = cur.length;
    for(let i=0; i<len-1; i++) {
      for(let j=i+1; j<len; j++) {
        let arr = cur.split("");

        [arr[i], arr[j]] = [arr[j], arr[i]];

        if(arr[0]=='0') continue;

        let nextStr = arr.join("");

        if(!visited[cnt+1].has(nextStr)) {
          visited[cnt+1].add(nextStr);
          q.push([nextStr, cnt+1]);
        }
      }
    }
  }
  return ans;
}

console.log(bfs());