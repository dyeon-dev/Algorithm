const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;
const n = Number(input[idx++]);
const arr = [];
for(let i=0; i<n; i++) {
    const row = [];
    for(let j=0; j<n; j++) {
        row.push(Number(input[idx++]));
    }
    arr.push(row);
}

let ans = Infinity;
const selected = [];

dfs(0, 0);

function dfs(count, start) {
    if(count==n/2) {
        const startTeam = [];
        const linkTeam = [];
        for(let i=0; i<n; i++) {
            if(!selected.includes(i)) {
                linkTeam.push(i); // 링크 팀의 조합
            } else {
                startTeam.push(i);  // 스타트 팀의 조합
            }
        }
        teamPower(startTeam, linkTeam);
        return;
    }
    
    for(let i=start; i<n; i++) {
        selected.push(i);
        dfs(count+1, i+1);
        selected.pop();
    }
}

function teamPower(startTeam, linkTeam) {
    let sumStart = 0;
    let sumLink = 0;
    
    for(let i=0; i<n/2; i++) {
        for(let j=0; j<n/2; j++) {
            if(i===j) continue;
            sumStart += arr[startTeam[i]][startTeam[j]];
            sumLink += arr[linkTeam[i]][linkTeam[j]];
        }
    }
    const diff = Math.abs(sumStart-sumLink);
    ans = Math.min(diff, ans);
}

console.log(ans);