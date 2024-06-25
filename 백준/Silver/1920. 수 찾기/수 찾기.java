import java.util.*;
public class Main{

    static int N,M;
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        N = sc.nextInt();
        int[] arr = new int[N];
        for (int i = 0; i < N; i++) {
            arr[i] = sc.nextInt();
        }
        Arrays.sort(arr);

        M = sc.nextInt();

        int[] ans= new int[M];
        for (int i = 0; i < M; i++) {
            int t = sc.nextInt();
            int pl = 0;
            int pr = arr.length-1;
            while(pl<=pr) {
                int mid = (pl + pr) / 2;
                if (arr[mid] == t) {
                    ans[i] = 1;
                    break;
                }
                else if (arr[mid] < t) pl = mid + 1;
                else if (arr[mid] > t) pr = mid - 1;
            }
            System.out.println(ans[i]);
        }
    }
}
