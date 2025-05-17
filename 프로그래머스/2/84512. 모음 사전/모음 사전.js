function solution(word) {
    let answer = 0;
    let alph = ["A", "E", "I", "O", "U"];
    let flag = false;
    let cnt = 0;
    
    const dfs=(s)=>{
        if(s.length>5) return;
        if(word==s) {
            answer=cnt;
           // flag=true;
            return;
        }
        cnt++;
        for(let a of alph) {
            dfs(s+a);
        }
    }
    
    dfs("");
    return answer;
}
