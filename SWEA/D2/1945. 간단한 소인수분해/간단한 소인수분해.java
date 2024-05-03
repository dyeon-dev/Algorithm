import java.util.Arrays;
import java.util.Scanner;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t=1; t<=T; t++) {
            int n= sc.nextInt();
            int a = 0;
            int b = 0;
            int c = 0;
            int d = 0;
            int e = 0;
            while(true) {
                if (n%2==0) {
                    a++;
                    n=n/2;
                } else if (n%3==0) {
                    b++;
                    n=n/3;
                } else if (n%5==0) {
                    c++;
                    n=n/5;
                } else if (n%7==0) {
                    d++;
                    n=n/7;
                } else if (n%11==0) {
                    e++;
                    n=n/11;
                }
                if (n==1) break;
            }
            System.out.println("#"+t+" "+a+" "+b+" "+c+" "+d+" "+e);
        }
    }
}
