let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let [a, b] = input[0].split(' ').map(Number);
let c = Number(input[1]);

let total = a*60 + b + c;
total = total % 1440;
let hour = parseInt(total /60);
let min = total % 60;
console.log(hour + " " + min) ;