import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int k = sc.nextInt();
        int[] w=  new int[n+1];
        int[] v= new int[n+1];
        int[][] D = new int[n+1][k+1];
        for (int i = 1; i <= n; i++) {
           w[i] = sc.nextInt();
           v[i] = sc.nextInt();
        }
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= k; j++) {
                if (w[i]>j) D[i][j]=D[i-1][j];
                else D[i][j]=Math.max(D[i-1][j], D[i-1][j-w[i]]+v[i]);
            }
        }
        System.out.println(D[n][k]);
    }
}
