let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}


let [n, k] = input[0].split(" ").map(Number);
let arr = []; // 전체 배열 리스트
let data = []; // 바이러스 리스트

for(let i=0; i<n; i++) {
    arr.push(input[i+1].split(' ').map(Number));
    for(let j=0; j<n; j++) {
        if(arr[i][j]!=0) {
            data.push([arr[i][j], 0, i, j]); // 번호, 시간, 위치
        }
    }
}

// 바이러스 번호 낮은것부터 전염하기 위해 정렬
data.sort((a, b)=> a[0]-b[0]);

let [targetS, targetX, targetY] = input[n+1].split(" ").map(Number);

let queue = new Queue();
let dx = [0,0,1,-1];
let dy = [1,-1,0,0];

for(let x of data) {
    queue.enqueue(x);  
}

while(queue.getLength()!=0) {
    let [v, s, x, y] = queue.dequeue();
    if(s==targetS) break;
    for(let i=0; i<4; i++) {
        let nx = x+dx[i];
        let ny = y+dy[i];
        if(nx>=0 && ny>=0 && nx<n && ny<n && arr[nx][ny]==0) {
            arr[nx][ny]=v;
            queue.enqueue([v, s+1, nx, ny]);
        }
    }
}
console.log(arr[targetX-1][targetY-1]);

