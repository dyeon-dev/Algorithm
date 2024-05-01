import java.util.Scanner;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for (int t=1; t<=T; t++) {
            int[][] maps = new int[9][9];
            boolean[] visited;
            int ans = 1;
            for (int i = 0; i < 9; i++) {
                for (int j = 0; j < 9; j++) {
                    maps[i][j]= sc.nextInt();
                }
            }
            // 열 체크
            for (int i = 0; i < 9; i++) {
                visited = new boolean[10];
                for (int j = 0; j < 9; j++) {
                    if (visited[maps[i][j]]) ans = 0;
                    visited[maps[i][j]]=true;
                }
            }
            // 행 체크
            for (int i = 0; i < 9; i++) {
                visited = new boolean[10];
                for (int j = 0; j < 9; j++) {
                    if (visited[maps[j][i]]) ans = 0;
                    visited[maps[j][i]]=true;
                }
            }
            // 네모 체크
            for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 3; j++) {
                    visited = new boolean[10];
                    for (int k = 0; k < 3; k++) {
                        for (int l = 0; l < 3; l++) {
                            if (visited[maps[i*3+k][j*3+l]]) ans = 0;
                            visited[maps[i*3+k][j*3+l]]=true;
                        }
                    }
                }
            }
            System.out.println("#"+t+" "+ans);
        }
    }
}
