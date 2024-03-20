import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int m = scanner.nextInt();
        int[] arr = new int[n];

        arr[0] = scanner.nextInt();
        for(int i = 1; i<n; i++){
            arr[i] = arr[i-1] + scanner.nextInt();
        }

        int max = arr[m-1];
        for(int i = m; i<n; i++){
            max = Math.max(arr[i] - arr[i - m], max);
        }

        System.out.println(max);
    }
}