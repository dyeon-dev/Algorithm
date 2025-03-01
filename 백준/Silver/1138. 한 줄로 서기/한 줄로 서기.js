let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let result = new Array(n).fill(0); // 각 사람의 위치

for(let i=1; i<=n; i++) {
    let cur = arr[i-1];
    for(let j=0; j<n; j++) {
        if(cur==0 && result[j]==0) {
            result[j]=i;
            break;
        }
        if(result[j]==0) cur--;
    }
}

console.log(result.join(" "));