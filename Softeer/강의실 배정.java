import java.util.*;
public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] arr = new int[n][2];

        for (int i = 0; i < n; i++) {
            arr[i][0] = sc.nextInt();
            arr[i][1] = sc.nextInt();
        }
        Arrays.sort(arr, (a,b) -> {
            if(a[1]!=b[1]) return a[1]-b[1];
            else return a[0]-b[0];
        });

        int now = arr[0][1];
        int ans = 1;
        for (int i = 1; i < n; i++) {
            if (now<=arr[i][0]) {
                ans++;
                now = arr[i][1];
            }
        }
        System.out.println(ans);
    }
}
