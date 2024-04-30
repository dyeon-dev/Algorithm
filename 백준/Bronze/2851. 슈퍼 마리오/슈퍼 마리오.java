import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int sum = 0;
        int max = 0;
        for (int i = 0; i < 10; i++) {
            int n = sc.nextInt();
            if(sum<100) {
                sum+=n;
                if (Math.abs(sum-100)<Math.abs(max-100)) {
                    max=sum;
                } else if (Math.abs(sum-100)==Math.abs(max-100)) {
                    max=max>sum?max:sum;
                }
            }
        }
        System.out.println(max);

    }
}