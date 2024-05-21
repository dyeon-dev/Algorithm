import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int ans = 0;
        int num=3; // 한변의 포인트 개수
        if (n==0) ans=(num-1)*(num-1);
        else if (n==1) ans=num*num;

        for (int i = 2; i <= n; i++) {
            num=num+(num-1);
            ans=num*num;
        }
        System.out.println(ans);
    }
}