let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// f(i) = min(f(i-1), f(i/2), f(i/3)) + 1
let n = Number(input[0]);

// 숫자 i를 1로 만들기 위한 최소 연산 횟수
d = new Array(n+1).fill(0);

// i-1 을 하면 d[i-1] + 1 (1을 뺀 후의 최소 연산 횟수 + 1)
// i/2 를 하면 d[i/2] + 1 (i가 2의 배수일 때)
// i/3 를 하면 d[i/3] + 1 (i가 3의 배수일 때)
for(let i=2; i<=n; i++) { // 1은 연산이 필요없으므로 2부터 시작
  d[i]=d[i-1]+1; // 1을 뺀 후 최소 연산 횟수+1
  if(i%2==0) d[i]=Math.min(d[i], d[i/2]+1); // 2로 나누어 떨어지면 최솟값 갱신
  if(i%3==0) d[i]=Math.min(d[i], d[i/3]+1); // 3으로 나누어 떨어지면 최솟값 갱신
}

console.log(d[n]);