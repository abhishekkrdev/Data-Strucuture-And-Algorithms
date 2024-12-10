
// https://www.geeksforgeeks.org/problems/sum-of-elements-between-k1th-and-k2th-smallest-elements3133/1/

import java.util.*;

public class SumBetweenK1AndK2 {
    // Helper function to find the k-th smallest element using a max heap
    public static int findKthSmallest(int[] arr, int k) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());

        for (int num : arr) {
            maxHeap.add(num);
            if (maxHeap.size() > k) {
                maxHeap.poll(); // Remove the largest element if heap size exceeds k
            }
        }
        return maxHeap.peek(); // The root of the heap is the k-th smallest
    }

    public static int sumBetweenK1AndK2(int[] arr, int k1, int k2) {
        // Step 1: Find the k1-th smallest and k2-th smallest elements
        int k1Smallest = findKthSmallest(arr, k1);
        int k2Smallest = findKthSmallest(arr, k2);

        // Step 2: Calculate the sum of elements between k1-th and k2-th smallest
        int sum = 0;
        for (int num : arr) {
            if (num > k1Smallest && num < k2Smallest) {
                sum += num;
            }
        }

        return sum;
    }

    public static void main(String[] args) {
        int[] arr = { 3, 2, 1, 5, 6, 4 };
        int k1 = 2, k2 = 5;
        System.out.println("Sum between k1-th and k2-th smallest: " + sumBetweenK1AndK2(arr, k1, k2));
    }
}
