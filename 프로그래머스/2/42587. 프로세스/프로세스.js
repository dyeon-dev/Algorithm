function solution(priorities, location) {
    let answer = 0;
    
    let arr = [];
    for(let i=0; i<priorities.length; i++) {
        arr.push(i)
    }
    while(priorities.length) {
        let max = Math.max(...priorities);
        if(priorities[0]<max) {
            priorities.push(priorities.shift());
            arr.push(arr.shift());
        } else {
            answer++;
            priorities.shift();
            if(location==arr.shift()) return answer;
        }
        
    }
}
