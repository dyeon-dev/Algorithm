import java.util.*;

public class Main {

    public static int d;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(); // 4
        int m = sc.nextInt(); // 4
        int x = sc.nextInt(); // x:1
        int y = sc.nextInt(); // y:1
        d = sc.nextInt(); // 북쪽: 0

        int[][] A = new int[n][m];
        boolean[][] visited = new boolean[n][m];

        int result = 1; // 방문한 칸의 수

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                A[i][j] = sc.nextInt();
            }
        }

        int[] dx = {1,-1,0,0};
        int[] dy = {0,0,-1,1,};
        // 현재 좌표 방문 처리
        visited[x][y]=true;
        // 회전 횟수
        int turn_time =0;

        while(true) {
            // 왼쪽으로 회전 수행
            turn_left();
            int nx = x+dx[d];
            int ny = y+dy[d];
            // 회전한 후에 정면에 가보지 않은 칸이 존재하는 경우 이동한다
            if (nx>0 && ny>0 && nx<=n && ny<=m && visited[nx][ny]==false && A[nx][ny]==0) {
                visited[nx][ny]=true;
                x=nx;
                y=ny;
                result++;
                turn_time=0;
                continue;
            }
            // 회전한 이후 정면에 가보지 않은 칸이 없거나 바다인 경우
            else turn_time+=1;
            // 네 방향 모두 갈 수 없는 경우
            if (turn_time==4) {
                // 한 칸 뒤로 가기
                nx=x-dx[d];
                ny=y-dy[y];
                //  뒤로 갈 수 있으면 이동하기
                if (A[nx][ny]==0) {
                    x=nx;
                    y=ny;
                }
                // 뒤쪽 방향으로 갈 수 없다면 움직임 멈추기
                else break;
                turn_time=0;
            }
        }
        System.out.println(result);
    }

    public static void turn_left() {
        // 북:0 동:1 남:2 서:3 으로 정의되므로 방향을 -1하면 반시계 방향으로 회전하는 것과 같다
        d-=1;
        // 방향이 음수가 됐을 때 서쪽:3으로 재설정
        if (d==-1) d=3;
    }
}