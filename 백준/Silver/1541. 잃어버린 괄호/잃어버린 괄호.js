let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 뺄셈을 기준으로 그룹 나누기 (55, 50+40)
let n = input[0].split("-");

let ans = 0;

for (let i = 0; i < n.length; i++) {
  // 각 그룹 내부에서 덧셈 연산
  let cur = n[i]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);

  if (i == 0) {
    // 첫번째 그룹은 항상 덧셈
    ans += cur;
  } else {
    // 두번째 그룹부터 항상 뺄셈
    ans -= cur;
  }
}

console.log(ans);