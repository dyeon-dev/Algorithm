import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int n = Integer.parseInt(br.readLine());
		int[] arr = new int[n];
		StringTokenizer st = new StringTokenizer(br.readLine());

		Set<Integer> set = new HashSet<>();
		
		for(int i=0; i<n; i++) {
			int num = Integer.parseInt(st.nextToken());
			if(set.contains(-num)) {
				set.remove(-num);
			} else {
				set.add(num);
			}
		}

		int ans=0;
		for(int num: set) {
		  ans+=num;
		}
		
		System.out.println(ans);
	}
}
