import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();

        int[] arr = new int[N]; // 배열 생성 길이는 N만큼
        int max = 0;
        int min = 0;
        for(int i=0; i<N; i++) {
            arr[i] = sc.nextInt();
            if(arr[max]<arr[i]) max=i;
            if(arr[min]>arr[i]) min=i;
        }
        System.out.print(arr[min]+ " "+arr[max]);
    }
}