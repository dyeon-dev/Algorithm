import java.util.*;

public class Main {
    // 재귀로 모든 노드에 벽을 3개 세운다
    // 바이러스를 bfs로 퍼뜨린다 (방문하지 않은 노드는 안전영역)
    // 0의 갯수를 구한다
    // -> 이 값을 max값과 비교하여 최대값을 구한다

    public static boolean[][] visited;
    public static int[][] A;
    public static int n, m;

    public static int max=0;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        m = sc.nextInt();
        A = new int[n][m];
        // 배열 초기화
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                A[i][j] = sc.nextInt();
            }
        }
        recursive(0);
        System.out.println(max);
    }
    // 벽을 3개 세우면

    public static void recursive(int index) {
        // 벽 3칸을 세웠을 때 bfs를 실행해서 바이러스를 퍼뜨린다
        if (index==3) {
            int count = bfs();
            max=Math.max(max, count);
            return;
        }

        // 빈칸이면 Index=0일때 1로 바꿔보고 index=2일때도 1로 바꿔보고 index=3일때도 1로 바꿔보며 벽을 세운다
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (A[i][j]==0) {
                    A[i][j]=1;
                    recursive(index+1);
                    A[i][j]=0;
                }
            }
        }
    }

    public static int bfs() {
        Queue<int[]> q = new LinkedList<>();
        visited = new boolean[n][m];
        // 바이러스부터 큐 시작
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (A[i][j]==2) {
                    q.add(new int[]{i,j});
                    visited[i][j] = true;
                }
            }
        }

        int[] dx = {0, 0, 1, -1};
        int[] dy = {1, -1, 0, 0};

        while (!q.isEmpty()) {
            int[] now = q.poll();
            // 현재 위치에서 상하좌우로 이동
            for (int i = 0; i < 4; i++) {
                int nx = now[0] + dx[i];
                int ny = now[1] + dy[i];
                // 범위 내에 있으면
                if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
                    // 0인 경우 방문 처리 후 큐에 삽입
                    if (A[nx][ny] == 0 && visited[nx][ny]==false) {
                        visited[nx][ny] = true;
                        q.add(new int[]{nx, ny});
                    }
                }
            }
        }

        // 방문한 노드 외 0인 구간 카운트 (안전영역 개수 구하기)
        // 0이면서 && 방문한 노드가 아닌 곳 => 안전영역
        int cnt = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (A[i][j]==0 && visited[i][j] == false) cnt++;
            }
        }
        return cnt;
    }
}