import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] A = new int[1000001];
        for (int i = 0; i < n; i++) {
            int x = sc.nextInt(); // 8 3 7 9 2
            A[x] = 1;
        }

        int m = sc.nextInt();
        int[] targets = new int[n];
        for (int i = 0; i < m; i++) {
            targets[i] = sc.nextInt(); // 5 7 9
        }

        for (int i = 0; i < m; i++) {
            if (A[targets[i]]==1) {
                System.out.print("yes ");
            } else {
                System.out.print("no ");
            }
        }
    }
}