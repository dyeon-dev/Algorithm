package String;

import java.util.Scanner;

class 문자찾기 {
    public int solution(String str, char t){
        int answer =0;
        str=str.toUpperCase();
        t=Character.toUpperCase(t);
//        System.out.println(str+ " "+t);

//        for(int i=0; i<str.length(); i++){
//            if(str.charAt(i)==t) answer++;
//        }
        // 문자 배열 객체 생성
        for(char x : str.toCharArray()) {
            if(x==t) answer++;
        }
        return answer;
    }

    public static void main(String[] args)
    {
        문자찾기 T = new 문자찾기();
        Scanner kb = new Scanner(System.in);
        String str=kb.next();
        char c=kb.next().charAt(0);

        System.out.println(T.solution(str, c));
    }
}