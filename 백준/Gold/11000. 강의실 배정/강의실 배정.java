import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] arr = new int[n][2];

        for (int i = 0; i < n; i++) {
            arr[i][0] = sc.nextInt(); // 시작 시간
            arr[i][1] = sc.nextInt(); // 끝나는 시간
        }

        // 시작 시간 기준 정렬
        Arrays.sort(arr, (a, b) -> {
            return a[0] - b[0];
        });

        // 강의실 종료 시간 관리하는 우선순위 큐 (가장 빨리 끝나는 순)
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        pq.offer(arr[0][1]); // 첫 강의 끝나는 시간 넣기

        for (int i = 1; i < n; i++) {
            if (pq.peek() <= arr[i][0]) {
                // 가장 빨리 끝나는 수업이 현재 수업 시작시간보다 빠르거나 같으면 재사용 가능
                pq.poll();
            }
            // 새로운 강의실 혹은 재사용한 강의실의 끝나는 시간 추가
            pq.offer(arr[i][1]);
        }

        System.out.println(pq.size()); // 필요한 최소 강의실 개수
    }
}
