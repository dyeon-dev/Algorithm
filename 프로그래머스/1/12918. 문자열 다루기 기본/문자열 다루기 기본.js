function solution(s) {
    let strLength = s.length==4 || s.length==6;
    
    let isNum = /^[0-9]+$/.test(s);
    return strLength && isNum ? true : false;
}