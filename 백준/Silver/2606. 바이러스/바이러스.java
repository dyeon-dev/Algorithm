import java.util.*;
public class Main{

    static int N, M;
    static int u, v;
    static ArrayList<Integer>[] arr ;
    static boolean[] visited;//정점별 방문여부
    static int cnt;
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        N = sc.nextInt(); // 컴퓨터 수
        M = sc.nextInt(); // 컴퓨터 쌍의 수
        arr = new ArrayList[N+1];//정점별 연결정점번호
        for (int i = 1; i < N+1; i++) {
            arr[i] = new ArrayList<Integer>();//정점별 저장공간
        }
        visited = new boolean[N+1];//정점별 방문여부

        for (int i = 0; i < M; i++) {//간선의 갯수
            u = sc.nextInt();
            v = sc.nextInt();
            arr[u].add(v); //u번 정점은 v번 정점과 연결됨
            arr[v].add(u);
        }
        dfs(1);
        System.out.println(cnt);
    }
    // DFS 함수 정의
    public static void dfs(int x) {
        // 현재 노드를 방문 처리
        visited[x] = true;
        // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
        for (int i = 0; i < arr[x].size(); i++) {
            int y = arr[x].get(i);
            if (!visited[y]) {
                cnt++;
                dfs(y);
            }
        }
    }
}
