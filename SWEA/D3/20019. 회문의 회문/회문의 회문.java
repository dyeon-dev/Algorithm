import java.util.*;

class Solution {

    // 주어진 문자열이 회문인지를 판별하는 함수
    public static boolean isPalindrome(String s) {
        for (int i = 0; i < s.length() / 2; i++) {
            if (s.charAt(i) != s.charAt(s.length() - 1 - i)) {
                return false;
            }
        }
        return true;
    }

    // 주어진 조건에 따라 회문의 회문인지를 판별하는 함수
    public static boolean isDoublePalindrome(String s) {
        if (!isPalindrome(s))
            return false;

        int mid = (s.length() - 1) / 2;
        String firstHalf = s.substring(0, mid);
        String secondHalf = s.substring(s.length() - mid);

        return isPalindrome(firstHalf) && isPalindrome(secondHalf);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 1; t <= T; t++) {
            String s = sc.next().trim();

            String ans = isDoublePalindrome(s) ? "YES" : "NO";

            System.out.println("#" + t + " " + ans);
        }
        sc.close();
    }
}
