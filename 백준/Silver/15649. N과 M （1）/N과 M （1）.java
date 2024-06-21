import java.util.*;
public class Main {
    static int n,m;
    static int[] arr;
    static boolean[] visited;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        m = sc.nextInt();
        arr = new int[m];
        visited = new boolean[n+1];

        permutation(0);
    }

    private static void permutation(int cnt) {
        if (cnt==m) {
            for (int i = 0; i < m; i++) {
                System.out.print(arr[i]+" ");
            }
            System.out.println();
            return;
        }
        for (int i = 1; i <= n; i++) {
            if (!visited[i]) {
                visited[i]=true;
                arr[cnt]=i;
                permutation(cnt+1);
                visited[i]=false;
            }

        }
    }
}

