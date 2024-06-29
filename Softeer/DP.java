/*
https://www.acmicpc.net/problem/12865 백준 12865와 유사한 DP 문제 
* */
import java.util.*;
public class Main{
    static int N,M,K;
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        N = sc.nextInt(); // 4
        M = sc.nextInt(); // 7
        K = sc.nextInt(); // 2
        int[] w = new int[N+1];
        int[] v = new int[N+1];
        int[][] dp = new int[N+1][M+1];
        for (int i = 1; i <= N; i++) {
            w[i] = sc.nextInt();
            v[i] = sc.nextInt();
        }
        for (int i = 1; i <= N; i++) {
            for (int j = 1; j <= M; j++) {
                if (w[i]>j) dp[i][j]=dp[i-1][j];
                else dp[i][j]=Math.max(dp[i-1][j], dp[i-1][j-w[i]]+v[i]);
            }
        }
        int ans=0;
        for (int i = 0; i < K; i++) {
            ans+=dp[N][M-i];
        }
        System.out.println(ans);
    }
}
