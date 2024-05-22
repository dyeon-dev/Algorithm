import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int ans=0;
        int[] arr = new int[n];
        int[] D = new int[arr.length];
        D[0]=1;
        for (int i = 0; i < n; i++) {
            arr[i]=sc.nextInt();
        }
        for (int i = 1; i < n; i++) {
            int max=0;
            for (int j = i-1; j >= 0; j--) {
                if (arr[j]<arr[i] && D[j]>max) max=D[j];
            }
            D[i]=max+1;
            ans=Math.max(ans, D[i]);
        }
        System.out.println(ans);
    }
}
