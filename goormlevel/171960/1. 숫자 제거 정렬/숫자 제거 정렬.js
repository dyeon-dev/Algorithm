const solution = (N, data) => {
	data = data.sort((a, b) => Number(a) - Number(b)); // 오름차순 정렬
	data = [...new Set(data)]; // 중복 제거
	console.log(data.join(" ").concat('\n')); // 결과값 출력
};

const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let N = null; // 테스트케이스 한 줄의 요소 개수 초기화
  let data = [];

  for await (const line of rl) {
		if (!line) {
          // solution(N, data);
			rl.close(); // 입력값의 마지막 줄에 도달하면 프로세스 종료
		}
    	if (!N) {
      		N = +line; // 첫 줄의 테스트케이스 개수를 number type으로 바꿔서 N에 할당
    	} else {
      		data = line.split(' ').map((el) => +el); // 두 번째 줄의 테스트케이스를 solution 함수에 넘겨줄 data 변수에 필요한 형태에 맞게 가공하여 할당
    	}
    
  }

	solution(N, data);
  process.exit();
})();