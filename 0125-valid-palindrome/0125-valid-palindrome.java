class Solution {
    public boolean isPalindrome(String s) {
        s=s.toUpperCase().replaceAll("[^A-Z0-9]", "");
        
        if(s.length() == 1) return true;
        
        String tmp = new StringBuilder(s).reverse().toString();
        if(s.equals(tmp)) return true;
        return false;
    }
    
}