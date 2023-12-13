class Solution {
 public String[] solution(int n, int[] arr1, int[] arr2) {
            String[] answer = new String[n];

            for(int i=0; i<n; i++) {
                answer[i] = Integer.toBinaryString(arr1[i] | arr2[i]);
                // 너비 숫자만큼 반환해야 한다.
                answer[i] = String.format("%"+n+"s", answer[i]);
                // 문자열 변환 
                answer[i]= answer[i].replace("1", "#").replace("0", " ");
                
            }
            System.out.print(answer);
            return answer;
        }
}