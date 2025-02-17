function solution(numbers) {
    let num = numbers.split("");
    let visited = new Array(num.length).fill(false);
    let result = new Set();

    dfs("", num, visited, result);
    
    let count = 0;
    for (let value of result) {
        if(value.charAt(0)!=0) {
            if (isSosu(value)) count++;
        }
    }
    
    return count;
}

// 순열 생성
function dfs(current, num, visited, result) {
    if (current.length > 0) {
        result.add(current);
    }

    for (let i = 0; i < num.length; i++) {
        if (!visited[i]) {
            visited[i] = true;
            dfs(current + num[i], num, visited, result);
            visited[i] = false;
        }
    }
}

// 소수 판별 함수 (제곱근까지만 검사)
function isSosu(x) {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; i++) {
        if (x % i === 0) return false;
    }
    return true;
}
