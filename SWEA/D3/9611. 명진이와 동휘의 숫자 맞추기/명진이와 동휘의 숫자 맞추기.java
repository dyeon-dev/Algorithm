import java.util.*;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 1; t <= T; t++) {
            int n = sc.nextInt(); // 질문횟수

            int[] visited = new int[10];
            int ans = 0;
            for (int i = 0; i < n; i++) {
                int a =sc.nextInt();
                int b =sc.nextInt();
                int c =sc.nextInt();
                int d =sc.nextInt();
                String s = sc.next();
                if (s.equals("YES")) {
                    visited[a] ++;
                    visited[b] ++;
                    visited[c] ++;
                    visited[d] ++;
                } else if(s.equals("NO")){
                    visited[a] = -1;
                    visited[b] = -1;
                    visited[c] = -1;
                    visited[d] = -1;
                }
            }
            for (int i = 0; i < 10; i++) {
                if (visited[i]>visited[ans]) {
                    ans=i;
                }
            }

            System.out.println("#" + t + " "+ans);

        }
    }
}
