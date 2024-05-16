import java.util.*;

class Solution {
    public static void main(String[] args) {
        ArrayList<Integer> arr = new ArrayList<>();
        for (int i = 2; i < 1000000; i++) {
            boolean isPrime = true;
            for (int j = 2; j <= Math.sqrt(i); j++) {
                if (i % j == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) arr.add(i);
        }
        for (int i = 0; i < arr.size(); i++) {
            int prime = arr.get(i);
            System.out.print(prime+" ");
        }
    }
}
