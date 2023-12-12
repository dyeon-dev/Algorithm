class Solution {
    public int compress(char[] chars) {
        
        String answer="";
        char prev = ' ';
        int cnt=1;
        
        for(int i=0; i<chars.length; i++) {
            char ch = chars[i];
            if(ch == prev) cnt++;
            else {
                if(cnt>1) answer+=cnt;
                answer += ch;
                prev = ch;
                cnt = 1;
            }
            if(i == chars.length -1 && cnt > 1) answer += cnt;    
        }
        System.out.println(answer);
         for (int i = 0; i < answer.length(); i++) {
             chars[i] = answer.charAt(i);
         }
         return answer.length();
    }
}