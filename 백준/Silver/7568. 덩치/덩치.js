let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];
let res = [];

for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  arr.push([x, y]);
}

for(let i=0; i<n; i++) {
    let cnt=1;
    for(let j=0; j<n; j++) {
        if(arr[i][0]<arr[j][0] && arr[i][1]<arr[j][1]) cnt++;
    }
    res.push(cnt);
}
console.log(res.join(" "))
