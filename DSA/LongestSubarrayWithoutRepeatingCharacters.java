/*
  8.  Find the longest subarray without repeating characters using an optimized approach:
Explanation: Use a sliding window technique and a hash set to keep track of characters in the current window without repeats.
Example:
Input: [1, 2, 3, 1, 2, 3, 4, 5]
Output: [1, 2, 3, 4, 5]
Input: [1, 1, 1, 1, 1]
Output: [1]
 */

 import java.util.*;

 public class LongestSubarrayWithoutRepeatingCharacters {
     public static int[] findLongestSubarray(int[] nums) {
         Set<Integer> set = new HashSet<>();
         int start = 0, end = 0, maxLength = 0, maxStart = 0;
 
         while (end < nums.length) {
             if (!set.contains(nums[end])) {
                 set.add(nums[end]);
                 end++;
                 if (end - start > maxLength) {
                     maxLength = end - start;
                     maxStart = start;
                 }
             } else {
                 set.remove(nums[start]);
                 start++;
             }
         }
 
         return Arrays.copyOfRange(nums, maxStart, maxStart + maxLength);
     }
 
     public static void main(String[] args) {
         int[] input1 = {1, 2, 3, 1, 2, 3, 4, 5};
         int[] input2 = {1, 1, 1, 1, 1};
 
         int[] result1 = findLongestSubarray(input1);
         int[] result2 = findLongestSubarray(input2);
 
         System.out.println("Input: " + Arrays.toString(input1));
         System.out.println("Output: " + Arrays.toString(result1));
 
         System.out.println("Input: " + Arrays.toString(input2));
         System.out.println("Output: " + Arrays.toString(result2));
     }
 }
 