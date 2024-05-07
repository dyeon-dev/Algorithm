import java.util.*;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 1; t <= T; t++) {
            int n = sc.nextInt();

            String ans = "";

            if (n%2==0) ans="Alice";
            else ans="Bob";
            System.out.println("#" + t + " " + ans);
        }
    }
}
