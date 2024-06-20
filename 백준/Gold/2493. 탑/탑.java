import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws NumberFormatException, IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        StringTokenizer s = new StringTokenizer(br.readLine());
        int[] arr = new int[n+1];
        int[] ans = new int[n+1];

        for (int i = 1; i <= n; i++) {
            arr[i]=Integer.parseInt(s.nextToken());
        }
       Stack<Integer> st = new Stack<>();
       // st.push(n);
        for (int i = 1; i <= n; i++) {
            while (!st.isEmpty()) {
                if ( arr[st.peek()] >= arr[i]) {
                    ans[i] = st.peek();
                    break;
                }
                st.pop();
            }
            st.push(i);
        }

        StringBuilder sb = new StringBuilder();
        for (int i = 1; i <= n; i++) {
            sb.append(ans[i]).append(' ');
        }
        System.out.println(sb);
    }
}