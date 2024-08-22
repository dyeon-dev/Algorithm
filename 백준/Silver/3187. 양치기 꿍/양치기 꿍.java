import java.util.*;

public class Main {
    static int r, c, kCnt, vCnt, kTotal, vTotal;
    static boolean[][] visited;
    static char[][] arr;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        r = sc.nextInt();
        c = sc.nextInt();
        arr = new char[r][c];
        visited = new boolean[r][c];
        for (int i = 0; i < r; i++) {
            String s = sc.next();
            for (int j = 0; j < c; j++) {
                arr[i][j]=s.charAt(j);
            }
        }

        kTotal = 0;
        vTotal = 0;

        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                if (!visited[i][j] && (arr[i][j] == 'v' || arr[i][j] == 'k')) {
                    kCnt = 0;
                    vCnt = 0;
                    bfs(i, j);
                    if(vCnt<kCnt) kTotal+=kCnt;
                    else vTotal+=vCnt;
                }
            }
        }
        System.out.print(kTotal+" "+vTotal);
    }

    static void bfs(int x, int y) {
        Queue<int[]> q = new LinkedList<>();
        q.add(new int[] {x, y});
        visited[x][y]=true;

        if (arr[x][y] == 'k') kCnt++;
        if (arr[x][y] == 'v') vCnt++;

        int[] dx = {0,0,1,-1};
        int[] dy = {1,-1,0,0};

        while(!q.isEmpty()) {
            int[] now = q.poll();

            for (int i = 0; i < 4; i++) {
                int nx = now[0]+dx[i];
                int ny = now[1]+dy[i];
                if(nx>=0 && ny>=0 && nx<r && ny<c && arr[nx][ny]!='#' && !visited[nx][ny]) {
                    visited[nx][ny]=true;
                    q.add(new int[] {nx, ny});
                    if (arr[nx][ny] == 'k') kCnt++;
                    if (arr[nx][ny] == 'v') vCnt++;
                }
            }
        }
    }
}
