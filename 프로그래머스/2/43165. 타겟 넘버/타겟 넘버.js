function solution(numbers, target) {
    let ans = 0;
    function dfs(sum, depth) {
        if(depth==numbers.length) {
            if(sum==target) {
                ans++;
            }
            return;
        }
        let plus = sum+numbers[depth];
        let minus = sum-numbers[depth];
        dfs(plus, depth+1);
        dfs(minus, depth+1);
    }
    dfs(0, 0);
    return ans;
}