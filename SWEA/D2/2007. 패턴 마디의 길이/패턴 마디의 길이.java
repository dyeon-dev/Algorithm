import java.util.Scanner;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for (int i=1; i<=T; i++) {
            String s = sc.next();
            for (int j = 1; j <= s.length(); j++) {
                String a = s.substring(0,j);
                String b = s.substring(j, j+j);
                if (a.equals(b)) {
                    System.out.println("#"+i+" "+a.length());
                    break;
                }
            }
        }
    }
}