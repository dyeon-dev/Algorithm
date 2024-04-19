class Solution {
    public int solution(String t, String p) {
        int answer = 0;
        // p의 자릿수
        int len = p.length();
        // p를 숫자로 저장
        long numP = Long.parseLong(p);
        
        for(int i=0; i<t.length()-len+1; i++) {
            // t의 맨앞부터 p의 자릿수만큼 자르기
            long sub = Long.parseLong(t.substring(i, i+len));
            //System.out.println(sub);
            if(sub<=numP) answer++;
        }
        return answer;
    }
}