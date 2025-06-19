import java.util.*;

class Solution {
    public int solution(int[] people, int limit) {
        Arrays.sort(people); // 몸무게 오름차순 정렬

        int left = 0;                     // 가장 가벼운 사람
        int right = people.length - 1;    // 가장 무거운 사람
        int answer = 0;

        while (left <= right) {
            // 두 명을 함께 태울 수 있다면 (가벼운 + 무거운)
            if (people[left] + people[right] <= limit) {
                left++;   // 가벼운 사람 탑승
            }
            // 무거운 사람은 항상 보트에 탑승
            right--;       // 무거운 사람 탑승
            answer++;      // 보트 하나 사용
        }

        return answer;
    }
}
