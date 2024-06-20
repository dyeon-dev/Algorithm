import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        int[] n =  new int[s.length()];

        for (int i = 0; i < s.length(); i++) {
            n[i] = s.charAt(i)-'0';
        }
        for (int i = 0; i < s.length(); i++) {
            int max = i;
            for (int j = i+1; j < s.length(); j++) {
                if(n[max]<n[j]) {
                    max=j;
                }
                if (n[i]<n[max]) {
                    int temp = n[i];
                    n[i] = n[max];
                    n[max]=temp;
                }
            }
        }
        for (int i = 0; i < s.length(); i++) {
            System.out.print(n[i]);
        }
    }
}
