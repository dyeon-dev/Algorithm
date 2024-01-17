import java.util.Scanner;
 
public class Main {
	public static void main(String[] args) {
    
		Scanner in = new Scanner(System.in);
		
		int a = in.nextInt(); // 시
		int b = in.nextInt(); // 분
        int c = in.nextInt(); // 걸리는 시간
        
        int min = 60*a+b;
        min += c;
        
        int h = (min/60) % 24;
        int m = min%60;
        
        System.out.print(h+ " "+m);
      
    }
}