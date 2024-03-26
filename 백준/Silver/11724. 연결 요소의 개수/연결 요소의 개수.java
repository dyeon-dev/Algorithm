import java.lang.reflect.AnnotatedArrayType;
import java.util.*;
import java.io.*;
public class Main {
    static ArrayList<Integer>[] A;
    static boolean visited[];

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());


        A = new ArrayList[n+1];
        visited = new boolean[n+1];

        // 인접리스트 초기화
        for (int i = 1; i < n+1; i++) {
            A[i] = new ArrayList<Integer>();
            //System.out.println(A[i]);
        }
        for(int i=0; i<m; i++) {
            st = new StringTokenizer(br.readLine());
            int s = Integer.parseInt(st.nextToken());
            int e = Integer.parseInt(st.nextToken());
            A[s].add(e);
            A[e].add(s);
        }
        int cnt = 0;
        for(int i=1; i<n+1; i++) {
            if(!visited[i]) {
                cnt++;
                DFS(i);
            }
        }
        System.out.println(cnt);
    }
    static void DFS(int v) {
        if(visited[v]) return;
        // 현재 노드를 방문 처리 
        visited[v] =true;
        // 현재 노드와 연결된 다른 노드를 재귀적으로 방문 
        for (int i : A[v]) {
            if (visited[i]==false) DFS(i);
        }
    }
}