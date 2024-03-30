import java.util.*;

public class Main {
    static int N, M;
    static int[][] A;
    static int[] dx = {1, 0, -1, 0};
    static int[] dy = {0, 1, 0, -1};

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        N = sc.nextInt();
        M = sc.nextInt();
        A = new int[N][M];

        for (int i = 0; i < N; i++) {
            String str = sc.next();
            for (int j = 0; j < M; j++) {
                A[i][j] = str.charAt(j) - '0';
            }
        }
        BFS();
        System.out.println(A[N - 1][M - 1]);
    }

    static void BFS() {
        Queue<int[]> queue = new LinkedList<>();
        Set<String> visited = new HashSet<>();
        queue.add(new int[]{0, 0});
        visited.add("0-0");

        while (!queue.isEmpty()) {
            int[] now = queue.poll();
            int x = now[0];
            int y = now[1];

            for (int i = 0; i < 4; i++) {
                int nx = x + dx[i];
                int ny = y + dy[i];
                String key = nx + "-" + ny;

                if (nx >= 0 && ny >= 0 && nx < N && ny < M && !visited.contains(key) && A[nx][ny] != 0) {
                    A[nx][ny] = A[x][y] + 1;
                    queue.add(new int[]{nx, ny});
                    visited.add(key);
                }
            }
        }
    }
}
