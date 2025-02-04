let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// 고른 수열은 오름차순이어야 한다. => 순서가 정해져있다는 의미 (1,2,3과 3,2,1은 같음)=> 조합
let [n, m] = input[0].split(" ").map(Number);
let arr = new Array(m);

combination(0, 1);

function combination(depth, start) {
  if (depth == m) {
    console.log(arr.join(" "));
    return;
  }

  for (let i = start; i <= n; i++) {
    arr[depth] = i;
    combination(depth + 1, i + 1);
  }
}
