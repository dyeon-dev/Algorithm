import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] n = new int[8];
        String ans = "";
        for (int i = 0; i < 8; i++) {
            n[i] = sc.nextInt();
        }

        boolean a = true;
        boolean d = true;
        for (int i = 0; i < 8; i++) {
            if (n[i]!=i+1) {
                a=false;
            }
            // if를 각각 처리해서 독립적으로 설정해야 한다.
            if (n[i]!=8-i) {
                d=false;
            }
        }
        if (a) ans="ascending";
        else if (d) ans="descending";
        else ans="mixed";
        System.out.println(ans);
    }
}
