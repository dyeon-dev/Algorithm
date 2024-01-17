import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
    		int a = sc.nextInt();
    		int b = sc.nextInt();
    	
    		if(b<45) {
                a--;
                b= 60 - (45-b);
                if(a<0) a = 23;
                System.out.print(a+" "+b);
            } else {
                b = b - 45;
                System.out.print(a+" "+b);                
            }
	}
}