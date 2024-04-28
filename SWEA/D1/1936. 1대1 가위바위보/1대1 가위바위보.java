import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        
        if (n==1 && m==2) System.out.println("B");
        else if (n==1 && m==3) System.out.println("A");
        else if (n==2 && m==1) System.out.println("A");
        else if (n==2 && m==3) System.out.println("B");
        else if (n==3 && m==1) System.out.println("B");
        else if (n==3 && m==2) System.out.println("A");
    }
}