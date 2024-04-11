import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int k = sc.nextInt();
        int[] A = new int[n];
        int total = 0;
        for (int i = 0; i < n; i++) {
            A[i] = sc.nextInt();
        }
        Arrays.sort(A);
        int first = A[n-1];
        int second = A[n-2];

        // 가장 큰 수가 더해지는 횟수 계산
        int cnt = (m/(k+1))*k;
        cnt+=m%(k+1);

        int result = 0;
        result+=cnt*first;
        result+=(m-cnt)*second;

        System.out.println(result);
    }
}