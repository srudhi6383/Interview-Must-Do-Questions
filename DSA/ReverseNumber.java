/*
  9.  Reverse a number without changing its type using a while loop and a mathematical approach:
Explanation: Use a while loop to extract each digit from the number and construct the reversed number mathematically.
Example:
Input: 12345
Output: 54321
Input: 123
Output: 321
 */

 public class ReverseNumber {
    public static int reverse(int num) {
        int reversed = 0;
        while (num != 0) {
            int digit = num % 10; // Extract the last digit
            reversed = reversed * 10 + digit; // Construct the reversed number
            num /= 10; // Remove the last digit from the original number
        }
        return reversed;
    }

    public static void main(String[] args) {
        int input1 = 12345;
        int input2 = 123;

        int result1 = reverse(input1);
        int result2 = reverse(input2);

        System.out.println("Input: " + input1);
        System.out.println("Output: " + result1);

        System.out.println("Input: " + input2);
        System.out.println("Output: " + result2);
    }
}
