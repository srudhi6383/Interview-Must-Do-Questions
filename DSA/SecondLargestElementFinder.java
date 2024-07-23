/*
 5. **Find the second largest element in an array in O(N) time complexity using a single pass solution with one loop**:
    - **Explanation**: Iterate through the array while maintaining two variables to keep track of the largest and second largest elements found so far.
    - **Example**:
        - Input: `[1, 2, 3, 4, 5]`
        - Output: `4`
        - Input: `[5, 5, 5, 4]`
        - Output: `4`
 */
public class SecondLargestElementFinder {
    // Method to find the second largest element in an array
    public static int findSecondLargest(int[] array) {
        // Handle the case when the array has fewer than 2 elements
        if (array == null || array.length < 2) {
            throw new IllegalArgumentException("Array must contain at least two elements");
        }

        // Initialize the largest and second largest elements
        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;

        // Iterate through the array
        for (int num : array) {
            // Update largest and second largest based on current number
            if (num > largest) {
                secondLargest = largest; // Update second largest before largest
                largest = num; // Update largest
            } else if (num > secondLargest && num < largest) {
                secondLargest = num; // Update second largest only
            }
        }

        // Handle the case where all elements are the same
        if (secondLargest == Integer.MIN_VALUE) {
            throw new IllegalArgumentException("There is no distinct second largest element");
        }

        // Return the second largest element found
        return secondLargest;
    }

    public static void main(String[] args) {
        // Test with some example inputs
        int[] array1 = {1, 2, 3, 4, 5};
        int[] array2 = {5, 5, 5, 4};

        // Find and print the second largest element in each array
        System.out.println("Second largest element in array1: " + findSecondLargest(array1));
        System.out.println("Second largest element in array2: " + findSecondLargest(array2));
    }
}

