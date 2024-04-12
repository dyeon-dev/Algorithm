import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();

        int count0 = 0; // 0이 연속된 부분
        int count1 = 0; // 1이 연속된 부분

        // 첫번째 원소는 곧바로 연속된 부분으로 추가
        if (s.charAt(0)=='1') count0++;
        else count1++;

        // 이전 문자열과 다를 때 연속된 부분의 개수 추가
        for (int i = 0; i < s.length()-1; i++) {
            if (s.charAt(i)!=s.charAt(i+1)) {
                // 다음 수에서 1로 바뀌는 경우
                if (s.charAt(i+1)=='1') count0++;
                // 다음 수에서 0으로 바뀌는 경우
                else count1++;
            }
        }
        System.out.println(Math.min(count0,count1));
    }
}