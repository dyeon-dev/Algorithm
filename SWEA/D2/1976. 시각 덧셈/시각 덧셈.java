import java.util.Scanner;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for (int t=1; t<=T; t++) {
            int h = sc.nextInt();
            int m = sc.nextInt();
            int plus_h = sc.nextInt();
            int plus_m = sc.nextInt();
            int ans_h = h+plus_h;
            int ans_m = m+plus_m;
            if (ans_h>12) ans_h-=12;
            if (ans_m>60) {
                ans_h++;
                ans_m-=60;
            }
            System.out.println("#"+t+" "+ans_h+" "+ans_m);
        }
    }
}
