import java.util.*;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 1; t <= T; t++) {
            String n = sc.next();
            int ans=0;
            char before='0';
            for (int i = 0; i < n.length(); i++) {
                if (before != n.charAt(i)) {
                    before = n.charAt(i);
                    ans++;
                }
            }
            System.out.println("#" + t + " " + ans);
        }
    }
}
