let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0]); // 2

let num = 0;
let string = "";
for (let i = 1; i <= a; i++) {
  let s = input[i].split(" "); // [3, ABC]
  num = Number(s[0]); // 3
  string = s[1]; // ABC
  let ans = "";

  for (x of string) {
    ans += x.repeat(num);
  }
  console.log(ans);
}
