let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b] = input[0].split(" ").map(Number);
let ans = 0;

while (b > a) {
  if (b % 2 == 0) { // 값이 2로 나눠 떨어지는 경우 -> 2로 나누는 연산만 가능하다.
    b /= 2;
    ans++;
  } else if (b % 10 == 1) { // 그렇지 않고, 일의 자릿수가 1인 경우 -> 10으로 나누는 연산만 사용 가능하다.
    b = Math.floor(b / 10);
    ans++;
  } else { // 위의 경우가 모두 해당되지 않는 경우
    break;
  }
  // ans++;
}

if (b == a) {
  console.log(ans + 1);
} else {
  console.log(-1);
}
