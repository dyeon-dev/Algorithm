import java.util.*;
public class Main {
    public static void main(String[] args) {
        // Please write your code here.
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        int[] arr2 = new int[n];
        for(int i=0; i<n; i++) {
            arr[i] = sc.nextInt();
        }
        for(int i=0; i<n; i++) {
            arr2[i] = sc.nextInt();
        }
        Arrays.sort(arr);
        Arrays.sort(arr2);

        boolean flag = true;
        for(int i=0; i<n; i++) {
            if(arr[i]!=arr2[i]) {
                flag = false;
                break;
            }
        }
        if(flag) System.out.println("Yes");
        else System.out.println("No");
    }
}