import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.print(div(n, 0));
        // Please write your code here.
    }
    public static int div(int n, int cnt) {
        if(n==1) {
            return cnt;
        }

        if(n%2==0) {
            n = n/2;
        } else {
            n = n/3;
        }
        
        return div(n, cnt+1);
    }
}