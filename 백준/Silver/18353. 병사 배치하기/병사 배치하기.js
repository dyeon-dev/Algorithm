let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// 이 문제는 특정한 수열에서 "가장 긴 증가하는 부분 수열(LIS)"을 찾는 문제이다.
// 부분 수열: 주어진 수열의 일부 항을 원래 순서대로 나열하여 얻을 수 있는 수열
// [4, 2, 5, 8, 4, 11, 15]
// LIS => [2, 5, 8, 11, 15]
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

arr.reverse(); // 순서를 뒤집어 최장 증가 부분 수열(LIS) 문제로 변환

let d = [0]; // LIS 배열

// 이진 탐색을 활용한 알고리즘 수행
for (x of arr) {
  if (d[d.length - 1] < x) {
    // 마지막 원소보다 현재 원소 x가 크다면 가장 뒤에 넣기
    d.push(x);
  } else {
    // x 이하인 원소가 있다면, 가능한 왼쪽에 있는 원소와 x를 교체
    let index = lowerBound(d, x, 0, d.length);
    d[index] = x;
  }
}

// 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

console.log(n - (d.length - 1));
