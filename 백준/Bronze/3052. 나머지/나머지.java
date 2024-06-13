import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] rest = new int[10];
        boolean b;
        int cnt =0;
        for (int i = 0; i < rest.length; i++) {
            rest[i] = sc.nextInt()%42;
        }
        for (int i = 0; i < rest.length; i++) {
            b = false; // 기본값 초기화
            for (int j = i+1; j < rest.length; j++) {
                if(rest[i]==rest[j]) {
                    b=true; // 나머지가 같을 때 반복문 종료
                    break;
                }
            }
            if (!b) cnt++;
        }
        System.out.println(cnt);
    }
}