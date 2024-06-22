import java.util.*;
public class Main {
    static int l,c;
    static char[] arr;
    static char[] ans;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        l = sc.nextInt();
        c = sc.nextInt();
        arr = new char[c];
        ans = new char[l];
        for (int i = 0; i < c; i++) {
            arr[i]= sc.next().charAt(0);
        }
        Arrays.sort(arr);
        combination(0, 0);
    }

    private static void combination(int cnt, int start) {
        if (cnt==l) {
            if (isValid(ans)) {
                for (int i = 0; i < l; i++) {
                    System.out.print(ans[i]);
                }
                System.out.println();
            }
            return;
        }
        for (int i = start; i < c; i++) {
            ans[cnt]=arr[i];
            combination(cnt+1, i+1);
        }
    }
    private static boolean isValid(char[] ans) {
        int ja=0, mo=0;
        for (char c: ans) {
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                mo++;
            } else ja++;
        }
        return mo>=1 && ja>=2;
    }
}

