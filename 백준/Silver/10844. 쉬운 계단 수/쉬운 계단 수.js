let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);

// d[i][j]=길이가 i이고 마지막 숫자가 j일때 경우의 수
// d[i][j-1]+d[i]d[j+1]
let d = Array.from(Array(n+1), ()=> new Array(10).fill(0));

d[1][0]=0;
for(let j=1; j<=9; j++) d[1][j]=1;

for(let i=2; i<=n; i++) {
    for(let j=0; j<=9; j++) {
        d[i][j]=0;
        if(j>0) d[i][j]+=d[i-1][j-1];
        if(j<9) d[i][j]+=d[i-1][j+1];
        d[i][j]%=Number(1e9);
    }
}

let result=0;
for(let j=0; j<=9; j++) {
    result+=d[n][j];
}
result %= Number(1e9);
console.log(result);