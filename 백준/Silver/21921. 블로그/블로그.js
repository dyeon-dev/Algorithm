let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n, x] = input[0].split(" ").map(Number);
let arr = [0,...input[1].split(" ").map(Number)];

let sum=0;
for(let i=1; i<=x; i++) sum+=arr[i]; // 1부터 x번째 날의 방문자 수의 합
let maxSum=sum;
let cnt=1;

// 슬라이딩 윈도우(투포인터)
let left=1;
let right=x;
while(true) {
    left++;
    right++;
    if(right>n) break;
    
    sum = sum+arr[right]-arr[left-1];
    if(maxSum==sum) cnt++;
    else if(maxSum<sum) { // 더 큰 합을 찾은 경우
        maxSum=sum;
        cnt=1;
    }
}

if(maxSum==0) console.log("SAD");
else {
 console.log(maxSum);
 console.log(cnt);
}