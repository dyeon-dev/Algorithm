import java.util.*;

public class Main {
    static boolean visited[];
    static ArrayList<Integer>[] A;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int M = sc.nextInt();
        int Start = sc.nextInt();
        A = new ArrayList[N+1];

        for (int i=1; i<=N; i++) {
            A[i] = new ArrayList<Integer>();
        }
        for (int i=0; i<M; i++) {
            int s = sc.nextInt();
            int e = sc.nextInt();
            A[s].add(e);
            A[e].add(s);
        }

        // 번호가 작은 것을 먼저 방문하기 위해 정렬하기
        for(int i=1; i<=N; i++) {
            Collections.sort(A[i]);
        }
        visited = new boolean[N+1]; // 방문 배열 초기화하기
        DFS(Start);
        System.out.println();
        visited = new boolean[N+1]; // 방문 배열 초기화하기
        BFS(Start);
        System.out.println();
    }

    public static void DFS(int v) {
        System.out.print(v+ " ");
        visited[v] = true;
        for (int i:A[v]) {
            if (!visited[i]) DFS(i);
        }
    }
    private static void BFS(int v) {
        Queue<Integer> queue = new LinkedList<Integer>();
        queue.add(v);
        visited[v] = true;

        while(!queue.isEmpty()) {
            int now_Node = queue.poll();
            System.out.print(now_Node+" ");
            for (int i: A[now_Node]) {
                if (!visited[i]) {
                    visited[i] = true;
                    queue.add(i);
                }
            }
        }
    }
}