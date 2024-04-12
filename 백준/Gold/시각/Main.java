import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // N을 입력받기
        int n = sc.nextInt();
        int result = 0; // 경우의 수

        for (int i = 0; i <= n; i++) {
            for (int j = 0; j < 60; j++) {
                for (int k = 0; k < 60; k++) {
                    if (i%10==3 || j/10==3 || j%10==3 || k/10==3 || k%10==3) result++;
                }
            }
        }
        System.out.println(result);
    }
}