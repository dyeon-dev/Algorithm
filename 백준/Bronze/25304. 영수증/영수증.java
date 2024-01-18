import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int sum = sc.nextInt();
        int cnt = sc.nextInt();
        int arr[] = new int[cnt];
        int add = 0;

        for(int i=0; i<cnt; i++) {
            int a = sc.nextInt();
            int b = sc.nextInt();

            arr[i] = a*b;
            add += arr[i];
        }
        if(add==sum) System.out.println("Yes");
        else System.out.println("No");
    }
}