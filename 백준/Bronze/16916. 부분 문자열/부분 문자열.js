let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let s = input[0];
let p = input[1];
let res = 0;

function makeFail() {
  const fail = new Array(p.length).fill(0); // 각 문자열에서 접두사와 접미사가 일치하는 최대 길이
  let j = 0;
  for (let i = 1; i < p.length; i++) {
    while (j > 0 && p[i] != p[j]) {
      j = fail[j - 1]; // 일치하지 않으면 이전에 일치했던 부분 문자열의 길이로 돌아감
    }
    if (p[j] == p[i]) {
      fail[i] = ++j; // 일치하는 경우 j위치에 1을 더한 값이 i번째 위치로 들어감
    }
  }
  return fail;
}

function kmp(s, p) {
  const fail = makeFail(p);
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    while (j > 0 && s[i] != p[j]) {
      j = fail[j - 1];
    }
    if (s[i] == p[j]) {
      if (j == p.length - 1) {
        return 1;
      }
    }
    j++;
  }
  return 0;
}
console.log(kmp(s, p));
