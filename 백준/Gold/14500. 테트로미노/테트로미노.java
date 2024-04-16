import java.util.*;

public class Main {
    static int[] dx = {0,0,1,-1};
    static int[] dy = {1,-1,0,0};
    static int n,m;
    static int max = Integer.MIN_VALUE;
    static int[][] map;
    static boolean[][] visited;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        m = sc.nextInt();
        map = new int[n][m];
        visited = new boolean[n][m];

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                map[i][j] = sc.nextInt();
            }
        }
        
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                visited[i][j]=true;
                dfs(i,j,map[i][j],1);
                visited[i][j]=false;
            }
        }
        System.out.println(max);
    }
    public static void dfs(int row, int col, int sum, int cnt) {
        if(cnt==4) {
            max=Math.max(max, sum);
            return;
        }
        for(int i=0; i<4; i++) {
            int nx = row+dx[i];
            int ny = col+dy[i];
            if(nx>=0 && ny>=0 && nx<n && ny<m && !visited[nx][ny]) {
                if(cnt==2) {
                    visited[nx][ny]=true;
                    dfs(row, col, sum+map[nx][ny],cnt+1);
                    visited[nx][ny]=false;
                }
                visited[nx][ny]=true;
                dfs(nx, ny, sum+map[nx][ny],cnt+1);
                visited[nx][ny]=false;
            }
        }
    }
}
