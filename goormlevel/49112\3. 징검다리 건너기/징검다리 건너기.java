import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int n = Integer.parseInt(br.readLine());
    int[] arr = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();

		int[] dp = new int[n];
		dp[0]=arr[0];
		if(n>1) dp[1]=arr[1];
		if(n>2) dp[2]=arr[2];

		for(int i=3; i<n; i++) {
			dp[i]=Math.min(Math.min(dp[i-1], dp[i-2]), dp[i-3])+arr[i];
		}
		
    System.out.println(Math.min(Math.min(dp[n - 1], dp[n - 2]), dp[n - 3]));
	}
}
