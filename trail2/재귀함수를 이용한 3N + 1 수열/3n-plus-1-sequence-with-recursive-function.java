import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.print(count(n, 0));
        // Please write your code here.
    }
    public static int count(int n, int cnt) {
        if(n==1) {
            return cnt;
        }
        if(n%2==0) {
            n=n/2;
            return count(n, cnt+1);
        } else {
            n=n*3+1;
            return count(n, cnt+1);
        }
    }
}