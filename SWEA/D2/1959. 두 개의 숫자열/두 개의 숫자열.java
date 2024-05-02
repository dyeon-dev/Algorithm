import java.util.Arrays;
import java.util.Scanner;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for (int t=1; t<=T; t++) {
            int n = sc.nextInt();
            int m = sc.nextInt();
            int[] a = new int[n];
            int[] b = new int[m];

            for (int i = 0; i < n; i++) {
                a[i]=sc.nextInt();
            }
            for (int i = 0; i < m; i++) {
                b[i]=sc.nextInt();
            }

            int max = 0;
            // n<m -> a를 움직이면서 b와 곱해준다
            if (n<m) {
                for (int i = 0; i < m-n+1; i++) {
                    int ans=0;
                    for (int j = 0; j < n; j++) {
                        ans += a[j]*b[i+j];
                    }
                    max = Math.max(max, ans);
                }
            }

            // n>m -> b를 움직이면서 a와 곱해준다
            else if (n>m) {
                for (int i = 0; i < n-m; i++) {
                    int ans=0;
                    for (int j = 0; j < m; j++) {
                        ans += a[i+j]*b[j];
                    }
                    max = Math.max(max, ans);
                }
            }

            // n=m -> n의 개수만큼만 a와 b를 곱해준다
            else {
                int ans=0;
                for (int i = 0; i < n; i++) {
                    ans+=a[i]*b[i];
                }
                max = Math.max(max,ans);
            }
            System.out.println("#"+t+" "+max);
        }
    }
}
