import java.util.*;

public class Main {
    static int n, m;
    static char[][] map;
    static boolean[][] visited;
    static int[] dx = {0, 0, 1, -1};
    static int[] dy = {1, -1, 0, 0};

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        m = sc.nextInt();
        map = new char[n][m];
        visited = new boolean[n][m];

        int startX = 0, startY = 0;
        for (int i = 0; i < n; i++) {
            String s = sc.next();
            for (int j = 0; j < m; j++) {
                map[i][j] = s.charAt(j);
                // E인 지점부터 탐색 시작
                if (map[i][j] == 'E') {
                    startX = i;
                    startY = j;
                }
            }
        }
        int ans = bfs(startX, startY);
        System.out.println(ans);
    }

    static int bfs(int startX, int startY) {
        Queue<int[]> queue = new LinkedList<>();
        // 거리 계산을 위한 배열 선언
        int[][] distance = new int[n][m];
        // Integer.MAX_VALUE'로 초기화하여 방문하지 않은 좌표로 세팅
        for (int[] row : distance) {
            Arrays.fill(row, Integer.MAX_VALUE);
        }

        // 시작 지점 좌표 큐에 삽입
        queue.add(new int[]{startX, startY});
        // 시작 지점 방문 처리
        visited[startX][startY] = true;
        // 시작 지점 0으로 초기화
        distance[startX][startY] = 0;

        while (!queue.isEmpty()) {
            // 현재 좌표 가져오기
            int[] now = queue.poll();
            int x = now[0], y = now[1];
            // 현재 좌표의 거리 설정
            int currentDistance = distance[x][y];

            for (int i = 0; i < 4; i++) {
                // 방향 이동을 위해 현재 좌표 업데이트
                int nx = x, ny = y;

                // 현재 방향으로 슬라이드
                while (true) {
                    nx += dx[i];
                    ny += dy[i];

                    // 범위를 벗어나거나 바위에 부딪히면 슬라이드 멈춤
                    if (nx < 0 || ny < 0 || nx >= n || ny >= m || map[nx][ny] == 'R') {
                        // 범위를 벗어나기 전이나 바위에 부딪히기 전 마지막 유효한 위치로 이동시키기
                        nx -= dx[i];
                        ny -= dy[i];
                        break;
                    }
                }

                // 방문하지 않은 곳에서 슬라이드가 진행
                if (!visited[nx][ny]) {
                    // 현재 좌표 방문 처리
                    visited[nx][ny] = true;
                    // 현재 좌표의 거리 업데이트
                    distance[nx][ny] = currentDistance + Math.abs(nx - x) + Math.abs(ny - y);
                    queue.add(new int[]{nx, ny});

                    // 'P'의 좌표일 때 거리 출력
                    if (map[nx][ny] == 'P') {
                        return distance[nx][ny];
                    }
                }
            }
        }
        return -1; // 'P'에 도달할 수 없는 경우 -1 리턴
    }
}
