import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int ans=0;

        int n = sc.nextInt();
        int[] d = new int[n+1];

        for (int i = 2; i <= n; i++) {
            // i에서 1을 빼는 경우 (항상 1을 빼준다)
            d[i]=d[i-1]+1;
            // i가 2의 배수인 경우 -> *2
            if (i%2==0) d[i]=Math.min(d[i], d[i/2]+1);
            // i가 3의 배수인 경우 -> *3
            if (i%3==0) d[i]=Math.min(d[i], d[i/3]+1);

            ans=d[n];
        }
        System.out.println(ans);
    }
}
