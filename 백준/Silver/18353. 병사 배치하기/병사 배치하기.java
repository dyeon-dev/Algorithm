import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int ans=0;

        int n = sc.nextInt();

        int[] arr = new int[n+1];
        for (int i = 1; i <= n; i++) {
            arr[i]=sc.nextInt();
        }

        int[] d = new int[n+1];

        for (int i = 1; i <= n; i++) {
            d[i]=1;
            for (int j = 1; j < i ; j++) {
                if (arr[j]>arr[i]) {
                    d[i]=Math.max(d[i], d[j]+1);
                }
            }
            ans=Math.max(ans, d[i]);
        }
        // 열외 병사 수 - 최장길이 부분수열 = 열외 수
        System.out.println(n-ans);
    }
}
