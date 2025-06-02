class Solution {
    public int[] solution(int[] sequence, int k) {
        int left=0, right=1;
        int sum = sequence[0];
        int[] answer = new int[]{0, sequence.length-1};
        
        while(left<right) {
            if(sum==k) {
                minChange(left, right, answer);
                sum-=sequence[left++];
            } else if(sum<k && right<sequence.length) {
                sum+=sequence[right++];
            } else {
                sum-=sequence[left++];
            }
        }
        return answer;
    }
    private void minChange(int left, int right, int[] answer) {
        if(answer[1]-answer[0]>right-1-left) {
            answer[0]=left;
            answer[1]=right-1;
        }
    }
}

