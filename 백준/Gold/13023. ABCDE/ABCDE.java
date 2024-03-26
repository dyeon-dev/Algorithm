import java.util.*;
import java.io.*;
public class Main {
    static ArrayList<Integer>[] A;
    static boolean arrive; // 도착확인변수
    static boolean visited[];

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int M = sc.nextInt();
        visited = new boolean[N]; // 방문 기록 저장 배열
        A = new ArrayList[N];

        // A 인접 리스트의 각 ArrayList 초기화하기
        for(int i=0; i<N; i++) {
            A[i] = new ArrayList<Integer>();
        }
        // 인접 리스트에 그래프 데이터 저장하기
        for(int i=0; i<M; i++) {
            int s = sc.nextInt();
            int e = sc.nextInt();
            A[s].add(e);
            A[e].add(s);
        }
        for (int i=0; i<N; i++) {
            DFS(i, 1);
            if(arrive) break; // depth가 5에 도달한 적이 있다면 종료
        }
        if (arrive) System.out.println("1");
        else System.out.println("0");
    }
    public static void DFS(int v, int depth) {
        //System.out.println(v + " " + depth);
        if (depth==5 || arrive) { // depth가 5가 되면 프로그램 종료
            arrive=true;
            return;
        }
        visited[v] = true;
        for (int i: A[v]) {
            if (!visited[i]) DFS(i, depth+1); // 재귀호출이 될 때마다 depth 1씩 증가
        }
        visited[v] = false;
    }

}