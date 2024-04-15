import java.util.*;

public class Main {

    static int n, m, k;
    static boolean visited[];
    static ArrayList<Integer>[] A;

    static boolean arrive;
    static ArrayList<Integer> ans;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        n = sc.nextInt(); // Number of people
        m = sc.nextInt(); // Number of friendships
        k = sc.nextInt(); // Team size

        A = new ArrayList[n + 1];
        visited = new boolean[n + 1];
        arrive = false;
        ans = new ArrayList<>();

        for (int i = 1; i <= n; i++) {
            A[i] = new ArrayList<>();
        }
        for (int i = 0; i < m; i++) {
            int s = sc.nextInt();
            int e = sc.nextInt();
            A[s].add(e);
            A[e].add(s);
        }

        for (int i = 1; i <= n; i++) {
            Arrays.fill(visited, false);
            dfs(i, 1, ans);
            if (arrive) break;
        }

        if (ans.isEmpty()) {
            System.out.println(-1);
        } else {
            Collections.sort(ans);
            for (int node : ans) {
                System.out.println(node);
            }
        }
    }

    public static void dfs(int node, int depth, ArrayList<Integer> ans) {
        if (depth == k) {
            arrive = true;
            ans.add(node);
            return;
        }
        visited[node] = true;
        for (int next : A[node]) {
            if (!visited[next]) {
                dfs(next, depth + 1, ans);
            }
        }
        visited[node] = false;
    }
}
