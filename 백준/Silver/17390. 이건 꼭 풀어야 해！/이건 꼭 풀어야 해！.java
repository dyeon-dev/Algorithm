import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] nm = br.readLine().split(" ");
        int n = Integer.parseInt(nm[0]);
        int m = Integer.parseInt(nm[1]);
        int[] arr = new int[n+1];

        String[] input = br.readLine().split(" ");
        for(int i = 1; i <= n; i++) {
            arr[i] = Integer.parseInt(input[i-1]);
        }

        Arrays.sort(arr);

        // Compute cumulative sum
        for(int i = 1; i <= n; i++) {
            arr[i] += arr[i-1];
        }

        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < m; i++) {
            String[] ab = br.readLine().split(" ");
            int a = Integer.parseInt(ab[0]);
            int b = Integer.parseInt(ab[1]);
            sb.append((arr[b] - arr[a-1]) + "\n");
        }
        System.out.print(sb.toString());
    }
}
