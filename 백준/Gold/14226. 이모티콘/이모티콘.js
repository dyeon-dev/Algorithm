const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

const S = Number(input[idx++]);

function bfs() {
  // visited[화면개수][클립보드개수]
  const visited = Array.from({ length: 1001 }, () => new Array(1001).fill(-1));
  
  let q = [[1, 0]]; // [화면개수, 클립보드개수]
  visited[1][0]=0; // 화면 1개, 클립보드 0개 = 시간 0초
  let head = 0;
  
  while(head < q.length) {
    const [cur, clip] = q[head++];

    if(cur==S) return visited[cur][clip];

    if(visited[cur][cur]==-1) { //복사
      visited[cur][cur]=visited[cur][clip]+1;
      q.push([cur, cur]);
    }
    if(clip>0 && cur+clip<=1000) { // 붙여넣기
      if(visited[cur+clip][clip]==-1) {
        visited[cur+clip][clip]=visited[cur][clip]+1;
        q.push([cur+clip, clip]);
      }
    } 
    if(cur-1>=0) { // 삭제
      if(visited[cur-1][clip]==-1) {
        visited[cur-1][clip] = visited[cur][clip]+1;
        q.push([cur-1, clip]);
      }
    }
  }
}

console.log(bfs());