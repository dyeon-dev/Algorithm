import java.util.Scanner;

class Solution {
    static int N, K, ans;
    static int[] arr;

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for(int t = 1; t <= T; t++) {
            N = sc.nextInt();			// 원소 개수
            K = sc.nextInt();			// 부분집합의 합
            arr = new int[N];
            for(int i = 0; i < N; i++) {
                arr[i] = sc.nextInt();	// 수열 입력받기
            }
            ans = 0;
            dfs(0, 0);

            System.out.println("#" + t + " " + ans);
        }
    }
    static void dfs(int idx, int sum) {
        if(idx == N) {					// 수열을 전부 체크했을 때
            if(sum == K) ans++;		// 부분집합의 합이 K와 같으면
            return;
        } else {
            // 부분집합에 포함시키지 않음 -> 더하지 않음
            dfs(idx + 1, sum);
            // 부분집합에 포함시킴 -> 더함
            dfs(idx + 1, sum+arr[idx]);
        }
    }
}