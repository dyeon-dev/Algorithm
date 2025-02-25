function solution(arr1, arr2) {
    let answer = [];
    // 외부
    for(let i = 0; i < arr1.length; i++) {
        let res = [];
        // 중간
        for(let j = 0; j < arr2[0].length; j++) {
            let sum = 0;
            // 내부
            for(let k = 0; k < arr2.length; k++) {
                sum += arr1[i][k]*arr2[k][j];
            }
            res.push(sum);
        }
        answer.push(res)
    }
    return answer;
}