let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let card = input[1].split(" ").map(Number);
let m = Number(input[2]);
let num = input[3].split(" ").map(Number);

card.sort((a, b) => a - b);

let result = [];

function binary(target) {
  let start = 0;
  let end = card.length - 1;
  let res = 0;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (card[mid] >= target) {
      end = mid - 1;
    } else if (card[mid] < target) {
      start = mid + 1;
    }
    if (card[mid] == target) {
      res += 1;
    }
  }
  return res;
}

for (x of num) {
  result.push(binary(x));
}

console.log(result.join(" "));
