import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        int ans = 1;
        for (int i = 0; i < n; i++) {
            arr[i]=sc.nextInt();
        }
        int right = arr[n-1];
        for (int i = n-1; i >= 0; i--) {
            if (arr[i]>right) {
                ans++;
                right = arr[i];
            }
        }
        System.out.println(ans);
    }
}
