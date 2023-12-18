class Solution {
    public int longestMountain(int[] A) {
    boolean peak = false, valley = false;
        int i = 0;
        int answer = 0;
        
        if(A.length < 3) return 0;
        
        while(i < A.length-1) {
            if(A[i]<A[i+1]) {
                int start = i;
                while(i<A.length-1 && A[i]<A[i+1]) {
                      i++;
                    peak=true;
               } 
                while(i<A.length-1 && A[i]>A[i+1]) {
                      i++;
                  valley=true;
               }
                if(peak== true && valley == true) answer = Math.max(answer, i-start+1);
                
                peak=false;
                valley=false;
            } else i++;
        }
        return answer;
    }
}