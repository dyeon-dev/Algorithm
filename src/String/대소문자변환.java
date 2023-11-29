package String;

import java.util.Scanner;

class 대소문자변환 {
    public String solution(String str){
        String answer ="";
        for(char x : str.toCharArray()) {
            if(Character.isLowerCase(x)) answer+=Character.toUpperCase(x);
            else answer+=Character.toLowerCase(x);
        }
        return answer.toString();
    }

    public static void main(String[] args)
    {
        대소문자변환 T = new 대소문자변환();
        Scanner kb = new Scanner(System.in);
        String str = kb.next();
        System.out.print(T.solution(str));
    }
}
