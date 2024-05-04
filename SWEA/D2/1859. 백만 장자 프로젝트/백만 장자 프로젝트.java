import java.util.*;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t=1; t<=T; t++) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }
            long max=Long.MIN_VALUE;
            long ans=0;
            for (int i = n-1; i >= 0; i--) {
                if (arr[i]>max) {
                    max=arr[i];
                } else {
                    ans+=max-arr[i];
                }
            }
            System.out.println("#"+t+" "+ans);
        }
    }
}
