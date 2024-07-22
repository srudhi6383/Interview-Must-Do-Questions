/*
 3. **Check if a string is a palindrome using two pointers**:
    - **Explanation**: Use two pointers to compare characters from the beginning and end of the string. Move the pointers towards each other. If all characters match, the string is a palindrome.
    - **Example**:
        - Input: `"racecar"`
        - Output: `true`
        - Input: `"hello"`
        - Output: `false`
 */

public class PalindromeChecker {

    public static boolean isPalindrome(String s){
        int left = 0;
        int right = s.length() -1;
        while(left < right) {
            if(s.charAt(left) != s.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    public static void main(String[] args) {
        String str1 = "racecar";
        String str2 = "hello";
        System.out.println(isPalindrome(str1));
        System.out.println(isPalindrome(str2));
    }
}