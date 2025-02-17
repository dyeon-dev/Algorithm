function solution(s) {
    var answer = '';
    s = s.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    answer+=s.join(' ');
    return answer;
}