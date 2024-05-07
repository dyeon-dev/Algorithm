import java.util.*;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 1; t <= T; t++) {
            int n = sc.nextInt();
            String s1 = sc.next();
            String s2 = sc.next();
            int ans = 0;

            for (int i = 0; i < n; i++) {
                if (s1.charAt(i)==s2.charAt(i)) ans++;
            }
            System.out.println("#" + t + " " + ans);
        }
    }
}
