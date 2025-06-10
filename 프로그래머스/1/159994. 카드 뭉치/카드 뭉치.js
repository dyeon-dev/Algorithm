function solution(cards1, cards2, goal) {
    let idx1=0;
    let idx2=0;
    
    for(x of goal) {
        if(x==cards1[idx1] && idx1<cards1.length) idx1++
        else if(x==cards2[idx2] && idx2<cards2.length) idx2++
        else return 'No'
    }
    return 'Yes';
}