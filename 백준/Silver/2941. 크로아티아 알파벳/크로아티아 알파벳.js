const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

let str = input[idx++];
const alph = [
    "c=",
    "c-",
    "dz=",
    "d-",
    "lj",
    "nj",
    "s=",
    "z="
];

for(let key of alph) {
    str = str.replaceAll(key, "*");
}
console.log(str.length);