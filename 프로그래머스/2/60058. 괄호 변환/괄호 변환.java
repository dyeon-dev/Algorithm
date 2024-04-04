import java.util.Stack;

class Solution {
    // 균형잡힌 괄호 문자열 인덱스 반환
    public int balancedIndex(String p) {
        int cnt =0;
        for(int i=0; i<p.length(); i++) {
            if(p.charAt(i)=='(') cnt+=1;
            else cnt-=1;
            if(cnt==0) return i;
        }
        return -1;
    }
    // 올바른 괄호 문자열 체크
    public boolean checkProper(String p) {
        int count = 0; // 왼쪽 괄호의 개수
        for (int i = 0; i < p.length(); i++) {
            if (p.charAt(i) == '(') count += 1;
            else {
                if (count == 0) { // 쌍이 맞지 않는 경우에 false 반환
                    return false;
                }
                count -= 1;
            }
        }
        return true; // 쌍이 맞는 경우에 true 반환
    }
    
    public String solution(String p) {
        String answer = "";
        if (p.equals("")) return answer;
        int index = balancedIndex(p);
        String u = p.substring(0, index+1);
        String v = p.substring(index+1);
        // 올바른 괄호가 맞다면 
        if(checkProper(u)) {
            answer = u + solution(v);
        }
        // 올바른 괄호가 아니라면
        else {
            answer="(";
            answer+=solution(v);
            answer+=")";
            u = u.substring(1, u.length()-1);
            String temp="";
            for(int i=0; i<u.length(); i++) {
                if(u.charAt(i)=='(') temp+=")";
                else temp+="(";
            }
            answer+=temp;
        }
        return answer;
    }
}