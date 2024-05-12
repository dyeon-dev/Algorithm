import java.util.*;

public class Solution {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		for(int t = 1; t <= 10; t++) {
			int tmp = sc.nextInt();
			int[][] a = new int[100][100];
			int max = 0;
			
			for(int i = 0; i < 100; i++) {
				int sum = 0;
				for(int j = 0; j < 100; j++) {
					a[i][j] = sc.nextInt();
					sum += a[i][j];
				}
				max = Math.max(sum, max);
			}
			
			for(int i = 0; i < 100; i++) {
				int sum = 0;
				for(int j = 0; j < 100; j++) {
					sum += a[j][i];
				}
				max = Math.max(sum, max);
			}
			int sum1 = 0;
			int sum2 = 0;
			for(int i = 0; i < 100; i++) {
				sum1 += a[i][i];
				sum2 += a[i][100-1-i];
			}
			max = Math.max(((sum1 > sum2) ? sum1 : sum2), max);
			System.out.println("#" + t + " " + max);
		}
	}
}