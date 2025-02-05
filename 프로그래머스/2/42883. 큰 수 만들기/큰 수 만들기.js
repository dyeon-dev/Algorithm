// ✅ 최적화된 코드 (Greedy + Stack)
// 순서를 유지하면서 가장 큰 숫자를 남기는 것이 중요

function solution(number, k) {
    let stack = [];
    
    for(digit of number) {
        while(stack[stack.length-1] < digit && k>0 && stack.length>0) {
            stack.pop(); // 앞의 숫자가 작으면 제거
            k--; // 제거한 개수 줄이기
        }
        stack.push(digit);
    }
    // 만약 제거할 숫자가 남아 있다면 뒤에서 자르기
    return stack.slice(0, stack.length-k).join("");
//     dfs 시간초과
//     let max="0";
//     function dfs(depth, start, cur) {
//         if(depth==number.length-k) {
//             max = Math.max(max, cur);
//             return;
//         }
        
//         for(let i = start; i < number.length; i++) {
//             dfs(depth+1, i+1, cur+number[i]);
//         }
//     }
    
//     dfs(0, 0, "");
    
//     return String(max);
}