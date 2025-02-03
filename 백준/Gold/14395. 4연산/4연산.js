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

let [s, t] = input[0].split(" ").map(Number);

let queue = new Queue();
// [값, 연산자] 삽입
queue.enqueue([s, '']);

let visited = new Set([s]);
let flag = false;

if (s==t) {
    console.log(0);
}

while(queue.getLength()!==0) {
    let [value, opers] = queue.dequeue();
    
    if (value==t) {
        console.log(opers);
        flag=true;
        break;
    }
    for(oper of ['*', '+', '-', '/']) {
        let nextValue=value;
        if(oper=='*') nextValue*=value;
        if(oper=='+') nextValue+=value;
        if(oper=='-') nextValue-=value;
        if(oper=='/' && value!=0) nextValue=1;
        if(!visited.has(nextValue)) {
            queue.enqueue([nextValue, opers+oper]);
            visited.add(nextValue);
        }
    }
}

if(!flag) console.log(-1);