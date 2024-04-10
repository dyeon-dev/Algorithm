import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt(); // 떡의 개수
        int m = sc.nextInt(); // 요청한 떡의 길이
        int[] A = new int[n];
        for (int i = 0; i < n; i++) {
             A[i] = sc.nextInt();
        }

        int result = 0;
        int start = 0;
        int end = (int) 1e9;
        while (start<=end) {
            long total = 0;
            int midi = (start+end)/2;

            for (int i = 0; i < n; i++) {
                // 떡을 자르고 남은 부분의 합
                if (A[i]>midi) total += A[i]-midi;
            }
            // 떡의 양이 부족한 경우 더 많이 자르기 (왼쪽부분 탐색)
            if (total < m) end = midi-1;
            else { // 떡의 양이 충분한 경우 덜 자르기
                result = midi; // 최대한 덜 잘랐을때가 정답
                start = midi+1;
            }
        }
        System.out.println(result);
    }
}