function solution(word) {
    let answer = 0;
    let alph = ["A", "E", "I", "O", "U"];
    let flag = false;
    let cnt = 0;
    
    function dfs(str) {
        if(str.length>5 || flag) return;
        
        if(str===word) {
            answer = cnt;
            flag=true;
            return;
        }

        cnt+=1;
        
        for(let i=0; i<5; i++) {
            dfs(str+alph[i]);
        }
    }
    
    dfs("");
    return answer;
}

