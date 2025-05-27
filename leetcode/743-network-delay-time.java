class Solution {
    private List<int[]>[] graph;
    private int[] dist;

    public int networkDelayTime(int[][] times, int n, int k) {
        createGraph(n, times);
        dijkstra(n, k);
        
        int res=0;

        for(int i=1; i<=n; i++) {
            if(dist[i]==Integer.MAX_VALUE) return -1;
            res = Math.max(res, dist[i]);
        }
        return res;
    }
    private void createGraph(int n, int[][] times) {
        graph = new List[n+1];
        
        for(int i=1; i<=n; i++) {
            graph[i] = new ArrayList<>();
        }
        for(int[] time:times) {
            graph[time[0]].add(new int[] {time[1], time[2]});
        }
    }
    private void dijkstra(int n, int k) {
        PriorityQueue<int[]> q = new PriorityQueue<>((a, b)->a[1]-b[1]);
        q.offer(new int[] {k, 0});

        dist = new int[n+1];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[k]=0;

        while(!q.isEmpty()) {
            int[] now = q.poll();
            for(int[] next: graph[now[0]]) {
                if(dist[next[0]]>now[1]+next[1]) {
                    dist[next[0]]=now[1]+next[1];
                    q.offer(new int[] {next[0], dist[next[0]]});
                }

            }
        }
    }
}
