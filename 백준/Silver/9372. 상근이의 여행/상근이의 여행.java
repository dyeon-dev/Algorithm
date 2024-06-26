import java.util.*;
class Edge <Edge> {
    private int nodeA;
    private int nodeB;

    public Edge (int nodeA, int nodeB) {
        this.nodeA=nodeA;
        this.nodeB=nodeB;
    }
    public int getNodeA() {
        return this.nodeA;
    }
    public int getNodeB() {
        return this.nodeB;
    }
}
public class Main{
    static int N,M;
    static int[] parent = new int[1000001]; // 부모 테이블 초기화하기
    // 모든 간선을 담을 리스트와, 최종 비용을 담을 변수
    static ArrayList<Edge> edges = new ArrayList<>();
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 0; t < T; t++) {
            N = sc.nextInt(); // 국가의 개수
            M = sc.nextInt(); // 비행기의 개수

            // 부모 테이블 상에서, 부모를 자기 자신으로 초기화
            for (int i = 1; i <= N; i++) {
                parent[i] = i;
            }

            // Union 연산을 각각 수행
            for (int i = 0; i < M; i++) {
                int a = sc.nextInt(); // 시작점
                int b = sc.nextInt(); // 종료점
                edges.add(new Edge(a, b));
            }
            int ans=0;
            // 간선을 하나씩 확인하며
            for (int i = 0; i < edges.size(); i++) {
                int a = edges.get(i).getNodeA();
                int b = edges.get(i).getNodeB();
                // 사이클이 발생하지 않는 경우에만 간선 수 증가 
                if (findParent(a)!=findParent(b)) {
                    unionParent(a,b);
                    ans++;
                }
            }
            System.out.println(ans);
        }
        }

    // 두 원소가 속한 집합 합치기
    private static void unionParent(int a, int b) {
        a = findParent(a);
        b = findParent(b);
        if (a<b) parent[b]=a;
        else parent[a]=b;
    }

    // 특정 원소가 속한 집합 찾기
    private static int findParent(int x) {
        // 루트노드가 아니라면, 루트 노드를 찾을 때까지 재귀적으로 호출
        if (x==parent[x]) return x;
        return parent[x]=findParent(parent[x]);
    }
}
