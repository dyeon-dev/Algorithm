let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let t = Number(input[0]);
for(let i=1; i<=t; i++) {
    let a = input[i].split(' ').map(Number);
    let n = a[0];
    let sum = 0;
    for(let i=1; i<=n; i++) {
        sum += a[i];
    }
    let avg = sum/n;
    let cnt = 0;
    for(let i=1; i<=n; i++) {
        if(avg < a[i]) cnt++;
    }
    console.log(`${(cnt/n*100).toFixed(3)}%`);    
}