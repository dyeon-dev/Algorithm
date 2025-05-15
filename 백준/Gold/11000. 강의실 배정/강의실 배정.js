let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this._bubbleUp();
  }

  pop() {
    if (this.heap.length <= 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown();
    return min;
  }

  peek() {
    return this.heap[0];
  }

  _bubbleUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (this.heap[parent] <= this.heap[i]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  _bubbleDown() {
    let i = 0;
    while (true) {
      let left = i * 2 + 1;
      let right = i * 2 + 2;
      let smallest = i;

      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
      if (smallest === i) break;

      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }

  size() {
    return this.heap.length;
  }
}


let n = Number(input[0]);
let lectures = [];

for (let i = 1; i <= n; i++) {
  let [start, end] = input[i].split(" ").map(Number);
  lectures.push([start, end]);
}

// 시작 시간 기준 정렬
lectures.sort((a, b) => a[0] - b[0]);

const heap = new MinHeap();
heap.push(lectures[0][1]); // 첫 강의의 종료 시간 삽입

for (let i = 1; i < n; i++) {
  const [start, end] = lectures[i];
  
  // 현재 가장 빨리 끝나는 강의실이 새로운 강의 시작 전이면 재사용
  if (heap.peek() <= start) {
    heap.pop(); // 해당 강의실 비우기
  }
  heap.push(end); // 새 종료 시간 넣기 (재사용 또는 새 강의실)
}

console.log(heap.size()); // 최대로 사용한 동시 강의실 개수
