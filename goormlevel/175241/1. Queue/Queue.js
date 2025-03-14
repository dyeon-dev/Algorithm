const solution = (n, k, data) => {
	let q = [];
	let ans=[];
	for(let [str, num] of data) {
		if(str=="push") {
			if(q.length==k) ans.push("Overflow");
			else q.push(num);
		} else if(str=="pop") {
			 if(q.length==0) ans.push("Underflow");
			 else ans.push(q.shift());
		}
	}
	for(let x of ans) {
		console.log(x);
	}
	
}
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let input = [];
	for await (const line of rl) {
		input.push(line);
	}
	
	const [n, k] = input[0].split(" ").map(Number);
	const data = [];
	for(let i=1; i<=n; i++) {
		let [str, num] = input[i].split(' ');
		if(num!==undefined) num=Number(num);
		data.push([str, num]);
	}  
  solution(n, k, data);

	process.exit();
})();
