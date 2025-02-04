let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// 고른 수열은 오름차순이어야 한다. => 순서가 정해져있다는 의미 (1,2,3과 3,2,1은 같음)=> 조합
let [n, m] = input[0].split(" ").map(Number);
let arr = []; // 조합을 계산하고자하는 원소가 담긴 배열
for (let i = 1; i <= n; i++) arr.push(i);
let visited = new Array(n).fill(false);
let selected = []; // 현재 조합에 포함된 원소
let ans = "";

combination(0, 0)

function combination(depth, start) {
	if (depth==m) {
		let result = [] // 조합 결과 저장 테이블
		for (let i of selected) result.push(arr[i])
		for (let x of result) ans += x+" "
        ans += '\n'
		return;
	}
	
	for (let i = start; i < arr.length; i++) {
		if(visited[i]) continue;
		selected.push(i) // 현재 원소 선택
		visited[i]=true // 현재 원소 방문처리
		combination(depth+1, i+1); // 재귀함수 호출 시 다음 인덱스 넣기
		selected.pop() // 현재 원소 선택 취소
		visited[i]=false;
		}
}
console.log(ans)