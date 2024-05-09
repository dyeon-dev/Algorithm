import java.util.*;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 1; t <= T; t++) {
            int n = sc.nextInt();
            int[][] arr = new int[n][n];
            for (int i = 0; i < n; i++) {
                String str = sc.next();
                for (int j = 0; j < n; j++) {
                    arr[i][j] = str.charAt(j)-'0';
                }
            }

            int ans=0;

            int midL = n/2;
            int midR = n/2;

            for (int i = 0; i < n; i++) {
                for (int j = midL; j <= midR; j++) {
                    ans+=arr[i][j];
                }
                if (i<n/2) {
                    midL--;
                    midR++;
                } else {
                    midL++;
                    midR--;
                }
            }
            System.out.println("#" + t + " " + ans);
        }
    }
}
