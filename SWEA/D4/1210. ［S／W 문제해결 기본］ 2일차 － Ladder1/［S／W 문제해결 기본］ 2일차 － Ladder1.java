import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Solution {

    static int[][] arr;
    static int ans;

    public static void main(String[] args) throws FileNotFoundException {
        //System.setIn(new FileInputStream("input_1210.txt"));
        Scanner sc = new Scanner(System.in);

        for (int tc = 0; tc < 10; tc++) {
            int t = sc.nextInt();

            arr = new int[100][100];
            for (int i = 0; i < 100; i++) {
                for (int j = 0; j < 100; j++) {
                    arr[i][j] = sc.nextInt();
                    if (arr[i][j] == 2) {
                        move(i, j);
                    }
                }
            }
            System.out.println("#" + t + " " + ans);
        }
    }

    public static void move(int x, int y) {
        int[] dx = {0, 0, -1};
        int[] dy = {-1, 1, 0};
        while (true) {
            if (x == 0) {
                ans = y;
                break;
            }
            for (int i = 0; i < 3; i++) {
                int nx = x + dx[i];
                int ny = y + dy[i];

                if (nx >= 0 && nx < 100 && ny >= 0 && ny < 100 && arr[nx][ny] == 1) {
                    arr[x][y] = 3;
                    x = nx;
                    y = ny;
                    break;
                }
            }
        }
    }
}
