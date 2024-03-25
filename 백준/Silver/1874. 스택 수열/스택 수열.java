import com.sun.source.tree.BreakTree;

import java.util.*;
import java.io.*;
public class Main {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i=0; i<n; i++) {
            arr[i]=sc.nextInt();
        }
        Stack<Integer> stack = new Stack<>();
        StringBuffer bf = new StringBuffer();
        int num=1; // 오름차순 수
        boolean result = true;
        for(int i=0; i<arr.length; i++) {
            int su = arr[i]; // 현재 수열의 수
            if(su>=num) { // 현재 수열 값 >= 오름차순 자연수: 값이 같아질때까지 push
                while(su>=num) {
                    stack.push(num++);
                    bf.append("+\n");
                }
                stack.pop();
                bf.append("-\n");
            }
            else { // 현재 수열 값 < 오름차순 자연수: pop을 수행해 수열 원소를 꺼냄
                int pop = stack.pop();
                if(pop>su) {
                    System.out.println("NO");
                    result = false;
                    break;
                } else {
                    bf.append("-\n");
                }
            }
        }
        if(result) System.out.println(bf.toString());
    }
}