import java.util.Arrays;
import java.util.Scanner;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for (int t=1; t<=T; t++) {
            int[] n = new int[10];
            for (int i = 0; i < 10; i++) {
                n[i] = sc.nextInt();
            }
            Arrays.sort(n);
            int[] newArray = Arrays.copyOfRange(n, 1, n.length-1);
            int sum=0;
            int ans = 0;
            for (int i = 0; i < newArray.length; i++) {
                sum+=newArray[i];
                ans=(int)Math.round(sum/8.0);
            }
            System.out.println("#"+t+" "+ans);
        }
    }
}
