import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        int mul = a*b*c;
        System.out.print(sum(mul));
        // Please write your code here.
    }
    public static int sum(int mul) {
        if(mul<10) return mul;

        int a = mul/10;
        int b = mul%10;

        return b+sum(a);
    }
}