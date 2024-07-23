/*
 4. **Find the largest element in an array in O(N) time complexity**:
    - **Explanation**: Iterate through the array and keep track of the maximum element found so far.
    - **Example**:
        - Input: `[1, 2, 3, 4, 5]`
        - Output: `5`
        - Input: `[5, 4, 3, 2, 1]`
        - Output: `5`
 */

public class LargestElementFinder {
    // Method to find the largest element in an array
    public static int findLargest(int[] array) {
        // Handle the case when the array is empty
        if (array == null || array.length == 0) {
            throw new IllegalArgumentException("Array is empty");
        }

        // Initialize the maximum element with the first element of the array
        int max = array[0];

        // Iterate through the array
        for (int i = 1; i < array.length; i++) {
            // Update the maximum element if the current element is greater
            if (array[i] > max) {
                max = array[i];
            }
        }

        // Return the maximum element found
        return max;
    }

    public static void main(String[] args) {
        // Test with some example inputs
        int[] array1 = {1, 2, 3, 4, 5};
        int[] array2 = {5, 20, 3, 2, 1};

        // Find and print the largest element in each array
        System.out.println("Largest element in array1: " + findLargest(array1));
        System.out.println("Largest element in array2: " + findLargest(array2));
    }
}
