/*
 6. **Find the most occurring element in an array or string**:
    - **Explanation**: Use a hash map (dictionary) to count the frequency of each element, then find the element with the maximum count.
    - **Example**:
        - Input: `[1, 2, 2, 3, 3, 3, 4]`
        - Output: `3`
        - Input: `"aabbccccc"`
        - Output: `"c"`
 */
import java.util.HashMap;
import java.util.Map;

public class MostOccurringCharacter {
    public static void main(String[] args) {
        String str = "aabbccccc";
        System.out.println(findMostOccurring(str));
    }

    public static char findMostOccurring(String str) {
        if (str == null || str.isEmpty()) {
            throw new IllegalArgumentException("String must not be null or empty");
        }

        HashMap<Character, Integer> frequencyMap = new HashMap<>();
        for (char ch : str.toCharArray()) {
            frequencyMap.put(ch, frequencyMap.getOrDefault(ch, 0) + 1);
        }

        char mostOccurringChar = str.charAt(0);
        int maxCount = 0;

        for (Map.Entry<Character, Integer> entry : frequencyMap.entrySet()) {
            if (entry.getValue() > maxCount) {
                maxCount = entry.getValue();
                mostOccurringChar = entry.getKey();
            }
        }

        return mostOccurringChar;
    }
}
