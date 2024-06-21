import java.util.*;
public class Main {
    static int n,m;
    static int[] arr;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        m = sc.nextInt();
        arr = new int[m];
        combination(0, 1);
    }

    private static void combination(int cnt, int start) {
        if (cnt==m) {
            for (int i = 0; i < m; i++) {
                System.out.print(arr[i]+" ");
            }
            System.out.println();
            return;
        }
        for (int i = start; i <= n; i++) {
            arr[cnt]=i;
            combination(cnt+1, i+1);
        }
    }
}

