import java.util.*;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        for (int t = 1; t <= 10; t++) {
            int n = sc.nextInt();
            int[][] map = new int[n][n];
            int ans=0;
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    map[i][j]=sc.nextInt();
                    }
            }
            
            for (int i = 0; i < n; i++) {
            	int state = 0;
                for (int j = 0; j < n; j++) {
                    if(map[j][i]==1) {
                    	state=1;
                    }
                    else if(map[j][i]==2&&state==1) {
                    	ans++;
                    	state=0;
                    }
                }
            }
            System.out.println("#" + t + " " + ans);
        }
    }
}