import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.print(mul(n));
        // Please write your code here.
    }
    public static int mul(int n) {
        if(n<10) {
            return n*n;
        }
        int last = n%10; // 가장 뒷자리 숫자
        int remain = n/10; // 나머지 숫자

        return mul(remain) + (last*last);
    }
}