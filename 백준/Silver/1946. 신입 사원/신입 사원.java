import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws IOException  {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine()); // 테스트케이스

        for (int t = 0; t < T; t++) {
            int n = Integer.parseInt(br.readLine());
            int[][] rank = new int[n][2];

            for (int i = 0; i < n; i++) {
                String[] str = br.readLine().split(" ");
                rank[i][0] = Integer.parseInt(str[0]);
                rank[i][1] = Integer.parseInt(str[1]);
            }

            // Comparator 익명 클래스
            Arrays.sort(rank, new Comparator<int[]>() {
                @Override
                public int compare(int[] o1, int[] o2) {
                    return o1[0]-o2[0]; // 첫번째 숫자 기준 오름차순
                    // return o2[0]-o1[0]; // 첫번째 숫자 기준 내림차순
                    // return o1[1]-o2[1]; // 두번째 숫자 기준 오림차순
                    // return o2[1]-o1[1]; // 두번째 숫자 기준 내림차순

                }
            }); // 서류 등수 오름차순

            int top = rank[0][1]; // 서류 1등의 면접 순위
            int cnt = 0;
            for (int i = 1; i < n; i++) {
                if (top<rank[i][1]) {
                    // 탈락할 경우 (서류 1등 면접 순위보다 낮으면)
                    cnt++;
                    continue;
                }
                top = rank[i][1];
            }
            System.out.println(n-cnt);
        }
    }
}