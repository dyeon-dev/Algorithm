import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int result = 0;
        for (int i = 0; i < n; i++) {
            int value = 10001;
            for (int j = 0; j < m; j++) {
                int x = sc.nextInt();
                // 각 행에서 가장 작은 수를 찾는다
                value = Math.min(x,value);
            }
            // 가장 작은 수들 중에서 가장 큰 수 저장
            result = Math.max(result, value);
        }
        System.out.println(result);

    }
}