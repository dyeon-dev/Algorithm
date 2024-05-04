import java.util.*;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t=1; t<=T; t++) {
            int p = sc.nextInt(); // A사 1리터당 비용
            int q = sc.nextInt(); // B사 기본 요금
            int r = sc.nextInt(); // 기준량
            int s = sc.nextInt(); // 기준량 이상 1리터당 요금
            int w = sc.nextInt(); // 사용량

            // A사
            int a=w*p;
            // B사
            int b=0;
            // R 이하일 때 요금
            if (w<=r) b=q;
            // R 이상일 때 요금
            else b=q+s*(w-r);

            System.out.println("#"+t+" "+Math.min(a,b));

        }
    }
}
