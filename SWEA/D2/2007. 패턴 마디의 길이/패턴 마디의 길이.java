import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int T = sc.nextInt();
        for(int t = 1; t <= T; t++) {
            String s = sc.next();
            int ans = 0;
            for (int i = 1; i <= s.length(); i++) {
                if (s.substring(0, i).equals(s.substring(i, i + i))) {
                    ans=i;
                    break;
                }
            }
            System.out.println("#" + t + " "+ans);
        }
    }
}
