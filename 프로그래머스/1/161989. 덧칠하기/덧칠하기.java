class Solution {
    public int solution(int n, int m, int[] section) {
        int answer = 0;
        int start = section[0];
        answer++;
        
        for(int x:section) {
            if(start+m<=x) {
                start=x;
                answer++;
            }
        }
        
        return answer;
    }
}