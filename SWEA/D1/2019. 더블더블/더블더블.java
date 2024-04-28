import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        int ans = 1;
        System.out.print(1+" ");
        for (int i = 1; i <= n; i++) {
            ans*=2;
            System.out.print(ans+" ");
        }
        }
}