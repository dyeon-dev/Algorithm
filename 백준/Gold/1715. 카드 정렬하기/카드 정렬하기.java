import java.util.*;
public class Main {
    public static int result;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        PriorityQueue<Integer> pq = new PriorityQueue<>();

        for(int i=0;i<n;i++) {
            pq.add(sc.nextInt());
        }

        // heap에 원소가 1개 남을 때까지
        while(pq.size()!=1) {
            // 가장 작은 2개의 카드 묶음 꺼내기
            int one = pq.poll();
            int two = pq.poll();
            // 카드 묶음을 합쳐서 다시 삽입
            int summary = one+two;
            result+=summary;
            pq.offer(summary);
        }
        System.out.println(result);
    }
}