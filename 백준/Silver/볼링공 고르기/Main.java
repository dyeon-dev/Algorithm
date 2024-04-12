import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(); // 볼링공의 개수
        int m = sc.nextInt(); // 공의 최대 무게
        int[] A = new int[n];
        int result = 0; // 볼링공을 고르는 경우의 수

        for (int i = 0; i < n; i++) {
            A[i] =sc.nextInt();
        }
        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                if (A[i]!=A[j]) result+=1;
            }

        }
        System.out.println(result);
    }
}