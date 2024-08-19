import java.util.*;
// 방문했던 노드를 다시 방문해야 함
class Solution {
    int[] gInfo;
    int[][] gEdges;
    int max = 0;
    
    public int solution(int[] info, int[][] edges) {
        gInfo=info;
        gEdges=edges;
        boolean[] visited = new boolean[info.length];
        dfs(0, visited, 0, 0);

        return max;
    }
    void dfs(int p, boolean[] visited, int s, int w) {
        visited[p]=true;
        if(gInfo[p]==0) {
            s++;
            max=Math.max(max, s);
        } else {
            w++;
        }
        
        if(s<=w) return;
        
        for(int[] edge: gEdges) {
            if (visited[edge[0]] && !visited[edge[1]]) {
                boolean[] nextVisited=new boolean[visited.length];
                for(int i=0; i<visited.length; i++) {
                    nextVisited[i]=visited[i];
                }
                dfs(edge[1], nextVisited, s, w);
            }
        }
    }
}