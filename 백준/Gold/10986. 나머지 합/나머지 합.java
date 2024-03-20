import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int m = scanner.nextInt();
        long[] arr = new long[n+1]; // 누적합 배열
        long[] cnt = new long[m]; // 나머지 인덱스 카운팅 배열
        long result = 0; // 나눠 떨어지는 쌍의 개수

//        arr[0] = scanner.nextInt();
        for(int i = 1; i<n+1; i++){
            arr[i] = (arr[i-1] + scanner.nextInt())%m;
            if(arr[i]==0) result++;
            cnt[(int)arr[i]]++; // 0으로 떨어지지 않는 나머지(나머지가 같은 인덱스 수 카운팅)
        }

        // cnt[i]에서 2가지를 뽑는 경우의 수 카운팅
        for(int i=0; i<m; i++) {
            if(cnt[i]>1) result+=(cnt[i]*(cnt[i]-1))/2;
        }
        System.out.println(result);
    }
}