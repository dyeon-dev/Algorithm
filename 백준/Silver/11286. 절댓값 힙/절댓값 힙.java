import java.util.*;
import java.io.*;
public class Main {
    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);
        PriorityQueue<Integer> queue = new PriorityQueue<>((o1, o2) -> {
            if (Math.abs(o1) == Math.abs(o2)) return o1 > o2 ? 1 : -1; // 절대값이 같으면 음수 우선 정렬하기
            else return Math.abs(o1) - Math.abs(o2); // 절대값을 기준으로 정렬하기
        });
        int N = in.nextInt();

        for (int i = 1; i <= N; i++) {
            int request = in.nextInt();
            if (request == 0) {
                if (queue.isEmpty()) System.out.println("0");
                else System.out.println(queue.poll());
            } else queue.add(request);
        }
    }
}