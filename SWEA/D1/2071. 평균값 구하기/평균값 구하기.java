import java.util.*;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int i = 0; i < T; i++) {
            float sum = 0;
            int ans = 0;
            for (int j = 0; j < 10; j++) {
                int n = sc.nextInt();
                sum+=n;
                ans = Math.round(sum/10);
            }
            System.out.println("#"+(i+1)+" "+ans);
        }
    }
}