let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let minValue=1000001;
let maxValue=-1000001;

for(let i=0; i<a; i++) {
    if(minValue>arr[i]) minValue=arr[i];
    if(maxValue<arr[i]) maxValue=arr[i];
}
console.log(minValue+" "+maxValue);