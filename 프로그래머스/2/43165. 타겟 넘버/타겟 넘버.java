class Solution {
    int answer = 0;
    public int solution(int[] numbers, int target) {
        dfs(numbers, target, 0, 0);
        return answer;
    }
    public void dfs(int[] numbers, int target, int sum, int depth) {
        if(depth==numbers.length) {
            if(target==sum) {
            answer++;
            }
        }
         else {
             int plus = sum+numbers[depth];
             int minus = sum-numbers[depth];
            dfs(numbers, target, plus, depth+1);
            dfs(numbers, target, minus, depth+1);
        }
    }
    
}