import java.io.*;
class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int n = Integer.parseInt(br.readLine());
		long[][] dp = new long[n+1][5];
		for(int i=0; i<5; i++) {
			dp[1][i]=1;
		}
		int MOD = 100000007;
		for(int i=2; i<=n; i++) {
			dp[i][0] = (dp[i-1][0] + dp[i-1][1] + dp[i-1][2] + dp[i-1][3] + dp[i-1][4]) % MOD;
			dp[i][1] = (dp[i-1][0] + dp[i-1][2] + dp[i-1][3]) % MOD;
			dp[i][2] = (dp[i-1][0] + dp[i-1][1] + dp[i-1][3] + dp[i-1][4]) % MOD;
			dp[i][3] = (dp[i-1][0] + dp[i-1][2] + dp[i-1][3]) % MOD;
			dp[i][4] = (dp[i-1][0] + dp[i-1][2]) % MOD;
		}
		long ans = (dp[n][0] + dp[n][1] + dp[n][2] + dp[n][3] + dp[n][4]) % MOD;
		System.out.println(ans);
	}
}
