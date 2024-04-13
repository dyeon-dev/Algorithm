import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        ArrayList<Character> A = new ArrayList<>();
        int sum = 0;
        // 문자열인지 숫자인지 판단하여 분리
        for (int i = 0; i < s.length(); i++) {
            if (Character.isLetter(s.charAt(i)))
            A.add(s.charAt(i));
            // 숫자는 따로 저장
            else sum+=s.charAt(i)-'0';
        }
        // 문자 정렬
        Collections.sort(A);
        // 정렬된 문자 출력
        for (int i = 0; i < A.size(); i++) {
            System.out.print(A.get(i));
        }
        System.out.println(sum);
    }
}