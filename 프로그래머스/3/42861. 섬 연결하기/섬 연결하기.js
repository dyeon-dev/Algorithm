let p = [];
function solution(n, costs) {
    let answer = 0;
    // 섬의 비용 오름차순 정렬
    costs.sort((a, b)=>a[2]-b[2]);
    // 각 섬의 부모 노드를 나타내는 배열
    for(let i=0; i<n; i++) {
        p[i]=i;
    }
    // 비용이 낮은 다리부터 연결하면서 각 섬이 이미 연결되어 있는지 유니온파인드 알고리즘을 통해 확인
    for([a, b, c] of costs) {
        let cost = union(a, b, c);
        if(cost!==-1) {
            answer+=cost;
        }
    }
    return answer;
}

function findP(e) {
    if(p[e]==e) return e; // 부모가 자기 자신이면 자신 반환
    else return findP(p[e]); // 재귀로 부모를 찾아서 반환
}

function union(a, b, c) {
    // 최상위 부모 찾기
    let a1 = findP(a);
    let b1 = findP(b);
    
    if(a1==b1) {
        return -1; // 이미 같은 부모이면 사이클 발생
    } else {
        if(a1>b1) p[a1]=b1; // 작은 값 쪽을 부모로 삼음
        else p[b1]=a1;
    }
    return c; // 다리 비용 반환
}