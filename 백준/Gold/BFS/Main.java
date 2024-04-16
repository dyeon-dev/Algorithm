import java.util.*;

public class Main {

    static int n, m;
    static boolean visited[][];
    static int[][] map;
    static int[][] copyMap;
    static int[] dx = {0, 0, 1, -1};
    static int[] dy = {1, -1, 0, 0};

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        n = sc.nextInt();
        m = sc.nextInt();

        map = new int[n][m];
        visited = new boolean[n][m];
        copyMap = new int[n][m];

        for (int i = 0; i < n; i++) {
            String s = sc.next();
            for (int j = 0; j < m; j++) {
                char c = s.charAt(j);
                // 배열에 숫자로 저장
                if (c=='E') map[i][j]=0;
                else if (c=='R') map[i][j]=1;
                else if (c=='P') map[i][j]=3;
                else if (c=='.') map[i][j]=2;
            }
        }
        bfs();

        boolean reach = false;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (copyMap[i][j] != 0 && map[i][j] == 3) {
                    System.out.println(copyMap[i][j]);
                    reach=true;
                }
            }
        }
        if (!reach) System.out.println(-1);
    }

    public static void bfs() {
        Queue<int[]> q = new LinkedList<>();
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                copyMap[i][j]=map[i][j];
            }
        }
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (copyMap[i][j]==0) {
                    q.add(new int[]{i,j});
                    visited[i][j] = true;
                }
            }
        }

        while (!q.isEmpty()) {
            int now[] = q.poll();
            int x = now[0];
            int y = now[1];
            for (int i = 0; i < 4; i++) {
                int nx = x+dx[i];
                int ny = y+dy[i];
                if (nx>=0 && ny>=0 && nx<n && ny<m && copyMap[nx][ny]!=1 && !visited[nx][ny]) {
                    visited[nx][ny]=true;
                    copyMap[nx][ny]=copyMap[now[0]][now[1]]+1;
                    q.add(new int[] {nx, ny});
                }
            }
        }
    }
}
