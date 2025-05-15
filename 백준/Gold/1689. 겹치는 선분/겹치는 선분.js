let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let arr = [];
for(let i=1; i<=n; i++) {
    let [s, e] = input[i].split(' ').map(Number);
    arr.push([s, 1]);
    arr.push([e, -1]);
}
// 기본 정렬 기준은 a[0](시간)
// 보조 정렬 기준은 시간이 같을 때 -1이 +1보다 먼저온다.
// 스위핑 알고리즘 (종료 이벤트 -1를 시작 이벤트 +1보다 먼저 처리하기 때문)
arr.sort((a, b)=> a[0]-b[0] || a[1]-b[1]);

let cnt=0;
let max=0;

for(const [x, t] of arr) {
    cnt+=t;
    max=Math.max(max, cnt);
}
console.log(max);