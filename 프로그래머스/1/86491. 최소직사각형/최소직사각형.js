function solution(sizes) {
    var answer = 0;
    let rotated = sizes.map(([w, h])=> w<h ? [h, w] : [w, h])
    
    let width = [];
    let height = [];
    
    for([w, h] of rotated) {
        width.push(w);
        height.push(h);
    }
    return Math.max(...width)*Math.max(...height);
}