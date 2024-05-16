import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        for(int t = 1; t <= 10; t++) {
            int tmp = sc.nextInt();
            int ans = 0;
            String s = sc.next();;
            String arr = sc.next();;

            for (int i = 0; i <= arr.length()-s.length(); i++) {
                String c = arr.substring(i,i+s.length());
                if (c.equals(s)) ans++;
            }
            System.out.println("#" + t + " " + ans);
        }
    }
}
