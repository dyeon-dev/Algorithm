let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let s = input.toUpperCase(); // 대소문자 구별 없애기 위해 대문자로 변환
let count = new Map(); // 각 문자 개수를 저장할 Map

// 각 문자 개수 카운트
for (let char of s) {
  count.set(char, (count.get(char) || 0) + 1);
}

let maxCount = Math.max(...count.values()); // 최빈값
let maxChars = []; // 최빈값을 가진 문자 저장

// 최빈값을 가진 문자 찾기
for (let [key, value] of count) {
  if (value === maxCount) maxChars.push(key);
}

// 최빈값을 가진 문자가 여러 개라면 "?" 출력, 하나라면 해당 문자 출력
console.log(maxChars.length > 1 ? "?" : maxChars[0]);
