class Solution {
    int answer = 0;
    public int solution(int n, int[][] computers) {
        boolean[] visited = new boolean[computers.length];
        for(int i=0; i<computers.length; i++) {
            visited[i]=false;
        }
        
        for(int i=0; i<computers.length; i++) {
            if(visited[i]==false) {
                answer++;
                dfs(i, computers, visited);
            }
        }
        return answer;
    }
    public void dfs(int n, int[][] computers, boolean[] visited) {
        visited[n]=true;
        for(int i=0; i<computers.length; i++) {
            if(!visited[i] && computers[n][i]==1) {
                dfs(i, computers, visited);
            } 
        }
    }
}