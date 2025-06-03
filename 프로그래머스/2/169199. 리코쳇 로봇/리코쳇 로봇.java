import java.util.*;

class Solution {
    int n, m;
    int answer = -1;
    String[] board;

    public int solution(String[] board) {
        this.board = board;
        n = board.length;
        m = board[0].length();

        for(int i=0; i<n; i++) {
            for(int j=0; j<m; j++) {
                if(board[i].charAt(j)=='R') {
                    bfs(i, j);
                    break;
                }
            }
        }
        return answer;
    }
    private void bfs(int x, int y) {
        int[] dx = {0,0,1,-1};
        int[] dy = {1,-1,0,0};
        int[][] visited = new int[n][m];
        visited[x][y]=1;
        
        Queue<int[]> q = new LinkedList<>();
        q.add(new int[] {x, y});
        
        while(!q.isEmpty()) {
            int[] now = q.poll();
            
            if(board[now[0]].charAt(now[1])=='G') {
                answer = visited[now[0]][now[1]]-1;
                return;
            }
            
            for(int i=0; i<4; i++) {
                int nx = now[0];   
                int ny = now[1];
                while(true) {
                    int tx = nx+dx[i];
                    int ty = ny+dy[i];
                    if(tx>=0 && ty>=0 && tx<n && ty<m && board[tx].charAt(ty)!='D') {
                        nx = tx;
                        ny = ty;
                    } else break;
                }
                if (visited[nx][ny]==0) {
                    visited[nx][ny]=visited[now[0]][now[1]]+1;
                    q.add(new int[] {nx, ny});
                }
                
            }
        }
    }
}
