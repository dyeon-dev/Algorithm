const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/);

let idx = 0;

let N = Number(input[idx++]);
const arr = [];
for(let i=0; i<N; i++) {
    const w = Number(input[idx++]);
    const h = Number(input[idx++]);
    arr.push([w, h]);
}

const res = [];

for(let i=0; i<N; i++) {
    let rank=1;
    for(let j=0; j<N; j++) {
        if(i==j) continue;

        const [w, h] = arr[i];
        const [otherW, otherH] = arr[j];

        if(w<otherW && h<otherH) rank++;
    }
    res.push(rank)
}
console.log(res.join(" "))
