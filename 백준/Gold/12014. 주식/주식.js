let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let t = Number(input[0]);
let index = 1;

for (let tc = 1; tc <= t; tc++) {
  let [n, k] = input[index].split(" ").map(Number);
  index++;
  let arr = input[index].split(" ").map(Number);
  index++;

  let d = [];
  let ans = 0;

  for (let x of arr) {
    if (d.length === 0 || x > d[d.length - 1]) {
      d.push(x); // ✅ 증가하는 경우 추가
    } else {
      let res = lowerBound(d, x, 0, d.length);
      d[res] = x; // ✅ LIS 배열에서 적절한 위치 교체
    }
    if (d.length == k) {
      ans = 1;
    }
  }
  console.log(`Case #${tc}\n${ans}`);
}

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) {
      end = mid; 
    } else {
      start = mid + 1;
    }
  }
  return start; 
}
