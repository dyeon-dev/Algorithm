function solution(bridge_length, weight, truck_weights) {
    let time=0;
    let q=new Array(bridge_length).fill(0);
    
    while(q.length) {
        q.shift();
        if(truck_weights.length) {
            let sum = q.reduce((a,b)=>a+b, 0);
            if(sum+truck_weights[0]<=weight) {
             q.push(truck_weights.shift());
            } else q.push(0);
        }
        time++;
    }
    return time
}
