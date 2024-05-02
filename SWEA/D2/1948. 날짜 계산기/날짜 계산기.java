import java.util.Arrays;
import java.util.Scanner;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        int cal[] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        for (int t=1; t<=T; t++) {
            int m1 = sc.nextInt();
            int d1 = sc.nextInt();
            int m2 = sc.nextInt();
            int d2 = sc.nextInt();
            int ans = 1;
            // 같은 달일때
            if (m1==m2) ans+=d2-d1;
            // 다른 달일때
            else {
                ans+=cal[m1]-d1+d2;
                // 월 사이의 달 더해주기
                for (int i = m1+1; i < m2; i++) {
                    ans+=cal[i];
                }
            }
            System.out.println("#"+t+" "+ans);
        }
    }
}
