class Solution {
    public int[] shortestToChar(String s, char c) {
        int[] answer=new int[s.length()];
        int p=10000;
        for(int i=0; i<s.length(); i++) {
            if(s.charAt(i) ==c) {
                p=0;
                answer[i]=p;
            }
            else {
                p++;
                answer[i]=p;
            }
        }
        p=10000;
        for(int i=s.length()-1; i>=0; i--) {
            if(s.charAt(i)==c) p=0;
            else {
                p++;
                answer[i]=Math.min(answer[i], p);
            }
        }
        return answer;
    }
}