import java.util.*;
import java.io.*;

// 게임 규칙1. O이 빙고가 되면 X의 개수=O의 개수이어야 함
// 게임 규칙2. X이 빙고가 되면 X의 개수=O의 개수+1
// 게임 규칙3. 빙고가 안됐을 때 X개수=0의 개수+1
public class Main {
    static char[][] map;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        while (true) {
            String str = br.readLine();

            if (str.equals("end")) break; // 입력 종료

            map = new char[3][3];
            int idx = 0;
            int xCnt = 0; // X 갯수
            int oCnt = 0; // O 갯수
            for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 3; j++) {
                    map[i][j] = str.charAt(idx);
                    idx++;

                    // X, O의 개수 카운트
                    if (map[i][j] == 'X') {
                        xCnt++;
                    } else if (map[i][j] == 'O') {
                        oCnt++;
                    }
                }
            }
            // X가 이기는 경우
            if (xCnt==oCnt+1) {
                // 판이 다 찼을 경우
                if (xCnt+oCnt==9 && !bingo('O')){
                    System.out.println("valid");
                }
                // 판이 안찼을 경우, X가 빙고가 되고 O가 빙고가 안된 경우
                else if (bingo('X') && !bingo('O')) {
                    System.out.println("valid");
                } else {
                    System.out.println("invalid");
                }
            }
            // O가 이기는 경우
            else if (xCnt==oCnt) {
                // O가 빙고가 되고 X가 빙고가 안된 경우
                if (bingo('O') && !bingo('X')) {
                    System.out.println("valid");
                } else {
                    System.out.println("invalid");
                }
            }
            else System.out.println("invalid");
        }
    }
    public static boolean bingo(char c) {
        // 가로
        for (int i = 0; i < 3; i++) {
            if (map[i][0] == c && map[i][1] == c && map[i][2] == c) {
                return true;
            }
        }
        // 세로
        for (int i = 0; i < 3; i++) {
            if (map[0][i] == c && map[1][i] == c && map[2][i] == c) {
                return true;
            }
        }
        // 대각선
        if (map[0][0] == c && map[1][1] == c && map[2][2] == c) return true;
        if (map[0][2] == c && map[1][1] == c && map[2][0] == c) return true;
        return false;
    }
}