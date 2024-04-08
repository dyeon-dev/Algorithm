import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int k = sc.nextInt(); // 연산 수

        // N개의 정수를 입력받아 리스트에 저장
        Integer[] A = new Integer[n];
        for (int i = 0; i < n; i++) {
            A[i] = sc.nextInt(); // 1 2 5 4 3
        }
        Integer[] B = new Integer[n];
        for (int i = 0; i < n; i++) {
            B[i] = sc.nextInt(); // 5 5 6 6 5
        }

        // 오름차순
        Arrays.sort(A); // 1 2 3 4 5
        // 기본 정렬 라이브러리를 이용하여 내림차순 정렬 수행
        Arrays.sort(B, Collections.reverseOrder()); // 6 6 5 5 5
        //  A [6 6 5 4 5] 최대합: 26
        // B [3 5 1 2 5] ??????
        for (int i = 0; i < k; i++) {
            if (A[i]<B[i]) {
                int temp=A[i];
                A[i]=B[i];
                B[i]=temp;
            } else break;
        }
        long sum=0;
        for (int i = 0; i < n; i++) {
            sum+=A[i];
        }
        System.out.println(sum);
    }
}