# [Bronze II] 단어의 개수 - 1152 

[문제 링크](https://www.acmicpc.net/problem/1152) 

### 성능 요약

메모리: 30900 KB, 시간: 500 ms

### 분류

구현, 문자열

### 제출 일자

2024년 2월 3일 17:16:39

### 문제 설명

<p>영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 이 문자열에는 몇 개의 단어가 있을까? 이를 구하는 프로그램을 작성하시오. 단, 한 단어가 여러 번 등장하면 등장한 횟수만큼 모두 세어야 한다.</p>

### 입력 

 <p>첫 줄에 영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 이 문자열의 길이는 1,000,000을 넘지 않는다. 단어는 공백 한 개로 구분되며, 공백이 연속해서 나오는 경우는 없다. 또한 문자열은 공백으로 시작하거나 끝날 수 있다.</p>

### 출력 

 <p>첫째 줄에 단어의 개수를 출력한다.</p>

나는 Scanner를 사용해서 빈 문자열을 체크해주는 식으로 코드를 짰다.

자바의 StringTokenizer으로 띄어쓰기를 기준으로 단어를 분류하고, 그 분류된 단어들을 토큰을 세는 방식으로 간단하게 카운팅을 할 수도 있다.

```java
import java.util.Scanner;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();

        StringTokenizer st = new StringTokenizer(s, " ");
        System.out.println(st.countTokens());
    }
}
```
