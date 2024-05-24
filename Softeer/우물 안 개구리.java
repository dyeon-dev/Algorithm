import java.util.*;
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int ans=0;

        int n = sc.nextInt();
        int m = sc.nextInt();
        int[] w = new int[n+1]; // 역기 무게
        for (int i = 1; i <= n; i++) {
            w[i]=sc.nextInt();
        }

        // 친분관계 만들기
        ArrayList<ArrayList<Integer>> list = new ArrayList<>();
        for (int i = 0; i <= n; i++) {
            list.add(new ArrayList<>());
        }

        for (int i = 0; i < m; i++) {
            int a = sc.nextInt(); // 친분관계
            int b = sc.nextInt();
            list.get(a).add(b);
            list.get(b).add(a);
        }

        for (int i = 1; i <= n; i++) {
            boolean flag =true;
            for (int j = 0; j < list.get(i).size(); j++) {
                if (w[i]<=w[list.get(i).get(j)]) {
                    flag = false;
                    break;
                }
            }
            if (flag) ans++;
        }
        System.out.println(ans);
    }
}
