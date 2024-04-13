import java.util.*;
class Student {
        String name;
        int score;
        public Student(String name, int score) {
            this.name=name;
            this.score=score;
        }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        List<Student> students = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            String name = sc.next();
            int score = sc.nextInt();
            students.add(new Student(name, score));
        }
        Collections.sort(students, new Comparator<Student>() {
            @Override
            public int compare(Student o1, Student o2) {
                // 오름차순 정렬
                return o1.score-o2.score;
            }
        });
        for (int i = 0; i < students.size(); i++) {
            System.out.println(students.get(i).name);
        }
    }
}