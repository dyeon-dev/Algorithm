import java.util.*;
import java.io.*;

public class Main {
    static int N,M;
    static boolean visited[][];
    static int[][] A;

    // 상하좌우를 탐색하기 위한 배열
    static int[] dx = {0, 1, 0, -1};
    static int[] dy = {1, 0, -1, 0};

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        A = new int[N][M];
        visited = new boolean[N][M]; // 방문 배열 초기화하기

        for (int i=0; i<N; i++) {
            st = new StringTokenizer(br.readLine());
            String line = st.nextToken();
            for (int j=0; j<M; j++) {
                A[i][j] = Integer.parseInt(line.substring(j,j+1));
            }
        }
        BFS();

        System.out.println(A[N-1][M-1]);
    }

    private static void BFS() {
        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[] {0, 0});

        visited[0][0] = true; // 첫 방문 지역은 탐색한 상태에서 시작


        while(!queue.isEmpty()) {
            int[] now = queue.poll();

            for (int i=0; i<4; i++) { // 상하좌우 탐색1
                int x = now[0] + dx[i];
                int y = now[1] + dy[i];
                if (x>=0 && y>=0 && x<N && y<M) { // 좌표유효성검사
                    if (A[x][y]!=0 && !visited[x][y]) {
                        visited[x][y] =true;
                        A[x][y] = A[now[0]][now[1]]+1;
                        queue.add(new int[] {x,y});
                    }
                }
            }
        }
    }
}