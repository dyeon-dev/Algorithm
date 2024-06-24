import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        long[][] D = new long[n-1][21];
        for (int i = 0; i < n; i++) {
           arr[i] = sc.nextInt();
        }
        D[0][arr[0]]=1;

        for (int i = 1; i < n-1; i++) {
            for (int j = 0; j <= 20; j++) {
                int plus=j+arr[i];
                int minus=j-arr[i];
                if(plus<=20) D[i][j]+=D[i-1][plus];
                if(minus>=0) D[i][j]+=D[i-1][minus];
            }
        }
        System.out.println(D[n-2][arr[n-1]]);
    }
}
