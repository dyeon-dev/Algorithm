let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [h, m] = input[0].split(' ').map(Number);

let t = Number(input[1]);

m = m+t;

while(m >= 60) {
    h+=1;
    m-=60;
    if(h>23) {
        h=0;
    }
}

console.log(h + " " + m);