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
 
 public class MostOccurringElement {
     public static void main(String[] args) {
         int[] array = {1, 2, 2, 3, 3, 3, 4};
         System.out.println("Most occurring element: " + findMostOccurring(array));
     }
 
     public static int findMostOccurring(int[] array) {
         if (array == null || array.length == 0) {
             throw new IllegalArgumentException("Array must not be null or empty");
         }
 
         HashMap<Integer, Integer> frequencyMap = new HashMap<>();
         for (int num : array) {
             frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
         }
 
         int mostOccurringElement = array[0];
         int maxCount = 0;
 
         for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
             if (entry.getValue() > maxCount) {
                 maxCount = entry.getValue();
                 mostOccurringElement = entry.getKey();
             }
         }
 
         return mostOccurringElement;
     }
 }
 