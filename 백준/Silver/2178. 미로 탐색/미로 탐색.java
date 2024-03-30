import java.util.*;

public class Main {
    static int N,M;
    static boolean[][] visited;
    static int[][] A;

    // 상하좌우를 탐색하기 위한 배열
    static int[] dx = {0, 1, 0, -1};
    static int[] dy = {1, 0, -1, 0};

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        N = sc.nextInt();
        M = sc.nextInt();
        A = new int[N][M];
        visited = new boolean[N][M]; // 방문 배열 초기화하기

        String str;
        for (int i=0; i<N; i++) {
            str= sc.next();
            for (int j=0; j<M; j++) {
                A[i][j] = str.charAt(j)-'0';
            }
        }
        BFS();

        System.out.println(A[N-1][M-1]);
    }

    public static void BFS() {
        var queue = new LinkedList<int[]>();
        queue.add(new int[] {0, 0});
        int[] tmp = new int[2];

        visited[0][0] = true; // 첫 방문 지역은 탐색한 상태에서 시작

        int y,x;
        int ny, nx;
        
        while(!queue.isEmpty()) {
            tmp = queue.poll();
            y=tmp[0];
            x=tmp[1];

            for (int i=0; i<4; i++) { // 상하좌우 탐색1
                ny = y + dy[i];
                nx = x + dx[i];
                if (nx<0 || ny<0 || ny>=N || nx>=M) continue; // 좌표유효성검사
                    if (A[ny][nx]==1 && !visited[ny][nx]) {
                        visited[ny][nx] =true;
                        A[ny][nx] = A[y][x]+1;
                        queue.add(new int[] {ny,nx});
                    }
                
            }
        }
    }
}