import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int T = sc.nextInt();
        for(int t = 1; t <= T; t++) {
            int n = sc.nextInt();
            int k = sc.nextInt(); // 단어 길이
            int[][] map = new int[n][n];
            int ans =0;

            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    map[i][j]=sc.nextInt();
                }
            }

            for (int i = 0; i < n; i++) {
                int cnt =0;
                for (int j = 0; j < n; j++) {
                    if (map[i][j]==1) cnt++;
                    else {
                        if (cnt==k) ans++;
                        cnt=0;
                    }
                }
                if (cnt==k) ans++;
            }

            for (int i = 0; i < n; i++) {
                int cnt =0;
                for (int j = 0; j < n; j++) {
                    if (map[j][i]==1) cnt++;
                    else {
                        if (cnt==k) ans++;
                        cnt=0;
                    }
                }
                if (cnt==k) ans++;
            }

            System.out.println("#" + t + " "+ans);
        }
    }
}
