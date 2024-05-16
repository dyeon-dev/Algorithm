import java.util.*;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 1; t <= T; t++) {
            int n = sc.nextInt();
            double ans=0;
            for (int i = 0; i < n; i++) {
                double p = sc.nextDouble();
                int x = sc.nextInt();
                ans+= p*x;
            }
            System.out.printf("#"+t+" "+"%.6f", ans);
        }
    }
}
