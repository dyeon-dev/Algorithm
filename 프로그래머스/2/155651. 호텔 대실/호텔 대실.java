import java.util.*;

class Solution {
    public int ttm(String time){
        String[] hm = time.split(":");
        int h = Integer.parseInt(hm[0]);
        int m = Integer.parseInt(hm[1]);
        return h * 60 + m;
    }
    
    public int solution(String[][] book_time) {
        int answer = 0;
        
        List<int[]> rooms = new ArrayList<>();
        for(String[] times : book_time){// 시간을 분단위로
            String start = times[0];
            String end = times[1];
            rooms.add(new int[]{ttm(start), ttm(end)+10});
            
        }
        // 커스텀 정렬
        Collections.sort(rooms, (t1, t2) -> t1[0] - t2[0]);
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        pq.offer(rooms.get(0)[1]); // 처음 손님의 끝나는 시간을 Q에 저장
        
        for(int i=1 ; i<rooms.size();i++){
            // 다음 손님이 들어가 있는 가장 앞의 손님의 끝나는 시간보다 뒤에 있나요?
            // 방을 빼줍니다.
            if (pq.peek() <= rooms.get(i)[0]){// 비교는 시작시간
                pq.poll(); // 방을 빼줍니다.
            }
            pq.offer(rooms.get(i)[1]);// 손님을 새로운 방에 추가(끝나는 시간)
        }
        answer = pq.size();
        return answer;
    }
}