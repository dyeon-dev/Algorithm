import java.util.*;

class Solution {
    public int solution(int[] queue1, int[] queue2) {
        int answer = 0;
        long sum1 = sumQ(queue1);
        long sum2 = sumQ(queue2);
        long total = sum1 + sum2;

        if (total % 2 != 0) return -1; // 전체 합이 홀수면 불가능

        long target = total / 2;

        Queue<Integer> q1 = new LinkedList<>();
        Queue<Integer> q2 = new LinkedList<>();
        for (int i = 0; i < queue1.length; i++) {
            q1.add(queue1[i]);
            q2.add(queue2[i]);
        }

        int maxOperations = queue1.length * 3; // 안전한 최대 이동 횟수

        while (answer <= maxOperations) {
            if (sum1 == target) return answer;
            else if (sum1 > target) {
                int v = q1.poll();
                sum1 -= v;
                sum2 += v;
                q2.add(v);
            } else {
                int v = q2.poll();
                sum2 -= v;
                sum1 += v;
                q1.add(v);
            }
            answer++;
        }

        return -1; // 무한 루프 방지
    }

    private static int sumQ(int[] q) {
        int sum = 0;
        for (int val : q) {
            sum += val;
        }
        return sum;
    }
}
