import java.util.*;
import java.io.*;
public class Main {
    static int N;
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        N = sc.nextInt();

        DFS(2,1);
        DFS(3,1);
        DFS(5,1);
        DFS(7,1);
    }
    static void DFS(int number, int jarisu) {
        //
        if(jarisu==N) {
            if(isPrime(number)) {
                System.out.println(number);
            }

        }
        //
        for (int i=1; i<10; i++) {
            // 짝수라면 더이상 탐색할 필요없음
            if(i%2==0) continue;
            // 소수라면 자리수 늘려서 탐색
            if(isPrime(number*10+i)) {
                DFS(number*10+i, jarisu+1);
            }
        }
    }
    static boolean isPrime(int number) {
        for(int i=2; i<=number/2; i++){
            if (number%i==0) return false;
        }
        return true;
    }
}