function solution(numbers) {
    let sum=[];
    for(let i=0; i<numbers.length; i++) {
        for(let j=i+1; j<numbers.length; j++) {
            if(i!=j) {
                sum.push(numbers[i]+numbers[j]);
            }
        }
    }
    const answer=[...new Set(sum)]
       
    return answer.sort((a, b)=>a-b);
}