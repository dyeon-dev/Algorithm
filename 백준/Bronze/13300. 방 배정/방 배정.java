import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(); // 학생수
        int k = sc.nextInt(); // 최대 인원수
        int[][] arr = new int[2][7];

        int result = 0;

        for(int i=0; i<n; i++) {
            int s = sc.nextInt(); // 성별
            int y = sc.nextInt(); // 학년
            arr[s][y]++;
        }
        for(int i=0; i<2; i++) {
            for(int j=1; j<7; j++) {
                result+=arr[i][j]/k;
                if(arr[i][j]%k!=0) result++;
            }
        }
        System.out.println(result);
    }
}