import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr = new int[10]; // 10개의 배열 생성
        boolean bl; // n번째와 n+1번째랑 비교하기 위한 변수
        int cnt = 0; // 서로 다른 나머지 개수
        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt() % 42;
        }
        for(int i=0; i<arr.length; i++) {
            bl=false; // 비교하기 위한 변수를 false로 초기설정
            for(int k=i+1; k<arr.length; k++) {
                if(arr[i]==arr[k]) { // 배열의 n번째와 n+1번째 값을 비교
                    bl = true; // 값이 같다면 true로 변경
                    break; // 조건이 성립하면 벗어나기
                }
            }
            if(bl==false) cnt++; // bl의 값이 falsedlf Eo zkdnsxm wmdrk
            //만약 true면 나머지가 서로 같다는 뜻이니 카운트를 올릴 필요x
        }
        System.out.println(cnt);
    }
}