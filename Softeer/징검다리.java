import java.util.*;
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int ans=0;

        int n = sc.nextInt();
        int[] arr = new int[n];
        int[] d = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i]=sc.nextInt();
        }
        Arrays.fill(d, 1);

        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (arr[i]>arr[j]) d[i]=Math.max(d[i], d[j]+1);
            }
        }
        for (int i = 0; i < n; i++) {
            ans=Math.max(ans, d[i]);
        }
        System.out.println(ans);
    }
}
