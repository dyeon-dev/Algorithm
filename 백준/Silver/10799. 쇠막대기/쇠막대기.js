let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let str = input[0].split("");
let stack = [];
let ans = 0;

for(let i=0; i<str.length; i++) {
    if(str[i]=="(") {
        stack.push("(")
    } else {
        stack.pop(); // 일단 닫힌 괄호니까 무조건 pop
        if (str[i - 1] == "(") {
          // 레이저인 경우
          ans += stack.length;
        } else {
          // 쇠막대기 끝인 경우
          ans += 1;
        }
    }
}
console.log(ans);