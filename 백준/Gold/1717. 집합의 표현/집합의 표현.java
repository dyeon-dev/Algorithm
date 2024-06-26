import java.util.*;
public class Main{
    static int N,M;
    static int[] parent = new int[1000001]; // 부모 테이블 초기화하기
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        N = sc.nextInt();
        M = sc.nextInt(); // 연산 개수

        // 부모 테이블 상에서, 부모를 자기 자신으로 초기화
        for (int i = 1; i <= N; i++) {
            parent[i] = i;
        }

        // Union 연산을 각각 수행
        for (int i = 0; i < M; i++) {
            int num = sc.nextInt();
            int a = sc.nextInt();
            int b = sc.nextInt();
            if (num==0) unionParent(a, b);
            else if (num==1) {
                // a와 b가 같은 집한에 포함되어 있으면 "YES" 없으면 "NO
                if(findParent(a)==findParent(b)) {
                    System.out.println("YES");
                } else {
                 System.out.println("NO");
                }
            }
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
