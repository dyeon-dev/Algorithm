import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int v = sc.nextInt(); // 가로길이
        int h = sc.nextInt(); // 세로길이
        int n = sc.nextInt(); // 상점 개수


        int[][] arr = new int[n][2];
        for (int i = 0; i < n; i++) {
            arr[i][0]=sc.nextInt(); // 상점 방향
            arr[i][1]=sc.nextInt(); // 상점 거리
        }
        int dir = sc.nextInt(); // 동근방향
        int len = sc.nextInt(); // 동근거리
        
        int ans = 0;

        for (int i = 0; i < n; i++) {
            if (dir==arr[i][0]) ans+=Math.abs(len-arr[i][1]);
            // 동근이가 북쪽일때
            else if (dir==1) {
                // 상점 방향에 따라 거리 누적
                if (arr[i][0]==2) ans+=Math.min((arr[i][1]+h+len), v-arr[i][1]+h+v-len);
                else if (arr[i][0]==3) ans+=len+arr[i][1];
                else if (arr[i][0]==4) ans+=v-len+arr[i][1];
            }
            // 동근이가 남쪽일때
            else if (dir==2) {
                // 상점 방향에 따라 거리 누적
                if (arr[i][0]==1) ans+=Math.min((arr[i][1]+h+len), v-arr[i][1]+h+v-len);
                else if (arr[i][0]==3) ans+=len+h-arr[i][1];
                else if (arr[i][0]==4) ans+=v-len+h-arr[i][1];
            }
            // 동근이가 서쪽일때
            else if (dir==3) {
                // 상점 방향에 따라 거리 누적
                if (arr[i][0]==1) ans+=len+arr[i][1];
                else if (arr[i][0]==2) ans+=h-len+arr[i][1];
                else if (arr[i][0]==4) ans+=Math.min((arr[i][1]+v+len), h-arr[i][1]+v+h-len);
            }
            // 동근이가 동쪽일때
            else if (dir==4) {
                // 상점 방향에 따라 거리 누적
                if (arr[i][0]==1) ans+=len+v-arr[i][1];
                else if (arr[i][0]==2) ans+=h-len+v-arr[i][1];
                else if (arr[i][0]==3) ans+=Math.min((arr[i][1]+v+len), h-arr[i][1]+v+h-len);
            }
        }
        System.out.println(ans);
    }
}