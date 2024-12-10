
// https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/description/
import java.util.*;

class Solution {
    public int minimumOperations2(int[] nums) {
        // Use a PriorityQueue as a MinHeap
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();

        // Add all non-zero elements to the heap
        for (int num : nums) {
            if (num > 0) {
                minHeap.offer(num);
            }
        }

        int operations = 0;

        // While there are elements in the heap
        while (!minHeap.isEmpty()) {
            // Poll the smallest value
            int smallest = minHeap.poll();
            operations++;

            // Remove duplicates of the same value
            while (!minHeap.isEmpty() && minHeap.peek() == smallest) {
                minHeap.poll();
            }
        }
        return operations;
    }

    public int minimumOperations(int[] nums) {
        // Use a HashSet to store unique non-zero values
        HashSet<Integer> uniqueValues = new HashSet<>();

        for (int num : nums) {
            if (num > 0) {
                uniqueValues.add(num);
            }
        }
        // The size of the HashSet is the number of operations
        return uniqueValues.size();
    }

}