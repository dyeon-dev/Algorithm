import java.util.Scanner;
public class Main {
    static Scanner sc = new Scanner(System.in);
    public static void main(String[] args) {

        int N = sc.nextInt();
        int cnt = 1;
        int range = 2;

        if(N==1) System.out.print(1);

        else {
            while(range<=N) {
                range=range+(6*cnt);
                cnt++;
            }
            System.out.print(cnt);
        }
    }
}