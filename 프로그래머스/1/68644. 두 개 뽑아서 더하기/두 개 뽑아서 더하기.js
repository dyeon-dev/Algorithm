function solution(numbers) {
    let sum=[];
    for(let i=0; i<numbers.length; i++) {
        for(let j=i+1; j<numbers.length; j++) {
            sum.push(numbers[i]+numbers[j])
        }
    }
    
    let set = [...new Set(sum)]

    return set.sort((a, b)=>a-b)
}