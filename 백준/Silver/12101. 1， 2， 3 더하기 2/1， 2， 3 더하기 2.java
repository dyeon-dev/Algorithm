import java.io.*;
import java.util.*;

public class Main {
    static int n;
    static int k;
    private static int cnt;
    private static int[] arr;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        k = sc.nextInt();
        cnt = 0; // cnt를 초기화
        arr = new int[11]; // 배열을 초기화

        if(!backtracking(0, 0)) { // 백트래킹 호출
            System.out.print(-1);
        }
    }
    private static boolean backtracking(int sum, int depth){
        if (sum>n) {
            return false;
        }
        if(sum==n) {
            cnt++;
            if(cnt==k) {
                for (int i = 0; i < depth-1; i++) {
                    System.out.print(arr[i]+"+");
                }
                System.out.print(arr[depth - 1]);
                return true;
            }
        }

        for (int i = 1; i <= 3; i++) {
            arr[depth]=i;
            if(backtracking(sum+i, depth+1)) {
                return true;
            }
        }
        return false;
    }
}
