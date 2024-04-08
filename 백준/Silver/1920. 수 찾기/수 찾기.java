import java.util.*;
public class Main {
    public static int result;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] A = new int[n];

        for(int i=0;i<n;i++) {
            A[i] = sc.nextInt();
        }
        Arrays.sort(A);

        int m = sc.nextInt();

        for (int i = 0; i < m; i++) {
            boolean find = false;
            int target = sc.nextInt();
            // 이진탐색시작
            int start = 0;
            int end = A.length-1;
            while (start<=end) {
                int midi = (start+end)/2;
                int midV = A[midi];
                if (midV>target) {
                    end=midi-1;
                } else if(midV<target) {
                    start=midi+1;
                } else {
                    find=true;
                    break;
                }
            }
            if (find) System.out.println(1);
            else System.out.println(0);
        }
    }
}