const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

const N = Number(input[idx++]); // 단어 개수
const words = []; // 단어
for(let i=0; i<N; i++) {
    words.push(input[idx++]);
}

let cnt = 0;
for(let i=0; i<N; i++) {
    let flag = true;
    let prev = "";
    const check = new Set();
    for(let w of words[i]) {
        if(!check.has(w)) {
            check.add(w);
            prev = w;
        } else if (prev!==w){
            flag = false;
        }
    }
    if(flag) cnt++;
}

console.log(cnt);