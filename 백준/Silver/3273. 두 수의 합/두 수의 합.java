import java.util.*;
public class Main{
    static int N;
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        N = sc.nextInt();
        int[] arr = new int[N];
        for (int i = 0; i < N; i++) {
            arr[i]=sc.nextInt();
        }
        Arrays.sort(arr);
        int sum = sc.nextInt(); // 찾고자하는 부분합
        int cnt=0; // 정답
        int start=0;
        int end=N-1;

        while (start<end) {
            if (arr[start]+arr[end]==sum) {
                cnt++;
                start++;
                end--;
            } else if (arr[start]+arr[end]<sum) {
                start++;
            } else end--;
        }
        System.out.println(cnt);
    }
}
