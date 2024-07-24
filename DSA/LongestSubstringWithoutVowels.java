/*
 7. **Find the longest substring without any vowels using an optimized approach**:
    - **Explanation**: Use a sliding window technique to find the longest substring that does not contain any vowels.
    - **Example**:
        - Input: `"hello"`
        - Output: `"hll"`
        - Input: `"abcdeiou"`
        - Output: `"bc"`
 */

 public class LongestSubstringWithoutVowels {
    public static void main(String[] args) {
        String str1 = "hello";
        String str2 = "abcdeiou";
        
        System.out.println("Longest substring without vowels in \"" + str1 + "\": " + findLongestSubstringWithoutVowels(str1));
        System.out.println("Longest substring without vowels in \"" + str2 + "\": " + findLongestSubstringWithoutVowels(str2));
    }

    public static String findLongestSubstringWithoutVowels(String str) {
        if (str == null || str.isEmpty()) {
            return "";
        }

        String vowels = "aeiouAEIOU";
        int maxLength = 0;
        int maxStart = 0;
        int start = 0;

        for (int end = 0; end < str.length(); end++) {
            if (vowels.indexOf(str.charAt(end)) != -1) {
                start = end + 1;
            } else {
                if (end - start + 1 > maxLength) {
                    maxLength = end - start + 1;
                    maxStart = start;
                }
            }
        }

        return str.substring(maxStart, maxStart + maxLength);
    }
}
