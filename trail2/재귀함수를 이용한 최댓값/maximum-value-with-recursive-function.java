import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        System.out.print(findMax(arr, n-1));
    }
    public static int findMax(int[] arr, int idx) {
        if(idx==0) {
            return arr[0];
        }

        int max = findMax(arr, idx-1);
        if(max<arr[idx]) {
            return arr[idx];
        } else return max;
    }
}