class Solution {
    public int solution(String s) {
        int answer = 0;
        
        char firstC = s.charAt(0); // 첫번재 문자 
        
        int firstCnt=0;
        int nextCnt=0;
        for(int i=0; i<s.length(); i++) {
            char ch = s.charAt(i);
            // 첫번째 문자와 다음문자가 같을 경우
            if(firstC==ch) firstCnt++;
            // 첫번째 문자와 다음문자가 다를 경우
            else nextCnt++;
            //System.out.println(ch+" "+firstCnt+" "+nextCnt);
            // answer를 카운팅해주고 다음 문자 탐색
            if(firstCnt==nextCnt) {
                answer++;
                firstCnt=0;
                nextCnt=0;
                if(i+1<s.length()) firstC = s.charAt(i+1);
            
            } else if(i==s.length()-1) answer++;
            
        }
    
        return answer;
    }
}