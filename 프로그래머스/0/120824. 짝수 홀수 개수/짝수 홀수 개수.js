function solution(num_list) {
    var answer = [];
    let cnt1=0;
    let cnt2=0;
    for(x of num_list) {
        if(x%2==0) cnt1++;
        else cnt2++;
    }
    answer.push(cnt1);
    answer.push(cnt2);
    return answer;
}