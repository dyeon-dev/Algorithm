import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int T = sc.nextInt();
        for(int t = 1; t <= T; t++) {
            int n = sc.nextInt();
            int[][] ans = new int[n][n];
            for (int i = 0; i < n; i++) {
                for (int j = 0; j <= i; j++) {
                    if (i==j) ans[i][j] = 1;
                    else if (j==0) ans[i][j] = 1;
                    else ans[i][j] = ans[i-1][j-1]+ans[i-1][j];
                }
            }
            System.out.println("#" + t + " ");
            for (int i = 0; i < n; i++) {
                for (int j = 0; j <= i; j++) {
                    System.out.print(ans[i][j]+" ");
                }
                System.out.println();
            }
        }
    }
}
