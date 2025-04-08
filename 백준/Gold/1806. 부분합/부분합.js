let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let start=0;
let sum=0;
let ans = Infinity;

for(let end=0; end<n; end++) {
    sum+=arr[end];
    
    while(sum>=m) {
        ans=Math.min(end-start+1, ans);
        sum-=arr[start++];
    }
}
console.log(ans==Infinity?0:ans);
