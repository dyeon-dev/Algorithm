const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString();

const num = Number(inputData);
let result = '';

// 누적합을 매 반복마다 출력
for(let i = 1; i <= num; i++){
	result += '*';
  	console.log(result);
}