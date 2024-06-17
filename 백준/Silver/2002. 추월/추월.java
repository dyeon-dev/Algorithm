import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        Queue<String> in = new LinkedList<>();
        Queue<String> out = new LinkedList<>();

        int ans = 0;
        // 터널 진입
        for (int i = 0; i < n; i++) {
            in.add(sc.next());
        }
        // 터널 탈출
        for (int i = 0; i < n; i++) {
            out.add(sc.next());
        }
        while(!out.isEmpty()) {
            String outCar = out.poll();
            if (!in.peek().equals(outCar)) {
                ans++;
                in.remove(outCar);
            } else in.poll();
        }
        System.out.println(ans);
    }
}