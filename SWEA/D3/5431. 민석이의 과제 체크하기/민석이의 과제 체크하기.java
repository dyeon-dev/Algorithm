import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int T = sc.nextInt();
        for(int t = 1; t <= T; t++) {
            int n = sc.nextInt();
            int k = sc.nextInt();
            int[] arr = new int[k+1]; // 제출한 사람
            int[] ans = new int[n-k];
            boolean[] num = new boolean[n+1];

            for (int i = 1; i <= k; i++) {
                arr[i] = sc.nextInt();
                num[arr[i]] = true;
            }

            int idx=0;
            for (int i = 1; i <= n; i++) {
                if (!num[i]) ans[idx++]=i;
            }
            System.out.print("#" + t + " ");
            for (int i = 0; i < ans.length; i++) {
                System.out.print(ans[i]+" ");
            }
            System.out.println();
        }
    }
}
