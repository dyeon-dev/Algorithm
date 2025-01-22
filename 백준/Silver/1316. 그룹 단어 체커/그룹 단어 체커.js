let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0]);

let string = "";
let ans = 0;

function check(data) {
  let setData = new Set(data[0]);
  for (let i = 0; i < data.length; i++) {
    // 이전문자와 다르고
    if (data[i] != data[i + 1]) {
      // 이미 등장한 적 있는 알파벳이라면 false
      if (setData.has(data[i + 1])) {
        return false;
      } else {
        setData.add(data[i + 1]);
      }
    }
  }
  return true;
}

for (let i = 1; i <= a; i++) {
  string = input[i];
  if (check(string)) {
    ans++;
  }
}
console.log(ans);
