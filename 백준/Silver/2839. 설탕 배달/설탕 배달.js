let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = input[0];
let ans = 0;
let flag = false;

while (n>=0) {
    if(n==0 || n%5==0) {
        ans += n/5;
        flag=true;
        console.log(ans);
        break;
    }
    n-=3;
    ans++;
}
if(!flag) {
    console.log(-1);
}