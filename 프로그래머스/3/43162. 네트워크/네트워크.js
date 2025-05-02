function solution(n, computers) {
  let parent = [];
  for(let i=0; i<=n; i++) {
      parent[i]=i;
  }

  // Find 함수: 노드 x의 루트 노드를 찾는다
  function find(x) {
    if (parent[x] === x) return x;
    return find(parent[x]);
  }

  // Union 함수: 노드 x와 노드 y를 연결한다
  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX !== rootY) parent[rootY] = rootX; // 루트가 다르면 하나의 루트로 합친다
  }

  // 모든 컴퓨터를 순회하며 연결된 컴퓨터들을 합친다
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (computers[i][j] === 1) {
        union(i, j);
      }
    }
  }

  // 각 노드가 자기 자신을 가리키는 경우만 카운트 (즉, 루트 노드인 경우)
  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (find(i) === i) answer++;
  }

  return answer;
}