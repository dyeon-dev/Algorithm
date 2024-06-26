import java.util.*;
public class Main{
    static int N,K;
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        K = sc.nextInt(); // 랜선의 개수
        N = sc.nextInt(); // 필요한 랜선 개수
        int[] arr = new int[K];
        long max=0;
        for (int i = 0; i < K; i++) {
            arr[i] = sc.nextInt();
            if (arr[i] > max) max = arr[i]; // 입력된 값 중 가장 큰 값을 max에 저장
        }
        long pl = 1;
        long pr = max;
        long ans=0;
        while(pl<=pr) {
            long pc = (pl+ pr)/2; //401
            int cnt=0;
            for (int i = 0; i < K; i++) {
                cnt+=arr[i]/pc; // 2+1+1+1=5
            }
            if (cnt>=N) {
                pl=pc+1;
                ans=pc;
            }
            else pr=pc-1;
        }
        System.out.println(ans);
    }
}
