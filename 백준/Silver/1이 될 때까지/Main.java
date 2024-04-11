import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int k = sc.nextInt();
        int result = 0;
        while (true) {
            // n이 k로 나누어 떨어지는 수가 될 때까지만 1씩 빼기
            int target = (n/k)*k; // 최대로 나누어 떨어지는 수
            result += n-target; // 나눠 떨어지고 나머지 -> 1을 빼주는 값
            n = target;

            // n이 k보다 작아지면 반복문 빠져나오기
            if (n<k) break;
            // 횟수 카운트
            result += 1;
            // n을 k로 나누기
            n/=k;
        }
        result+=n-1; // 1이 될때까지 남은 수 더함
        System.out.println(result);
    }
}