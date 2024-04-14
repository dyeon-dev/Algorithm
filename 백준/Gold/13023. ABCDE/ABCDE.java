import java.util.*;
public class Main {

    static int n,m;
    static boolean visited[];
    static ArrayList<Integer>[] A;

    static boolean arrive;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        n = sc.nextInt(); // 노드 수
        m = sc.nextInt(); // 간선 수
        A= new ArrayList[n];
        // 방문 배열 초기화
        visited = new boolean[n];
        arrive=false;

        for (int i = 0; i <n; i++) {
            A[i]=new ArrayList<>();
        }
        for (int i = 0; i < m; i++) {
            int s = sc.nextInt();
            int e = sc.nextInt();
            A[s].add(e);
            A[e].add(s);
        }
        for (int i = 0; i < n; i++) {
            dfs(i, 1);
            if (arrive) break;
        }


        if (arrive) System.out.println(1);
        else System.out.println(0);
    }

    private static void dfs(int index, int depth) {
        if (depth==5) {
            arrive=true;
            return;
        }
        visited[index] = true;

        for (int i = 0; i < A[index].size(); i++) {
            int node = A[index].get(i);
            if (!visited[node]) {
                dfs(node, depth+1);
            }
        }
        visited[index]=false;
    }
}