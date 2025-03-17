import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int input = Integer.parseInt(br.readLine());
		for(int i=0; i<input; i++) {
			StringTokenizer st = new StringTokenizer(br.readLine());
			int x = Integer.parseInt(st.nextToken());
			int y = Integer.parseInt(st.nextToken());
			int n = Integer.parseInt(st.nextToken());
			int sum = Math.abs(x)+Math.abs(y);

		if(sum<=n && (sum-n)%2==0) System.out.println("YES"); // 남은 이동횟수까지 체크 => 남은 이동횟수가 짝수이어야 왔다갔다하며 소모 가능
			else System.out.println("NO");
		}
	}
}