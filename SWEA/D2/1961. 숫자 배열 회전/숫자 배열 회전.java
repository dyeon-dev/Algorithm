import java.util.Arrays;
import java.util.Scanner;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for (int t=1; t<=T; t++) {
            int n = sc.nextInt();
            int[][] arr = new int[n][n];
            int[][] ans = new int[n][n];

            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    arr[i][j] = sc.nextInt();
                }
            }

            System.out.println("#"+t);
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    System.out.print(arr[n-j-1][i]);
                }
                System.out.print(" ");
                for (int j = 0; j < n; j++) {
                    System.out.print(arr[n-i-1][n-j-1]);
                }
                System.out.print(" ");
                for (int j = 0; j < n; j++) {
                    System.out.print(arr[j][n-i-1]);
                }
                System.out.println();
            }
        }
    }
}
