import java.util.*;

public class Main {
        static class Contest {
            int id, score;
            Contest(int id, int score) {
                this.id=id;
                this.score=score;
            }
        }

        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            int n = sc.nextInt();
            Contest[][] arr = new Contest[4][n];
            for (int i = 0; i < 3; i++) {
                for (int j = 0; j < n; j++) {
                    arr[i][j]= new Contest(j, sc.nextInt()); //각 대회마다 모든 참가자들의 점수를 저장
                }
            }

            // 참가자들의 전체 점수 합산
            for (int i = 0; i < n; i++) {
                int sum=0;
                for (int j = 0; j < 3; j++) {
                    sum+=arr[j][i].score;
                }
                arr[3][i] = new Contest(i, sum);
            }

            // 내림차순으로 정렬
            for(Contest[] con: arr) {
                Arrays.sort(con, ((o1, o2) -> o2.score - o1.score));
            }

            // 3개의 대회에 대한 등수, 전체 등수 출력
            int[][] r = new int[4][n];
            for (int i = 0; i < 4; i++) {
                int rank=1;
                int cnt=1;
                r[i][arr[i][0].id]=rank;
                for (int j = 1; j < n; j++) {
                    if(arr[i][j-1].score==arr[i][j].score) {
                        r[i][arr[i][j].id]=rank;
                        cnt++;
                    } else {
                        rank+=cnt;
                        r[i][arr[i][j].id]=rank;
                        cnt=1;
                    }
                }
            }
            for (int i = 0; i < 4; i++) {
                for (int j = 0; j < n; j++) {
                    System.out.print(r[i][j]+" ");
                }
                System.out.println();
            }
        }
}
