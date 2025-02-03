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

// 도시 개수, 도로 개수, 거리 정보, 출발 도시 번호
let [n, m, targetK, x] = input[0].split(" ").map(Number);
let graph = [];
for (let i = 1; i <= n; i++) {
  graph[i] = [];
}
for (let i = 0; i < m; i++) {
  let [x, y] = input[i + 1].split(" ").map(Number);
  graph[x].push(y);
}

let data = [];
let visited = new Array(n + 1).fill(-1);
visited[x] = 0; // 출발 도시 방문

let queue = new Queue();
queue.enqueue([x, 0]);

while (queue.getLength() !== 0) {
  let [now, dist] = queue.dequeue();

  if (dist == targetK) data.push(now);

  for (let next of graph[now]) {
    if (visited[next] == -1) {
      visited[next] = dist + 1;
      queue.enqueue([next, dist + 1]);
    }
  }
}

if (data.length == 0) {
  console.log(-1);
} else {
  data.sort((a, b) => a - b);
  for (x of data) {
    console.log(x);
  }
}
