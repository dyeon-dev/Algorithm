import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(); // 전체 인원수
        int[] A = new int[n];
        int cnt = 0; // 현재 그룹에 해당 모험가 수
        int result = 0; // 모험을 떠날 수 있는 최대 그룹수

        for (int i = 0; i < n; i++) {
            A[i] =sc.nextInt();
        }
        Arrays.sort(A);

        for (int i = 0; i < n-1; i++) {
            cnt+=1; // 현재 그룹에 해당 모험가 포함하기
            if (cnt>=A[i]) { // 현재 그룹에 포함된 모험가의 수가 현재 공포도와 같거나 많다면
                result+=1; // 그룹수 결성
                cnt=0; // 현재 그룹에 포함된 모험가 수 초기화
            }
        }
        System.out.println(result);
    }
}