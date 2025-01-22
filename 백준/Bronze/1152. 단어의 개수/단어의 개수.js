let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let string = input[0].trim().split(" ");

if(string=="") {
    console.log(0);
} else {
    console.log(string.length);
}
