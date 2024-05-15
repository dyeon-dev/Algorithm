import java.util.*;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        String[] num = {"ZRO", "ONE", "TWO", "THR", "FOR", "FIV", "SIX", "SVN", "EGT", "NIN"};
        for (int t = 1; t <= T; t++) {
            String s = sc.next();
            int n = sc.nextInt();
            int[] ans = new int[n];
            for (int i = 0; i < n; i++) {
                String tmp = sc.next();
                for (int j = 0; j < 10; j++) {
                    if (tmp.equals(num[j])) ans[i] = j;
                }
            }
            Arrays.sort(ans);
            System.out.print("#" + t+ " ");
            for (int i = 0; i < n; i++) {
                int tmp = ans[i];
                System.out.print(num[tmp]+" ");
            }
            System.out.println();
        }
    }
}
