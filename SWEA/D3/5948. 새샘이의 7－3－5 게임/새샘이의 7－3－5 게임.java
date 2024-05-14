import java.util.*;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int t = 1; t <= T; t++) {
            int[] n = new int[7];

            for (int i = 0; i < n.length; i++) {
                n[i]=sc.nextInt();
            }

            Set<Integer> set = new HashSet<>();

            for (int i = 0; i < n.length-2; i++) {
                for (int j = i+1; j < n.length-1; j++) {
                    for (int k = j+1; k < n.length; k++) {
                        set.add(n[i]+n[j]+n[k]);
                    }
                }
            }
            ArrayList<Integer> list = new ArrayList<>(set);
            Collections.sort(list);

            System.out.println("#" + t + " "+list.get(list.size()-5));
        }
    }
}
