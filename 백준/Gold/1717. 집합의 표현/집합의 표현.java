import java.util.*;

public class Main {
    static int n,m, kCnt, vCnt, kTotal, vTotal;
    static boolean[][] visited;
    static int[] parent;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        m = sc.nextInt();
        parent = new int[n+1]; // 대표 노드 저장 배열
        for (int i = 1; i <= n; i++) {
            parent[i]=i; // 대표 노드 자기 자신으로 초기화
        }
        for (int i = 0; i < m; i++) {
            int ques = sc.nextInt();
            int a = sc.nextInt();
            int b = sc.nextInt();
            if(ques==0) { // union
                union(a,b);
            } else { // find
                // 같은 집합 원소인지 확인하기
                if(checkSame(a, b)) {
                    System.out.println("YES");
                } else System.out.println("NO");
            }
        }
    }
    // 두 원소가 속한 집합 합치기
    static void union(int a, int b) {
        // 대표 노드 찾기
        a = find(a);
        b = find(b);

        // 두 원소의 대표 노드끼리 연결하기
        if(a!=b) { // 대표 노드가 다르면
            parent[b]=a; // 두개 연결
        }
    }
    // 특정 원소가 속한 집합 찾기
    static int find(int a) {
        if(a==parent[a]) return a;
        else return parent[a]=find(parent[a]); // 재귀 함수의 형태로 구현->경로 압축 부분
    }

    static boolean checkSame(int a, int b) {
        a = find(a);
        b = find(b);
        if(a==b) return true;
        else return false;
    }
}
