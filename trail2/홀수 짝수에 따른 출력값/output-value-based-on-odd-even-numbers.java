import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.print(recursive(n));
    }
    public static int recursive(int n) {
        if(n==1) {
            return 1;
        } else if(n==2){
            return 2;
        }
        return n+recursive(n-2);
    }
}