let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let string = input[0].split(" ");

string.sort(function (a, b) {
  return a - b;
});

let ans = "";
for (let i = 0; i < string.length; i++) {
  ans += string[i] + " ";
}
console.log(ans);
