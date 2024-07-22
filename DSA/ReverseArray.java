/*
   1. **Reverse an array in place using two pointers and swap**:
    - **Explanation**: Use two pointers, one starting from the beginning (`left`) and the other from the end (`right`) of the array. Swap the elements at these pointers and move them towards each other until they meet.
    - **Example**:
        - Input: `[1, 2, 3, 4, 5]`
        - Output: `[5, 4, 3, 2, 1]`
 */

 public class ReverseArray {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5};
        System.out.println("Original array:");
        for (int num : array) {
            System.out.print(num + " ");
        }
        System.out.println();
        reverseArray(array);
        System.out.println("Reversed array:");
        for (int num : array) {
            System.out.print(num + " ");
        }
    }

    public static void reverseArray(int[] array) {
        int left = 0;
        int right = array.length - 1;
        
        while (left < right) {
            int temp = array[left];
            array[left] = array[right];
            array[right] = temp;

            left++;
            right--;
        }
    }
}
