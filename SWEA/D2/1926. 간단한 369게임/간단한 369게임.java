import java.util.Scanner;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        for (int i=1; i<=n; i++) {
            String number = Integer.toString(i);
            String result = "";
            for (int j=0; j<number.length(); j++) {
                if (number.charAt(j) == '3' || number.charAt(j) == '6' || number.charAt(j) == '9') {
                    result += "-";
                }
            }
            if (result.length() >= 1) {
                System.out.print(result + " ");
            } else {
                System.out.print(number + " ");
            }
        }
    }
}
