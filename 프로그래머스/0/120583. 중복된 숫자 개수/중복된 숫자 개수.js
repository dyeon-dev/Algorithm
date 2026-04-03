function solution(array, n) {
    let answer = 0;
    for(const num of array) {
        if(num==n) answer++;
    }
    return answer;
}