import java.util.*;
public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if (n==1) {
            System.out.println(2);
            System.exit(0);
        }
        for (int i = n; i < 10000001; i++) {
            if (isPrime(i)&& isPalind(i)) {
                System.out.println(i);
                break;
            }
        }
    }
    public static boolean isPrime(int x) {
        for (int i = 2; i <= Math.sqrt(x); i++) {
            if(x%i==0) {
                return false;
            }
        }
        return true;
    }

    public static boolean isPalind(int x) {
        String s = Integer.toString(x);
        for (int i = 0; i < s.length()/2; i++) {
            if (s.charAt(i)!=s.charAt(s.length()-i-1)) {
                return false;
            }
        }
        return true;
    }
}
