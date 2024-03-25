import java.util.*;
import java.io.*;
public class Main {
    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);
        Queue<Integer> queue = new LinkedList<>();
        int N = in.nextInt();

        for(int i = 1; i <= N; i++) {
            queue.add(i);
        }
        while(queue.size()>1) { // 카드가 1장 남을 때까지
            queue.poll(); // 맨 위의 카드를 버림
            queue.add(queue.poll()); // 맨 위의 카드를 가장 아래 카드 밑으로 이동
        }
        System.out.println(queue.poll());
    }
}