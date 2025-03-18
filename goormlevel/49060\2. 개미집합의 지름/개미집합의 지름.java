import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int n = Integer.parseInt(st.nextToken());
		int d = Integer.parseInt(st.nextToken());
		StringTokenizer st1 = new StringTokenizer(br.readLine());
		int[] arr = new int[n];
		for(int i=0; i<n; i++) {
			int p=Integer.parseInt(st1.nextToken());
			arr[i]=p;
		}
		Arrays.sort(arr);

		int left=0, right=0, max=0;
		while(left<n && right<n) {
			
			if(arr[right]-arr[left] > d) left++;
			else {
				if(max<right-left+1) {
					max=right-left+1;
				}
				right++;
			}
		}
		System.out.println(n-max);
	}
}
