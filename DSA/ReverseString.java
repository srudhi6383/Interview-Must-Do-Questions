/*
    2. **Reverse a string**:
    - **Explanation**: Similar to reversing an array, use two pointers to swap the characters at the beginning and end of the string, moving towards the center.
    - **Example**:
        - Input: `"hello"`
        - Output: `"olleh"`
 */

 public class ReverseString {
    public static void main(String[] args) {
        String input = "hello";
        String output = reverseString(input);
        System.out.println("Input: " + input);
        System.out.println("Output: " + output);
    }

    public static String reverseString(String s) {
        char[] charArray = s.toCharArray();
        int left = 0;
        int right = charArray.length - 1;
        
        while (left < right) {
            // Swap the characters at left and right indices
            char temp = charArray[left];
            charArray[left] = charArray[right];
            charArray[right] = temp;
            
            // Move the pointers towards the center
            left++;
            right--;
        }
        
        return new String(charArray);
    }
}
