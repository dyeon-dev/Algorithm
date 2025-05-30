function solution(name, yearning, photo) {
    let answer = [];
    let match = {};
    
    name.forEach((name, index) => {
        match[name]=yearning[index];
    })
                 
    for(let i=0; i<photo.length; i++) {
        let sum=0;
        let person = photo[i];
        for(let j=0; j<person.length; j++) {
            if(match[person[j]]) sum+=match[person[j]]
        }
        answer.push(sum)
    }
    return answer;
}