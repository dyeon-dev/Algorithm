import java.util.*;
class Solution {
    public int solution(int[][] maps) {
        int answer = 0;
        
        boolean[][] visited = new boolean[maps.length][maps[0].length];
        
        Queue<int[]> q = new LinkedList<>();
        q.add(new int[] {0,0});
        visited[0][0] = true;
        
        while(!q.isEmpty()) {
            int[] now = q.poll();
            int[] dx = {-1,1,0,0};
            int[] dy = {0,0,-1,1};
            
            for(int i=0; i<4; i++) {
                int nx = now[0]+dx[i];
                int ny = now[1]+dy[i];
                if(nx>=0 && ny>=0 && nx<=maps.length-1 && ny<=maps[0].length-1 
                   && maps[nx][ny]==1 && !visited[nx][ny]) {
                    visited[nx][ny]=true;
                    maps[nx][ny] = maps[now[0]][now[1]]+1;
                    q.add(new int[] {nx, ny});
                }
            }
        }
        answer=maps[maps.length-1][maps[0].length-1];
        if(!visited[maps.length-1][maps[0].length-1]) return -1;
        return answer;
    }
}