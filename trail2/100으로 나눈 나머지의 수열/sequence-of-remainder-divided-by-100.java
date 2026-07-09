import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int first  = 2;
        int secont = 4;
        System.out.print(fibonacci(n));
        // Please write your code here.
    }
    public static int fibonacci(int n) {
        if(n==2) {
            return 4;
        } else if(n==1) {
            return 2;
        }
        return (fibonacci(n-1) * fibonacci(n-2))%100;
    }
}