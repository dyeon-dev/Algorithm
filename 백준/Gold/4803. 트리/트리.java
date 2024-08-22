import java.util.*;

public class Main {
    static int n, m, T, cnt, v, e;
    static boolean[] visited;
    static ArrayList<Integer>[] graph;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while (true) {
            n = sc.nextInt(); // 정점 개수
            m = sc.nextInt(); // 간선 개수
            if (n == 0 && m == 0) break;

            visited = new boolean[n + 1];
            graph = new ArrayList[n + 1];

            for (int i = 1; i <= n; i++) {
                graph[i] = new ArrayList<>();
            }

            for (int i = 0; i < m; i++) {
                int a = sc.nextInt();
                int b = sc.nextInt();
                graph[a].add(b);
                graph[b].add(a);
            }
            solution();
        }
    }

    static void solution() {
        T++;
        cnt = 0; // 매 케이스마다 초기화

        for (int i = 1; i <= n; i++) {
            if (!visited[i]) {
                v = 0;
                e = 0;
                dfs(i);
                // 사이클 없는 트리조건 => 간선(e)의 갯수 = 정점(v)의 갯수-1개 (무방향 그래프로 양쪽 간선은 연결되어있으므로 *2)
                if (e == (v - 1) * 2) cnt++;
            }
        }

        if (cnt == 0) System.out.println("Case " + T + ": No trees.");
        else if (cnt == 1) System.out.println("Case " + T + ": There is one tree.");
        else System.out.println("Case " + T + ": A forest of " + cnt + " trees.");
    }

    static void dfs(int x) {
        v++; // 정점 갯수 카운트
        e += graph[x].size(); // 해당 정점에 연결된 간선 수
        visited[x] = true;

        for (int i = 0; i < graph[x].size(); i++) {
            int next = graph[x].get(i);
            if (!visited[next]) {
                dfs(next);
            }
        }
    }
}
