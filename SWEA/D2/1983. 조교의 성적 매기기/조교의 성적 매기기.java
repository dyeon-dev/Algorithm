import java.util.Arrays;
import java.util.Scanner;

class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for (int t=1; t<=T; t++) {
            int n = sc.nextInt(); // 학생수
            int k = sc.nextInt(); // 학생 번호
            double[] scores = new double[n];
            for (int i = 0; i < n; i++) {
                int score1 = sc.nextInt();
                int score2 = sc.nextInt();
                int score3 = sc.nextInt();
                scores[i] = (score1*0.35)+(score2*0.45)+(score3*0.2);
            }
            double student = scores[k-1];
            // *학생 번호(k) 가져온 후 정렬해야함!!!
            Arrays.sort(scores);

            String[] grade = {"D0", "C-", "C0", "C+", "B-", "B0", "B+", "A-", "A0", "A+"};

            for (int i = 0; i < n; i++) {
                if (student==scores[i]) {
                    System.out.println("#"+t+" "+grade[i/(n/10)]);
                    break;
                }
            }
        }
    }
}
