import java.util.*;
public class Main {
    static int n;
    static int[][] arr, D;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        arr = new int[n][n];
        D = new int[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                arr[i][j]=sc.nextInt();
            }
        }

        int ans = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                ans = Math.max(ans, dfs(i,j));
            }
        }
        System.out.println(ans);
    }

    private static int dfs(int i, int j) {
        int[] dx = {0,0,1,-1};
        int[] dy = {1,-1,0,0};
        if (D[i][j]!=0) return D[i][j];
        else {
            D[i][j]=1;
            for (int k = 0; k < 4; k++) {
                int nx = i + dx[k];
                int ny = j + dy[k];

                if (nx >= 0 && ny >= 0 && nx < n && ny < n
                        && arr[i][j] < arr[nx][ny]) {
                    D[i][j] = Math.max(D[i][j], dfs(nx, ny) + 1);
                }
            }
        }
        return D[i][j];
    }
}

