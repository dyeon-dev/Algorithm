const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let maxIndex = 0;
let maxValue = 0;

for(i=0; i<9; i++) {
   let data = Number(input[i]);
  if (maxValue < data) {
    maxValue = data;
    maxIndex = i+1;
  }
}
console.log(maxValue, maxIndex)
