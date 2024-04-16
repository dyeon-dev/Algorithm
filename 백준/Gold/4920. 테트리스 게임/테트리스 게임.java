import java.util.*;
import java.io.*;

public class Main {
    static int n;
    static int max = Integer.MIN_VALUE;
    static int[][] map;

    static int input;
    static int[][][] d = {
            {
                    {0, 0, 0, 0}, {0, 1, 2, 3} // ㅣ
            },
            {
                    {0, 1, 2, 3}, {0, 0, 0, 0} // ㅡ
            },

            {
                    {0, 0, 1, 1}, {0, 1, 1, 2}
            },
            {
                    {0, 1, 1, 2}, {0, 0, -1, -1}
            },

            {
                    {0, 0, 0, 1}, {0, 1, 2, 2} // L
            },
            {
                    {0, 1, 2, 2}, {0, 0, 0, -1} // ㅢ
            },
            {
                    {0, 1, 1, 1}, {0, 0, 1, 2} // ㄱ
            },
            {
                    {0, 0, 1, 2}, {0, 1, 0, 0} //
            },

            {
                    {0, 1, 1, 1}, {0, -1, 0, 1} // ㅓ
            },
            {
                    {0, 1, 1, 2}, {0, 0, 1, 0} // ㅜ
            },
            {
                    {0, 0, 0, 1}, {0, 1, 2, 1} // ㅏ
            },
            {
                    {0, 1, 1, 2}, {0, -1, 0, 0} // ㅗ
            },

            {
                    {0, 0, 1, 1}, {0, 1, 1, 0} // ㅁ
            },
    };
    // 14500번의 경우 (ㅓ, ㅏ, ㅗ, ㅜ)를 제외하고 다른 모양은 전부 dfs로 탐색이 가능했지만,4920번의 경우 위 경우 이외에도 dfs로 탐색이 불가능한 경우가 있다. (예 : ㄱ 등등)
    // 대칭을 시키면 안되는 문제이다. 따라서 90도 회전만 되기 때문에 직접 블럭을 설정해줘야한다.
    // 따라서 dfs 탐색을 사용하지 않고 패턴을 미리 정해놓은 후 매칭시키는 방법
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int input = 1;
        while ((n = Integer.parseInt(br.readLine().trim())) != 0) {
            map = new int[n][n];
            int max = Integer.MIN_VALUE;
            for (int i = 0; i < n; i++) {
                StringTokenizer st = new StringTokenizer(br.readLine().trim());
                for (int j = 0; j < n; j++) {
                    map[i][j] = Integer.parseInt(st.nextToken());
                }
            }

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                for (int a = 0; a < d.length; a++) {
                    int sum=0;
                    // 상하좌우 탐색
                    for (int b = 0; b < 4; b++) {
                        int nx = i+d[a][0][b];
                        int ny = j+d[a][1][b];
                        if (nx>=0 && ny>=0 && nx<n && ny<n) {
                            sum+=map[nx][ny];
                        } else {
                            sum=Integer.MIN_VALUE;
                            break;
                        }
                    }
                    max=Math.max(max, sum);
                }
            }
        }
        System.out.println(input + ". " + max);
        input++;
    }
}
}