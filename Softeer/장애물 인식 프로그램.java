import java.util.*;
public class Solution {
    static int[][] arr;
    static int n;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        arr = new int[n][n];

        for (int i = 0; i < n; i++) {
            String s = sc.next();
            for (int j = 0; j < n; j++) {
                arr[i][j]=s.charAt(j)-'0';
            }
        }

        ArrayList<Integer> size = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (arr[i][j]==1) {
                    size.add(bfs(i,j));
                }
            }
        }
        Collections.sort(size);

        System.out.println(size.size());
        for (int i = 0; i < size.size(); i++) {
            System.out.println(size.get(i));
        }
    }
    public static int bfs(int x, int y) {
        Queue<int[]> q = new LinkedList<>();
        q.add(new int[] {x,y});
        arr[x][y]=0;
        int cnt=1;

        while(!q.isEmpty()) {
            int[] now = q.poll();
            int[] dx = {0,0,1,-1};
            int[] dy = {1,-1,0,0};
            for (int i = 0; i < 4; i++) {
                int nx = now[0]+dx[i];
                int ny = now[1]+dy[i];
                if (nx>=0 && ny>=0 && nx<n && ny<n
                && arr[nx][ny]==1) {
                    arr[nx][ny]=0;
                    cnt++;
                    q.add(new int[] {nx, ny});
                }
            }
        }
        return cnt;
    }
}
