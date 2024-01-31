import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr = new int[31]; // 30개의 학생 배열 생성

        for (int i = 1; i < 29; i++) {
            int num = sc.nextInt(); // 28개의 출석 번호를 읽고
            arr[num] = 1; // 출석 번호가 생성한 학생 배열의 값이면 1(true)
        }

        for(int i=1; i<arr.length; i++) {
            if(arr[i]!=1) System.out.println(i); // 학생 배열의 값이 1(true)가 아니라면 해당 번호 출력
        }
    }
}