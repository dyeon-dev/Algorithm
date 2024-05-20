import java.io.*;
import java.util.*;

public class 성적 평균 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int k = sc.nextInt();
        int[] score = new int[n+1];

        double ans = 0;
        for (int i = 1; i <= n; i++) {
            score[i]=score[i-1]+sc.nextInt();
        }
        for (int i = 0; i < k; i++) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            ans= (double) (score[b]-score[a-1]) /(b-a+1);

            String result = String.format("%.2f", ans);
            System.out.println(result);
        }
    }
}
