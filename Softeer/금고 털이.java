import java.util.*;
import java.io.*;

public class Main {
    public static void main(String args[]) throws Exception {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(in.readLine());

        int W = Integer.parseInt(st.nextToken());
        int N = Integer.parseInt(st.nextToken());

        int[][] info = new int[N][2];
        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(in.readLine());
            info[i][0] = Integer.parseInt(st.nextToken());
            info[i][1] = Integer.parseInt(st.nextToken());
        }

        Arrays.sort(info, (o1, o2) -> o2[1] - o1[1]);

        int answer = 0;

        for (int i = 0; i < N; i++) {
            if (W <= info[i][0]) {
                answer += W * info[i][1];
                break;
            } else {
                answer += info[i][0] * info[i][1];
                W -= info[i][0];
            }
        }
        System.out.println(answer);
    }
}
