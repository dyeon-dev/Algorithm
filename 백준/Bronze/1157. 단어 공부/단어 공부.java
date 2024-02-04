import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        String s = sc.next().toUpperCase();
        int[] cnt = new int[26];

        for(int i=0; i<s.length(); i++) {
            cnt[s.charAt(i)-'A']++;
        }

        int max=0;
        char answer='?';
        for(int i=0; i<cnt.length; i++) {
            if(max<cnt[i]) {
                max=cnt[i]; // 가장 큰 중복값을 max에 저장
                answer= (char)(i+'A'); // 해당 위치 알파벳을 알아내기 위함
            } else if(max==cnt[i]) answer = '?';
        }
        System.out.print(answer);
    }
}