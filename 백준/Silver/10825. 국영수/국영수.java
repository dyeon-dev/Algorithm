import java.util.*;
public class Main {
    // 1. 국어 점수가 감소하는 순서로 -> 내림차순
    // 2. 국어 점수가 같으면 영어 점수가 증가하는 순서로 -> 오름차순
    // 3. 국어 점수와 영어 점수가 같으면 수학 점수가 감소하는 순서로 -> 내림차순
    // 4. 모든 점수가 같으면 이름이 사전 순으로 증가하는 순서로 (단, 아스키 코드에서 대문자는 소문자보다 작으므로 사전순으로 앞에 온다.)

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String[][] arr = new String[n][4];
        for(int i=0;i<n;i++) {
            arr[i][0] = sc.next();
            arr[i][1] = sc.next();
            arr[i][2] = sc.next();
            arr[i][3] = sc.next();
        }
        Arrays.sort(arr, new Comparator<String[]>() {
            @Override
            public int compare(String[] o1, String[] o2) {
                if (o1[1].equals(o2[1])) { // 국어 -> 내림차순
                    if (o1[2].equals(o2[2])) { // 영어 -> 오름차순
                        if (o1[3].equals(o2[3])) { // 수학 -> 내림차순
                            return (o1[0].compareTo(o2[0])); // 이름 오름차순
                        } else return Integer.parseInt(o2[3]) - Integer.parseInt(o1[3]);
                    } else return Integer.parseInt(o1[2]) - Integer.parseInt(o2[2]);
                } else return Integer.parseInt(o2[1]) - Integer.parseInt(o1[1]);
            }
        });
        for (int i = 0; i < n; i++) {
            System.out.println(arr[i][0]);
        }
    }
}