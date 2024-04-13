```java
​public class Solution {
    public String compress(String s) {
        String answer="";
        s += ' ';
        int cnt=1;
        for (int i = 0; i < s.length()-1; i++) {
            if (s.charAt(i)==s.charAt(i+1)) cnt++;
            else {
                // 이전 문자열과 다르면
                // 문자열 압축 시작
                answer+=s.charAt(i);
                if (cnt>1) answer+=String.valueOf(cnt);
                cnt=1;
            }
        }
        return answer;
    }
}
```
