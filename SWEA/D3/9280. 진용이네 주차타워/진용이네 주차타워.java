import java.util.*;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 1; t <= T; t++) {
            int n = sc.nextInt(); // 주차장 수
            int m = sc.nextInt(); // 차량 수
            int[] r = new int[n]; // 주차장 요금
            int[] w = new int[m+1]; // 차량 무게
            for (int i = 0; i < n; i++) {
                r[i] = sc.nextInt();
            }
            for (int i = 1; i <= m; i++) {
                w[i] = sc.nextInt();
            }
            int ans = 0;
            int[] p = new int[n]; // 주차 차량
            Queue<Integer> q = new LinkedList<>();
            Queue<Integer> wait = new LinkedList<>(); // 대기중인 차량

            // 차량 큐에 삽입
            for (int i = 0; i < 2*m; i++) {
                q.add(sc.nextInt());
            }

            while(!q.isEmpty()) {
                int now = q.poll();
                if (now>0) {
                    wait.add(now);
                    int front = wait.peek();
                    for (int i = 0; i < n; i++) {
                        if (p[i]==0) {
                            p[i]=front;
                            ans+=r[i]*w[front];
                            wait.poll();
                            break;
                        }
                    }
                } else {
                    now = -now;
                    for (int i = 0; i < n; i++) {
                        if (p[i]==now) {
                            p[i]=0;
                            if (!wait.isEmpty()) {
                                now = wait.poll();
                                p[i]=now;
                                ans+=r[i]*w[now];
                            }
                            break;
                        }
                    }
                }
            }
            System.out.println("#" + t + " "+ans);
        }
    }
}
