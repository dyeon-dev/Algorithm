import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int k = sc.nextInt();
        Queue<Integer> q = new LinkedList<>();
        for (int i = 1; i <= n; i++) {
            q.add(i);
        }
        StringBuilder sb = new StringBuilder();
        sb.append('<');

        while(q.size()>1) {
            for (int i = 1; i < k; i++) {
                q.add(q.poll());
            }
            sb.append(q.poll()).append(", ");
        }
        sb.append(q.poll()).append('>');
        System.out.print(sb);
    }
}