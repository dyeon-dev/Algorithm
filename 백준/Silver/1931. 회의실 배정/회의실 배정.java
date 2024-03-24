import java.util.*;
import java.io.*;
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int[][] time = new int[N][2];

        StringTokenizer st;

        for(int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine(), " ");
            time[i][0] = Integer.parseInt(st.nextToken());	// 시작시간
            time[i][1] = Integer.parseInt(st.nextToken());	// 종료시간
        }

       Arrays.sort(time, (a, b) -> {
            if (a[1] == b[1]) // 종료시간이 같은 경우 시작시간을 오름차순으로 정렬 
                return a[0] - b[0];
            return a[1] - b[1]; // 종료시간이 다른 경우 종료시간을 오름차순으로 정렬
        });

        int cnt = 0;
        int end_time = 0;
        for(int i=0; i<N; i++) {
            if(end_time<=time[i][0]){ // 종료시간이 시작시간보다 작거나 같을 때
                end_time=time[i][1];
                cnt++;
            }
        }
        System.out.print(cnt);
    }
}