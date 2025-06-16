function solution(queue1, queue2) {
    let answer = 0;

    let sum1 = queue1.reduce((a, b) => a + b, 0);
    let sum2 = queue2.reduce((a, b) => a + b, 0);
    const total = sum1 + sum2;

    if (total % 2 !== 0) return -1; // 전체 합이 홀수면 불가능

    const target = total / 2;
    const max = queue1.length * 3;

    // queue1, queue2를 진짜 큐처럼 쓰기 위해 index로 관리
    let q = [...queue1, ...queue2];
    let i = 0;  // queue1의 시작
    let j = queue1.length;  // queue2의 시작

    while (answer <= max) {
        if (sum1 === target) return answer;

        if (sum1 > target) {
            const value = q[i++];
            sum1 -= value;
            sum2 += value;
        } else {
            const value = q[j++];
            sum2 -= value;
            sum1 += value;
        }

        answer++;
    }

    return -1;
}
