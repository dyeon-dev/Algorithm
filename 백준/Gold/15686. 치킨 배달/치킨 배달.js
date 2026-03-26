const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

let N = Number(input[idx++]);
let M = Number(input[idx++]);
const homes = [];
const chickens = [];

const selected = [];
let diffMin = Infinity;

// 1. 모든 집과 치킨집만 좌표 구하기
for(let i=0; i<N; i++) {
    for(let j=0; j<N; j++) {
        const val = Number(input[idx++]);
        if(val==1) homes.push([i, j]);
        if(val==2) chickens.push([i, j]);
    }
}

dfs(0, 0);
// 2. 모든 치킨집중에 M 개수만큼 선택(조합)
function dfs(count, start) {
    if(count==M) {
        // 치킨 거리 구하기
        distance();
        return;
    }

    // 치킨집 개수만큼 조합
    for(let i=start; i<chickens.length; i++) {
        selected.push(chickens[i]);
        dfs(count+1, i+1);
        selected.pop();
    }
}

// 3. 도시의 치킨 거리 계산
function distance() {
    let cityDist = 0;
    for(const [hx, hy] of homes) {
        let minHomeDist = Infinity;
        for(const [cx, cy] of selected) {
            const dist = Math.abs(hx-cx) + Math.abs(hy-cy);
            minHomeDist = Math.min(minHomeDist, dist);
        }
        cityDist+=minHomeDist; // 각 집의 최소거리를 도시 합계의 추가
    }
    diffMin=Math.min(diffMin, cityDist)
}
console.log(diffMin);