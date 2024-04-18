import java.util.*;

class Solution {
    int answer = 0;
    public int solution(int n, int[][] computers) {
        int answer=0;
        boolean[] visited=new boolean[computers.length];
        for(int i =0; i<computers.length; i++) {
            visited[i]=false;
        }
        for(int i =0; i<computers.length; i++) {
            if(!visited[i]) {
                bfs(i, computers, visited);
                answer++;
            }
            
        }
        return answer;
    }
    public void dfs(int n, int[][] computers, boolean[] visited) {
        visited[n]=true;
        for(int i=0; i<computers.length; i++) {
            if(visited[i]==false && computers[n][i]==1) {
                dfs(i, computers, visited);
            }
        }
    }
    
    public void bfs(int n, int[][] computers, boolean[] visited) {
        Queue<Integer> q = new LinkedList<>();
        q.add(n);
        visited[n]=true;
        
        while(!q.isEmpty()) {
            int now = q.poll();
            for(int i=0; i<computers.length; i++) {
                if(!visited[i] && computers[now][i]==1) {
                visited[i]=true;
                q.add(i);
                }   
            }
        }
    }
    
}