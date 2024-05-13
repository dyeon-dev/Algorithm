import java.util.*;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        for (int t = 1; t <= 10; t++) {
            int T = sc.nextInt();

            Queue<Integer> arr = new LinkedList<>();
            for (int i = 0; i < 8; i++) {
                arr.add(sc.nextInt());
            }

            while(true) {
                for (int i = 1; i <= 5; i++) {
                    int n = arr.poll();
                    if (n-i<=0) {
                        arr.add(0);
                        break;
                    } else arr.add(n-i);
                }
                if (arr.contains(0)) break;
            }

            System.out.print("#" + T + " ");
            for (int i: arr) {
                System.out.print(i+" ");
            }
        }
    }
}
