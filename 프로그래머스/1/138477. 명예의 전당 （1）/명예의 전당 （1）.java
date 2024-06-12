import java.util.*;

public class Solution {
    public int[] solution(int k, int[] score) {
        int[] answer = new int[score.length];
        int[] rank = new int[k];
        int size=0;

        for (int i = 0; i < score.length; i++) {
            if (size<k) {
                rank[size]=score[i];
                size++;
                Arrays.sort(rank, 0, size);
            }
            else {
                if (score[i]>rank[0]) {
                    // 점수 업데이트
                    rank[0]=score[i];
                    Arrays.sort(rank);
                }
            }
            answer[i]=rank[0];
        }
        return answer;
    }
}
