import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        List<Integer> arr = new ArrayList<>();
        float ans =0;
        for (int i = 0; i < n; i++) {
            arr.add(sc.nextInt());
        }
        int max = Collections.max(arr);
        for (int i = 0; i < n; i++) {
            float score = (float) arr.get(i) /max*100;
            ans+=score;
        }
        ans/=n;
        System.out.println(ans);
    }
}