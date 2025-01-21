let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);

if(b < 45) {
    a -= 1;
    b += 15;
    if (a < 0) {
        a = 23;
    }
} else {
    b -= 45;
}
console.log(a + " "+ b);
