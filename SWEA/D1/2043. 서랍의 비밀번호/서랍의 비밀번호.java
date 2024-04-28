import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int p = sc.nextInt();
        int k = sc.nextInt();

        int ans = 0;
        for (int i = 0; i <= p-k; i++) {
            if (p==i+k) ans = i;
        }

        System.out.println(ans+1);
    }
}