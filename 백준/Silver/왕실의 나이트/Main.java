import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        int row = s.charAt(1) - '0'; // 1
        int column = s.charAt(0) - 'a' + 1; // a
        int result = 0; // 경우의 수

        int[] dx = {-2,2,-1,1,-2,2,-1,1};
        int[] dy = {-1,1,-2,2,1,-1,2,-2};

        for (int i = 0; i < 8; i++) {
            int nx=row+dx[i];
            int ny=column+dy[i];
            if (nx>0 && ny>0 && nx<=8 && ny<=8) {
                result++;
            }
        }
        System.out.println(result);
    }
}