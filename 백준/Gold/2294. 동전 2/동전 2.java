import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int k = sc.nextInt();
        int[] v=  new int[n+1];
        int[] D = new int[k+1];
        for (int i = 1; i <= n; i++) {
           v[i] = sc.nextInt(); // 동전의 가치
        }
        for (int i = 1; i <= k; i++) {
            D[i] = Integer.MAX_VALUE - 1;
        }
        for (int i = 1; i <= n; i++) {
            for (int j = v[i]; j <= k; j++) {
                D[j]=Math.min(D[j], D[j-v[i]]+1);
            }
        }
        if (D[k]==Integer.MAX_VALUE - 1) System.out.println(-1);
        else System.out.println(D[k]);
    }
}
