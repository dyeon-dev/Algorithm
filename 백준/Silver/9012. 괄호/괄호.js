let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

for(let i=1; i<=n; i++) {
    let arr = input[i].split("");
    
    let stack=[];
    let ans = "YES";
    
    for(x of arr) {
        if(x=="(") stack.push(x);
        else {
            if(stack.length==0) ans="NO";
            stack.pop();
        }
    }
    
    if(stack.length > 0) ans = "NO";
    console.log(ans);
}