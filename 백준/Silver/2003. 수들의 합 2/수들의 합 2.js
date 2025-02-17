let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);
let cnt = 0;

let sum = 0;
let end = 0; 

for(let start=0; start<n; start++) {
  while(sum<m && end<n) {
    sum+=arr[end];
    end++;
  }

  if(sum==m) {
    cnt++;
  }
  sum-=arr[start];
}
console.log(cnt);
