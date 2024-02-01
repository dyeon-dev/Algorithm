import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String st = sc.next();
        int[] arr = new int[26]; // 알파벳 26개이므로 사이즈 26인 배열 선언

        for(int i=0; i< arr.length; i++) {
            arr[i] = -1; // 일단 -1로 초기화 한다
        }
        for(int i=0; i<st.length(); i++) {
            char ch = st.charAt(i);
            if(arr[ch-'a'] == -1) { // arr 원소 값이 -1인 경우만 초기화
                arr[ch - 'a'] = i;
            }
        }
        for(int val:arr) System.out.print(val+ " ");
    }
}