import java.util.*;
public class Main {
    public static void main(String[] args) {
        // Please write your code here.
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n*2];
        for(int i=0; i<n*2; i++) {
            arr[i] = sc.nextInt();
        }
        
        Arrays.sort(arr);

        int max = 0;
        for(int i=0; i<n*2; i++) {
            int sum = arr[i]+arr[(n*2)-1-i];
            if(sum>max) max=sum;
        }
        System.out.print(max);
    }
}