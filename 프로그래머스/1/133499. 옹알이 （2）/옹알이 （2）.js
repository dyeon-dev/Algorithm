function solution(babbling) {
    var answer = 0;
    const arr = [ "aya", "ye", "woo", "ma" ]
    for (let i = 0; i < babbling.length; i++) {
        let word = babbling[i];
        
        for (let j = 0; j < arr.length; j++) {
            if (word.includes(arr[j].repeat(2))) break;
                
            word = word.split(arr[j]).join(" ");
        }
       
        if (word.split(" ").join("").length == 0) answer++;
    }

    return answer;
}