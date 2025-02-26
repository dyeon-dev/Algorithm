function solution(babbling) {
    var answer = 0;
    const regex = /^(aya|ye|woo|ma)+$/;
    
    for(x of babbling) {
        if(regex.test(x)) answer++;
    }

    return answer;
}