const solution = (N, data) => {
	data = data.sort((a, b) => Number(a) - Number(b)); // 오름차순 정렬
	data = [...new Set(data)]; // 중복 제거
	console.log(data.join(" ")); // 결과값 출력
};

const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let input = [];

  for await (const line of rl) {
    input.push(line);
  }

  // 입력이 끝난 후 처리
  const N = input[0]; // 첫 줄: 요소 개수
  const data = input[1].split(' ').map(Number); // 두 번째 줄: 데이터 배열
  
  solution(N, data);

  process.exit();
})();
