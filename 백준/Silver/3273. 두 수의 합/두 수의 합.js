let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let x = Number(input[2]);
arr.sort((a, b) => a - b);
let cnt = 0;

let start=0;
let end=n-1;

while(start<end) {
    let sum=arr[start]+arr[end];
    if(sum==x) {
        cnt++;
        start++;
        end--;
    } else if(sum>x) {
        end--; // 현재 합이 x보다 크다면, 합을 줄이기 위해 end를 감소
    } else start++;
}
console.log(cnt);