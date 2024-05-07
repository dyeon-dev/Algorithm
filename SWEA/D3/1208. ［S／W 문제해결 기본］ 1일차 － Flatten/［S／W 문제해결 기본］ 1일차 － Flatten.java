import java.util.*;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = 10;
        for (int t = 1; t <= T; t++) {
            int n = sc.nextInt(); // 덤프횟수
            int[] arr = new int[100];
            for (int i = 0; i < 100; i++) {
                arr[i]=sc.nextInt();
            }

            for (int i = 0; i < n; i++) {
                Arrays.sort(arr);
                arr[0]++;
                arr[99]--;
            }
            Arrays.sort(arr);
            int ans = arr[99]-arr[0];

            System.out.println("#" + t + " " + ans);
        }
    }
}
