const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

let N = Number(input[idx++]);
let M = Number(input[idx++]);

const arr = [];
for(let i=0; i<N; i++) {
    arr.push(input[idx++].split(''));
}

let ans = 64; // 최소값을 구하기 위해 나올 수 있는 최대값인 64로 초기화

// 모든 가능한 8x8구역 찾기
for(let i=0; i<=N-8; i++) {
    for(let j=0; j<=M-8; j++) {
        let divMap = [];
        for(let r=0; r<8; r++) {
            divMap.push(arr[i+r].slice(j, j+8));
        }
        // 완성된 8x8 체스판과 비교하기
        chess(divMap);
    }
}

function chess(divMap) {
    let countBlack = 0; // 맨 왼쪽 위가 'B'인 체스판과 비교했을 때 칠해야 하는 개수
    let countWhite = 0; // 맨 왼쪽 위가 'W'인 체스판과 비교했을 때 칠해야 하는 개수
    
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            // 행과 열의 인덱스 합(x + y)이 짝수면 시작점(0, 0)과 색이 같아야 하고,
            // 홀수면 시작점(0, 0)과 색이 달라야 정상적인 체스판입니다.
            if ((x + y) % 2 === 0) {
                if (divMap[x][y] !== 'B') countBlack++;
                if (divMap[x][y] !== 'W') countWhite++;
            } else {
                if (divMap[x][y] !== 'W') countBlack++;
                if (divMap[x][y] !== 'B') countWhite++;
            }
        }
    }
    
    // 이전까지의 최소값(ans)과 현재 구역의 countBlack, countWhite 중 가장 작은 값으로 갱신
    ans = Math.min(ans, countBlack, countWhite);
}
console.log(ans);