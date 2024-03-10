import java.util.Scanner;
public class Main {
    static Scanner sc = new Scanner(System.in);
    public static void main(String[] args) {

        // 학점*과목평점
        double n = 0;
        // 학점 총합
        double sum = 0;

        for(int i=0; i<20; i++){
            String obj = sc.next(); // 과목
            double d = sc.nextDouble(); // 학점
            String score = sc.next(); // 평점
            sum+=d;
            switch (score) {
                case "A+":
                    n+=d*4.5;
                    break;
                case "A0":
                    n+=d*4.0;
                    break;
                case "B+":
                    n+=d*3.5;
                    break;
                case "B0":
                    n+=d*3.0;
                    break;
                case "C+":
                    n+=d*2.5;
                    break;
                case "C0":
                    n+=d*2.0;
                    break;
                case "D+":
                    n+=d*1.5;
                    break;
                case "D0":
                    n+=d*1.0;
                    break;
                case "F":
                    n+=d*0;
                    break;
                case "P":
                    sum-=d;
                    break;
            }
        }
        System.out.print(n/sum);
    }
}