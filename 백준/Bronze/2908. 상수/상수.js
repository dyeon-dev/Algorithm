let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let a = input[0];
let b = input[1];

function reverseString(str) {
  return str.split("").reverse().join("");
}

if (Number(reverseString(a)) > Number(reverseString(b))) {
  console.log(reverseString(a));
} else console.log(reverseString(b));
