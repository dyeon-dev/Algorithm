import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.nextLine();

        List<int[]> arr = new ArrayList<>();

        for(int i = 0; i < n; i++) {
            String s = sc.nextLine();
            String a = "", b = "";

            boolean flag = true;
            for(char c : s.toCharArray()) {
                if(c == '.') {
                    flag = false;
                    continue;
                }
                if (flag) {
                    a+=c;
                } else {
                    b+=c;
                }
            }

            int intA = Integer.parseInt(a);
            int intB = b.isEmpty() ? -1 : Integer.parseInt(b);

            arr.add(new int[] {intA, intB});
        }

        arr.sort((a, b) -> {
            if(a[0]!=b[0]) {
                return Integer.compare(a[0], b[0]);
            } else {
                return Integer.compare(a[1], b[1]);
            }
        });

        for(int[] ans : arr) {
            if(ans[1] == -1) {
                System.out.println(ans[0]);
            } else {
                System.out.println(ans[0] + "." + ans[1]);
            }
        }
    }
}
