import java.util.*;

class Solution {
    int n, m;
    int[][] map;
    public int solution(String[] maps) {
        int answer = -1;
        n = maps.length;
        m = maps[0].length();
        map = new int[n][m];

        int[] start = new int[2];
        int[] labor = new int[2];
        
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                char c = maps[i].charAt(j);
                if (c== 'S') {
                    start = new int[]{i, j};
                }
                if (c== 'L') {
                    labor = new int[]{i, j};
                }
            }
        }
        
        int res1 = bfs(start, 'L', maps);
        int res2 = bfs(labor, 'E', maps);
        
        if(res1==-1 || res2==-1) return -1;
        
        return res1+res2;
    }

    private int bfs(int[] start, char target, String[] maps) {
        Queue<int[]> q = new LinkedList<>();
        q.add(new int[]{start[0], start[1], 0});
        
        boolean[][] visited = new boolean[n][m];
        

        int[] dx = {0, 0, -1, 1};
        int[] dy = {1, -1, 0, 0};

        while (!q.isEmpty()) {
            int[] now = q.poll();
            int cx = now[0];
            int cy = now[1];
            int cnt = now[2];
            
            visited[cx][cy]=true;

            if (maps[cx].charAt(cy) == target) {
                return cnt;
            }

            for (int i = 0; i < 4; i++) {
                int nx = cx + dx[i];
                int ny = cy + dy[i];

                if (nx >= 0 && ny >= 0 && nx < n && ny < m &&
                    maps[nx].charAt(ny) != 'X' && !visited[nx][ny]) {
                    visited[nx][ny]=true;
                    q.add(new int[]{nx, ny, cnt+1});
                }
            }
        }

        return -1; // 도착 못함
    }
}
