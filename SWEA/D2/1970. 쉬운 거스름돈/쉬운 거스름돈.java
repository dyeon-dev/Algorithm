import java.util.Scanner;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for (int t=1; t<=T; t++) {
            int n = sc.nextInt();

            int[] won = {50000, 10000, 5000, 1000, 500, 100, 50, 10};
            int[] ans = new int[8];

            for (int i = 0; i < 8; i++) {
                ans[i] = n/won[i]; // 값
                n = n%won[i]; // 나머지
            }
            System.out.println("#"+t+" ");
            for (int i = 0; i < 8; i++) {
                System.out.print(ans[i]+ " ");
            }
            System.out.println();
        }
    }
}
