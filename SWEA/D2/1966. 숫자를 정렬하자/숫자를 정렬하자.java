import java.util.Arrays;
import java.util.Scanner;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for (int t=1; t<=T; t++) {
            int n = sc.nextInt();
            int[] arr = new int[n];

            for (int i = 0; i < n; i++) {
                arr[i]= sc.nextInt();
            }
            Arrays.sort(arr);

            System.out.print("#"+t+" ");
            for (int i = 0; i < n; i++) {
                System.out.print(arr[i]+ " ");
            }
            System.out.println();
        }
    }
}
