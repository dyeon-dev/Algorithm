const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const input = [];
rl.on('line', (line) => {
	input.push(line);
});

rl.on('close', () => {
	const [n, k, q] = input[0].split(' ').map(Number);
	const arr = input.slice(1, n+1).map((item) => item.split(''));
	const words = input.slice(n+1).map((item)=>item.split(' ').map((item, idx)=> {
		if(idx<2) return Number(item)-1;
		else return item;
	}))
	
	for([r, c, d] of words) {
		arr[r][c]=d;
		let q=[[r, c]];
		let memo=[[r, c]];
		let dx=[0,0,1,-1];
		let dy=[1,-1,0,0];
		let visited = Array.from({length: n}, ()=>new Array(n).fill(0));
		visited[r][c]=1;
		let cnt=1;
		
		while(q.length) {
			let [r, c] = q.shift();
			for(let i=0; i<4; i++) {
				let nx=dx[i]+r;
				let ny=dy[i]+c;
				if(nx>=0 && ny>=0 && nx<n && ny<n && visited[nx][ny]==0) {
					if(arr[nx][ny]==d) {
						visited[nx][ny]=1;
						cnt++;
						q.push([nx, ny]);
						memo.push([nx, ny]);
					}
				}
			}
		}
		
		if(cnt>=k) {
			memo.forEach(([r, c])=>arr[r][c]='.')
		}
	}
	console.log(arr.map(item=>item.join('')).join('\n'));
})