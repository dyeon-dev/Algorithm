import java.util.*;
class Brick implements Comparable<Brick> {
    public int s,h,w;
    Brick(int s, int h, int w) {
        this.s=s;
        this.h=h;
        this.w=w;
    }
    public int compareTo(Brick o){
        return o.s-this.s; // 넓이 내림차순
    }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int ans=0;

        int n = sc.nextInt(); // 벽돌의 수
        ArrayList<Brick> arr = new ArrayList<Brick>();
        int[] d = new int[n];
        for (int i = 0; i < n; i++) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            int c = sc.nextInt();
            arr.add(new Brick(a,b,c));
        }

        Collections.sort(arr);
        d[0]=arr.get(0).h;
        ans=d[0]; // 첫번째 벽돌의 높이로 초기화 해놔야 함 (만족하는 벽돌이 없을 경우)

        for (int i = 1; i < arr.size(); i++) {
            int max_h=0;
            for (int j = i-1; j >= 0 ; j--) {
                if (arr.get(j).w > arr.get(i).w && d[j]>max_h) {
                    max_h=d[j];
                }
            }
            d[i]=max_h+arr.get(i).h;
            ans = Math.max(ans, d[i]);
        }
        System.out.println(ans);
    }
}
