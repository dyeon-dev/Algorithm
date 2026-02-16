let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const n = Number(input);
let ans = 0;

for (let i = 1; i <= n; i *= 10) {
    ans += n - i + 1;
}

console.log(ans);