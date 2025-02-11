let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let m = Number(input[2]);
let target = input[3].split(" ").map(Number);
arr.sort((a, b) => a - b); // O(nlogN)

let result = [];

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) {
      end = mid; // 같은 값이어도 최대한 왼쪽으로 이동하여 가장 작은 인덱스 값 구하기
    } else {
      start = mid + 1; 
    }
  }
  return end;
}

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 오른쪽 인덱스 반환
function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) {
      end = mid;
    } else {
      start = mid + 1; // 최대한 오른쪽으로 이동하기
    }
  }
  return end;
}

function countByValue(arr, leftValue, rightValue) {
  let lowerIndex = lowerBound(arr, leftValue, 0, arr.length);
  let upperIndex = upperBound(arr, rightValue, 0, arr.length);
  return upperIndex - lowerIndex;
}

for (x of target) {
  let cnt = countByValue(arr, x, x);
  result.push(cnt);
}

console.log(result.join(" "));
