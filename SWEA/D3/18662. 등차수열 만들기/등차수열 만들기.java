import java.util.*;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 1; t <= T; t++) {
            double a = sc.nextInt();
            double b = sc.nextInt();
            double c = sc.nextInt();

            double ans =0;

            if (b-a==c-b) ans=0;
            else ans=Math.abs(b-(a+c)/2);
            System.out.println("#" + t + " " + ans);
        }
    }
}
