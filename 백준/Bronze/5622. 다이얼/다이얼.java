import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        int cnt = 0;

        for(int i=0; i<s.length(); i++) {
            char c = s.charAt(i);
            if(c>='A' && c<='C') cnt+=3;
            else if(c>='D' && c<='F') cnt+=4;
            else if(c>='G' && c<='I') cnt+=5;
            else if(c>='J' && c<='L') cnt+=6;
            else if(c>='M' && c<='O') cnt+=7;
            else if(c>='P' && c<='S') cnt+=8;
            else if(c>='T' && c<='V') cnt+=9;
            else if(c>='W' && c<='Z') cnt+=10;
        }
        System.out.print(cnt);
    }
}