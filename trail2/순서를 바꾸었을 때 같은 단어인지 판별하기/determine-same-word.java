import java.util.*;
public class Main {
    public static void main(String[] args) {
        // Please write your code here.
        Scanner sc = new Scanner(System.in);
        String a =  sc.next();
        String b =  sc.next();
        char[] c1 = a.toCharArray();
        char[] c2 = b.toCharArray();
        Arrays.sort(c1);
        Arrays.sort(c2);

        if(Arrays.equals(c1, c2)) System.out.println("Yes");
        else System.out.println("No");
    }
}