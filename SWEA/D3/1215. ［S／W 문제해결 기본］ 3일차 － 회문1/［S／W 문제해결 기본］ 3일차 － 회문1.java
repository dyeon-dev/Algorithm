import java.util.*;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        for (int t = 1; t <= 10; t++) {
            int len = sc.nextInt();
            char[][] map = new char[8][8];
            int ans=0;
            for (int i = 0; i < 8; i++) {
                String str = sc.next();
                for (int j = 0; j < 8; j++) {
                    map[i][j]=str.charAt(j);
                }
            }
            for (int i = 0; i < 8; i++) {
                for (int j = 0; j < 8-len+1; j++) {
                    char[] p = new char[len];
                    for (int k = 0; k < len; k++) {
                        p[k]=map[i][j+k];
                    }
                    boolean flag = true;
                    for (int k = 0; k < len/2; k++) {
                        if (p[k]!=p[len-k-1]) {
                            flag=false;
                            break;
                        }
                    }
                    if (flag) ans++;
                }
            }

            for (int i = 0; i < 8; i++) {
                for (int j = 0; j < 8-len+1; j++) {
                    char[] p = new char[len];
                    for (int k = 0; k < len; k++) {
                        p[k]=map[j+k][i];
                    }
                    boolean flag = true;
                    for (int k = 0; k < len/2; k++) {
                        if (p[k]!=p[len-k-1]) {
                            flag=false;
                            break;
                        }
                    }
                    if (flag) ans++;
                }
            }
            System.out.println("#" + t + " " + ans);
        }
    }
}
