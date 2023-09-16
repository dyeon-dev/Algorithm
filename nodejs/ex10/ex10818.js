const fs = require('fs');
const inputData = fs.readFileSync('./input.txt').toString().split('\n');

const num = Number(inputData[0]);
let  arr = inputData[1].split(' ').map(x=> Number(x));

let max = arr[0]; 
let min = arr[0];

for(let i=1; i<num; i++) {
  if (min>arr[i]) {
    min=arr[i]
  } 
  if (max<arr[i]) {
    max=arr[i]
  }
}
console.log(min, max)
