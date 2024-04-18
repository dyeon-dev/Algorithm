import java.util.*;

class Solution {
    public String solution(int[] numbers) {
        String[] answer = new String[numbers.length];
        // 각 숫자를 문자열로 변환하여 저장 
        for(int i=0; i<numbers.length; i++) {
            answer[i]=String.valueOf(numbers[i]);
        }
        // 610 106, 102 210, 두 숫자 합친 거를 비교해서 내림차순 정렬
        Arrays.sort(answer, (o1,o2) -> (o2+o1).compareTo(o1+o2));

        // 첫번째 수가 0이면 0으로만 이뤄진 배열이므로 0을 리턴
        if(answer[0].equals("0")) {
            return "0";
        }
        StringBuilder sb = new StringBuilder();
        for(String s:answer) {
            sb.append(s);
        }
        return sb.toString();
    }
}