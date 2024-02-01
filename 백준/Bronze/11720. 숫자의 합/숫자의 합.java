import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String st = sc.next();

        int sum=0;

        for(int i=0; i<n; i++) {
            sum+=st.charAt(i)-'0'; // charAt은 해당 문자의 아스키코드 값을 반환하므로 반드시 '-0' 또는 '-48'을 해야한다.
        }
        System.out.println(sum);
    }
}