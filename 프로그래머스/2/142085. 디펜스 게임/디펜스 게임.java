import java.util.*;

class Solution {
    public int solution(int n, int k, int[] enemy) {
        int answer = 0;
        // 시간초과 스택 Stack<Integer> stack = new Stack<>();
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder()); // 큰 수부터 빠지도록
        
        for(int i=0; i<enemy.length; i++) {
            pq.add(enemy[i]);
            // stack.push(enemy[i]);
            n-=enemy[i];
            if(n<0) {
                if(k>0) {
                    // 지금까지 등장한 적 중 가장 큰 수에 무적권을 사용
                    k--;
                    n+=pq.poll();
                } else return answer;
            }
            answer++;
            
        }
        
        return answer;
    }
}