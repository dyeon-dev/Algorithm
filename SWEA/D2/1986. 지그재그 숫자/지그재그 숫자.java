import java.util.Scanner;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for (int t=1; t<=T; t++) {
            int n = sc.nextInt();
            int ans = 0;
            for (int i = 0; i <= n; i++) {
                if (i%2==0) ans-=i;
                else ans+=i;
            }
            System.out.println("#"+t+" "+ans);
        }
    }
}
