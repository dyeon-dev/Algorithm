import java.io.*;
import java.util.*;

class Main {
    public static int r, c; 
    public static char[][] arr;
    public static int[][] dist;
		public static Queue<int[]> q;
	
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        r = Integer.parseInt(st.nextToken());
        c = Integer.parseInt(st.nextToken());
        arr = new char[r][c];
        dist = new int[r][c];
				q = new LinkedList<>();
			
        // 입력 배열 초기화
        for (int i = 0; i < r; i++) {
            String line = br.readLine();
            for (int j = 0; j < c; j++) {
                arr[i][j] = line.charAt(j);
							  dist[i][j]=-1;
								if (arr[i][j] == '@') { // 시작점
									q.add(new int[]{i, j});
									dist[i][j]=0;
                }
            }
        }

        int ans = -1; // 목적지를 찾지 못할 경우 -1 반환
        ans = bfs(); // BFS 한 번만 수행
        System.out.println(ans);
    }

    private static int bfs() {
        int[] dx = {0, 0, 1, -1};
        int[] dy = {1, -1, 0, 0};

        while (!q.isEmpty()) {
            int[] now = q.poll();

            for (int i = 0; i < 4; i++) {
                int nx = now[0] + dx[i];
                int ny = now[1] + dy[i];

                // ✅ 올바른 범위 체크
                if (nx >= 0 && ny >= 0 && nx < r && ny < c && dist[nx][ny]==-1 && arr[nx][ny] != '#') {
                    dist[nx][ny] = dist[now[0]][now[1]] + 1;
                    q.add(new int[]{nx, ny});

                    // ✅ 도착점 '&'을 찾으면 즉시 반환
                    if (arr[nx][ny] == '&') {
                        return dist[nx][ny]-1;
                    }
                }
            }
        }
        return -1; // 도착점 '&'을 찾지 못하면 -1 반환
    }
}
