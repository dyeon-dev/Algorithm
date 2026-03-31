const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

const N = Number(input[idx++]);
const M = Number(input[idx++]);
const arr = []; // 각 사람마다 가능한 일 배열

for(let i=0; i<N; i++) {
    const k = Number(input[idx++]); // i번째 사람이 할 수 있는 일 개수
    const jobs = [];
    for(let j=0; j<k; j++) {
        jobs.push(Number(input[idx++]));
    }
    arr.push(jobs);
}

// 매칭배열 (match[j]=j번 일을 맡은 사람)
const match = Array(M+1).fill(-1); 

function dfs(person, visited) {
    for(const job of arr[person]) {
        // 이미 처리한 노드는 더 이상 볼 필요가 없음
        if(visited[job]) continue;

        visited[job]=true;

        // 아직 일 배정 안 됐거나, 배정된 사람을 다른 일로 옮길 수 있는 경우
        if(match[job]===-1 || dfs(match[job], visited)) {
            match[job] = person;
            return true;
        }
    }
    return false;
}

let result = 0;
for(let i=0; i<N; i++) {
    const visited = Array(M+1).fill(false);
    if(dfs(i, visited)) result++;
}
console.log(result);