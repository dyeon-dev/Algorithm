import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int n = Integer.parseInt(br.readLine());
		String[] arr1 = br.readLine().split(" ");
		int m = Integer.parseInt(br.readLine());
		String[] arr2 = br.readLine().split(" ");
		
		Set<String> set1 = new HashSet<>(Arrays.asList(arr1));
		
		for(String ele:arr2) {
			if(set1.contains(ele)) {
				System.out.println("1");
			} else {
				System.out.println("0");
			}
		}
	}
}