import java.util.*;
class Solution {
    // 논문 5편 인용횟수 [3,0,6,1,5]
    // 해당 논문의 인용횟수>=h회 이상 인용된 논문 개수 -> H-index
    // h를 늘려가면서 조건을 확인한다!
    public int solution(int[] citations) {
        int answer = 0;
        Arrays.sort(citations); // 0 1 3 5 6
        
        for(int i=0; i<citations.length; i++) {
            int h = citations.length-i; // 논문 개수
            if(citations[i]>=h) {
                answer=h;
                break;
            } 
        }
        
        return answer;
    }
}