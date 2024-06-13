import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        boolean[] b = new boolean[31];
        for (int i = 1; i <= 28; i++) {
            int n = sc.nextInt();
            b[n]=true;
        }
        for (int i = 1; i <= 30; i++) {
            if (!b[i]) System.out.println(i);
        }
    }
}