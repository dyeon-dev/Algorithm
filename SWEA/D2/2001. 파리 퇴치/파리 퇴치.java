import java.util.Scanner;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for (int t=1; t<=T; t++) {
            int n = sc.nextInt();
            int m = sc.nextInt(); // 파리채 크기
            int[][] map = new int[n][n];

            int max = 0;

            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    map[i][j] = sc.nextInt();
                }
            }

            for (int i = 0; i < n-m+1; i++) {
                for (int j = 0; j < n-m+1; j++) {
                    int cnt = 0;
                    for (int x = 0; x < m; x++) {
                        for (int y = 0; y < m; y++) {
                            cnt+=map[i+x][j+y];
                        }
                    }
                    max = Math.max(max,cnt);
                }
            }
            System.out.println("#"+t+" "+max);
        }
    }
}
