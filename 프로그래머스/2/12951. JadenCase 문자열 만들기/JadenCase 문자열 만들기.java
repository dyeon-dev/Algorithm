class Solution {
    public String solution(String s) {
        String answer = "";
        String[] str=s.split(" ");
        for(int i=0; i<str.length; i++) {
            // 문자열 길이가 0이라면(공백이라면)
            if(str[i].length()==0) answer+=" ";
            // 문자가 있다면
            else {
                answer+=str[i].substring(0,1).toUpperCase();
                answer+=str[i].substring(1,str[i].length()).toLowerCase();
                answer+=" ";
            }
        }
        // 입력받은 문자열의 맨 마지막이 " "라면 바로 answer 반환
        if(s.substring(s.length()-1,s.length()).equals(" ")) return answer;
        // 맨 마지막에 " " 제거하고 반환
        return answer.substring(0,answer.length()-1);
    }
}