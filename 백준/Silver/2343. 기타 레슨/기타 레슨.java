import java.util.*;
public class Main {
    // 최대 3개 블루레이를 사용할 수 있는 9(시작엔덱스)~45(종료인덱스) 사이의 블루레이의 최소크기를 찾아야한다.
    // 시작인덱스>종료인덱스일때까지 이진탐색 수행하면서 최소크기를 찾는다.
    // 중앙값 크기로 모든 레슨을 저장할 수 있으면 종료 인덱스 = 중앙값 - 1
    // 중앙값 크기로 모든 레슨을 저장할 수 없으면 종료 인덱스 = 중앙값 + 1

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(); //강의수
        int m = sc.nextInt(); //블루레이개수
        int[] A = new int[n];

        int start = 0;
        int end = 0;
        for (int i = 0; i < n; i++) {
            A[i]=sc.nextInt();
            if (start<A[i]) start=A[i]; // 9
            end+=A[i]; // 45
        }
        while (start<=end) {
            int midi = (start+end)/2;
            int sum=0; // 레슨합
            int cnt=0; // 블루레이 개수
            for (int i = 0; i < n; i++) {
                if (sum+A[i]>midi) {
                    cnt++;
                    sum=0;
                }
                sum+=A[i];
            }
            if (sum!=0) cnt++;
            if (cnt>m) start = midi+1;
            else end = midi-1;
        }
        System.out.println(start);
    }
}