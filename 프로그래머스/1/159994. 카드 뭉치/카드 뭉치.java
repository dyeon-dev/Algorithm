class Solution {
    public String solution(String[] cards1, String[] cards2, String[] goal) { 
        int idx1 = 0; // card1에 해당하는 인덱스 
        int idx2 = 0; // card2에 해당하는 인덱스
        
        // 배열 순회
        for(String str: goal) {
            if(idx1 < cards1.length && str.equals(cards1[idx1])) idx1++;
            else if (idx2 < cards2.length && str.equals(cards2[idx2])) idx2++;
            else return "No";
        }
        return "Yes";
    }
}