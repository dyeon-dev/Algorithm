import java.util.Scanner;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for (int t=1; t<=T; t++) {
            String s = sc.next();
            int ans = 0;
            for (int i = 0; i < s.length()/2; i++) {
                if(s.charAt(i)==s.charAt(s.length()-1-i)) ans=1;
                else if(s.length()==1) ans=1;
            }
            System.out.println("#"+t+" "+ans);
        }
    }
}
