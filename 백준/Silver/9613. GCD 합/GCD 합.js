let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let t = Number(input[0]);
let index = 1;
for (let i = 0; i < t; i++) {
  let arr = input[index].split(" ").map(Number);
  let n = arr[0];
  let nums = arr.slice(1); // 실제 숫자 배열
  let sum=0;
  for(let j=0; j<n; j++) {
      for(let k=j+1; k<n; k++) {
          sum += gcd(nums[j], nums[k]);
      }
  }
  console.log(sum);
  index++;
}

function gcd(a, b) {
    return b==0 ? a : gcd(b, a%b);
}