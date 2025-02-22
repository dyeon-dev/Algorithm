function solution(places) {
    let answer = [];
    
    for(let i=0; i<places.length; i++) {
        answer.push(checkDistance(places[i]));
    }
    
    return answer;
}

function checkDistance(place) {
    let people = [];

    for(let i=0; i<5; i++) {
        for(let j=0; j<5; j++) {
            if(place[i][j]=='P'){
                people.push([i, j]); 
            }
        }
    }
    
    for(let i=0; i<people.length; i++) {
        for(let j=i+1; j<people.length; j++) {
            let [x1, y1] = people[i];
            let [x2, y2] = people[j];
            let dist = Math.abs(x1-x2)+Math.abs(y1-y2);
            
            // 거리가 1인 경우 무조건 거리두기 위반
            if(dist==1) return 0;
            
            // 거리가 2인 경우, 사이에 빈자리가 있는지 체크
            if(dist==2) { 
                if(x1==x2) {
                    if(place[x1][(y1+y2)/2]=='O') return 0;
                } else if(y1==y2) {
                    if(place[(x1+x2)/2][y1]=='O') return 0;
                } else {
                    if(place[x1][y2]=='O' || place[x2][y1]=='O') return 0;
                }
            }
        }
    }
    return 1;
}
