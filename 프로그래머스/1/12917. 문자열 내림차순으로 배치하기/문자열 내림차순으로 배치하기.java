import java.util.*;

class Solution {
    public String solution(String s) {
        String answer = "";
        String[] str = s.split("");
        Arrays.sort(str, Collections.reverseOrder());
        for(String ans : str) {
            answer+=ans;
        }
        return answer;
    }
}