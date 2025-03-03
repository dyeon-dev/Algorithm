let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  let words = input[i];
  arr.push(words);
}

let title = new Set(arr);
let titleArr = [...title];
titleArr.sort();

let res=[];

for(let i=0; i<titleArr.length; i++) {
    let cnt = 0;
    for(let j=0; j<arr.length; j++) {
        if(titleArr[i]==arr[j]) cnt++;
    }
    res.push(cnt);
 }
let max = Math.max(...res);
let ans = res.indexOf(max);
console.log(titleArr[ans]);