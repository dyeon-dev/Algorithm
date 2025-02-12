let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// 정렬된 값: [1,2,2,3,3,4,4,4,6,6,8,8,9,12,12,16] 여기서 k번째 수
// "현재 mid보다 작거나 같은 데이터의 수가 k개 이상이 되는 조건"을 만족하는 mid 중에서 가장 작은 값을 구하면 된다
let n = Number(input[0]);
let k = Number(input[1]);

let start = 1;
let end = n*n; // 배열에 존재할 수 있는 가장 큰 값 (10**10)

let result = 0;
while(start <= end) {
  let mid = parseInt((start+end)/2);
  let total=0;
  for(let i=1; i<=n; i++) {
    // mid보다 작거나 같은 원소의 개수
    total+=Math.min(parseInt(mid/i), n); // 4+4+2+2=12
  }
  if(total>=k) { // mid보다 작거나 같은 데이터의 개수가 k 이상이라면
    result=mid; // result에 기록
    end=mid-1;
  } else {
    start=mid+1;
  }
}

console.log(result);