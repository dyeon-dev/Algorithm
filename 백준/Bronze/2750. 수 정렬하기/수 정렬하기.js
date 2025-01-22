let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0])
let string = [];
for(let i=1; i<=n; i++) {
    string.push(input[i]);
}

string.sort(function (a, b) {
  return a - b;
});

let ans = "";
for (let i = 0; i < string.length; i++) {
  ans += string[i] + "\n";
}
console.log(ans);