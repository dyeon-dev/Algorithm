import java.util.*;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        for (int t = 1; t <= 10; t++) {
            int n = sc.nextInt();
            String s =sc.next();
            char[] c = s.toCharArray();
            ArrayList<Character> arr = new ArrayList<>();

            String ans=" ";

            for (int i = 0; i < s.length(); i++) {
                arr.add(c[i]);
            }
            for (int i = 0; i < arr.size()-1;) {
                if (arr.get(i)==arr.get(i+1)) {
                    arr.remove(i);
                    arr.remove(i);
                    i=0;
                } else i++;
            }
            for (int i = 0; i < arr.size(); i++) {
                ans+=arr.get(i);
            }
            System.out.println("#" + t + " "+ans);
        }
    }
}
