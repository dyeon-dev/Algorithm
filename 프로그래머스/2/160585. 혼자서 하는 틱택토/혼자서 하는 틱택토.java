class Solution {
    // 게임 규칙1. O이 빙고가 되면 O의 개수=X의 개수+1
    // 게임 규칙2. X이 빙고가 되면 O의 개수=X의 개수이어야 함
    // 게임 규칙3. 빙고가 안됐을 때 O개수=X의 개수+1
    String[] board;
    public int solution(String[] board) {
        this.board=board;

        int n=board.length;
        int m=board[0].length();
        int oCnt=0, xCnt=0;
        
        for(int i=0; i<n; i++) {
            for(int j=0; j<m; j++) {
                char c = board[i].charAt(j);
                if(c=='O') {
                    oCnt++;
                }
                if(c=='X') {
                    xCnt++;
                }
            }
        }
        
        boolean oBingo = bingo('O');
        boolean xBingo = bingo('X');

        // 유효한 틱택토 상태인지 확인
        if(oCnt<xCnt || oCnt-xCnt>1) return 0;
        if(oBingo && xBingo) return 0;
        if(oBingo && oCnt!=xCnt+1) return 0;
        if(xBingo && oCnt!=xCnt) return 0;
        
        return 1;
    }
    
    private boolean bingo(char c) {
        for(int i=0; i<3; i++) {
            if(board[i].charAt(0) == c && board[i].charAt(1) == c && board[i].charAt(2) == c) {
                return true;
            }
        }
        for(int i=0; i<3; i++) {
            if(board[0].charAt(i) == c && board[1].charAt(i) == c && board[2].charAt(i) == c) {
                return true;
            }
        }
        if (board[0].charAt(0) == c && board[1].charAt(1) == c && board[2].charAt(2) == c) return true;
        if (board[0].charAt(2) == c && board[1].charAt(1) == c && board[2].charAt(0) == c) return true;

        return false;
    }
}