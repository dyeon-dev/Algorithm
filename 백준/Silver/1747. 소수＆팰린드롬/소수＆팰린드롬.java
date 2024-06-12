import java.util.*;
public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[10000001];
        for (int i = 2; i < arr.length; i++) {
            arr[i]=i;
        }
        arr[0]=arr[1]=2;

        // 에라토스테네스의 체 알고리즘 사용하여 소수 구하기
        for (int i = 2; i <= Math.sqrt(arr.length); i++) {
            if (arr[i]!=0) { // i가 소수인 경우
                for (int j = i*i; j < arr.length; j+=i) {
                    arr[j]=0;
                }
            }
        }
        while(true) {
            if(arr[n]!=0) {
                if (isPalind(arr[n])) {
                    System.out.println(arr[n]);
                    break;
                }
            }
            n++;
        }
    }

    public static boolean isPalind(int x) {
        String s = Integer.toString(x);
        for (int i = 0; i < s.length()/2; i++) {
            if (s.charAt(i)!=s.charAt(s.length()-i-1)) {
                return false;
            }
        }
        return true;
    }
}
