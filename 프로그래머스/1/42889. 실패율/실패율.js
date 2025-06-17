function solution(N, stages) {
    let answer = [];
    let n = stages.length;
    
    let d = {};
    
    // 각 스테이지에 도달한 사람 수를 세는 객체
    for(const s of stages) {
        if(!d[s]) d[s]=1
        else d[s]++;
    }
    
    // 실패율 계산 (스테이지 번호와 실패율 쌍)
    let arr=[]
    for(let i=1; i<=N; i++) {
        const fail = d[i] ? d[i]/n : 0;
        arr.push({ stage: i, rate: fail })
        n-=d[i]||0
    }
    
    // 실패율 내림차순, 같으면 스테이지 오름차순
    arr.sort((a, b)=> {
        if(b.rate==a.rate) return a.stage-b.stage
        return b.rate - a.rate
    })
    
    // 스테이지 번호만 추출
    answer = arr.map(obj=>obj.stage)
    return answer;
}