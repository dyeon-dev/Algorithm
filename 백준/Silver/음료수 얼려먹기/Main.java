import java.util.*;

public class Main {

    public static int[][] A;
    public static int n, m;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        m = sc.nextInt();
        A = new int[n][m];

        sc.nextLine();

        // 배열 초기화
        for (int i = 0; i < n; i++) {
            String str = sc.nextLine();
            for (int j = 0; j < m; j++) {
                A[i][j] = str.charAt(j) - '0';
            }
        }

        // 모든 노드(위치)에 대하여 음료수 채우기
        int cnt = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                // BFS가 몇번 수행되는지 알아야 하기 때문에 현재 위치에서 BFS 수행
                if (A[i][j] == 0) {
                    bfs(i, j);
                    cnt += 1;
                }
            }
        }
        System.out.println(cnt);
    }

    // DFS로 특정 노드를 방문하고 연결된 모든 노드들도 방문
    public static boolean dfs(int x, int y) {
        // 범위 내에 있으면
        if (x >= 0 && y >= 0 && x < n && y < m) {
            // 현재 노드를 아직 방문하지 않았다면
            if (A[x][y] == 0) {
                // 해당 노드를 방문처리
                A[x][y] = 1;
                // 상하좌우의 위치들도 모두 재귀적으로 호출
                dfs(x - 1, y);
                dfs(x, y - 1);
                dfs(x + 1, y);
                dfs(x, y + 1);
                return true;
            }
        }
        return false;
    }

    // BFS로 특정 노드를 방문하고 연결된 모든 노드들도 방문
    public static void bfs(int x, int y) {
        Queue<int[]> q = new LinkedList<>();
        q.add(new int[]{x, y});

        A[x][y] = 1; // 시작 노드 방문 표시
        int[] dx = {0, 1, 0, -1};
        int[] dy = {1, 0, -1, 0};

        while (!q.isEmpty()) {
            int[] now = q.poll();
            // 현재 위치에서 상하좌우로 이동
            for (int i = 0; i < 4; i++) {
                int nx = now[0] + dx[i];
                int ny = now[1] + dy[i];
                // 범위 내에 있으면
                if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
                    // 아직 방문하지 않은 인접한 노드인 경우 방문 처리 후 큐에 삽입
                    if (A[nx][ny] == 0) {
                        A[nx][ny] = 1;
                        q.add(new int[]{nx, ny});
                    }
                }
            }
        }
    }
}