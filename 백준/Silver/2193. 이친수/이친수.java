import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        //N(1 ≤ N ≤ 90) 정수가 90자리 넘어가면 int 로 불가 -> long
        long[][] D = new long[n+1][2];
        D[1][0]=0;
        D[1][1]=1;
        for (int i = 2; i <= n; i++) {
            D[i][0] = D[i-1][0]+D[i-1][1];
            D[i][1] = D[i-1][0];
        }
        System.out.println(D[n][0]+D[n][1]);
    }
}
