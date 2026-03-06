const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(/\s+/).map(Number);

let idx = 0;
const totalResult = [];

while(idx < input.length) {
    const k = input[idx++];
    const S = [];
    if(k==0) break;
    for(let i=0; i<k; i++) {
        S.push(input[idx++]);
    }
    const result = [];
    const selected = [];

    dfsCombination(0, 0);
    // 중복 없는 조합
    function dfsCombination(depth, start) {
        if(depth==6) {
            result.push(selected.join(" "));
            return;
        }
        for(let i = start; i < k; i++) {
            selected.push(S[i]);
            dfsCombination(depth+1, i+1);
            selected.pop();
        }
    }  
    totalResult.push(result.join("\n"));
}


console.log(totalResult.join("\n\n"));