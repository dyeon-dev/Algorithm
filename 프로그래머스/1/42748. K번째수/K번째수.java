import java.util.*;

class Solution {
    public int[] solution(int[] array, int[][] commands) {
        int[] answer = new int[commands.length];
        int n=0;
        
        for(int i=0; i<commands.length; i++) {
            int k=0;
            int[] list = new int[commands[i][1]-commands[i][0]+1]; // 4 1 7
            for(int j=commands[i][0]; j<=commands[i][1]; j++) { // j:2~5, 4~4, 1~7
                list[k++]=array[j-1]; // {5,2,6,3} {6} {1,5,2,6,3,7,4}
            }
            Arrays.sort(list); // {2,3,5,6} {6} {1,2,3,4,5,6,7}
            answer[n++]=list[commands[i][2]-1]; // {5,6,3} 
        }
        return answer;
    }
}