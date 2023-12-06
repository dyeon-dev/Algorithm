class Solution {
    public String reverseOnlyLetters(String s) {
        int left = 0;
        int right = s.length() - 1;
        char[] chars = s.toCharArray();
        while(left < right) {
            if (!Character.isAlphabetic(chars[left]))   left++;
            else if (!Character.isAlphabetic(chars[right])) right--;
            else {
            char temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;
            left++;
            right--;
            }
        }
        
        return String.valueOf(chars);
    }
}